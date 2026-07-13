import { useRef, useLayoutEffect } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const stats = [
  { value: '799k', unit: 'oz', label: 'Total Mineral Resource' },
  { value: '252k', unit: 'oz', label: 'Ore Reserve' },
  { value: '1.2', unit: 'Mtpa', label: 'Approved Mill Capacity' },
];

const ReservesSection = () => {
  const sectionRef = useRef<HTMLDivElement>(null);
  const bgRef = useRef<HTMLImageElement>(null);
  const lineRef = useRef<HTMLDivElement>(null);
  const headlineRef = useRef<HTMLHeadingElement>(null);
  const bodyRef = useRef<HTMLParagraphElement>(null);
  const statsRef = useRef<HTMLDivElement>(null);
  const labelRef = useRef<HTMLSpanElement>(null);

  useLayoutEffect(() => {
    const section = sectionRef.current;
    const bg = bgRef.current;
    const line = lineRef.current;
    const headline = headlineRef.current;
    const body = bodyRef.current;
    const statsEl = statsRef.current;
    const label = labelRef.current;

    if (!section || !bg || !line || !headline || !body || !statsEl || !label) return;

    const statCards = statsEl.querySelectorAll('.stat-card');

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
        .fromTo(statCards, 
          { y: '8vh', opacity: 0 }, 
          { y: 0, opacity: 1, stagger: 0.06, ease: 'none' }, 
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
        .fromTo(statCards, 
          { y: 0, opacity: 1 }, 
          { y: '-6vh', opacity: 0, stagger: 0.03, ease: 'power2.in' }, 
          0.72
        )
        .fromTo(label, 
          { opacity: 1 }, 
          { opacity: 0, ease: 'power2.in' }, 
          0.75
        );

    }, section);

    return () => ctx.revert();
  }, []);

  return (
    <section 
      ref={sectionRef} 
      id="reserves"
      className="section-pinned bg-beacon-black"
    >
      {/* Background Image */}
      <img 
        ref={bgRef}
        src="/pit_haul_road.jpg" 
        alt="Pit haul road"
        className="bg-image"
      />

      {/* Dark Scrim */}
      <div className="absolute inset-0 scrim z-[2]" />

      {/* Content */}
      <div className="absolute inset-0 z-[5] flex flex-col justify-center px-[6vw]">
        {/* Top Label */}
        <div className="absolute top-[10vh] right-[6vw]">
          <span ref={labelRef} className="micro-label text-beacon-gray">
            RESOURCES & RESERVES
          </span>
        </div>

        {/* Gold Line */}
        <div 
          ref={lineRef}
          className="gold-line w-[30vw] mb-6"
          style={{ marginTop: '4vh' }}
        />

        {/* Headline */}
        <h2 
          ref={headlineRef}
          className="headline-section text-beacon-white max-w-[54vw] mb-6"
        >
          RESERVES THAT DELIVER.
        </h2>

        {/* Body */}
        <p 
          ref={bodyRef}
          className="body-text text-beacon-gray max-w-[34vw] mb-10"
        >
          A growing inventory of ounces, a clear mine plan, and the infrastructure to turn resources into reliable production.
        </p>

        {/* Stats */}
        <div ref={statsRef} className="flex gap-8">
          {stats.map((stat, index) => (
            <div 
              key={index}
              className="stat-card border border-beacon-white/20 p-6 min-w-[16vw]"
            >
              <div className="flex items-baseline gap-1 mb-2">
                <span className="font-display font-bold text-4xl text-beacon-gold">
                  {stat.value}
                </span>
                <span className="micro-label text-beacon-gray">
                  {stat.unit}
                </span>
              </div>
              <p className="text-sm text-beacon-gray">
                {stat.label}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ReservesSection;
