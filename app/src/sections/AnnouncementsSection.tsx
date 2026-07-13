import { useRef, useLayoutEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { useAuth } from '../contexts/AuthContext';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { ArrowRight, FileText, Lock } from 'lucide-react';

gsap.registerPlugin(ScrollTrigger);

const announcements = [
  {
    title: 'September 2025 Quarterly Report',
    date: '31 Oct 2025',
    type: 'Quarterly',
    category: 'quarterly',
  },
  {
    title: 'Stage 2 Grade Control Completed at Iguana',
    date: '11 Aug 2025',
    type: 'Exploration',
    category: 'exploration',
  },
  {
    title: '2025 Resource & Reserve Statement',
    date: '28 Aug 2025',
    type: 'Reserves',
    category: 'reserves',
  },
];

const AnnouncementsSection = () => {
  const sectionRef = useRef<HTMLDivElement>(null);
  const headlineRef = useRef<HTMLDivElement>(null);
  const cardsRef = useRef<HTMLDivElement>(null);
  const { isAuthenticated } = useAuth();
  const navigate = useNavigate();

  useLayoutEffect(() => {
    const section = sectionRef.current;
    const headline = headlineRef.current;
    const cards = cardsRef.current;

    if (!section || !headline || !cards) return;

    const cardElements = cards.querySelectorAll('.announcement-card');

    const ctx = gsap.context(() => {
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

      cardElements.forEach((card, index) => {
        gsap.fromTo(card,
          { x: '6vw', opacity: 0 },
          {
            x: 0,
            opacity: 1,
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

  const handleViewAll = () => {
    if (isAuthenticated) {
      navigate('/asx-announcements');
    } else {
      navigate('/login');
    }
  };

  const handleCardClick = (_category: string) => {
    if (isAuthenticated) {
      navigate('/asx-announcements');
    } else {
      navigate('/login');
    }
  };

  return (
    <section 
      ref={sectionRef} 
      id="announcements"
      className="bg-beacon-black py-[10vh] px-[6vw]"
    >
      <div className="flex flex-col lg:flex-row gap-12">
        {/* Left Column - Headline */}
        <div ref={headlineRef} className="lg:w-[32vw]">
          <h2 className="headline-section text-beacon-white mb-6">
            LATEST ANNOUNCEMENTS
          </h2>
          <p className="body-text text-beacon-gray mb-8">
            Quarterly reports, exploration updates, and market releases.
          </p>
          <button 
            onClick={handleViewAll}
            className="btn-primary flex items-center gap-2"
          >
            {isAuthenticated ? 'View all ASX releases' : 'Login to view'}
            {isAuthenticated ? <ArrowRight size={16} /> : <Lock size={16} />}
          </button>
        </div>

        {/* Right Column - Announcements */}
        <div ref={cardsRef} className="lg:w-[56vw] flex flex-col gap-4">
          {announcements.map((item, index) => (
            <div 
              key={index}
              onClick={() => handleCardClick(item.category)}
              className="announcement-card border border-beacon-white/20 p-6 card-hover cursor-pointer group relative"
            >
              {!isAuthenticated && (
                <div className="absolute top-4 right-4 p-1.5 bg-beacon-gold/10 text-beacon-gold">
                  <Lock size={12} />
                </div>
              )}
              <div className="flex items-start justify-between gap-4">
                <div className="flex items-start gap-4">
                  <div className="p-3 bg-beacon-gold/10 text-beacon-gold">
                    <FileText size={20} />
                  </div>
                  <div>
                    <span className="micro-label text-beacon-gold mb-2 block">
                      {item.type}
                    </span>
                    <h3 className="font-display font-semibold text-lg text-beacon-white group-hover:text-beacon-gold transition-colors">
                      {item.title}
                    </h3>
                  </div>
                </div>
                <span className="micro-label text-beacon-gray whitespace-nowrap">
                  {item.date}
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default AnnouncementsSection;
