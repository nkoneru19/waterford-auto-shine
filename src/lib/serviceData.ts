export interface ServiceData {
  slug: string;
  name: string;
  headline: string;
  description: string;
  /** Self-contained 134-167 word passage: what it is, price, what is included, timing. */
  passage: string;
  startingPrice?: string;
  items: string[];
  extras?: { label: string; items: string[] };
  pricing?: { vehicle: string; price: string }[];
  badge?: string;
  featured?: boolean;
}

export const services: ServiceData[] = [
  {
    slug: "exterior-detailing",
    name: "Exterior Detail",
    headline: "Exterior Detailing in Waterford, MI",
    passage:
      "An Exterior Detail at Waterford Auto Shine is a full hand wash and finish restoration done at our shop at 3496 Pontiac Lake Rd in Waterford Township, MI. Nothing touches your paint but hand tools and premium products: we hand wash and dry the whole vehicle, clean the door jambs, clean the rims and tires, apply tire shine, and finish with a hand wax that protects the paint and brings back the gloss. Pricing is by vehicle size: $125 for sedans, $150 for midsize vehicles and trucks, and $175 for large SUVs and minivans. Final pricing depends on the vehicle's condition, and we confirm it with a free quote before we start. We detail sedans, trucks, SUVs, and minivans only, no boats, motorcycles, or RVs. Most details take 2 to 4 hours depending on size and condition. Appointments are recommended but not required; call (248) 618-8999 or request a quote online.",
    description:
      "A thorough hand wash and exterior detail that restores your vehicle's finish. We treat every panel, wheel, and trim piece with premium products for a showroom-quality result.",
    startingPrice: "$125 – $175",
    items: [
      "Hand Wash & Dry",
      "Door Jambs",
      "Rims & Tires",
      "Tire Shine",
      "Hand Wax",
    ],
    pricing: [
      { vehicle: "Sedans", price: "$125+" },
      { vehicle: "Midsize & Trucks", price: "$150+" },
      { vehicle: "Large SUVs & Minivans", price: "$175+" },
    ],
  },
  {
    slug: "interior-detailing",
    name: "Interior Detail",
    headline: "Interior Detailing in Waterford, MI",
    passage:
      "An Interior Detail at Waterford Auto Shine is a deep clean of every surface inside your vehicle, done by hand at our shop at 3496 Pontiac Lake Rd in Waterford Township, MI. It includes a full vacuum, plastics and vinyl cleaning, steam-cleaned seats, leather cleaner and conditioner, carpet shampoo and extraction, headliner cleaning, and interior windows. Pricing is by vehicle size: $200 for sedans, $225 for midsize vehicles and trucks, and $275 for large SUVs and minivans. Final pricing depends on the vehicle's condition, and we confirm it with a free quote before we start. Pet hair, spills, and built-up grime are everyday work here. We detail sedans, trucks, SUVs, and minivans only, no boats, motorcycles, or RVs. Most details take 2 to 4 hours depending on size and condition. Appointments are recommended but not required; call (248) 618-8999 or request a quote online.",
    description:
      "From headliner to carpet, we deep clean and condition every interior surface. Stains, odors, and built-up grime don't stand a chance.",
    startingPrice: "$200 – $275+",
    items: [
      "Vacuum",
      "Plastics & Vinyl Cleaning",
      "Steam Clean Seats",
      "Leather Cleaner & Conditioner",
      "Carpet Shampoo & Extraction",
      "Headliner Cleaning",
      "Windows",
    ],
    pricing: [
      { vehicle: "Sedans", price: "$200+" },
      { vehicle: "Midsize & Trucks", price: "$225+" },
      { vehicle: "Large SUVs & Minivans", price: "$275+" },
    ],
  },
  {
    slug: "full-detailing",
    name: "Complete Detail",
    headline: "Complete Auto Detailing in Waterford, MI",
    passage:
      "The Complete Detail at Waterford Auto Shine is our most thorough package: the full Interior Detail and the full Exterior Detail in one visit, plus a clay bar treatment, sealant application, compound and polish, and smoke removal. Everything is done by hand at our shop at 3496 Pontiac Lake Rd in Waterford Township, MI. Pricing is by vehicle size: $325 for sedans, $350 for midsize vehicles and trucks, and $375 and up for large SUVs and minivans. Final pricing depends on the vehicle's condition, and we confirm it with a free quote before we start. It is the package to pick before selling or trading in a vehicle, or after a Michigan winter of road salt. We detail sedans, trucks, SUVs, and minivans only, no boats, motorcycles, or RVs. Because it covers inside and out, plan on the longer end of our usual 2 to 4 hour window. Appointments are recommended but not required; call (248) 618-8999 or request a quote online.",
    description:
      "Our most comprehensive package. Everything from our interior and exterior services, plus paint correction and clay bar treatment for maximum protection and shine.",
    startingPrice: "$325 – $375",
    badge: "Best Value",
    featured: true,
    items: [
      "Hand Wash & Dry",
      "Door Jambs",
      "Rims & Tires",
      "Tire Shine",
      "Hand Wax",
      "Vacuum",
      "Plastics & Vinyl Cleaning",
      "Steam Clean Seats",
      "Leather Cleaner & Conditioner",
      "Carpet Shampoo & Extraction",
      "Headliner Cleaning",
      "Windows",
    ],
    extras: {
      label: "Plus",
      items: [
        "Clay Bar Treatment",
        "Sealant Application",
        "Compound/Polish",
        "Smoke Removal",
      ],
    },
    pricing: [
      { vehicle: "Sedans", price: "$325+" },
      { vehicle: "Midsize & Trucks", price: "$350+" },
      { vehicle: "Large SUVs & Minivans", price: "$375+" },
    ],
  },
];

export function getServiceBySlug(slug: string) {
  return services.find((s) => s.slug === slug);
}

export function getOtherServices(slug: string) {
  return services.filter((s) => s.slug !== slug);
}
