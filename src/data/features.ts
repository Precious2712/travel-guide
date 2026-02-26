
import { Plane, Globe, Shield, Clock, LucideIcon } from "lucide-react"; // adjust if needed

type Feature = {
  icon: LucideIcon;
  title: string;
  description: string;
};

export const features: Feature[] = [
  {
    icon: Plane,
    title: "Smart Flight Search",
    description:
      "Find the best flights across 500+ airlines with our AI-powered search engine",
  },
  {
    icon: Globe,
    title: "Global Coverage",
    description:
      "Book flights to over 5,000 destinations worldwide with real-time availability",
  },
  {
    icon: Shield,
    title: "Secure Booking",
    description:
      "Your payment and personal data are protected with bank-level encryption",
  },
  {
    icon: Clock,
    title: "24/7 Support",
    description:
      "Our dedicated team is available around the clock to assist you",
  },
];