export interface LocationPageData {
  /** Route path, e.g. "mobile-tyre-fitting-bristol" */
  path: string;
  /** Display name, e.g. "Bristol" */
  name: string;
  tagline: string;
  intro: string;
  benefits: string[];
  areasServed: string[];
}

function genericLocation(name: string, slug: string, areasServed: string[]): LocationPageData {
  return {
    path: `mobile-tyre-fitting-${slug}`,
    name,
    tagline: `Struggling to Visit a Tyre Shop? Let Us Come to You in ${name}`,
    intro: `Rapid Mobile Tyres brings professional mobile tyre fitting straight to your door in ${name}. Whether you're at home, at work, or stopped on the roadside, our fully-equipped technicians fit your tyres quickly and safely — so you never have to waste time waiting at a garage.`,
    benefits: [
      "We come to you — home, work, or roadside",
      "Avoid the risk of driving on a damaged or flat tyre",
      "Fast response for emergency callouts",
      "Fair, transparent pricing with no hidden extras",
    ],
    areasServed,
  };
}

export function getLocationSteps(name: string) {
  return [
    {
      title: "Call or Book Online",
      description: `Give us your reg or tyre size and your location in ${name} — home, work, or roadside.`,
    },
    {
      title: "We Come to You",
      description: "A fully-equipped mobile unit arrives at your chosen location, usually within 45-60 minutes.",
    },
    {
      title: "Fitted On the Spot",
      description:
        "Your technician fits the tyre there and then, checks everything's safe, and you're back on the road.",
    },
  ];
}

export const locationWhyChoose = [
  {
    title: "Flexible",
    description: "We come to you, saving you time and effort.",
  },
  {
    title: "Expert Technicians",
    description: "Highly trained professionals with modern tools and equipment.",
  },
  {
    title: "Wide Collection of Tyres",
    description: "Choose from the best brands and sizes to fit your car.",
  },
  {
    title: "Emergency Assistance",
    description: "Need support on short notice? Our rapid response team has you covered.",
  },
];

export const locationServicesProvided = [
  {
    title: "Mobile Tyre Fitting",
    href: "/mobile-tyre-fitting",
    description: "Punctures, worn tread, or a full replacement — fitted on the spot, wherever you are.",
    image: "/mobile-tyre-fitting-technician-bristol.webp",
  },
  {
    title: "Jump Start",
    href: "/jumpstarts",
    description: "Flat battery? Our technicians safely recharge your car and get you moving again, 24/7.",
    image: "/jump-start-service-dead-battery-bristol.webp",
  },
  {
    title: "Fuel Delivery",
    href: "/fuel-delivery",
    description: "Run out of petrol or diesel? We'll bring enough fuel to get you to the nearest station.",
    image: "/emergency-fuel-delivery-service-bristol.webp",
  },
];

export const locationGallery = [
  {
    src: "/mobile-car-tyre-fitting-bmw-i3-bristol.webp",
    alt: "Mobile tyre fitting on a BMW i3 in Bristol",
  },
  {
    src: "/mobile-tyre-fitting-technician-bristol.webp",
    alt: "Rapid Mobile Tyres technician fitting a tyre at a Bristol location",
  },
  {
    src: "/suv-tyre-fitting-volkswagen-tiguan-bristol.webp",
    alt: "SUV tyre fitting on a Volkswagen Tiguan in Bristol",
  },
  {
    src: "/rapid-mobile-tyres-fleet-service-vans-bristol.webp",
    alt: "Rapid Mobile Tyres fleet of service vans covering Bristol and surrounding areas",
  },
];

