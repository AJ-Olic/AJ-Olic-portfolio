import fs from 'fs';
import path from 'path';
import pdf from 'pdf-parse';

const __dirname = path.resolve();
const files = [
  { src: path.join(__dirname, 'public', 'Olic.A Resume.pdf'), out: path.join(__dirname, 'tmp', 'resume.txt') },
  { src: path.join(__dirname, 'public', 'slides for website.pdf'), out: path.join(__dirname, 'tmp', 'slides.txt') },
];

try {
  const tmpDir = path.join(__dirname, 'tmp');
  if (!fs.existsSync(tmpDir)) fs.mkdirSync(tmpDir);

  for (const f of files) {
    if (!fs.existsSync(f.src)) {
      console.error('Missing:', f.src);
      continue;
    }
    const dataBuffer = fs.readFileSync(f.src);
    const data = await pdf(dataBuffer);
    fs.writeFileSync(f.out, data.text, 'utf8');
    console.log('Wrote', f.out);
  }
} catch (err) {
  console.error(err);
  process.exit(1);
}
