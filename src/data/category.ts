interface Section {
  title: string;
  text: string;
  image: string;
  category: string;
  features: string[];
}

export const sections: Section[] = [
  {
    title: "Search & Book Flights",
    text: "Find the best flight deals, compare prices from 500+ airlines, and book your trip in minutes with our smart search technology.",
    image: "/flight-search.png",
    category: "FLIGHT SEARCH",
    features: [
      "Compare prices across 500+ airlines worldwide",
      "Flexible date search for best deals",
      "Price alerts & fare predictions",
      "Multi-city and round-trip options"
    ]
  },
  {
    title: "Choose Your Destination",
    text: "Explore thousands of destinations worldwide with our interactive travel guide and plan your next journey with confidence.",
    image: "/vacation.png",
    category: "DESTINATIONS",
    features: [
      "Discover trending destinations & hidden gems",
      "Local tips, weather info & best time to visit",
      "Curated travel guides for every city",
      "Nearby attractions & activities"
    ]
  },
  {
    title: "Cabin & Seat Selection",
    text: "Personalize your flight experience with our advanced seat selection tool. Choose from Economy to First Class with extra legroom options.",
    image: "/download3.webp",
    category: "SEAT SELECTION",
    features: [
      "Interactive seat maps with real-time availability",
      "Extra legroom & preferred seating options",
      "Cabin class comparison (Economy to First Class)",
      "Special meals & in-flight preferences"
    ]
  },
  {
    title: "Real-Time Flight Tracking",
    text: "Stay in control with live flight updates and intelligent notifications. Never miss a gate change or delay again.",
    image: "/download4.webp",
    category: "FLIGHT TRACKING",
    features: [
      "Live departure/arrival boards",
      "Gate change alerts & notifications",
      "Flight delay predictions",
      "Weather radar & airport conditions"
    ]
  },
  {
    title: "Online Check-in & Boarding",
    text: "Skip the airport queues with our seamless digital check-in. Get your boarding pass instantly and head straight to security.",
    image: "/download.webp",
    category: "CHECK-IN",
    features: [
      "Check-in from anywhere, 24-48 hours before flight",
      "Mobile boarding passes (Apple Wallet & Google Pay)",
      "Baggage check-in & tag printing",
      "Fast-track security recommendations"
    ]
  },
];