import { useRef, useLayoutEffect, useState } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { ArrowRight } from 'lucide-react';

gsap.registerPlugin(ScrollTrigger);

const navLinks = [
  { label: 'About', id: 'exploration' },
  { label: 'Projects', id: 'reserves' },
  { label: 'Investors', id: 'investor' },
  { label: 'Sustainability', id: 'sustainability' },
  { label: 'Contact', id: 'contact' },
];

const NewsletterSection = () => {
  const sectionRef = useRef<HTMLDivElement>(null);
  const contentRef = useRef<HTMLDivElement>(null);
  const [email, setEmail] = useState('');

  useLayoutEffect(() => {
    const section = sectionRef.current;
    const content = contentRef.current;

    if (!section || !content) return;

    const ctx = gsap.context(() => {
      gsap.fromTo(content,
        { y: '6vh', opacity: 0 },
        {
          y: 0,
          opacity: 1,
          duration: 0.8,
          ease: 'power2.out',
          scrollTrigger: {
            trigger: content,
            start: 'top 80%',
            toggleActions: 'play none none reverse',
          }
        }
      );
    }, section);

    return () => ctx.revert();
  }, []);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    alert('Thank you for subscribing to our newsletter!');
    setEmail('');
  };

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section 
      ref={sectionRef} 
      className="bg-beacon-charcoal py-[10vh] px-[6vw]"
    >
      <div ref={contentRef} className="max-w-[980px] mx-auto text-center">
        <h2 className="headline-section text-beacon-white mb-6">
          STAY INFORMED
        </h2>
        <p className="body-text text-beacon-gray mb-10 max-w-[500px] mx-auto">
          Get ASX updates and exploration news—delivered directly.
        </p>

        {/* Newsletter Form */}
        <form 
          onSubmit={handleSubmit}
          className="flex flex-col sm:flex-row gap-4 justify-center mb-12"
        >
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="bg-beacon-black border border-beacon-white/20 px-6 py-3 text-beacon-white focus:border-beacon-gold outline-none transition-colors min-w-[300px]"
            placeholder="Email address"
            required
          />
          <button
            type="submit"
            className="btn-primary flex items-center justify-center gap-2"
          >
            Subscribe
            <ArrowRight size={16} />
          </button>
        </form>

        {/* Navigation Links */}
        <div className="flex flex-wrap justify-center gap-8">
          {navLinks.map((link) => (
            <button
              key={link.id}
              onClick={() => scrollToSection(link.id)}
              className="micro-label text-beacon-gray hover:text-beacon-gold transition-colors"
            >
              {link.label}
            </button>
          ))}
        </div>
      </div>
    </section>
  );
};

export default NewsletterSection;
