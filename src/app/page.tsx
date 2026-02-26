'use client';

import { DesktopHeader } from "@/components/comp/home/desktop-header";
import { FlightScrollSection } from "@/components/comp/home/flight-scroll-section";
import { HeroSection } from "@/components/comp/home/hero-section";
import { MobileHeader } from "@/components/comp/home/mobile-header";
import { StickySection } from "@/components/comp/home/sticky-section";
import { FlightScrollMobile } from "@/components/comp/home/flight-scroll-mobile";
import { SearchFlight } from "@/components/comp/home/search-flight";
import { Footer } from "@/components/comp/home/footer";

export default function Home() {

  return (
    <div className="min-h-screen bg-black">

      <div className="hidden lg:block fixed top-0 w-full z-50">
        <DesktopHeader />
      </div>

      <div className="block lg:hidden">
        <MobileHeader />
      </div>

      <div className="block lg:hidden">
        <HeroSection />
      </div>

      <div className=" hidden lg:block">
        <StickySection />
      </div>

      <div className="hidden md:block h-24 bg-white" />

      <div className="hidden md:block bg-white">
        <FlightScrollSection />
      </div>

      <div className="block mt-20 md:hidden">
        <FlightScrollMobile />
      </div>

      <div className="pt-14 bg-white">
        <SearchFlight />
      </div>

      <div>
        <Footer />
      </div>

    </div>
  );
}