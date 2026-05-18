export interface ServiceData {
  slug: string;
  name: string;
  headline: string;
  description: string;
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
    headline: "Make Your Car Shine Like New",
    description:
      "A thorough hand wash and exterior detail that restores your vehicle's finish. We treat every panel, wheel, and trim piece with premium products for a showroom-quality result.",
    items: [
      "Hand Wash & Dry",
      "Door Jambs",
      "Rims & Tires",
      "Tire Shine",
      "Hand Wax",
    ],
  },
  {
    slug: "interior-detailing",
    name: "Interior Detail",
    headline: "A Deep Clean for Every Surface Inside",
    description:
      "From headliner to carpet, we deep clean and condition every interior surface. Stains, odors, and built-up grime don't stand a chance.",
    startingPrice: "$200",
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
    headline: "The Full Treatment — Inside and Out",
    description:
      "Our most comprehensive package. Everything from our interior and exterior services, plus paint correction, clay bar treatment, and ceramic sealant for maximum protection and shine.",
    startingPrice: "$325",
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
