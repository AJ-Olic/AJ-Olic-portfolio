const fs = require('fs');
const path = require('path');
const AdmZip = require('adm-zip');
const { XMLParser } = require('fast-xml-parser');

const pptxPath = path.join(__dirname, '..', 'public', 'Portfolio powerpoint.pptx');
const outDir = path.join(__dirname, '..', 'public', 'projects-images');
const tmpOut = path.join(__dirname, '..', 'tmp', 'pptx-slides.json');

if (!fs.existsSync(pptxPath)) {
  console.error('PPTX not found:', pptxPath);
  process.exit(1);
}

if (!fs.existsSync(outDir)) fs.mkdirSync(outDir, { recursive: true });
if (!fs.existsSync(path.dirname(tmpOut))) fs.mkdirSync(path.dirname(tmpOut), { recursive: true });

const zip = new AdmZip(pptxPath);
const entries = zip.getEntries();

// extract media
const mediaMap = {}; // mediaFilename -> public path
entries.forEach(e => {
  if (e.entryName.startsWith('ppt/media/')) {
    const name = path.basename(e.entryName);
    const outName = `ppt-${name}`;
    const outPath = path.join(outDir, outName);
    fs.writeFileSync(outPath, e.getData());
    mediaMap[name] = `/projects-images/${outName}`;
  }
});

const parser = new XMLParser({ ignoreAttributes: false, attributeNamePrefix: '@_' });

// gather slides
const slides = [];
entries.forEach(e => {
  if (/^ppt\/slides\/slide\d+\.xml$/.test(e.entryName)) {
    const slideXml = e.getData().toString('utf8');
    const obj = parser.parse(slideXml);
    // extract text nodes <a:t>
    const texts = [];
    const collect = (node) => {
      if (!node || typeof node !== 'object') return;
      for (const k of Object.keys(node)) {
        if (k === 'a:t') {
          if (Array.isArray(node[k])) node[k].forEach(t=>texts.push(t)); else texts.push(node[k]);
        } else {
          collect(node[k]);
        }
      }
    };
    collect(obj);

    // read relationships for this slide to map images
    const relName = e.entryName.replace('ppt/slides/slide', 'ppt/slides/_rels/slide') + '.rels';
    let images = [];
    const relEntry = entries.find(x => x.entryName === relName);
    if (relEntry) {
      try {
        const relXml = relEntry.getData().toString('utf8');
        const relObj = parser.parse(relXml);
        const relationships = relObj.Relationships && relObj.Relationships.Relationship ? relObj.Relationships.Relationship : [];
        const rels = Array.isArray(relationships) ? relationships : [relationships];
        rels.forEach(r => {
          const target = r['@_Target'];
          if (target && target.startsWith('../media/')) {
            const mediaFile = path.basename(target);
            if (mediaMap[mediaFile]) images.push({ file: mediaFile, url: mediaMap[mediaFile], rId: r['@_Id'] });
          }
        });
      } catch (err) {
        // ignore
      }
    }

    const slideNumberMatch = e.entryName.match(/slide(\d+)\.xml$/);
    const slideNumber = slideNumberMatch ? Number(slideNumberMatch[1]) : null;

    slides.push({ slideNumber, texts, images });
  }
});

// write out JSON
fs.writeFileSync(tmpOut, JSON.stringify(slides, null, 2), 'utf8');
console.log('Wrote', tmpOut);
process.exit(0);
