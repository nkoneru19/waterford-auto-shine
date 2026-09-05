export const siteConfig = {
  name: "Waterford Auto Shine",
  tagline: "Premium Auto Detailing",
  description:
    "Professional hand wash and detailing services in Waterford Township, MI. Cars, trucks, and SUVs.",
  phone: "(248) 618-8999",
  phoneHref: "tel:+12486188999",
  email: "Waterfordautoshine@gmail.com",
  address: {
    street: "3496 Pontiac Lake Rd",
    city: "Waterford Township",
    state: "MI",
    zip: "48328",
    full: "3496 Pontiac Lake Rd, Waterford Township, MI 48328",
  },
  // Street-address geocode for 3496 Pontiac Lake Rd (OpenStreetMap). Replace with
  // the exact Google Business Profile pin once Joey confirms it.
  geo: { latitude: 42.653963, longitude: -83.35599 },
  googleMapsUrl:
    "https://maps.google.com/?q=3496+Pontiac+Lake+Rd+Waterford+Township+MI+48328",
  hours: {
    weekday: "9:00 AM - 5:00 PM",
    saturday: "9:00 AM - 5:00 PM",
    sunday: "Closed",
  },
  rating: 4.8,
  reviewCount: 45,
  social: {
    facebook:
      "https://www.facebook.com/p/Waterford-Auto-Shine-100069192687092/",
    google: "https://share.google/EIQTY3AE0wAd1kuMQ",
  },
  accent: "oklch(0.55 0.2 250)",
} as const;

// Towns the shop actually draws customers from (drive-in only, no mobile service).
export const serviceAreaCities = [
  "Waterford Township",
  "Pontiac",
  "Clarkston",
  "White Lake",
  "West Bloomfield",
  "Bloomfield Hills",
  "Auburn Hills",
  "Lake Orion",
  "Commerce Township",
  "Sylvan Lake",
  "Keego Harbor",
  "Drayton Plains",
  "Union Lake",
  "Highland",
  "Oxford",
  "Rochester Hills",
  "Troy",
  "Farmington Hills",
] as const;
