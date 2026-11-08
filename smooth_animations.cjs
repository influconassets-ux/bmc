const fs = require('fs');
const path = require('path');

const srcDir = path.join('c:', 'Users', 'subha', 'Desktop', 'influcon', 'bmc', 'src');

function processFile(filepath) {
    const originalContent = fs.readFileSync(filepath, 'utf8');
    let content = originalContent;

    // 1. Remove properties that cause "burst" or complex visual jumping
    content = content.replace(/scale:\s*[\d\.]+\s*,?\s*/g, '');
    content = content.replace(/rotate[XYZ]:\s*-?[\d\.]+\s*,?\s*/g, '');
    content = content.replace(/filter:\s*["']blur\([^)]+\)["']\s*,?\s*/g, '');
    
    // 2. Reduce large translations (y: 40, y: 60, y: -60, y: 100, etc) to a gentle y: 15
    content = content.replace(/y:\s*(-?)[4-9]\d\b/g, 'y: $115'); // 40-99
    content = content.replace(/y:\s*(-?)[1-9]\d\d+\b/g, 'y: $115'); // 100+
    content = content.replace(/x:\s*(-?)[4-9]\d\b/g, 'x: $115'); // same for x
    content = content.replace(/x:\s*(-?)[1-9]\d\d+\b/g, 'x: $115');
    
    // 3. Smooth out durations and easing
    // Increase short durations to 1.2
    content = content.replace(/duration:\s*0\.\d+/g, 'duration: 1.2');
    content = content.replace(/duration:\s*1(?!\.)/g, 'duration: 1.2');
    
    // Change easeOut to easeInOut for a smoother start and end
    content = content.replace(/ease:\s*["']easeOut["']/g, 'ease: "easeInOut"');
    
    // Fix double duration issues if any was created before (e.g. duration: 0.9, duration: 1.2)
    // We can just look for `duration: [\d\.]+,\s*duration: [\d\.]+` and keep the second
    content = content.replace(/duration:\s*[\d\.]+,\s*duration:\s*([\d\.]+)/g, 'duration: $1');
    
    // Also remove bounce if it was left behind
    content = content.replace(/bounce:\s*[\d\.]+\s*,?\s*/g, '');
    
    // Fix any stray commas like `opacity: 1, }` to `opacity: 1 }`
    content = content.replace(/,\s*\}/g, ' }');

    if (content !== originalContent) {
        fs.writeFileSync(filepath, content, 'utf8');
        console.log(`Updated: ${filepath}`);
    }
}

function walk(dir) {
    const files = fs.readdirSync(dir);
    for (const file of files) {
        const filepath = path.join(dir, file);
        const stat = fs.statSync(filepath);
        if (stat.isDirectory()) {
            walk(filepath);
        } else if (file.endsWith('.jsx') || file.endsWith('.js') || file.endsWith('.tsx')) {
            processFile(filepath);
        }
    }
}

walk(srcDir);
console.log('Done cleaning animations.');
