export interface PackageOption {
  name: string;
  duration: string;
  hotel: string;
  tours: string;
  price: string;
  description: string;
  idealFor: string;
  excludes: string;
  image: string;
  gallery: string[];
  popular?: boolean;
  urgency?: string;
}

export const SERVICE_PACKAGES: Record<string, PackageOption[]> = {
  'tour-packages': [
    {
      name: 'Luxembourg Grand Duchy Signature',
      image: 'https://images.pexels.com/photos/417074/pexels-photo-417074.jpeg?auto=compress&cs=tinysrgb&w=1600&h=1000&fit=crop',
      gallery: [
        'https://images.pexels.com/photos/338515/pexels-photo-338515.jpeg?auto=compress&cs=tinysrgb&w=900&h=600&fit=crop',
        'https://images.pexels.com/photos/1619317/pexels-photo-1619317.jpeg?auto=compress&cs=tinysrgb&w=900&h=600&fit=crop',
        'https://images.pexels.com/photos/460672/pexels-photo-460672.jpeg?auto=compress&cs=tinysrgb&w=900&h=600&fit=crop',
      ],
      duration: '6 Nights / 7 Days',
      hotel: '5★ Boutique City Hotel (Luxembourg Ville)',
      tours: 'Old Quarter walking tour, Vianden Castle day trip, Moselle wine route experience',
      price: '€3,250 per person',
      description: 'A premium all-in experience for travelers who want Luxembourg’s elegance, culture, and scenic countryside with concierge-level planning from arrival to return.',
      idealFor: 'Executives, premium couples, and refined leisure travelers.',
      excludes: 'Schengen visa fees, personal shopping, optional Michelin dining upgrades.',
      popular: true,
      urgency: 'Limited Easter/Summer departure slots currently open',
    },
  ],
  'visa-assistance': [
    {
      name: 'Tourist Visa Standard',
      image: 'https://source.unsplash.com/1600x1000/?passport,visa,documents&sig=31',
      gallery: [
        'https://source.unsplash.com/900x600/?embassy,application,documents&sig=32',
        'https://source.unsplash.com/900x600/?travel,documents,desk&sig=33',
        'https://source.unsplash.com/900x600/?airport,passport,check&sig=34',
      ],
      duration: '10–20 working days',
      hotel: 'N/A',
      tours: 'Checklist, documentation review, submission support',
      price: 'From ₦150,000',
      description: 'For travelers who need accurate documentation, clean application packaging, and expert submission guidance.',
      idealFor: 'Tourist and business travelers applying through standard processing.',
      excludes: 'Embassy/biometric fees, travel insurance, expedited embassy slots.',
    },
    {
      name: 'Visa Priority Support',
      image: 'https://source.unsplash.com/1600x1000/?visa,priority,travel&sig=41',
      gallery: [
        'https://source.unsplash.com/900x600/?passport,stamps,travel&sig=42',
        'https://source.unsplash.com/900x600/?embassy,interview,visa&sig=43',
        'https://source.unsplash.com/900x600/?airline,boarding,pass&sig=44',
      ],
      duration: '5–10 working days',
      hotel: 'N/A',
      tours: 'Priority file prep + interview coaching',
      price: 'From ₦250,000',
      description: 'Priority advisory package with deeper coaching and faster turnaround support for high-stakes travel timelines.',
      idealFor: 'Applicants with urgent timelines or previous visa refusals.',
      excludes: 'Embassy fees, courier charges, third-party document legalization costs.',
      popular: true,
    },
  ],
  'study-abroad': [
    {
      name: 'UK Study Pathway',
      image: 'https://source.unsplash.com/1600x1000/?uk,university,students&sig=51',
      gallery: [
        'https://source.unsplash.com/900x600/?campus,uk,students&sig=52',
        'https://source.unsplash.com/900x600/?graduation,students,uk&sig=53',
        'https://source.unsplash.com/900x600/?library,university,study&sig=54',
      ],
      duration: '8–12 weeks processing',
      hotel: 'Student accommodation advisory included',
      tours: 'Admission + CAS + visa support',
      price: 'From ₦450,000',
      description: 'End-to-end admission and visa pathway for UK study, from school matching to pre-departure readiness.',
      idealFor: 'Students pursuing undergraduate or postgraduate study in the UK.',
      excludes: 'Tuition fees, embassy charges, accommodation deposits.',
    },
    {
      name: 'Canada Study Pathway',
      image: 'https://source.unsplash.com/1600x1000/?canada,university,students&sig=61',
      gallery: [
        'https://source.unsplash.com/900x600/?toronto,students,city&sig=62',
        'https://source.unsplash.com/900x600/?college,canada,study&sig=63',
        'https://source.unsplash.com/900x600/?student,visa,canada&sig=64',
      ],
      duration: '10–14 weeks processing',
      hotel: 'Student housing guidance included',
      tours: 'School selection + SOP + visa filing',
      price: 'From ₦500,000',
      description: 'Structured Canada study package with application strategy, SOP support, and visa filing guidance.',
      idealFor: 'Students targeting Canadian colleges and universities.',
      excludes: 'Tuition, GIC/funding requirements, embassy fees.',
      popular: true,
      urgency: 'September intake capacity filling up',
    },
  ],
  'corporate-travel': [
    {
      name: 'Executive Business Trip',
      image: 'https://source.unsplash.com/1600x1000/?business,travel,executive&sig=71',
      gallery: [
        'https://source.unsplash.com/900x600/?airport,business,lounge&sig=72',
        'https://source.unsplash.com/900x600/?conference,meeting,travel&sig=73',
        'https://source.unsplash.com/900x600/?hotel,business,room&sig=74',
      ],
      duration: '3 Nights / 4 Days',
      hotel: '5★ Business Hotel',
      tours: 'Airport transfer, meeting logistics, lounge access',
      price: 'From $1,900 per executive',
      description: 'Business-travel package focused on executive comfort, schedule efficiency, and premium logistics.',
      idealFor: 'Founders, executives, and leadership travel teams.',
      excludes: 'Conference tickets, client entertainment costs, optional upgrades.',
    },
    {
      name: 'Team Retreat Package',
      image: 'https://source.unsplash.com/1600x1000/?team,retreat,resort&sig=81',
      gallery: [
        'https://source.unsplash.com/900x600/?corporate,retreat,team&sig=82',
        'https://source.unsplash.com/900x600/?team,building,travel&sig=83',
        'https://source.unsplash.com/900x600/?conference,resort,event&sig=84',
      ],
      duration: '4 Nights / 5 Days',
      hotel: 'Resort + conference-ready venue',
      tours: 'Team activities + event coordination',
      price: 'From $1,400 per person (group rates)',
      description: 'Corporate retreat package blending travel, accommodation, and team activity planning in one managed flow.',
      idealFor: 'Companies planning retreats, offsites, or incentive trips.',
      excludes: 'Internal event production extras, branded merchandise, custom add-on events.',
    },
  ],
  'honeymoon-packages': [
    {
      name: 'Maldives Romance Signature',
      image: 'https://source.unsplash.com/1600x1000/?maldives,overwater,villa&sig=91',
      gallery: [
        'https://source.unsplash.com/900x600/?honeymoon,beach,sunset&sig=92',
        'https://source.unsplash.com/900x600/?couple,spa,resort&sig=93',
        'https://source.unsplash.com/900x600/?private,dinner,beach&sig=94',
      ],
      duration: '5 Nights / 6 Days',
      hotel: '5★ Overwater Villa Resort',
      tours: 'Sunset cruise, couples spa, private beach dinner',
      price: 'From $3,950 per couple',
      description: 'Luxury honeymoon package with overwater villa stay and curated romantic experiences built for stress-free celebration.',
      idealFor: 'Newlyweds seeking a premium tropical honeymoon.',
      excludes: 'Visa fees, personal shopping, premium alcohol add-ons.',
      popular: true,
      urgency: 'Limited overwater villa inventory remaining',
    },
    {
      name: 'Paris & Santorini Honeymoon',
      image: 'https://source.unsplash.com/1600x1000/?paris,santorini,honeymoon&sig=101',
      gallery: [
        'https://source.unsplash.com/900x600/?paris,romantic,night&sig=102',
        'https://source.unsplash.com/900x600/?santorini,sunset,couple&sig=103',
        'https://source.unsplash.com/900x600/?europe,honeymoon,travel&sig=104',
      ],
      duration: '7 Nights / 8 Days',
      hotel: 'Boutique hotels in Paris + Santorini',
      tours: 'Seine dinner cruise, island sunset experience',
      price: 'From $4,600 per couple',
      description: 'Dual-destination honeymoon combining Paris elegance and Santorini sunset romance with curated couple experiences.',
      idealFor: 'Couples who want a classic Europe + island honeymoon blend.',
      excludes: 'Visa fees, personal expenses, optional private photoshoots.',
    },
  ],
  'hotel-flight-bookings': [
    {
      name: 'Smart Saver Booking',
      image: 'https://source.unsplash.com/1600x1000/?hotel,booking,travel&sig=111',
      gallery: [
        'https://source.unsplash.com/900x600/?airplane,booking,travel&sig=112',
        'https://source.unsplash.com/900x600/?hotel,lobby,travel&sig=113',
        'https://source.unsplash.com/900x600/?travel,itinerary,desk&sig=114',
      ],
      duration: 'Flexible dates',
      hotel: '3★–4★ vetted hotels',
      tours: 'Flight comparison + fare alerts + booking support',
      price: 'Service fee from ₦60,000',
      description: 'Value-focused booking support that secures practical flights and hotels while reducing booking stress.',
      idealFor: 'Budget-conscious travelers who still want expert coordination.',
      excludes: 'Airfare and hotel base costs, visa fees, travel insurance.',
    },
    {
      name: 'Premium Comfort Booking',
      image: 'https://source.unsplash.com/1600x1000/?first,class,travel&sig=121',
      gallery: [
        'https://source.unsplash.com/900x600/?business,class,flight&sig=122',
        'https://source.unsplash.com/900x600/?luxury,hotel,suite&sig=123',
        'https://source.unsplash.com/900x600/?airport,lounge,premium&sig=124',
      ],
      duration: 'Flexible dates',
      hotel: '4★–5★ premium stays',
      tours: 'Business/first-class options + concierge support',
      price: 'Service fee from ₦120,000',
      description: 'Premium booking concierge with higher-class inventory access and personalized travel coordination.',
      idealFor: 'Travelers prioritizing comfort, flexibility, and premium options.',
      excludes: 'Actual flight/hotel costs, visa fees, personal expenses.',
    },
  ],
};
