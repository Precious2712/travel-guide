export interface nav {
    id: number;
    itemA: string;
    phrase: string;
    icon?: string; 
    image?: string; 
    price?: string; 
};

export const desktop = [
    {
        id: 0,
        service: 'Destinations',
        dropDown: [
            {
                id: 0,
                itemA: 'Europe',
                phrase: 'Discover historic cities',
                image: 'https://media.istockphoto.com/id/2228636314/vector/european-union-flag-wave-eu-vector-illustration.jpg?s=612x612&w=0&k=20&c=2BaI_aS3VOvUnoENwJRBjL-ic-d7mvdOdge3FFtbA5k=',
                price: 'From $499'
            },
            {
                id: 1,
                itemA: 'Asia',
                phrase: 'Exotic adventures await',
                image: 'https://media.istockphoto.com/id/2222858850/vector/vector-illustration-map-of-the-asian-continent-with-country-borders.jpg?s=612x612&w=0&k=20&c=JRDjVIPqNGJSjw4zQk5yIJCzo3FEyyDYVrmMvWB_zLY=',
                price: 'From $699'
            },
            {
                id: 2,
                itemA: 'Americas',
                phrase: 'From north to south',
                image: 'https://media.istockphoto.com/id/2216350504/photo/u-s-federal-agency.jpg?s=612x612&w=0&k=20&c=iOA0J3fGytm4u2UXJwR01hc1dPQ308L2e4iQ9XbY7BE=',
                price: 'From $399'
            },
            {
                id: 3,
                itemA: 'Africa',
                phrase: 'Wild beauty',
                image: 'https://media.istockphoto.com/id/1406561909/vector/africa-single-countries-gray-political-map.jpg?s=612x612&w=0&k=20&c=BbdfJHaL0eO49Y0QQmkUIR5kPe3s67dWSGcBAimDS5k=',
                price: 'From $899'
            }
        ],
    },
    {
        id: 1,
        service: 'Travel Classes',
        dropDown: [
            {
                id: 0,
                itemA: 'Economy',
                phrase: 'Budget-friendly comfort',
                image: 'https://media.istockphoto.com/id/2223804415/photo/passenger-cabin-interior-of-hong-kong-express-airbus-aircraft.jpg?s=612x612&w=0&k=20&c=cCpYyuY3JR8EXztUja1wg3NmbfoZO7xAseMeZfC9Q7I=',
                price: 'Best value'
            },
            {
                id: 1,
                itemA: 'Premium Economy',
                phrase: 'Extra legroom',
                image: 'https://media.istockphoto.com/id/2246311299/photo/flight-attendant-talks-with-passenger-while-serving-drinks-in-airplane-cabin-a-service-cart.jpg?s=612x612&w=0&k=20&c=aZ62iF1z6djOignyCRbv-XqlS9EjZr4_7_nNvTEbdU4=',
                price: '+$199'
            },
            {
                id: 2,
                itemA: 'Business',
                phrase: 'Luxury travel',
                image: 'https://media.istockphoto.com/id/1210053036/photo/business-woman-in-private-jet.jpg?s=612x612&w=0&k=20&c=hb7ENHAZXs33e0t7L_6O7O1t7lwg-qlhHogwC5ViUp4=',
                price: 'Lie-flat seats'
            },
            {
                id: 3,
                itemA: 'First Class',
                phrase: 'Ultimate experience',
                image: 'https://media.istockphoto.com/id/154191655/photo/business-jet-interior.jpg?s=612x612&w=0&k=20&c=8MPCui-0jf9ND72pR-L3TkCxFjac_eiOSWF6tm2YQ7g=',
                price: 'Private suite'
            }
        ],
    },
    {
        id: 2,
        service: 'Services',
        dropDown: [
            {
                id: 0,
                itemA: 'Flight Booking',
                phrase: 'Book your journey',
                image: 'https://media.istockphoto.com/id/2246683385/photo/tickets-and-travel-centre-at-manchester-piccadilly-busy-queues-and-travelers-with-luggage.jpg?s=612x612&w=0&k=20&c=SP_caai92sIhGA2rcK-gvuyW-zcIQ5sfy0wOaWXvhtg=',
                price: '24/7 support'
            },
            {
                id: 1,
                itemA: 'Baggage Info',
                phrase: 'Pack with confidence',
                image: 'https://media.istockphoto.com/id/2230047639/photo/colorful-suitcases-on-airport-baggage-carousel.jpg?s=612x612&w=0&k=20&c=EESRloVksKMP0TCXQScAqsnFOLSpP8gv9LV9tlaWbg0=',
                price: 'Included'
            },
            {
                id: 2,
                itemA: 'Meal Selection',
                phrase: 'Gourmet choices',
                image: 'https://media.istockphoto.com/id/2172557368/photo/variety-of-colorful-dishes-arranged-on-a-table-showcasing-a-diverse-and-appetizing-meal.jpg?s=612x612&w=0&k=20&c=36Zpl5tJC4TbpqZcC_4cutLS2LhSPjpayuKaNp6fcNU=',
                price: 'Pre-order'
            },
            {
                id: 3,
                itemA: 'Special Assistance',
                phrase: 'We care for you',
                image: 'https://media.istockphoto.com/id/2190193453/photo/successful-cooperation-between-the-buyer-and-seller.jpg?s=612x612&w=0&k=20&c=g4ylItugzQXYLdvTCFpCVcd41qoOmaRwIK7ikUxjuDc=',
                price: 'Free'
            }
        ],
    },
    {
        id: 3,
        service: 'Offers',
        dropDown: [
            {
                id: 0,
                itemA: 'Early Bird',
                phrase: 'Book 3 months ahead',
                image: 'https://media.istockphoto.com/id/886500364/photo/just-a-few-more-procedures-before-i-board.jpg?s=612x612&w=0&k=20&c=jWcxI0laYyy59Wtgb8Fh_sQe3SrBfXakdn7IyDedg2Y=',
                price: 'Save 30%'
            },
            {
                id: 1,
                itemA: 'Student Deals',
                phrase: 'Travel & learn',
                image: 'https://media.istockphoto.com/id/2220899051/photo/group-of-friends-gathered-around-a-smartphone-using-an-ai-app-to-help-with-their-group-project.jpg?s=612x612&w=0&k=20&c=6fMJFLIZdDvUdbL9S92NYkM4BIgY4tCezlv1yY6H7xg=',
                price: 'Extra discount'
            },
            {
                id: 2,
                itemA: 'Family Package',
                phrase: 'Kids fly free',
                image: 'https://media.istockphoto.com/id/2220725570/photo/family-building-a-sandcastle-at-the-beach-in-summer-vacation-time.jpg?s=612x612&w=0&k=20&c=qDKJPqGvZW6TLyzttrsSjKm8qCRNRw8MBEAvTbrM0pA=',
                price: 'Limited time'
            },
            {
                id: 3,
                itemA: 'Last Minute',
                phrase: 'Spontaneous trips',
                image: 'https://media.istockphoto.com/id/636569874/photo/happy-girl-handing-over-passport-in-airport.jpg?s=612x612&w=0&k=20&c=qvf9_Bb_HHj0x3vhIn4xiZMWqg0reYbXvFQmV8aGzYo=',
                price: 'Up to 50% off'
            }
        ],
    },
];