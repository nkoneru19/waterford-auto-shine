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
- **Exterior Detail:** Sedan $125 / Midsize+Trucks $150 / Large SUV+Minivan $175 (raised May 18 2026 from 75/100/125)
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

## SEO/GEO open items (audit Sep 4 2026, score 62/100 before fixes)
Fixed in the audit round: www as the single host (canonicals, sitemap, robots, OG, schema),
security headers, AutoWash type + @id-linked schema + WebSite node, real sitemap dates,
exterior price $125/$150/$175 everywhere, 48px favicon (was 1.4 MB), hero H1 no longer JS-gated,
service H1s carry service + city, 134-167 word passage on each service page, cookie banner
above the sticky call bar, FAQ questions are h3s, Lisa P. review in schema, Google link in sameAs.
Still needs Joey / the client:
- Vercel: apex -> www redirect is a 307; switch it to 308 in the project's Domains settings
  (Nikhil's team, dashboard only).
- Exact GBP map pin (geo is an OpenStreetMap street-address geocode, 42.653963 / -83.35599;
  the old value was 2 km off).
- Owner name + years in business for an About block and blog bylines (reviews say "John").
- Real photos for the inner pages: storefront, bays, team, and 3-5 before/after pairs per
  service page (only the homepage slider has real work photos).
- Per-service durations (site only says "2-4 hours" generally).
- /service-area copy is still ~250 words of city list; needs real per-area detail to reach 500.
- Optional: a "How much does car detailing cost in Oakland County" guide page (SXO gap).
