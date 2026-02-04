const fs = require('fs');
const path = require('path');
const pdf = require('pdf-parse');
const pdfParse = typeof pdf === 'function' ? pdf : (pdf && pdf.default) ? pdf.default : null;

const files = [
  { src: path.join(__dirname, '..', 'public', 'Olic.A Resume.pdf'), out: path.join(__dirname, '..', 'tmp', 'resume.txt') },
  { src: path.join(__dirname, '..', 'public', 'slides for website.pdf'), out: path.join(__dirname, '..', 'tmp', 'slides.txt') },
];

(async () => {
  try {
    const tmpDir = path.join(__dirname, '..', 'tmp');
    if (!fs.existsSync(tmpDir)) fs.mkdirSync(tmpDir);

    for (const f of files) {
      if (!fs.existsSync(f.src)) {
        console.error('Missing:', f.src);
        continue;
      }
      const dataBuffer = fs.readFileSync(f.src);
      if (!pdfParse) throw new Error('pdf-parse import not usable');
      const data = await pdfParse(dataBuffer);
      fs.writeFileSync(f.out, data.text, 'utf8');
      console.log('Wrote', f.out);
    }
  } catch (err) {
    console.error(err);
    process.exit(1);
  }
})();
