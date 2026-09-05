@AGENTS.md

# Waterford Auto Shine — Project Context

## Business Info
- **Name:** Waterford Auto Shine
- **Address:** 3496 Pontiac Lake Rd, Waterford Township, MI 48328
- **Phone:** (248) 618-8999
- **Email:** Waterfordautoshine@gmail.com
- **Hours:** Monday-Saturday 9am-5pm, Sunday Closed
- **Owner:** Jon/John

## Services & Pricing
- **Interior Detail:** Sedan $200 / Midsize+Trucks $225 / Large SUV+Minivan $275
  - Vacuum, Plastics/Vinyls, Steam Clean Seats, Leather Cleaner/Conditioner, Carpet Shampoo+Extraction, Headliner, Windows
- **Exterior Detail:** Sedan $75 / Midsize+Trucks $100 / Large SUV+Minivan $125
  - Hand Wash+Dry, Door Jambs, Rims/Tires, Tire Shine, Hand Wax
- **Complete Detail:** Sedan $325 / Midsize $350 / Large $375+
  - Everything in Interior and Exterior, plus: Clay Bar Treatment, Sealant Application, Compound/Polish, Smoke Removal

## Vehicles Only
Sedans, Trucks, SUVs, Minivans. NO boats, motorcycles, or RVs.

## GitHub Repo
`nkoneru19/waterford-auto-shine` — push to `origin main`, Vercel auto-deploys.

## Tech Stack
Next.js + Tailwind CSS. Key paths:
- `src/app/page.tsx` — main page
- `src/components/sections/` — section components
- `src/components/layout/` — Header, Footer
- `public/` — static assets
- `src/app/services/` — individual service pages
- `src/app/faq/` — FAQ page
- `src/app/reviews/` — Reviews page
- `src/app/quote/` — Quote page
- `src/app/service-areas/` — Service areas page

## Deploy check
Unlinked folder; the project lives in Nikhil's Vercel team. From this folder:
`python3 ../tools/qa/deploy.py --scope nikhil-5479s-projects` (lesson 119).

## Before/After slider (Sep 4 2026)
- `src/components/sections/BeforeAfter.tsx`, on the homepage right after Services
  (section id `results`). Four angles of the black Kia Sorento Complete Detail:
  Front, Side, Rear, Interior (driver footwell). Drag, touch, and arrow keys.
- Images: `public/images/before-after/<angle>-before.webp` / `-after.webp`, all
  4:3 at 1800x1350, webp q82. The slider is `aspect-[4/3]`; keep new pairs 4:3.
- Originals live in `raw-media/before|after/` (gitignored, with a README that
  maps each IMG number to its angle). Three afters were stored sideways with no
  EXIF flag (IMG_1422/1424/1425) and were rotated 90 degrees clockwise.
- Unused but ready: head-on front (IMG_1379/1419, after is shot further back)
  and center console (IMG_1383/1425, framing differs). Add via the
  `comparisons` array.