export const locations: LocationPageData[] = [
  {
    path: "mobile-tyre-fitting-bristol",
    name: "Bristol",
    tagline: "Fast, Convenient & Affordable Mobile Tyre Fitting in Bristol",
    intro:
      "Rapid Mobile Tyres Bristol brings mobile tyre fitting straight to your door in Bristol. Whether you're at home, at work, or out on the road, our mobile tyre fitting service means you'll never have to waste time in a garage again — we keep the whole process fast, reliable, and reasonably priced.",
    benefits: [
      "No waiting in line or disrupting your routine",
      "Avoid the risk of driving on a burst or punctured tyre",
      "Safe, trusted, and affordable service",
    ],
    areasServed: [
      "Portishead",
      "Nailsea",
      "Clevedon",
      "Lyde Green",
      "Emerson Green",
      "Bristol City Centre",
      "Yate",
      "Downend",
      "Bradley Stoke",
      "Henleaze",
      "Westbury-on-Trym",
      "Winterbourne",
      "Long Ashton",
      "Kingswood",
      "Longwell Green",
      "Keynsham",
      "Saltford",
      "Avonmouth",
      "Yatton",
    ],
  },
  {
    path: "mobile-tyre-fitting-alveston",
    name: "Alveston",
    tagline: "Struggling to Visit a Tyre Shop? Let Us Come to You in Alveston",
    intro:
      "Rapid Mobile Tyres makes tyre replacement easy by coming to you, wherever you are in Alveston. Whether you're at home, at work, or stopped with a flat on a journey, our mobile tyre fitting service saves you valuable time and gets you back on the road quickly.",
    benefits: [
      "Improved safety — avoid the hazards of driving on a flat or damaged tyre",
      "Reasonable, transparent pricing for outstanding service",
    ],
    areasServed: ["Thornbury", "Rudgeway", "Earthcott", "Olveston", "Tockington", "Old Down", "Elberton"],
  },
  {
    path: "mobile-tyre-fitting-avonmouth",
    name: "Avonmouth",
    tagline: "Affordable and Reliable Tyre Replacement at Your Doorstep",
    intro:
      "Rapid Mobile Tyres provides professional mobile tyre fitting across Avonmouth, so you never have to visit a garage again. Our experienced technicians come to you and fit your tyres whether you're at home, at work, or stuck on the side of the road. It's our pleasure to offer the Avonmouth community dependable, fast, and fairly priced tyre solutions, without ever compromising on quality or safety.",
    benefits: [
      "We come to you — home, work, or roadside",
      "No queuing at a service centre",
      "Fast emergency support for flat tyres",
      "Competitive, transparent pricing",
    ],
    areasServed: [
      "Shirehampton",
      "Lawrence Weston",
      "Henbury",
      "Kingsweston",
      "Sea Mills",
      "Coombe Dingle",
      "Blaise",
      "Hallen",
      "Easter Compton",
      "Pilning",
      "Redwick",
      "Severn Beach",
    ],
  },
  {
    path: "mobile-tyre-fitting-almondsbury",
    name: "Almondsbury",
    tagline: "Tyre Replacement Made Easy — We Come to You",
    intro:
      "At Rapid Mobile Tyres, we know how hectic life can be, and how frustrating it is when an unexpected tyre problem strikes. That's why we bring our skilled mobile tyre fitting service in Almondsbury straight to your door. Whether you're at home, at work, or stopped on the roadside, we deliver a quick, dependable, and affordable solution to all your tyre needs, without the wait at a garage or tyre shop.",
    benefits: [
      "We come to you, so your day carries on uninterrupted",
      "Rapid emergency response for flat tyres, at the roadside or elsewhere",
      "No need to drive on a damaged or flat tyre",
      "Savings on fuel, parking, and time lost at the garage",
    ],
    areasServed: [
      "Bradley Stoke",
      "Patchway",
      "Filton",
      "Bristol Parkway",
      "Pilning",
      "Stoke Gifford",
      "Winterbourne",
      "Henbury",
      "Little Stoke",
      "Coombe Dingle",
    ],
  },
  {
    path: "mobile-tyre-fitting-awkley",
    name: "Awkley",
    tagline: "Hassle-Free Tyre Solutions Delivered to Your Doorstep",
    intro:
      "Rapid Mobile Tyres removes the need to visit a garage. Our mobile tyre fitting service in Awkley brings skilled attention straight to you — whether you're at home, at work, or stuck on the road, we make sure your tyres are fitted efficiently and professionally. We're committed to dependable, cost-effective, and timely tyre solutions that keep you safe and save you time.",
    benefits: [
      "We come to you — home, office, or roadside",
      "No waiting in long queues at a service centre",
      "Fast roadside help for emergencies",
      "Avoid extra towing charges and costs",
    ],
    areasServed: ["Tockington", "Olveston", "Alveston", "Thornbury", "Severn Beach", "Pilning", "Redwick", "Hallen"],
  },
  {
    path: "mobile-tyre-fitting-belluton",
    name: "Belluton",
    tagline: "On-Site Tyre Fitting in Belluton — Anytime, Anywhere",
    intro:
      "Need speedy, trusted tyre fitting in Belluton? Rapid Mobile Tyres specialises in mobile services that save you time and deliver excellent results right where you are, with fast response times, extensive coverage across Belluton and the surrounding area, and a large range of premium and budget-friendly tyres to suit your needs.",
    benefits: [
      "Fast response, especially for emergencies",
      "Wide coverage across Belluton and the surrounding villages",
      "Customer satisfaction is our top priority",
      "Choice of premium and budget-friendly tyre brands",
    ],
    areasServed: ["Pensford", "Chew Magna", "Keynsham", "Compton Dando", "Chew Stoke", "Whitchurch", "Bishop Sutton", "Stanton Drew"],
  },
  {
    path: "mobile-tyre-fitting-backwell",
    name: "Backwell",
    tagline: "Tyres Delivered and Fitted — Anywhere in Backwell",
    intro:
      "Looking for trusted mobile tyre fitting in Backwell and the surrounding area? Rapid Mobile Tyres brings skilled tyre fitting straight to your door for a completely hassle-free experience. Whether you're at home, at work, or stuck on the road, our mobile tyre fitting service is here to help.",
    benefits: [
      "Avoid the stress of visiting a garage — we fit tyres at a location of your choice",
      "Qualified technicians using advanced equipment and procedures",
      "A wide choice of quality, cost-effective tyres",
      "Fast response for both emergencies and planned replacements",
    ],
    areasServed: ["Nailsea", "Flax Bourton", "Yatton", "Brockley", "Barrow Gurney"],
  },
  {
    path: "mobile-tyre-fitting-caldicot",
    name: "Caldicot",
    tagline: "Reliable and Affordable Mobile Tyre Fitting",
    intro:
      "Looking for a fast and reliable mobile tyre fitting service in Caldicot? Rapid Mobile Tyres specialises in convenient, on-the-go tyre fitting, so you're back on the road without ever needing to visit a garage.",
    benefits: [
      "Local experts with extensive industry experience",
      "Competitive pricing with no hidden extras",
      "Trusted by hundreds of happy customers across the area",
      "Fully mobile service that fits around your schedule",
    ],
    areasServed: [
      "Castle Gate",
      "Portskewett",
      "Caerwent",
      "Rogiet",
      "Llanvaches",
      "Magor",
      "Undy",
      "Sudbrook",
      "Crick",
      "Mathern",
      "Severn Tunnel Junction",
    ],
  },
  genericLocation("Bridgewater", "bridgewater", ["North Petherton", "Cannington", "Puriton", "Wembdon", "Chilton Trinity", "Taunton"]),
  genericLocation("Bath", "bath", ["Batheaston", "Bathampton", "Combe Down", "Odd Down", "Twerton", "Saltford", "Keynsham", "Radstock", "Midsomer Norton"]),
  genericLocation("Chepstow", "chepstow", ["Tutshill", "Sedbury", "St Arvans", "Caldicot", "Caerwent", "Shirenewton", "Tintern"]),
  genericLocation("Gloucestershire", "gloucestershire", ["Gloucester", "Cheltenham", "Stroud", "Tewkesbury", "Dursley", "Thornbury"]),
  genericLocation("Magor", "magor", ["Undy", "Rogiet", "Caldicot", "Redwick", "Llanvaches", "Newport"]),
  genericLocation("Newport", "newport", ["Caerleon", "Malpas", "Rogerstone", "Duffryn", "Bettws", "Risca", "Cwmbran", "Magor"]),
  genericLocation("Weston-Super-Mare", "weston-super-mare", ["Worle", "Uphill", "Kewstoke", "Locking", "Hutton", "Bleadon", "Burnham-on-Sea", "Clevedon"]),
  genericLocation("Bishopsworth", "bishopsworth", ["Bedminster Down", "Highridge", "Withywood", "Hartcliffe", "Whitchurch", "Dundry"]),
  genericLocation("Bishopton", "bishopton", ["Bishopton and the surrounding area"]),
  genericLocation("Bitton", "bitton", ["Warmley", "Oldland Common", "Keynsham", "Willsbridge", "Swineford"]),
  genericLocation("Bradley Stoke", "bradley-stoke", ["Patchway", "Stoke Gifford", "Almondsbury", "Filton", "Little Stoke"]),
  genericLocation("Brentry", "brentry", ["Southmead", "Henbury", "Westbury-on-Trym", "Charlton", "Filton"]),
  genericLocation("Brislington", "brislington", ["Broomhill", "St Anne's", "Hengrove", "Whitchurch", "Keynsham"]),
  genericLocation("Brockley", "brockley", ["Backwell", "Chelvey", "Cleeve", "Nailsea", "Wraxall"]),
  genericLocation("Butcombe", "butcombe", ["Blagdon", "Wrington", "Redhill", "Winford", "Chew Magna"]),
  genericLocation("Caerwent", "caerwent", ["Caldicot", "Portskewett", "Llanvaches", "Crick", "Dinham"]),
  genericLocation("Chelvey", "chelvey", ["Backwell", "Nailsea", "Brockley", "Claverham", "Yatton"]),
  genericLocation("Chew Magna", "chew-magna", ["Chew Stoke", "Stanton Drew", "Pensford", "Publow", "Winford"]),
  genericLocation("Chew Stoke", "chew-stoke", ["Chew Magna", "Bishop Sutton", "Winford", "Nempnett Thrubwell"]),
  genericLocation("Chewton Keynsham", "chewton-keynsham", ["Chewton Keynsham and the surrounding area"]),
  genericLocation("Chittening", "chittening", ["Avonmouth", "Severn Beach", "Pilning", "Easter Compton"]),
];

export const abbotsLeighLocation: LocationPageData = {
  path: "abbots-leigh-mobile-tyre-fitting",
  name: "Abbots Leigh",
  tagline: "Struggling to Visit a Tyre Shop? Let Us Come to You in Abbots Leigh",
  intro:
    "Rapid Mobile Tyres brings professional mobile tyre fitting straight to your door in Abbots Leigh. Whether you're at home, at work, or stopped on the roadside, our fully-equipped technicians fit your tyres quickly and safely — so you never have to waste time waiting at a garage.",
  benefits: [
    "We come to you — home, work, or roadside",
    "Avoid the risk of driving on a damaged or flat tyre",
    "Fast response for emergency callouts",
    "Fair, transparent pricing with no hidden extras",
  ],
  areasServed: ["Leigh Woods", "Failand", "Long Ashton", "Pill", "Ashton Court"],
};

export const allLocations: LocationPageData[] = [...locations, abbotsLeighLocation];
