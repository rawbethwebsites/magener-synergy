export const DESTINATIONS_DATA = [
  {
    name: "London",
    country: "United Kingdom",
    slug: "london",
    tag: "Study & Leisure",
    img: "/destination-london.png",
    description:
      "From Buckingham Palace to Oxford's dreaming spires, London blends world-class education with iconic culture. One of the most sought-after destinations for Nigerian students and leisure travellers alike.",
    highlights: [
      "Top-ranked universities (UCL, Imperial, LSE, King's College)",
      "UK Student Visa support with 98% success rate",
      "World-class museums, galleries & theatre",
      "Multicultural city with thriving African communities",
      "Gateway to Europe for weekend travel",
      "Strong graduate work visa pathways",
    ],
    visaInfo:
      "UK Standard Visitor Visa or Student Visa required. Processing time: 3–8 weeks. We handle the entire application process.",
  },
  {
    name: "Toronto",
    country: "Canada",
    slug: "toronto",
    tag: "Study & Immigration",
    img: "/destination-toronto.png",
    description:
      "Canada's largest city is a beacon for international students and professionals. Toronto's world-ranked universities, robust immigration pathways, and Nigerian diaspora community make it a top choice.",
    highlights: [
      "University of Toronto — ranked top 20 globally",
      "Study Permit & PGWP guidance included",
      "Post-graduation immigration pathways (Express Entry, PNP)",
      "High standard of living & public safety",
      "One of the most diverse cities in the world",
      "Thriving Nigerian-Canadian business community",
    ],
    visaInfo:
      "Canadian Study Permit or Visitor Visa required. Processing time: 4–12 weeks. We guide every step from document prep to biometrics.",
  },
  {
    name: "Kuala Lumpur",
    country: "Malaysia",
    slug: "kuala-lumpur",
    tag: "Education Hub",
    img: "/destination-kl.png",
    description:
      "Malaysia's dynamic capital is Asia's most affordable education hub, offering international-quality degrees at a fraction of the cost. Dual-degree programmes with UK and Australian universities are widely available.",
    highlights: [
      "Twinning programmes with UK & Australian universities",
      "Cost of living 60% lower than UK/Canada",
      "Malaysia Student Pass (EMGS) — fast 4-week processing",
      "Vibrant food scene, warm climate, modern infrastructure",
      "Petronas Twin Towers & world-class shopping",
      "Direct flights from Abuja via Middle East hubs",
    ],
    visaInfo:
      "Malaysia Student Pass (EMGS) required. Processing time: 3–4 weeks. We partner with verified Malaysian institutions for guaranteed admission.",
  },
  {
    name: "Dubai",
    country: "United Arab Emirates",
    slug: "dubai",
    tag: "Luxury Travel",
    img: "/destination-dubai.png",
    description:
      "The city of superlatives — the tallest building, the largest mall, the most luxurious hotels. Dubai offers an unmatched luxury travel experience with visa-on-arrival for Nigerian passports on occasion.",
    highlights: [
      "Burj Khalifa, Palm Jumeirah, Desert Safari",
      "5-star all-inclusive resort packages",
      "Tax-free shopping at Dubai Mall & Gold Souk",
      "World-class dining with Michelin-starred restaurants",
      "Dubai Expo City & MICE corporate travel venue",
      "Year-round sunshine — 320+ days of sun",
    ],
    visaInfo:
      "UAE Tourist Visa required for Nigerian passport holders. Processing time: 3–5 business days. We handle visa-on-arrival and e-visa applications.",
  },
  {
    name: "Paris",
    country: "France",
    slug: "paris",
    tag: "Romance & Culture",
    img: "/destination-paris.png",
    description:
      "The City of Light is synonymous with romance, haute couture, and culinary excellence. From the Eiffel Tower to Versailles, Paris delivers an unforgettable honeymoon or cultural escape.",
    highlights: [
      "Eiffel Tower, Louvre, Versailles, Montmartre",
      "Seine River dinner cruises for couples",
      "Michelin-starred dining experiences",
      "Luxury fashion — Chanel, Dior, Louis Vuitton flagship stores",
      "Day trips to Loire Valley châteaux",
      "Schengen visa covers 26 European countries",
    ],
    visaInfo:
      "Schengen Visa (France) required. Processing time: 15 business days. Schengen visa also covers Germany, Italy, Spain, and 22 more countries.",
  },
  {
    name: "Tokyo",
    country: "Japan",
    slug: "tokyo",
    tag: "Tech & Culture",
    img: "/destination-tokyo.png",
    description:
      "Where ancient tradition meets cutting-edge technology. Tokyo is a safe, efficient, and endlessly fascinating city for the curious traveller — from cherry blossom season to Akihabara's tech quarter.",
    highlights: [
      "Cherry Blossom (Sakura) season packages — March/April",
      "Shibuya Crossing, Shinjuku, Harajuku & Akihabara",
      "Authentic ramen, sushi & teppanyaki experiences",
      "Day trips to Mount Fuji & Kyoto",
      "Ranked world's safest major city",
      "Japan Rail Pass for unlimited Shinkansen travel",
    ],
    visaInfo:
      "Japan Tourist Visa required. Processing time: 5–10 business days. We provide full document checklist and submission support.",
  },
];

export type Destination = (typeof DESTINATIONS_DATA)[0];
