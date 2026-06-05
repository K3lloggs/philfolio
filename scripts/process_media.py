import base64, io, os
from PIL import Image, ImageOps

SRC = "Philfolio-images"
OUT = "public/media"
os.makedirs(OUT, exist_ok=True)

# source -> (dest stem, kind)  kind: "portrait" (phone/profile) or "wide"
JOBS = {
    "profile.jpeg":                     ("profile",       "portrait", 1000),
    "scl1.png":                         ("work-mobile",   "portrait", 1400),
    "Screenshot 2025-05-20 152259.png": ("work-wholesale","wide",     1400),
    "cloud0.png":                       ("work-agent",    "wide",     1400),
    "Screenshot 2025-03-30 212316.png": ("work-etl",      "wide",     1400),
    "Dco0.png":                         ("work-wholesale-detail","wide", 1400),
}

def blur_uri(img):
    t = img.copy().convert("RGB")
    t.thumbnail((20, 20))
    b = io.BytesIO()
    t.save(b, format="JPEG", quality=40)
    return "data:image/jpeg;base64," + base64.b64encode(b.getvalue()).decode()

blurs = {}
for src, (stem, kind, cap) in JOBS.items():
    p = os.path.join(SRC, src)
    if not os.path.exists(p):
        print(f"MISSING {p}")
        continue
    img = Image.open(p)
    img = ImageOps.exif_transpose(img)          # apply EXIF rotation -> upright pixels
    img = img.convert("RGB")
    # downscale so the longest side <= cap
    w, h = img.size
    scale = min(1.0, cap / max(w, h))
    if scale < 1.0:
        img = img.resize((round(w*scale), round(h*scale)), Image.LANCZOS)
    img.save(os.path.join(OUT, stem + ".webp"), format="WEBP", quality=82, method=6)
    img.save(os.path.join(OUT, stem + ".jpg"),  format="JPEG", quality=84, optimize=True)
    blurs[stem] = blur_uri(img)
    print(f"OK {src} -> {stem}  final={img.size}")

print("---BLURS---")
for k, v in blurs.items():
    print(f"{k}||{v}")
