import { Plane, FileCheck, GraduationCap, Briefcase, Heart, Hotel, type LucideIcon } from "lucide-react";

export const SERVICES_DATA: ServiceItem[] = [
  {
    icon: Plane,
    slug: "tour-packages",
    title: "Tour Packages",
    desc: "Handcrafted international itineraries to Europe, Asia, North America, and the Middle East. All-inclusive and tailor-made options available.",
    image: "/service-tours.png",
    fullDesc:
      "Our tour packages are meticulously curated to deliver memorable experiences for every type of traveller — from solo adventurers to large family groups. We handle flights, accommodation, guided tours, and every detail in between so you travel worry-free.",
    features: [
      "All-inclusive Europe, Asia & Americas packages",
      "Private, group & family tour options",
      "Expert local guides at every destination",
      "Flexible itineraries — extend or customise any package",
      "Airport transfers & visa support included",
      "24/7 on-trip emergency support",
    ],
    process: [
      "Consultation to understand your travel goals",
      "Customised itinerary proposal within 48 hours",
      "Review, adjust, and confirm your package",
      "We handle all bookings and logistics",
      "Pre-departure briefing and travel pack",
    ],
  },
  {
    icon: FileCheck,
    slug: "visa-assistance",
    title: "Visa Assistance",
    desc: "Expert guidance through the visa application process for tourist, student, and business visas to 40+ countries. We handle the paperwork.",
    image: "/service-visa.png",
    fullDesc:
      "With a 98% visa success rate, our visa specialists understand exactly what embassies and consulates look for. We prepare, review, and submit your complete application — saving you time, stress, and rejection risk.",
    features: [
      "98% first-application approval rate",
      "Tourist, Business, Student & Transit visas",
      "Schengen, UK, US, Canada, Australia & more",
      "Document checklist, cover letter & supporting docs",
      "Embassy appointment scheduling support",
      "Application tracking and update notifications",
    ],
    process: [
      "Initial assessment of visa type and eligibility",
      "Personalised document checklist provided",
      "Document review and preparation guidance",
      "Application submission and tracking",
      "Post-approval travel guidance",
    ],
  },
  {
    icon: GraduationCap,
    slug: "study-abroad",
    title: "Study Abroad",
    desc: "University admissions support, offer letter guidance, and pre-departure travel arrangements to the UK, Canada, Malaysia, and more.",
    image: "/service-study.png",
    fullDesc:
      "From choosing the right university to boarding your flight, our Study Abroad team walks alongside you every step of the way. We have established partnerships with accredited institutions in the UK, Canada, Malaysia, and beyond.",
    features: [
      "University selection & application guidance",
      "100% authentic offer letters from accredited institutions",
      "Student visa processing (UK, Canada, Malaysia, USA)",
      "Accommodation sourcing at the destination",
      "Pre-departure orientation sessions",
      "Post-arrival student support network",
    ],
    process: [
      "Academic profile assessment & destination recommendation",
      "Institution shortlisting and application submission",
      "Offer letter receipt and acceptance",
      "Student visa application and processing",
      "Flight booking, accommodation & pre-departure briefing",
    ],
  },
  {
    icon: Briefcase,
    slug: "corporate-travel",
    title: "Corporate Travel",
    desc: "End-to-end corporate and incentive travel management. Conferences, retreats, and team-building journeys planned to perfection.",
    image: "/service-corporate.png",
    fullDesc:
      "We partner with businesses across Nigeria to manage their international travel programmes — from executive business trips to full incentive retreat experiences for top performers. Our corporate desk operates with speed, discretion, and professionalism.",
    features: [
      "Dedicated corporate travel account manager",
      "Priority flight & hotel sourcing at corporate rates",
      "Group visa applications handled in bulk",
      "Conference & MICE venue sourcing globally",
      "Executive airport lounges and ground transport",
      "Full travel insurance for corporate groups",
    ],
    process: [
      "Corporate travel needs assessment",
      "Preferred supplier programme setup",
      "Itinerary planning and cost optimisation",
      "Group bookings and visa processing",
      "On-trip support and post-travel reporting",
    ],
  },
  {
    icon: Heart,
    slug: "honeymoon-packages",
    title: "Honeymoon Packages",
    desc: "Romantic escapes crafted for couples — from Maldives overwater villas to European city breaks. Every detail considered.",
    image: "/service-honeymoon.png",
    fullDesc:
      "Your honeymoon should be nothing short of perfect. Our romance specialists curate bespoke experiences — private candlelit dinners, overwater bungalows, couples spa retreats, and surprise touches that create memories for a lifetime.",
    features: [
      "Maldives, Santorini, Paris, Bali & more",
      "Overwater villa & private beach resort bookings",
      "Candlelit dinner & sunset cruise arrangements",
      "Couples spa and wellness experiences",
      "Surprise in-room romantic setups",
      "Honeymoon certificate and special hotel upgrades",
    ],
    process: [
      "Dream honeymoon consultation with couple",
      "Destination and resort recommendation",
      "Full itinerary with romantic inclusions",
      "Visa and flight arrangements",
      "Personal concierge service during your stay",
    ],
  },
  {
    icon: Hotel,
    slug: "hotel-flight-bookings",
    title: "Hotel & Flight Bookings",
    desc: "Best-rate hotel and flight sourcing across all destinations. We compare, negotiate, and book — so you don't have to.",
    image: "/service-hotel.png",
    fullDesc:
      "Leveraging our network of global airline and hotel partners, we secure the best available rates for flights and accommodation — whether you need a budget-friendly option or a 5-star suite. No hidden fees, no surprises.",
    features: [
      "Flights on all major international carriers",
      "3-star to 5-star hotel sourcing globally",
      "Business class & first class upgrades available",
      "Hotel loyalty points and perks maximisation",
      "Flexible and refundable booking options",
      "Group booking discounts for 10+ travellers",
    ],
    process: [
      "Share your travel dates and preferences",
      "We present best-value options within 24 hours",
      "Confirm booking and receive e-tickets",
      "Airport and hotel check-in guidance",
      "Post-trip feedback and loyalty benefits",
    ],
  },
];

export interface ServiceItem {
  icon: LucideIcon;
  slug: string;
  title: string;
  desc: string;
  image: string;
  fullDesc: string;
  features: string[];
  process: string[];
}
