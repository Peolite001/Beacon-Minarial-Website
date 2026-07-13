import { useRef, useLayoutEffect } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const HeroSection = () => {
  const sectionRef = useRef<HTMLDivElement>(null);
  const bgRef = useRef<HTMLImageElement>(null);
  const lineRef = useRef<HTMLDivElement>(null);
  const headlineRef = useRef<HTMLHeadingElement>(null);
  const subheadRef = useRef<HTMLParagraphElement>(null);
  const ctaRef = useRef<HTMLDivElement>(null);
  const labelTLRef = useRef<HTMLSpanElement>(null);
  const labelTRRef = useRef<HTMLSpanElement>(null);

  useLayoutEffect(() => {
    const section = sectionRef.current;
    const bg = bgRef.current;
    const line = lineRef.current;
    const headline = headlineRef.current;
    const subhead = subheadRef.current;
    const cta = ctaRef.current;
    const labelTL = labelTLRef.current;
    const labelTR = labelTRRef.current;

    if (!section || !bg || !line || !headline || !subhead || !cta || !labelTL || !labelTR) return;

    const ctx = gsap.context(() => {
      // Set initial states for entrance animation
      gsap.set(bg, { opacity: 0, scale: 1.06 });
      gsap.set(line, { scaleX: 0 });
      gsap.set(headline, { y: 24, opacity: 0 });
      gsap.set(subhead, { y: 16, opacity: 0 });
      gsap.set(cta, { y: 16, opacity: 0 });
      gsap.set([labelTL, labelTR], { opacity: 0, y: -10 });

      // Auto-play entrance animation on load
      const entranceTl = gsap.timeline({ delay: 0.2 });
      
      entranceTl
        .to(bg, { opacity: 1, scale: 1, duration: 1.2, ease: 'power2.out' })
        .to([labelTL, labelTR], { opacity: 1, y: 0, duration: 0.6, ease: 'power2.out' }, 0.3)
        .to(line, { scaleX: 1, duration: 0.7, ease: 'power2.out' }, 0.4)
        .to(headline, { y: 0, opacity: 1, duration: 0.9, ease: 'power2.out' }, 0.5)
        .to(subhead, { y: 0, opacity: 1, duration: 0.6, ease: 'power2.out' }, 0.7)
        .to(cta, { y: 0, opacity: 1, duration: 0.6, ease: 'power2.out' }, 0.8);

      // Scroll-driven exit animation
      const scrollTl = gsap.timeline({
        scrollTrigger: {
          trigger: section,
          start: 'top top',
          end: '+=130%',
          pin: true,
          scrub: 0.6,
          onLeaveBack: () => {
            // Reset to visible state when scrolling back to top
            gsap.to(bg, { opacity: 1, scale: 1, y: 0, duration: 0.3 });
            gsap.to(line, { x: 0, opacity: 1, duration: 0.3 });
            gsap.to(headline, { x: 0, opacity: 1, duration: 0.3 });
            gsap.to(subhead, { x: 0, opacity: 1, duration: 0.3 });
            gsap.to(cta, { y: 0, opacity: 1, duration: 0.3 });
          }
        }
      });

      // EXIT phase (70% - 100%)
      scrollTl
        .fromTo(headline, 
          { x: 0, opacity: 1 }, 
          { x: '-18vw', opacity: 0, ease: 'power2.in' }, 
          0.7
        )
        .fromTo(line, 
          { x: 0, opacity: 1 }, 
          { x: '-10vw', opacity: 0, ease: 'power2.in' }, 
          0.7
        )
        .fromTo(subhead, 
          { x: 0, opacity: 1 }, 
          { x: '-14vw', opacity: 0, ease: 'power2.in' }, 
          0.72
        )
        .fromTo(cta, 
          { y: 0, opacity: 1 }, 
          { y: '-4vh', opacity: 0, ease: 'power2.in' }, 
          0.74
        )
        .fromTo([labelTL, labelTR], 
          { opacity: 1 }, 
          { opacity: 0, ease: 'power2.in' }, 
          0.75
        )
        .fromTo(bg, 
          { scale: 1, y: 0 }, 
          { scale: 1.08, y: '-6vh', ease: 'none' }, 
          0.7
        );

    }, section);

    return () => ctx.revert();
  }, []);

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section 
      ref={sectionRef} 
      id="hero"
      className="section-pinned bg-beacon-black"
    >
      {/* Background Image */}
      <img 
        ref={bgRef}
        src="/hero_night_pit.jpg" 
        alt="Night mining operations"
        className="bg-image"
      />

      {/* Vignette Overlay */}
      <div className="absolute inset-0 vignette z-[2]" />
      
      {/* Dark Scrim */}
      <div className="absolute inset-0 scrim z-[3]" />

      {/* Content */}
      <div className="absolute inset-0 z-[5] flex flex-col justify-center px-[6vw]">
        {/* Top Labels */}
        <div className="absolute top-[10vh] left-[6vw] right-[6vw] flex justify-between">
          <span ref={labelTLRef} className="micro-label text-beacon-gold">
            ASX: BCN
          </span>
          <span ref={labelTRRef} className="micro-label text-beacon-gray">
            WESTERN AUSTRALIA
          </span>
        </div>

        {/* Gold Line */}
        <div 
          ref={lineRef}
          className="gold-line w-[38vw] mb-6"
          style={{ marginTop: '4vh' }}
        />

        {/* Headline */}
        <h1 
          ref={headlineRef}
          className="headline-hero text-beacon-white max-w-[62vw] mb-6"
        >
          MODERN GOLD.<br />PROVEN GROUND.
        </h1>

        {/* Subheadline */}
        <p 
          ref={subheadRef}
          className="body-text text-beacon-gray max-w-[34vw] mb-8"
        >
          Beacon Minerals explores, develops, and produces gold with discipline—backed by long-life resources and a clear path to growth.
        </p>

        {/* CTAs */}
        <div ref={ctaRef} className="flex gap-4">
          <button 
            onClick={() => scrollToSection('exploration')}
            className="btn-primary"
          >
            Read our story
          </button>
          <button 
            onClick={() => scrollToSection('reserves')}
            className="btn-secondary"
          >
            View projects
          </button>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
