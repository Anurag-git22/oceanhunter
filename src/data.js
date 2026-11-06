// Ocean Hunter - Data Configuration File
// Edit this file to update content, packages, gallery items, FAQ, or contact numbers.

export const BRAND = {
  name: "OCEAN HUNTER",
  tagline: "Backwater to Ocean",
  subtitle: "Boat safaris on the Malvan coast",
  badge: "Resort & Room Booking",
  address: "A/P Devbag, Tal. Malvan, Dist. Sindhudurg, Maharashtra",
  whatsappNumber: "919370208843",
  whatsappUrl: "https://wa.me/919370208843",
  googleMapsDirectionsUrl: "https://www.google.com/maps/dir/?api=1&destination=Devbag+Sangam+Malvan+Maharashtra",
  googleMapsEmbedUrl: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d15383.187893114972!2d73.47952467389868!3d15.967838500201382!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bc007bbfba4e98f%3A0xe964c23dbfa48b81!2sDevbag%2C%20Maharashtra!5e0!3m2!1sen!2sin!4v1700000000000!5m2!1sen!2sin",
  contacts: [
    {
      name: "Vishal Dongre",
      phones: ["9370208843", "8007020197"]
    },
    {
      name: "Shubham",
      phones: ["8007017417", "7498710675"]
    }
  ]
};

export const PACKAGES = [
  {
    id: "basic",
    title: "Basic Package",
    duration: "45 minutes",
    cover: "/images/backwater.jpg",
    alt: "Backwater Mini Kerala coconut palms in Devbag",
    description: "Ideal introductory cruise through serene backwaters & scenic points.",
    spots: [
      "Tsunami Island",
      "Mini Kerala",
      "Mangrove Island",
      "Open Mouth Crocodile Rock",
      "Sangam Point",
      "Seagull Island"
    ],
    isPopular: false,
    tag: "Essential Safari"
  },
  {
    id: "semi-premium",
    title: "Semi Premium",
    duration: "1 hr 30 min",
    cover: "/images/dolphin-1.jpg",
    alt: "Dolphins jumping near Devbag Malvan coast",
    description: "Expanded ocean route including pristine beaches & dolphin waters.",
    spots: [
      "Bhogve Beach",
      "Devbag Beach",
      "Dolphin Point",
      "Nivti Rock"
    ],
    includesPrevious: "Includes all Basic Package spots",
    isPopular: false,
    tag: "Coast & Dolphins"
  },
  {
    id: "lighthouse-safari",
    title: "Lighthouse Safari",
    duration: "2 hr 30 min",
    cover: "/images/new-lighthouse-aerial.jpg",
    alt: "Aerial of New Lighthouse on Nivti Rocks",
    description: "The ultimate offshore expedition across deep-sea heritage landmarks.",
    spots: [
      "Old Lighthouse",
      "New Lighthouse",
      "Mhatarichi Chul",
      "Triangle-Shape Rock Canal",
      "Turtle Rock View"
    ],
    includesPrevious: "Includes Basic + Semi Premium spots",
    isPopular: true,
    popularBadge: "Most Popular / Premium",
    tag: "Signature Experience"
  }
];

export const GALLERY_FILTERS = [
  { id: "all", label: "All Points" },
  { id: "backwater", label: "Backwater" },
  { id: "beaches", label: "Beaches & Islands" },
  { id: "dolphins", label: "Dolphins" },
  { id: "lighthouses", label: "Lighthouses & Rocks" }
];

