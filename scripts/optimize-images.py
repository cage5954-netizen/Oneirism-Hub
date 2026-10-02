"""Create validated web derivatives of genuine assets. Requires Pillow; originals are unchanged."""
from pathlib import Path
from PIL import Image, ImageOps
NAMES = {'Lava Arena.png':'lava-arena','Spawn-Area.png':'spawn-area','Chain Bridge.png':'chain-bridge','Lighting Axe from Above.png':'lightning-axe','Bridge Jump.png':'bridge-jump','Portal Room.png':'portal-room','HighresScreenshot00018.png':'news-01','HighresScreenshot00020.png':'news-02','HighresScreenshot00023.png':'news-03','Protagonist.jpg':'observer','The Forger.png':'node','Fireman.png':'fireman'}
output=Path('assets/optimized');output.mkdir(exist_ok=True)
for source,name in NAMES.items():
 with Image.open(Path('assets/images')/source) as original:
  original=ImageOps.exif_transpose(original).convert('RGB')
  for width in (800,1920):
   image=original.copy();image.thumbnail((width,width),Image.Resampling.LANCZOS)
   target=output/f'{name}-{width}.webp'
   image.save(target,'WEBP',quality=84,method=4 if name=='node' and width==1920 else 6)
   with Image.open(target) as result:result.verify()
   if target.stat().st_size==0:raise RuntimeError(f'Empty derivative: {target}')
 print(name,flush=True)
