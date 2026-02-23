'use client';

import { DesktopHeader } from "@/components/comp/home/desktop-header";
import { MobileHeader } from "@/components/comp/home/mobile-header";
import { StickySection } from "@/components/comp/home/sticky-section";

export default function Home() {

  return (
    <div className="min-h-screen">

      <div className="hidden lg:block fixed top-0 w-full z-50">
        <DesktopHeader />
      </div>

      <div className="block lg:hidden">
        <MobileHeader />
      </div>

      <div className="bg-sky-800 hidden  lg:block">
        <StickySection />
      </div>

    </div>
  );
}