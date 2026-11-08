const fs = require('fs');
const path = require('path');

const srcDir = path.join('c:', 'Users', 'subha', 'Desktop', 'influcon', 'bmc', 'src');

function processFile(filepath) {
    const originalContent = fs.readFileSync(filepath, 'utf8');
    let content = originalContent;

    // Replace common spring variants in objects like `transition: { type: "spring", stiffness: 100 }`
    content = content.replace(/type:\s*["']spring["']\s*,\s*stiffness:\s*\d+\s*(?:,\s*damping:\s*\d+\s*)?(?:,\s*mass:\s*[\d\.]+\s*)?/g, 'duration: 0.6, ease: "easeOut"');
    
    // Replace `type: "spring", bounce: 0.x`
    content = content.replace(/type:\s*["']spring["']\s*,\s*bounce:\s*[\d\.]+/g, 'ease: "easeOut"');
    
    // Replace standalone `type: "spring"`
    content = content.replace(/type:\s*["']spring["']\s*,?\s*/g, 'ease: "easeOut", ');
    content = content.replace(/ease: "easeOut", \}/g, 'ease: "easeOut" }');
    
    // Replace `ease: [0.22, 1, 0.36, 1]` with `ease: "easeOut"`
    content = content.replace(/ease:\s*\[\s*0\.22\s*,\s*1\s*,\s*0\.36\s*,\s*1\s*\]/g, 'ease: "easeOut"');
    
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
console.log('Done.');
