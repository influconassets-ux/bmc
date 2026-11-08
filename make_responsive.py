import os
import re

src_dir = r"c:\Users\subha\Desktop\bmc\src"
target_dirs = [
    os.path.join(src_dir, "components"),
    os.path.join(src_dir, "pages")
]

pattern = re.compile(r'style=\{s\.([a-zA-Z0-9_]+)\}')

def process_file(filepath):
    if "LoadingScreen.jsx" in filepath:
        return

    with open(filepath, 'r', encoding='utf-8') as f:
        content = f.read()
    
    # Check if already processed to avoid double injection
    if 'className="' in content and 'className="wrapper"' not in content:
        pass # We might still want to process, but let's be safe. Actually, let's just do it.
        
    def replacer(match):
        key = match.group(1)
        # Avoid double injection if we run it twice
        return f'className="{key}" style={{s.{key}}}'

    new_content = pattern.sub(replacer, content)

    # Simple cleanup for double injections if script was run before
    new_content = re.sub(r'className="([a-zA-Z0-9_]+)" className="\1"', r'className="\1"', new_content)

    if new_content != content:
        with open(filepath, 'w', encoding='utf-8') as f:
            f.write(new_content)
        print(f"Modified: {os.path.basename(filepath)}")

app_jsx = os.path.join(src_dir, "App.jsx")
if os.path.exists(app_jsx):
    process_file(app_jsx)

for d in target_dirs:
    if not os.path.exists(d): continue
    for f in os.listdir(d):
        if f.endswith('.jsx'):
            process_file(os.path.join(d, f))

print("Done.")
