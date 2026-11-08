const fs = require('fs');
const path = require('path');

const srcDir = path.join(__dirname, 'src');
const targetDirs = [
  path.join(srcDir, 'components'),
  path.join(srcDir, 'pages')
];

const pattern = /style=\{s\.([a-zA-Z0-9_]+)\}/g;

function processFile(filepath) {
  if (filepath.includes('LoadingScreen.jsx')) return;
  
  const content = fs.readFileSync(filepath, 'utf8');
  let newContent = content.replace(pattern, (match, key) => {
    return `className="${key}" style={s.${key}}`;
  });
  
  // Cleanup duplicates
  const dupPattern = /className="([a-zA-Z0-9_]+)"\s+className="\1"/g;
  newContent = newContent.replace(dupPattern, 'className="$1"');
  
  if (newContent !== content) {
    fs.writeFileSync(filepath, newContent, 'utf8');
    console.log(`Modified: ${path.basename(filepath)}`);
  }
}

const appJsx = path.join(srcDir, 'App.jsx');
if (fs.existsSync(appJsx)) processFile(appJsx);

targetDirs.forEach(dir => {
  if (!fs.existsSync(dir)) return;
  const files = fs.readdirSync(dir);
  files.forEach(file => {
    if (file.endsWith('.jsx')) {
      processFile(path.join(dir, file));
    }
  });
});

console.log('Done.');
