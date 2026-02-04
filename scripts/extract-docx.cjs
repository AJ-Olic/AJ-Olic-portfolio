const fs = require('fs');
const unzipper = require('unzipper');
const { parseString } = require('xml2js');

fs.createReadStream('public/South End Sociology Final Paper.docx')
  .pipe(unzipper.Parse())
  .on('entry', (entry) => {
    if(entry.path === 'word/document.xml') {
      let xml = '';
      entry.on('data', chunk => xml += chunk);
      entry.on('end', () => {
        parseString(xml, (err, result) => {
          if(err) console.error(err);
          else {
            const paragraphs = result['w:document']['w:body'][0]['w:p'] || [];
            paragraphs.forEach(p => {
              const texts = p['w:r'] || [];
              let text = '';
              texts.forEach(r => {
                if(r['w:t'] && Array.isArray(r['w:t'])) {
                  text += r['w:t'][0];
                }
              });
              if(text.trim()) console.log(text);
            });
          }
        });
      });
    } else {
      entry.autodrain();
    }
  });
