import { useRef, useLayoutEffect, useEffect } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

// Import sections
import HeroSection from '../sections/HeroSection';
import ExplorationSection from '../sections/ExplorationSection';
import ReservesSection from '../sections/ReservesSection';
import OperationsSection from '../sections/OperationsSection';
import SustainabilitySection from '../sections/SustainabilitySection';
import StrategySection from '../sections/StrategySection';
import LeadershipSection from '../sections/LeadershipSection';
import InvestorSection from '../sections/InvestorSection';
import AnnouncementsSection from '../sections/AnnouncementsSection';
import ContactSection from '../sections/ContactSection';
import NewsletterSection from '../sections/NewsletterSection';
import Footer from '../sections/Footer';

gsap.registerPlugin(ScrollTrigger);

const HomePage = () => {
  const mainRef = useRef<HTMLDivElement>(null);

  useLayoutEffect(() => {
    // Wait for all sections to mount and create their ScrollTriggers
    const timer = setTimeout(() => {
      const pinned = ScrollTrigger.getAll()
        .filter(st => st.vars.pin)
        .sort((a, b) => a.start - b.start);
      
      const maxScroll = ScrollTrigger.maxScroll(window);
      
      if (!maxScroll || pinned.length === 0) return;

      const pinnedRanges = pinned.map(st => ({
        start: st.start / maxScroll,
        end: (st.end ?? st.start) / maxScroll,
        center: (st.start + ((st.end ?? st.start) - st.start) * 0.5) / maxScroll,
      }));

      ScrollTrigger.create({
        snap: {
          snapTo: (value: number) => {
            const inPinned = pinnedRanges.some(r => value >= r.start - 0.02 && value <= r.end + 0.02);
            if (!inPinned) return value;
            
            const target = pinnedRanges.reduce((closest, r) =>
              Math.abs(r.center - value) < Math.abs(closest - value) ? r.center : closest,
              pinnedRanges[0]?.center ?? 0
            );
            return target;
          },
          duration: { min: 0.15, max: 0.35 },
          delay: 0,
          ease: "power2.out"
        }
      });
    }, 500);

    return () => {
      clearTimeout(timer);
    };
  }, []);

  useEffect(() => {
    return () => {
      ScrollTrigger.getAll().forEach(st => st.kill());
    };
  }, []);

  return (
    <div ref={mainRef}>
      {/* Pinned Sections (z-index stacking) */}
      <div className="relative z-10">
        <HeroSection />
      </div>
      <div className="relative z-20">
        <ExplorationSection />
      </div>
      <div className="relative z-30">
        <ReservesSection />
      </div>
      <div className="relative z-40">
        <OperationsSection />
      </div>
      <div className="relative z-50">
        <SustainabilitySection />
      </div>
      <div className="relative z-[60]">
        <StrategySection />
      </div>
      
      {/* Flowing Sections */}
      <LeadershipSection />
      <InvestorSection />
      <AnnouncementsSection />
      <ContactSection />
      <NewsletterSection />
      <Footer />
    </div>
  );
};

export default HomePage;
