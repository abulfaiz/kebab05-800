#!/usr/bin/env python3
"""Make web-sized images for the site (needs Pillow: pip install pillow).
Put master photos (jpg/png) in images/source/ named as in images/IMAGES.txt, then run:
    python3 tools/optimize_images.py
Menu thumbnails -> images/thumb/NAME.webp (192x192); home/about/offers -> images/NAME.webp"""
import os, sys
from PIL import Image, ImageOps
R = os.path.join(os.path.dirname(os.path.abspath(__file__)), '..', 'images')
SRC, TH = os.path.join(R, 'source'), os.path.join(R, 'thumb')
BIG = {'home-hero': (800, 1000), 'home-kanapki': (800, 600), 'home-kraftowe': (800, 600), 'home-box': (800, 600), 'about': (800, 1000)}
ALIAS = {'napoje-red-bull': 'napoje-red-bull-tiger', 'napoje-tiger': 'napoje-red-bull-tiger', 'napoje-soki-mango-owocowy': 'napoje-soki'}
os.makedirs(TH, exist_ok=True)
n = 0
for f in sorted(os.listdir(SRC)):
    name, ext = os.path.splitext(f)
    if ext.lower() not in ('.jpg', '.jpeg', '.png', '.webp'): continue
    im = ImageOps.exif_transpose(Image.open(os.path.join(SRC, f))).convert('RGB')
    if name in BIG:
        ImageOps.fit(im, BIG[name], Image.LANCZOS).save(os.path.join(R, name + '.webp'), quality=76, method=6)
    else:
        t = ImageOps.fit(im, (192, 192), Image.LANCZOS)
        t.save(os.path.join(TH, name + '.webp'), quality=72, method=6)
        for a, b in ALIAS.items():
            if b == name: t.save(os.path.join(TH, a + '.webp'), quality=72, method=6)
    n += 1
print(n, 'images processed')
