import { useEffect, useRef } from "react";


interface City {
  name: string;
  x: number;
  y: number;
}

const cities: City[] = [
  { name: "New York", x: 25.5, y: 35 },
  { name: "London", x: 47, y: 25 },
  { name: "Paris", x: 48.5, y: 28 },
  { name: "Dubai", x: 60, y: 40 },
  { name: "Mumbai", x: 64.5, y: 44 },
  { name: "Singapore", x: 73, y: 55 },
  { name: "Tokyo", x: 82, y: 32 },
  { name: "Sydney", x: 84, y: 72 },
  { name: "São Paulo", x: 30, y: 68 },
  { name: "Lagos", x: 49, y: 52 },
  { name: "Nairobi", x: 56, y: 55 },
  { name: "Los Angeles", x: 15, y: 36 },
  { name: "Toronto", x: 24, y: 30 },
  { name: "Cairo", x: 54, y: 38 },
  { name: "Shanghai", x: 77, y: 34 },
  { name: "Moscow", x: 56, y: 22 },
];

interface Route {
  from: number;
  to: number;
}

const routes: Route[] = [
  { from: 0, to: 1 },
  { from: 1, to: 2 },
  { from: 2, to: 3 },
  { from: 3, to: 4 },
  { from: 4, to: 5 },
  { from: 5, to: 6 },
  { from: 6, to: 7 },
  { from: 0, to: 8 },
  { from: 9, to: 1 },
  { from: 10, to: 3 },
  { from: 11, to: 0 },
  { from: 12, to: 1 },
  { from: 13, to: 3 },
  { from: 14, to: 6 },
  { from: 15, to: 14 },
  { from: 5, to: 7 },
  { from: 11, to: 6 },
  { from: 8, to: 9 },
];

function getCurvedPath(from: City, to: City): string {
  const dx = to.x - from.x;
  const dy = to.y - from.y;
  const dist = Math.sqrt(dx * dx + dy * dy);
  const mx = (from.x + to.x) / 2;
  const my = (from.y + to.y) / 2 - dist * 0.2;
  return `M ${from.x} ${from.y} Q ${mx} ${my} ${to.x} ${to.y}`;
}

export function WorldMap() {

  const svgRef = useRef<SVGSVGElement>(null);

  useEffect(() => {
    const dots = svgRef.current?.querySelectorAll(".travel-dot");
    dots?.forEach((dot) => {
      const anim = dot.querySelector("animateMotion");
      if (anim) (anim as SVGAnimateMotionElement).beginElement?.();
    });
  }, []);



  return (
    <div className="absolute  inset-0 bg-red-900 pointer-events-none">

      {/* <iframe
        className="absolute inset-0 w-full  object-cover scale-125"
        src="https://www.youtube.com/embed/tPp1Dy9t6ho?autoplay=1&mute=1&loop=1&controls=0&showinfo=0&playlist=tPp1Dy9t6ho&modestbranding=1"
        title="World Map Animation"
        frameBorder="0"
        allow="autoplay; fullscreen"
        allowFullScreen
      /> */}

      <div className="absolute inset-0 bg-black/40" />

      <div className="absolute inset-0 bg-linear-to-br from-blue-900/40 via-transparent to-indigo-900/50" />

      {/* <div
        className="absolute inset-0"
        style={{
          background: `
            linear-gradient(to right, hsl(var(--background)) 0%, transparent 8%, transparent 92%, hsl(var(--background)) 100%),
            linear-gradient(to bottom, hsl(var(--background)) 0%, transparent 10%, transparent 85%, hsl(var(--background)) 100%)
          `,
        }}
      /> */}

      {/* <svg
        ref={svgRef}
        viewBox="0 0 100 100"
        className="absolute inset-0 w-full h-full"
        preserveAspectRatio="none"
      >
        <defs>
          <filter id="glow" x="-50%" y="-50%" width="200%" height="200%">
            <feGaussianBlur stdDeviation="0.4" result="blur" />
            <feMerge>
              <feMergeNode in="blur" />
              <feMergeNode in="SourceGraphic" />
            </feMerge>
          </filter>
        </defs>


        {routes.map((route, i) => {
          const path = getCurvedPath(cities[route.from], cities[route.to]);
          return (
            <path
              key={`route-${i}`}
              d={path}
              fill="none"
              stroke="hsl(var(--map-line))"
              strokeWidth="0.12"
              strokeDasharray="0.6 0.4"
              opacity="0.4"
            />
          );
        })}


        {routes.map((route, i) => {
          const path = getCurvedPath(cities[route.from], cities[route.to]);
          const duration = 4 + (i % 5) * 1.2;
          const delay = i * 0.6;

          return (
            <g key={`dot-${i}`} className="travel-dot">
              <circle r="0.4" fill="hsl(var(--map-dot))" filter="url(#glow)">
                <animateMotion
                  dur={`${duration}s`}
                  repeatCount="indefinite"
                  begin={`${delay}s`}
                  path={path}
                />
                <animate
                  attributeName="opacity"
                  values="0;1;1;0"
                  dur={`${duration}s`}
                  repeatCount="indefinite"
                  begin={`${delay}s`}
                />
              </circle>
            </g>
          );
        })}


        {cities.map((city, i) => (
          <g key={`city-${i}`}>
            <circle
              cx={city.x}
              cy={city.y}
              r="0.8"
              fill="none"
              stroke="hsl(var(--map-dot))"
              strokeWidth="0.08"
              opacity="0.3"
            >
              <animate
                attributeName="r"
                values="0.4;1.2;0.4"
                dur="3s"
                repeatCount="indefinite"
                begin={`${i * 0.4}s`}
              />
            </circle>

            <circle
              cx={city.x}
              cy={city.y}
              r="0.35"
              fill="hsl(var(--map-dot))"
              opacity="0.9"
            />
          </g>
        ))}
      </svg> */}
    </div>
  );
}  