export interface BlogPost {
  slug: string;
  title: string;
  description: string;
  date: string;
  readTime: string;
  content: BlogSection[];
  relatedServices?: { label: string; href: string }[];
}

export interface BlogSection {
  heading?: string;
  body: string;
}

export const blogPosts: BlogPost[] = [
  {
    slug: "how-often-should-you-detail-your-car",
    title: "How Often Should You Detail Your Car?",
    description:
      "Most people wait too long between details. Here's a simple guide to how often your car actually needs professional attention based on how you drive and where you park.",
    date: "2026-05-15",
    readTime: "4 min read",
    relatedServices: [
      { label: "Interior Detail", href: "/services/interior-detailing" },
      { label: "Complete Detail", href: "/services/full-detailing" },
    ],
    content: [
      {
        body: "Your car takes a beating every day. Road salt in winter, pollen in spring, UV rays all summer, and leaves and sap in fall. Most people wait until their car looks dirty to think about detailing, but by then, damage is already happening beneath the surface.",
      },
      {
        heading: "The Short Answer",
        body: "For most drivers in Michigan, a full interior detail every 3 to 4 months and an exterior detail every 4 to 6 weeks keeps your car protected and looking sharp. If you have kids, pets, or eat in your car, bump that interior schedule up to every 2 months.",
      },
      {
        heading: "Why Interior Detailing Matters More Than You Think",
        body: "Dirt, crumbs, and spills don't just look bad. They grind into your upholstery and break down leather over time. Pet hair embeds itself deep into carpet fibers. Bacteria builds up on surfaces you touch every day. A professional interior detail removes all of that. We steam clean seats, shampoo and extract carpets, condition leather, and sanitize every surface. It's not just cleaning. It's protecting your investment.",
      },
      {
        heading: "Seasonal Considerations in Michigan",
        body: "Winter is the hardest season on your car. Road salt corrodes paint and gets tracked inside on boots. We recommend a complete detail at the end of winter to remove all that salt damage, inside and out. Spring pollen and summer bugs should be washed off regularly before they etch into your clear coat. Fall brings tree sap and leaf stains that can permanently mark your paint if left too long.",
      },
      {
        heading: "Signs Your Car Needs a Detail Now",
        body: "If your steering wheel feels sticky, your seats have visible stains, your paint feels rough to the touch, or your car has a lingering smell, it's past due. Don't wait for these signs. A regular schedule prevents them from happening in the first place.",
      },
      {
        heading: "The Bottom Line",
        body: "Consistent detailing isn't a luxury. It protects your paint, preserves your interior, and keeps your resale value high. A car that gets detailed regularly will look years newer than one that doesn't.",
      },
    ],
  },
  {
    slug: "interior-detailing-what-to-expect",
    title: "What Actually Happens During an Interior Detail?",
    description:
      "Ever wondered what goes into a professional interior detail? Here's a step-by-step breakdown of what we do and why each step matters for your vehicle.",
    date: "2026-05-08",
    readTime: "5 min read",
    relatedServices: [
      { label: "Interior Detail", href: "/services/interior-detailing" },
      { label: "Complete Detail", href: "/services/full-detailing" },
    ],
    content: [
      {
        body: "A lot of people think an interior detail is just a vacuum and some Armor All. That couldn't be further from the truth. A professional interior detail is a multi-step process that deep cleans every surface in your vehicle. Here's exactly what happens when you bring your car to Waterford Auto Shine.",
      },
      {
        heading: "Step 1: Full Vacuum and Debris Removal",
        body: "We start by removing floor mats and vacuuming every surface: seats, carpets, trunk, crevices between seats, and under the seats. We use compressed air to blow out dust from vents, console buttons, and tight spots a vacuum can't reach. This alone takes 30 to 45 minutes on most vehicles.",
      },
      {
        heading: "Step 2: Steam Cleaning the Seats",
        body: "Whether your seats are cloth or leather, steam cleaning lifts deep-set dirt and kills bacteria without harsh chemicals. For cloth seats, this is followed by shampooing. For leather, we follow up with a dedicated leather cleaner that's pH-balanced to protect the material.",
      },
      {
        heading: "Step 3: Carpet Shampoo and Hot Water Extraction",
        body: "This is where the magic happens. We apply a professional-grade carpet shampoo, agitate it into the fibers, then use hot water extraction to pull out all the dirt, stains, and moisture. The difference is dramatic. Carpets that looked permanently stained come out looking factory-fresh.",
      },
      {
        heading: "Step 4: Plastics, Vinyl, and Dashboard",
        body: "Every hard surface gets cleaned and conditioned. We use UV-protectant products that prevent cracking and fading from sun exposure. Door panels, center console, cup holders, steering wheel, dashboard: everything gets individual attention.",
      },
      {
        heading: "Step 5: Headliner and Windows",
        body: "The headliner is the most overlooked surface in any car. We carefully clean it without saturating the fabric, which can cause it to sag. Finally, all interior glass gets cleaned streak-free so your visibility is crystal clear.",
      },
      {
        heading: "How Long Does It Take?",
        body: "A thorough interior detail takes 2 to 4 hours depending on vehicle size and condition. Heavily soiled interiors, pet hair removal, or smoke odor treatment can add extra time. We never rush. The job is done when every surface meets our standard.",
      },
      {
        heading: "Is It Worth It?",
        body: "Absolutely. A clean interior isn't just about appearance. It's healthier to breathe, more pleasant to drive in, and it preserves your resale value. Most customers tell us it feels like driving a new car when they pick it up.",
      },
    ],
  },
  {
    slug: "hand-wash-vs-automatic-car-wash",
    title: "Hand Wash vs. Automatic Car Wash: What's the Difference?",
    description:
      "Automatic car washes are convenient, but they come with trade-offs most people don't know about. Here's why a professional hand wash is worth the extra time.",
    date: "2026-04-28",
    readTime: "4 min read",
    relatedServices: [
      { label: "Exterior Detail", href: "/services/exterior-detailing" },
      { label: "Complete Detail", href: "/services/full-detailing" },
    ],
    content: [
      {
        body: "We get this question all the time: why pay more for a hand wash when there's a $10 automatic wash down the road? It's a fair question. Here's the honest answer.",
      },
      {
        heading: "Automatic Washes Scratch Your Paint",
        body: "Those spinning brushes and cloth strips in tunnel washes collect dirt and grit from every car that goes through before yours. That grit gets dragged across your paint thousands of times per wash. Over time, this creates swirl marks and fine scratches that dull your finish. Even touchless washes use high-pressure water and harsh chemicals that can strip wax and degrade your clear coat.",
      },
      {
        heading: "A Hand Wash is Controlled and Careful",
        body: "When we hand wash your car, we use the two-bucket method: one bucket with clean soapy water, one for rinsing the mitt. This prevents dirt from being rubbed back into your paint. We use pH-neutral soap, microfiber mitts, and work one panel at a time. Every wheel, tire, and door jamb gets individual attention.",
      },
      {
        heading: "What About the Convenience Factor?",
        body: "Yes, an automatic wash takes 5 minutes. A hand wash takes 30 to 45. But consider this: the money you save on cheap washes, you'll spend later on paint correction to fix the damage they caused. A single paint correction job costs more than a year of regular hand washes.",
      },
      {
        heading: "The Wax and Protection Difference",
        body: "Automatic washes spray a thin layer of synthetic sealant that wears off in days. Our exterior detail includes a proper hand wax that bonds to your paint and lasts weeks. It creates a barrier against UV rays, bird droppings, tree sap, and road grime. Your car stays cleaner longer between washes.",
      },
      {
        heading: "When an Automatic Wash Makes Sense",
        body: "If you just need to rinse off light dust between professional washes, a touchless automatic wash is fine as a stopgap. But for your regular cleaning routine, nothing beats a proper hand wash. Your paint will thank you.",
      },
      {
        heading: "The Real Cost Comparison",
        body: "A weekly automatic wash at $10 runs you about $520 a year, and it's slowly damaging your paint. Our exterior detail every 4 to 6 weeks costs less annually and actually protects your finish. Factor in the paint correction you'll eventually need from automatic washes, and hand washing is the cheaper option long-term.",
      },
    ],
  },
];

export function getBlogBySlug(slug: string) {
  return blogPosts.find((p) => p.slug === slug);
}
