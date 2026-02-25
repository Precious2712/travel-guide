
type Step = {
    title: string;
    description: string;
    image: string;
    card: string;
    bg: string;
    accentColor?: string;
    stats?: { label: string; value: string }[];
    badge?: string;
};


export const flightSteps: Step[] = [
    {
        title: "Search Flights",
        description: "Find the best flights worldwide in seconds with our smart search algorithm that compares thousands of options.",
        image: "https://media.istockphoto.com/id/2249834449/photo/young-woman-enjoying-music-with-earbuds-while-looking-out-the-airplane-window.jpg?s=612x612&w=0&k=20&c=MWA5nRvILMsYFAL_bOQLFkwondrwidnqmhFvh8veml8=",
        card: "https://media.istockphoto.com/id/1357654321/photo/flight-search-form-on-mobile-device.jpg",
        bg: "#f4f4f4",
        accentColor: "#4ade80",
        badge: "✨ 50% faster",
        stats: [
            { label: "Airlines", value: "500+" },
            { label: "Destinations", value: "1000+" }
        ]
    },
    {
        title: "Select Your Seat",
        description: "Pick your preferred seat and travel comfortably with our 3D seat mapping technology.",
        image: "https://media.istockphoto.com/id/1188236181/photo/close-up-of-pensive-woman-looking-at-sunset-through-airplane-window.jpg?s=612x612&w=0&k=20&c=M-csZCqraQE98tQbW2ZTAJkVOjkFemIe7H6abzjzwtc=",
        card: "https://media.istockphoto.com/id/1265432109/photo/airplane-seat-selection.jpg",
        bg: "#ff4d4f",
        accentColor: "#fbbf24",
        badge: "🪑 Premium choice",
        stats: [
            { label: "Seat types", value: "6" },
            { label: "Extra legroom", value: "20%" }
        ]
    },
    {
        title: "Confirm & Fly",
        description: "Get your boarding pass instantly with our digital wallet integration and enjoy seamless travel.",
        image: "https://media.istockphoto.com/id/1816132347/photo/asian-people-female-person-onboard-airplane-window-using-mobile-while-on-the-plane.jpg?s=612x612&w=0&k=20&c=GXlS9K1mwCGjemTv-8UBq0v29q6iaQ1rlZFEAnmv_40=",
        card: "https://media.istockphoto.com/id/1287654321/photo/boarding-pass-ticket.jpg",
        bg: "#0f172a",
        accentColor: "#60a5fa",
        badge: "✅ Instant boarding",
        stats: [
            { label: "Check-in", value: "30 sec" },
            { label: "Digital passes", value: "100%" }
        ]
    },
];
