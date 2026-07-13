import { useRef, useLayoutEffect } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const teamMembers = [
  {
    name: 'Graham McGarry',
    role: 'Managing Director',
    description: 'Experienced hands-on miner with a track record of turning early-stage projects into viable investment propositions.',
  },
  {
    name: 'Geoffrey Greenhill',
    role: 'Non-Executive Director',
    description: 'Highly respected in the mining industry with strong track record in creating shareholder value and metallurgical expertise.',
  },
  {
    name: 'Brett Hodgins',
    role: 'Non-Executive Director',
    description: 'Over 25 years in resources sector focused on exploration, mining operations, and feasibility studies.',
  },
  {
    name: 'Sarah Shipway',
    role: 'Non-Executive Director / Company Secretary',
    description: 'Chartered Accountant with 15+ years experience in corporate governance and financial compliance.',
  },
];

const LeadershipSection = () => {
  const sectionRef = useRef<HTMLDivElement>(null);
  const headlineRef = useRef<HTMLDivElement>(null);
  const cardsRef = useRef<HTMLDivElement>(null);

  useLayoutEffect(() => {
    const section = sectionRef.current;
    const headline = headlineRef.current;
    const cards = cardsRef.current;

    if (!section || !headline || !cards) return;

    const cardElements = cards.querySelectorAll('.team-card');

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

      // Cards animation
      cardElements.forEach((card, index) => {
        gsap.fromTo(card,
          { y: '8vh', opacity: 0, scale: 0.98 },
          {
            y: 0,
            opacity: 1,
            scale: 1,
            duration: 0.6,
            delay: index * 0.1,
            ease: 'power2.out',
            scrollTrigger: {
              trigger: card,
              start: 'top 85%',
              toggleActions: 'play none none reverse',
            }
          }
        );
      });
    }, section);

    return () => ctx.revert();
  }, []);

  return (
    <section 
      ref={sectionRef} 
      id="leadership"
      className="bg-beacon-black py-[10vh] px-[6vw]"
    >
      <div className="flex flex-col lg:flex-row gap-12">
        {/* Left Column - Headline */}
        <div ref={headlineRef} className="lg:w-[32vw]">
          <h2 className="headline-section text-beacon-white mb-6">
            LEADERSHIP & GOVERNANCE
          </h2>
          <p className="body-text text-beacon-gray mb-8">
            Experienced operators and disciplined capital allocators—focused on delivering value for shareholders and stakeholders.
          </p>
          <button className="btn-primary">
            Meet the board
          </button>
        </div>

        {/* Right Column - Team Grid */}
        <div ref={cardsRef} className="lg:w-[56vw] grid grid-cols-1 md:grid-cols-2 gap-6">
          {teamMembers.map((member, index) => (
            <div 
              key={index}
              className="team-card border border-beacon-white/20 p-6 card-hover"
            >
              <h3 className="font-display font-semibold text-lg text-beacon-white mb-1">
                {member.name}
              </h3>
              <p className="micro-label text-beacon-gold mb-4">
                {member.role}
              </p>
              <p className="text-sm text-beacon-gray leading-relaxed">
                {member.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default LeadershipSection;