// All points from the safari packages that have real existing photos
// (Turtle Rock View is excluded as no real image exists)
export const DESTINATIONS = [
  // 1. Basic Package Points
  {
    id: "tsunami-island",
    title: "Tsunami Island",
    packageGroup: "Basic Package",
    category: "beaches",
    categoryName: "Beaches & Islands",
    image: "/images/tsunami-clean.jpg",
    caption: "Vibrant sandbar island in Karli river backwaters",
    position: "object-center"
  },
  {
    id: "mini-kerala",
    title: "Mini Kerala",
    packageGroup: "Basic Package",
    category: "backwater",
    categoryName: "Backwater",
    image: "/images/backwater.jpg",
    caption: "Palm-fringed backwaters along Karli river",
    position: "object-center"
  },
  {
    id: "mangrove-island",
    title: "Mangrove Island",
    packageGroup: "Basic Package",
    category: "backwater",
    categoryName: "Backwater",
    image: "/images/MangroveSafari-clean.jpg",
    caption: "Dense natural mangrove waterways in Devbag",
    position: "object-center"
  },
  {
    id: "crocodile-rock",
    title: "Open Mouth Crocodile Rock",
    packageGroup: "Basic Package",
    category: "backwater",
    categoryName: "Backwater",
    image: "/images/crocodile-point.jpg",
    caption: "Natural rock formation shaped like an open-mouthed crocodile",
    position: "object-center"
  },
  {
    id: "sangam-point",
    title: "Sangam Point",
    packageGroup: "Basic Package",
    category: "beaches",
    categoryName: "Beaches & Islands",
    image: "/images/SangamPoint-clean.jpg",
    caption: "Where the calm river meets the open sea",
    position: "object-center"
  },
  {
    id: "seagull-island",
    title: "Seagull Island",
    packageGroup: "Basic Package",
    category: "backwater",
    categoryName: "Backwater",
    image: "/images/Seagull.jpg",
    caption: "Flocks of migrating seagulls over tidal sandbars",
    position: "object-center"
  },

  // 2. Semi Premium Package Points
  {
    id: "bhogwe-beach",
    title: "Bhogve Beach",
    packageGroup: "Semi Premium",
    category: "beaches",
    categoryName: "Beaches & Islands",
    image: "/images/Bhogwe-clean.jpg",
    caption: "Untouched white sand beach and sea cliffs",
    position: "object-center"
  },
  {
    id: "devbag-beach",
    title: "Devbag Beach",
    packageGroup: "Semi Premium",
    category: "beaches",
    categoryName: "Beaches & Islands",
    image: "/images/devbagh-beach.jpg",
    caption: "Pristine golden sandbar on the Malvan coast",
    position: "object-center"
  },
  {
    id: "dolphin-point",
    title: "Dolphin Point",
    packageGroup: "Semi Premium",
    category: "dolphins",
    categoryName: "Dolphins",
    image: "/images/dolphin-1.jpg",
    caption: "Bottlenose dolphins jumping near the creek mouth",
    position: "object-center",
    isDolphin: true
  },
  {
    id: "nivti-rock",
    title: "Nivti Rock",
    packageGroup: "Semi Premium",
    category: "lighthouses",
    categoryName: "Lighthouses & Rocks",
    image: "/images/Gallery3.jpg",
    caption: "Dramatic sea rock channel amidst deep blue waters",
    position: "object-center"
  },

  // 3. Lighthouse Safari Package Points
  {
    id: "old-lighthouse",
    title: "Old Lighthouse",
    packageGroup: "Lighthouse Safari",
    category: "lighthouses",
    categoryName: "Lighthouses & Rocks",
    image: "/images/old-lighthouse-1.jpg",
    caption: "Historic stone beacon atop offshore rocks",
    position: "object-top"
  },
  {
    id: "new-lighthouse",
    title: "New Lighthouse",
    packageGroup: "Lighthouse Safari",
    category: "lighthouses",
    categoryName: "Lighthouses & Rocks",
    image: "/images/new-lighthouse.jpg",
    caption: "Active navigation beacon at Nivti Rocks",
    position: "object-top"
  },
  {
    id: "mhatarichi-chul",
    title: "Mhatarichi Chul",
    packageGroup: "Lighthouse Safari",
    category: "lighthouses",
    categoryName: "Lighthouses & Rocks",
    image: "/images/mhatarichi-chul.jpg",
    caption: "Natural sea blowhole erupting ocean water spray",
    position: "object-center"
  }
];

