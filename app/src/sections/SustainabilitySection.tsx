import { useRef, useLayoutEffect } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const SustainabilitySection = () => {
  const sectionRef = useRef<HTMLDivElement>(null);
  const bgRef = useRef<HTMLImageElement>(null);
  const lineRef = useRef<HTMLDivElement>(null);
  const headlineRef = useRef<HTMLHeadingElement>(null);
  const bodyRef = useRef<HTMLParagraphElement>(null);
  const ctaRef = useRef<HTMLButtonElement>(null);
  const labelRef = useRef<HTMLSpanElement>(null);

  useLayoutEffect(() => {
    const section = sectionRef.current;
    const bg = bgRef.current;
    const line = lineRef.current;
    const headline = headlineRef.current;
    const body = bodyRef.current;
    const cta = ctaRef.current;
    const label = labelRef.current;

    if (!section || !bg || !line || !headline || !body || !cta || !label) return;

    const ctx = gsap.context(() => {
      const scrollTl = gsap.timeline({
        scrollTrigger: {
          trigger: section,
          start: 'top top',
          end: '+=130%',
          pin: true,
          scrub: 0.6,
        }
      });

      // ENTRANCE (0% - 30%)
      scrollTl
        .fromTo(bg, 
          { scale: 1.12, y: '10vh', opacity: 0.8 }, 
          { scale: 1, y: 0, opacity: 1, ease: 'none' }, 
          0
        )
        .fromTo(line, 
          { scaleX: 0, opacity: 0 }, 
          { scaleX: 1, opacity: 1, ease: 'none' }, 
          0.05
        )
        .fromTo(headline, 
          { y: '10vh', opacity: 0 }, 
          { y: 0, opacity: 1, ease: 'none' }, 
          0.1
        )
        .fromTo(body, 
          { y: '6vh', opacity: 0 }, 
          { y: 0, opacity: 1, ease: 'none' }, 
          0.15
        )
        .fromTo(cta, 
          { y: '6vh', opacity: 0 }, 
          { y: 0, opacity: 1, ease: 'none' }, 
          0.18
        )
        .fromTo(label, 
          { opacity: 0, y: -10 }, 
          { opacity: 1, y: 0, ease: 'none' }, 
          0.08
        );

      // SETTLE (30% - 70%) - hold positions

      // EXIT (70% - 100%)
      scrollTl
        .fromTo(bg, 
          { scale: 1, y: 0 }, 
          { scale: 1.06, y: '-6vh', ease: 'power2.in' }, 
          0.7
        )
        .fromTo(line, 
          { x: 0, opacity: 1 }, 
          { x: '-8vw', opacity: 0, ease: 'power2.in' }, 
          0.7
        )
        .fromTo(headline, 
          { x: 0, opacity: 1 }, 
          { x: '-14vw', opacity: 0, ease: 'power2.in' }, 
          0.7
        )
        .fromTo(body, 
          { y: 0, opacity: 1 }, 
          { y: '-4vh', opacity: 0, ease: 'power2.in' }, 
          0.72
        )
        .fromTo(cta, 
          { y: 0, opacity: 1 }, 
          { y: '-4vh', opacity: 0, ease: 'power2.in' }, 
          0.74
        )
        .fromTo(label, 
          { opacity: 1 }, 
          { opacity: 0, ease: 'power2.in' }, 
          0.75
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
      id="sustainability"
      className="section-pinned bg-beacon-black"
    >
      {/* Background Image */}
      <img 
        ref={bgRef}
        src="/rehab_vegetation.jpg" 
        alt="Rehabilitated mining area"
        className="bg-image"
      />

      {/* Dark Scrim */}
      <div className="absolute inset-0 scrim z-[2]" />

      {/* Content */}
      <div className="absolute inset-0 z-[5] flex flex-col justify-center px-[6vw]">
        {/* Top Label */}
        <div className="absolute top-[10vh] right-[6vw]">
          <span ref={labelRef} className="micro-label text-beacon-gray">
            SUSTAINABILITY
          </span>
        </div>

        {/* Gold Line */}
        <div 
          ref={lineRef}
          className="gold-line w-[28vw] mb-6"
          style={{ marginTop: '4vh' }}
        />

        {/* Headline */}
        <h2 
          ref={headlineRef}
          className="headline-section text-beacon-white max-w-[52vw] mb-6"
        >
          MINE RESPONSIBLY.
        </h2>

        {/* Body */}
        <p 
          ref={bodyRef}
          className="body-text text-beacon-gray max-w-[34vw] mb-8"
        >
          Safety first. Progressive rehabilitation. Transparent reporting. We operate to leave a positive, lasting legacy.
        </p>

        {/* CTA */}
        <button 
          ref={ctaRef}
          onClick={() => scrollToSection('contact')}
          className="btn-primary w-fit"
        >
          Read our approach
        </button>
      </div>
    </section>
  );
};

export default SustainabilitySection;
