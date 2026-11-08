import os
import re

app_path = r"c:\Users\subha\Desktop\bmc\src\App.jsx"
components_dir = r"c:\Users\subha\Desktop\bmc\src\components"

if not os.path.exists(components_dir):
    os.makedirs(components_dir)

with open(app_path, 'r', encoding='utf-8') as f:
    content = f.read()

# 1. Extract Styles to styles.js
style_start = content.find("const s = {")
styles_code = content[style_start:]
with open(r"c:\Users\subha\Desktop\bmc\src\styles.js", "w", encoding="utf-8") as f:
    f.write("export " + styles_code)

# 2. Extract Components
sections = [
    ("Header", "TOP BAR", "HERO"),
    ("Hero", "HERO", "STATS"),
    ("Stats", "STATS", "ABOUT US"),
    ("AboutUs", "ABOUT US", "A MESSAGE FROM OUR FOUNDER"),
    ("FounderMessage", "A MESSAGE FROM OUR FOUNDER", "EXPERTISE / WHAT WE DO"),
    ("Expertise", "EXPERTISE / WHAT WE DO", "SERVICES"),
    ("Services", "SERVICES", "CONSULTANCY"),
    ("Consultancy", "CONSULTANCY", "PRODUCTS"),
    ("Products", "PRODUCTS", "FACILITIES"),
    ("Facilities", "FACILITIES", "SECTORS & PARTNERS"),
    ("Sectors", "SECTORS & PARTNERS", "PATENTS & AWARDS"),
    ("Patents", "PATENTS & AWARDS", "TIMELINE"),
    ("Timeline", "TIMELINE", "FOOTER"),
    ("Footer", "FOOTER", "</div>\n    </div>\n  );\n}"),
]

# Manual tweaks for Hero and Header since they have hooks/constants
header_const = 'const NAV_LINKS = ["Home", "About", "Products", "Services", "Consultancy", "Manufacturing Facilities", "Testing Facilities", "Clients", "Careers"];'
hero_const = content[content.find("const [slide"):content.find("return (")]

for name, start_tag, end_tag in sections:
    if name == "Footer":
        start_idx = content.find(f"{{/* ================= {start_tag} ================= */}}")
        end_idx = content.find(end_tag)
    else:
        start_idx = content.find(f"{{/* ================= {start_tag} ================= */}}")
        end_idx = content.find(f"{{/* ================= {end_tag} ================= */}}")
    
    jsx = content[start_idx:end_idx]
    
    comp_code = 'import React from "react";\nimport { s } from "../styles";\n\n'
    if name == "Header":
        comp_code += f"{header_const}\n\nexport default function {name}() {{\n  return (\n    <>\n{jsx}    </>\n  );\n}}"
    elif name == "Hero":
        comp_code = 'import React, { useState, useEffect } from "react";\nimport { s } from "../styles";\n\n'
        comp_code += f"export default function {name}() {{\n{hero_const}  return (\n    <>\n{jsx}    </>\n  );\n}}"
    else:
        comp_code += f"export default function {name}() {{\n  return (\n    <>\n{jsx}    </>\n  );\n}}"
        
    with open(os.path.join(components_dir, f"{name}.jsx"), "w", encoding="utf-8") as f:
        f.write(comp_code)

# 3. Rewrite App.jsx
app_jsx = 'import React from "react";\nimport { s } from "./styles";\n'
for name, _, _ in sections:
    app_jsx += f'import {name} from "./components/{name}";\n'

app_jsx += '''
export default function BMCLanding() {
  return (
    <div style={s.wrapper}>
'''
for name, _, _ in sections:
    app_jsx += f'      <{name} />\n'
app_jsx += '''    </div>
  );
}
'''
with open(app_path, "w", encoding="utf-8") as f:
    f.write(app_jsx)

print("Done")