export const JOURNEY_STEPS = [
  {
    step: "01",
    title: "Backwaters & Sangam",
    subtitle: "Mini Kerala, Tsunami Island & Karli River",
    desc: "Board at Devbag and glide through emerald calm waters lined by endless palms.",
    icon: "Compass",
    color: "from-teal-500 to-emerald-600"
  },
  {
    step: "02",
    title: "Pristine Beaches",
    subtitle: "Devbag Coast & White Sands of Bhogve",
    desc: "Pass the open rivermouth where river blends into ocean waves and golden shores.",
    icon: "Waves",
    color: "from-sky-500 to-blue-600"
  },
  {
    step: "03",
    title: "Dolphin Point",
    subtitle: "Arabian Sea Creek Entrance",
    desc: "Cruise offshore to observe wild dolphins leaping freely in open seawater.",
    icon: "Fish",
    color: "from-blue-600 to-indigo-600"
  },
  {
    step: "04",
    title: "Lighthouses & Sea Rocks",
    subtitle: "Old & New Lighthouses, Mhatarichi Chul",
    desc: "Reach Nivti's legendary sea cliffs, cavern canals, and dramatic blowholes.",
    icon: "Anchor",
    color: "from-navy-600 to-navy-900"
  }
];

export const WHY_CHOOSE_US = [
  {
    id: "boatmen",
    title: "Experienced boatmen",
    desc: "Local Devbag maritime captains with generational coastal sea knowledge.",
    icon: "Users"
  },
  {
    id: "safety",
    title: "Safety jackets provided",
    desc: "Certified life jackets for adults and children on every safari voyage.",
    icon: "ShieldCheck"
  },
  {
    id: "scenic",
    title: "Scenic Malvan coast",
    desc: "Handpicked vantage points from backwater creeks to offshore islets.",
    icon: "MapPin"
  },
  {
    id: "dolphins",
    title: "Dolphin sightings",
    desc: "High success sightings at prime morning dolphin convergence grounds.",
    icon: "Sparkles"
  }
];

export const KNOW_BEFORE_YOU_GO = [
  {
    id: "id-proof",
    title: "Carry valid photo ID proof",
    summary: "Government-issued photo identification is mandatory for all guests.",
    details: "As required by local maritime and port safety regulations, carry a valid government ID (Aadhaar, Driving License, or Voter ID) for each passenger before boarding."
  },
  {
    id: "life-jackets",
    title: "Life jackets provided & mandatory",
    summary: "Safety jackets for all ages are provided and must be worn.",
    details: "We supply clean, certified safety life jackets for adults, children, and infants. Wearing them is mandatory throughout the voyage for everyone's protection."
  },
  {
    id: "weather-timings",
    title: "Timings depend on tide & weather",
    summary: "Early morning hours offer the calmest waters and best dolphin views.",
    details: "Boat safari operations run strictly based on ocean tide tables and weather conditions. Morning slots (6:30 AM – 9:30 AM) provide the smoothest rides and highest dolphin activity."
  },
  {
    id: "monsoon-closure",
    title: "Offshore routes closed during monsoon",
    summary: "Deep-sea safari pauses during heavy southwest monsoons for safety.",
    details: "In compliance with maritime safety protocols, deep-sea routes to the lighthouses close from June to mid-September. Backwater and resort bookings operate subject to weather."
  }
];

export const FAQS = [
  {
    id: "faq-1",
    question: "Where do Ocean Hunter boats depart from in Devbag?",
    answer: "Our boat safaris depart directly from Devbag Sangam / Devbag Beach jetty, with easy parking and direct boarding access."
  },
  {
    id: "faq-2",
    question: "What is the best time for dolphin sightings?",
    answer: "Early mornings between 6:30 AM and 9:30 AM offer the highest chances of seeing wild dolphin pods feeding near the creek mouth."
  },
  {
    id: "faq-3",
    question: "Can families with young children or elders join?",
    answer: "Yes! Our boats are steady, sheltered with sun canopies, and equipped with fitted life jackets suitable for all age groups."
  },
  {
    id: "faq-4",
    question: "How do we confirm our booking without paying online?",
    answer: "Simply tap 'Book on WhatsApp' or call our captains directly. We confirm availability, departure time, and reserve your boat immediately."
  },
  {
    id: "faq-5",
    question: "Can we hire a private boat or customize stops?",
    answer: "Absolutely. We offer exclusive private boat charters for families, photography trips, and personalized itineraries on request."
  }
];
