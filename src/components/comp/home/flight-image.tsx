'use client';

import Image from 'next/image';

const travelers = [
  { src: 'https://media.istockphoto.com/id/1405263241/photo/young-woman-traveling-by-plane-looking-out-the-window.jpg?s=612x612&w=0&k=20&c=LxOVe2I43VrvJGhgMYDiElsBzgsdLLD7ZNY1YDha22A=', alt: 'Happy traveler with passport', size: 'w-32 h-32', position: 'top-0 left-1/2 -translate-x-1/2 -translate-y-8' },
  { src: 'https://media.istockphoto.com/id/868607330/photo/woman-in-the-airplane.jpg?s=612x612&w=0&k=20&c=JgyKZNKrIkblZqc0ROIsRQUv8QMXOnsMpCVnqI7Mdy8=', alt: 'Woman looking at airplane window', size: 'w-40 h-40', position: 'top-1/3 -left-12' },
  { src: 'https://media.istockphoto.com/id/470865674/photo/blurred-shot-of-people-walking-through-malaysia-airport.jpg?s=612x612&w=0&k=20&c=hTayn20A-mDnZKTwdd97lb-wjyrurkKRKhsLwP7Hy68=', alt: 'Man with luggage', size: 'w-36 h-36', position: 'bottom-1/4 -right-8' },
  { src: 'https://media.istockphoto.com/id/657571606/photo/young-woman-flying-to-france.jpg?s=612x612&w=0&k=20&c=Vd_pIhmemO6TcO869ymDo8OVFiIC6mrHPIVFidhFKGg=', alt: 'Travel explorer with map', size: 'w-28 h-28', position: 'bottom-0 left-1/4 translate-x-1/3 translate-y-8' },
];

export  function FlightImage() {
  return (
    <div className="relative w-full max-w-2xl mx-auto h-96">
      {/* Background glow circles - Similar to PalmPay */}
      <div className="absolute -top-20 right-1/4 w-80 h-80 bg-accent rounded-full opacity-25 blur-3xl -z-10" />
      <div className="absolute -bottom-20 -right-20 w-96 h-96 bg-primary rounded-full opacity-20 blur-3xl -z-10" />

      {/* Circular Photo Frames Container */}
      <div className="relative w-full h-full flex items-center justify-center">
        {travelers.map((traveler, index) => (
          <div
            key={index}
            className={`absolute ${traveler.position}`}
          >
            {/* Circular frame with border and shadow */}
            <div className={`${traveler.size} rounded-full overflow-hidden border-4 border-primary shadow-2xl bg-white p-1`}>
              <div className="w-full h-full rounded-full overflow-hidden">
                <Image
                  src={traveler.src}
                  alt={traveler.alt}
                  width={160}
                  height={160}
                  className="w-full h-full object-cover"
                  priority={index === 0}
                />
              </div>
            </div>

            {/* Outer accent ring */}
            <div className={`absolute inset-0 ${traveler.size} rounded-full border-2 border-accent/50 scale-110`} />
          </div>
        ))}

        {/* Center decorative element */}
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="w-24 h-24 rounded-full border-4 border-accent/30 flex items-center justify-center">
            <div className="w-12 h-12 rounded-full bg-accent/20" />
          </div>
        </div>
      </div>

      {/* Floating stat badges */}
      <div className="absolute -bottom-6 left-0 right-0 flex justify-between px-6">
        <div className="bg-white rounded-full px-4 py-2 shadow-xl flex items-center gap-2">
          <div className="w-3 h-3 rounded-full bg-accent"></div>
          <span className="text-xs font-bold text-purple-900">50K+ Flights</span>
        </div>
        <div className="bg-white rounded-full px-4 py-2 shadow-xl">
          <span className="text-xs font-bold text-purple-900">Trusted by Millions</span>
        </div>
      </div>
    </div>
  );
}
