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
  { id: "all", label: "All" },
  { id: "backwater", label: "Backwater" },
  { id: "beaches", label: "Beaches" },
  { id: "dolphins", label: "Dolphins" },
  { id: "lighthouses", label: "Lighthouses" }
];

// Exactly 12 unique real photos (4x3 desktop, 3x4 tablet, 2x6 mobile)
// No duplicates, 1-line concise captions, and explicit object-position for lighthouses
export const DESTINATIONS = [
  {
    id: "mini-kerala",
    title: "Mini Kerala",
    category: "backwater",
    categoryName: "Backwater",
    image: "/images/backwater.jpg",
    caption: "Palm-fringed backwaters along Karli river",
    position: "object-center"
  },
  {
    id: "mangrove-safari",
    title: "Mangrove Channel",
    category: "backwater",
    categoryName: "Backwater",
    image: "/images/MangroveSafari-clean.jpg",
    caption: "Dense natural mangrove waterways in Devbag",
    position: "object-center"
  },
  {
    id: "sangam-point",
    title: "Sangam Point",
    category: "beaches",
    categoryName: "Beaches",
    image: "/images/SangamPoint-clean.jpg",
    caption: "Where the calm river meets the open sea",
    position: "object-center"
  },
  {
    id: "devbagh-beach",
    title: "Devbag Shoreline",
    category: "beaches",
    categoryName: "Beaches",
    image: "/images/devbagh-beach.jpg",
    caption: "Pristine golden sandbar on the Malvan coast",
    position: "object-center"
  },
  {
    id: "bhogwe-beach",
    title: "Bhogwe Beach",
    category: "beaches",
    categoryName: "Beaches",
    image: "/images/Bhogwe-clean.jpg",
    caption: "Untouched white sand beach and sea cliffs",
    position: "object-center"
  },
  {
    id: "tsunami-island",
    title: "Tsunami Island",
    category: "beaches",
    categoryName: "Beaches",
    image: "/images/tsunami-clean.jpg",
    caption: "Vibrant island sandbar for watersports",
    position: "object-center"
  },
  {
    id: "dolphin-point-1",
    title: "Dolphin Point",
    category: "dolphins",
    categoryName: "Dolphins",
    image: "/images/dolphin-1.jpg",
    caption: "Bottlenose dolphins jumping near the creek",
    position: "object-center",
    isDolphin: true
  },
  {
    id: "dolphin-point-2",
    title: "Dolphin Safari",
    category: "dolphins",
    categoryName: "Dolphins",
    image: "/images/dolphin-2.jpg",
    caption: "Wild dolphin pods leaping in open waters",
    position: "object-center",
    isDolphin: true
  },
  {
    id: "old-lighthouse",
    title: "Old Lighthouse Rock",
    category: "lighthouses",
    categoryName: "Lighthouses",
    image: "/images/old-lighthouse-1.jpg",
    caption: "Historic stone beacon atop sea rocks",
    position: "object-top" // lighthouse tower never cropped
  },
  {
    id: "new-lighthouse",
    title: "New Lighthouse",
    category: "lighthouses",
    categoryName: "Lighthouses",
    image: "/images/new-lighthouse.jpg",
    caption: "Active navigation beacon at Nivti Rocks",
    position: "object-top" // lighthouse tower never cropped
  },
  {
    id: "new-lighthouse-aerial",
    title: "Nivti Rocks",
    category: "lighthouses",
    categoryName: "Lighthouses",
    image: "/images/new-lighthouse-aerial.jpg",
    caption: "Offshore rocky fortress rising from the deep",
    position: "object-center"
  },
  {
    id: "mhatarichi-chul",
    title: "Mhatarichi Chul",
    category: "lighthouses",
    categoryName: "Lighthouses",
    image: "/images/mhatarichi-chul.jpg",
    caption: "Natural sea blowhole erupting ocean spray",
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

export const TESTIMONIALS = [
  {
    id: "review-1",
    isPlaceholder: true,
    author: "Amit & Neha Sharma",
    location: "Pune, Maharashtra",
    trip: "Lighthouse Safari",
    rating: 5,
    text: "[PLACEHOLDER REVIEW] The Lighthouse Safari was the highlight of our Malvan vacation! Seeing dolphins jumping right beside our boat and the sea blowhole at Mhatarichi Chul was truly breathtaking."
  },
  {
    id: "review-2",
    isPlaceholder: true,
    author: "Rohan Deshmukh",
    location: "Mumbai, Maharashtra",
    trip: "Semi Premium Package",
    rating: 5,
    text: "[PLACEHOLDER REVIEW] Vishal and Shubham are fantastic hosts. Very courteous, safety-first boatmen who know the Devbag waters inside out. The transition from Karli river to open sea is magical."
  },
  {
    id: "review-3",
    isPlaceholder: true,
    author: "Pooja Kulkarni",
    location: "Kolhapur, Maharashtra",
    trip: "Basic Package + Devbag Stay",
    rating: 5,
    text: "[PLACEHOLDER REVIEW] Calm, palm-fringed waters of Mini Kerala and pristine sandbanks at Tsunami island. Clean rooms at the resort and delicious homemade food. Highly recommended!"
  },
  {
    id: "review-4",
    isPlaceholder: true,
    author: "Girish & Family",
    location: "Goa",
    trip: "Lighthouse Safari",
    rating: 5,
    text: "[PLACEHOLDER REVIEW] We were lucky to spot three dolphins during the morning safari! The ancient Old Lighthouse rock is stunning. Safe jackets for children and very steady boat."
  }
];
