#!/usr/bin/env python3
"""Decode public/figures/*.png.b64 (or figures_b64_part*.json) into PNGs and remove sidecars."""
import base64, json, os, glob, sys
root = os.path.dirname(os.path.dirname(os.path.abspath(__file__)))
fig = os.path.join(root, "public", "figures")
os.makedirs(fig, exist_ok=True)
decoded = 0
# Prefer part JSON files at repo root or in scripts/
for pattern in [
    os.path.join(root, "figures_b64_part*.json"),
    os.path.join(root, "scripts", "figures_b64_part*.json"),
    os.path.join(fig, "figures_b64_part*.json"),
]:
    for path in sorted(glob.glob(pattern)):
        data = json.load(open(path))
        for name, b64 in data.get("files", {}).items():
            out = os.path.join(fig, name)
            raw = base64.b64decode(b64)
            open(out, "wb").write(raw)
            print(f"wrote {out} ({len(raw)} bytes)")
            decoded += 1
        os.remove(path)
        print(f"removed {path}")
# Also handle individual .b64 sidecars
for path in sorted(glob.glob(os.path.join(fig, "*.png.b64"))):
    name = os.path.basename(path)[:-4]  # strip .b64 -> file.png
    out = os.path.join(fig, name)
    raw = base64.b64decode(open(path).read().strip())
    open(out, "wb").write(raw)
    print(f"wrote {out} ({len(raw)} bytes)")
    os.remove(path)
    decoded += 1
print(f"decoded {decoded} files")
if decoded == 0:
    sys.exit("no b64 inputs found")
