import { useRef, useLayoutEffect, useState } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const metrics = [
  { label: 'ASX Code', value: 'BCN', prefix: '', suffix: '', isText: true },
  { label: 'FY25 Revenue', value: 92.4, prefix: 'A$', suffix: 'M', isText: false },
  { label: 'FY25 Production', value: 25.6, prefix: '', suffix: 'k oz', isText: false },
  { label: 'Cash (Jun 2025)', value: 14.4, prefix: 'A$', suffix: 'M', isText: false },
  { label: 'Forward Sales', value: 'None', prefix: '', suffix: '', isText: true },
  { label: 'Dividend Policy', value: 'Active', prefix: '', suffix: '', isText: true },
];

const InvestorSection = () => {
  const sectionRef = useRef<HTMLDivElement>(null);
  const headlineRef = useRef<HTMLDivElement>(null);
  const metricsRef = useRef<HTMLDivElement>(null);
  const [animatedValues, setAnimatedValues] = useState<number[]>(metrics.map(() => 0));

  useLayoutEffect(() => {
    const section = sectionRef.current;
    const headline = headlineRef.current;
    const metricsEl = metricsRef.current;

    if (!section || !headline || !metricsEl) return;

    const metricCards = metricsEl.querySelectorAll('.metric-card');

    const ctx = gsap.context(() => {
      // Headline animation
      gsap.fromTo(headline,
        { y: '6vh', opacity: 0 },
        {
          y: 0,
          opacity: 1,
          duration: 0.8,
          ease: 'power2.out',
          scrollTrigger: {
            trigger: headline,
            start: 'top 80%',
            toggleActions: 'play none none reverse',
          }
        }
      );

      // Metrics animation
      metricCards.forEach((card, index) => {
        gsap.fromTo(card,
          { y: '6vh', opacity: 0 },
          {
            y: 0,
            opacity: 1,
            duration: 0.6,
            delay: index * 0.08,
            ease: 'power2.out',
            scrollTrigger: {
              trigger: card,
              start: 'top 85%',
              toggleActions: 'play none none reverse',
              onEnter: () => {
                // Animate the number
                if (!metrics[index].isText) {
                  const obj = { value: 0 };
                  gsap.to(obj, {
                    value: metrics[index].value,
                    duration: 1.5,
                    ease: 'power2.out',
                    onUpdate: () => {
                      setAnimatedValues(prev => {
                        const newValues = [...prev];
                        newValues[index] = obj.value;
                        return newValues;
                      });
                    }
                  });
                }
              }
            }
          }
        );
      });
    }, section);

    return () => ctx.revert();
  }, []);

  const formatValue = (index: number) => {
    const metric = metrics[index];
    if (metric.isText) {
      return metric.value;
    }
    const animatedValue = animatedValues[index];
    return animatedValue.toFixed(1);
  };

  return (
    <section 
      ref={sectionRef} 
      id="investor"
      className="bg-beacon-charcoal py-[10vh] px-[6vw]"
    >
      <div className="flex flex-col lg:flex-row gap-12">
        {/* Left Column - Headline */}
        <div ref={headlineRef} className="lg:w-[32vw]">
          <h2 className="headline-section text-beacon-white mb-6">
            INVESTOR SNAPSHOT
          </h2>
          <p className="body-text text-beacon-gray">
            ASX-listed, dividend-paying, and committed to transparent disclosure.
          </p>
        </div>

        {/* Right Column - Metrics Grid */}
        <div ref={metricsRef} className="lg:w-[56vw] grid grid-cols-2 md:grid-cols-3 gap-6">
          {metrics.map((metric, index) => (
            <div 
              key={index}
              className="metric-card border border-beacon-white/20 p-6"
            >
              <p className="micro-label text-beacon-gray mb-3">
                {metric.label}
              </p>
              <div className="flex items-baseline gap-1">
                {metric.prefix && (
                  <span className="text-beacon-gold font-display font-semibold">
                    {metric.prefix}
                  </span>
                )}
                <span className="font-display font-bold text-3xl text-beacon-white">
                  {formatValue(index)}
                </span>
                {metric.suffix && (
                  <span className="micro-label text-beacon-gray">
                    {metric.suffix}
                  </span>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default InvestorSection;
