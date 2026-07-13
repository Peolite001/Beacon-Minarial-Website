import { useRef, useLayoutEffect, useState } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { MapPin, Phone, Mail, Send } from 'lucide-react';

gsap.registerPlugin(ScrollTrigger);

const ContactSection = () => {
  const sectionRef = useRef<HTMLDivElement>(null);
  const formRef = useRef<HTMLDivElement>(null);
  const infoRef = useRef<HTMLDivElement>(null);
  
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
  });

  useLayoutEffect(() => {
    const section = sectionRef.current;
    const form = formRef.current;
    const info = infoRef.current;

    if (!section || !form || !info) return;

    const ctx = gsap.context(() => {
      // Info animation
      gsap.fromTo(info,
        { y: '6vh', opacity: 0 },
        {
          y: 0,
          opacity: 1,
          duration: 0.8,
          ease: 'power2.out',
          scrollTrigger: {
            trigger: info,
            start: 'top 80%',
            toggleActions: 'play none none reverse',
          }
        }
      );

      // Form animation
      gsap.fromTo(form,
        { y: '8vh', opacity: 0 },
        {
          y: 0,
          opacity: 1,
          duration: 0.8,
          delay: 0.2,
          ease: 'power2.out',
          scrollTrigger: {
            trigger: form,
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
    // Handle form submission
    alert('Thank you for your message. We will get back to you soon.');
    setFormData({ name: '', email: '', subject: '', message: '' });
  };

  return (
    <section 
      ref={sectionRef} 
      id="contact"
      className="bg-beacon-black py-[10vh] px-[6vw]"
    >
      <div className="flex flex-col lg:flex-row gap-12">
        {/* Left Column - Contact Info */}
        <div ref={infoRef} className="lg:w-[38vw]">
          <h2 className="headline-section text-beacon-white mb-6">
            CONTACT
          </h2>
          <p className="body-text text-beacon-gray mb-10">
            For investor enquiries, media, or site access—reach out directly.
          </p>

          <div className="space-y-6">
            <div className="flex items-start gap-4">
              <div className="p-3 bg-beacon-gold/10 text-beacon-gold">
                <MapPin size={20} />
              </div>
              <div>
                <p className="micro-label text-beacon-gray mb-1">OFFICE</p>
                <p className="text-beacon-white">144 Vivian Street</p>
                <p className="text-beacon-white">Boulder WA 6432</p>
              </div>
            </div>

            <div className="flex items-start gap-4">
              <div className="p-3 bg-beacon-gold/10 text-beacon-gold">
                <Phone size={20} />
              </div>
              <div>
                <p className="micro-label text-beacon-gray mb-1">PHONE</p>
                <p className="text-beacon-white">+61 8 9093 2477</p>
              </div>
            </div>

            <div className="flex items-start gap-4">
              <div className="p-3 bg-beacon-gold/10 text-beacon-gold">
                <Mail size={20} />
              </div>
              <div>
                <p className="micro-label text-beacon-gray mb-1">EMAIL</p>
                <p className="text-beacon-white">enquiries@beaconminerals.com.au</p>
              </div>
            </div>
          </div>
        </div>

        {/* Right Column - Form */}
        <div ref={formRef} className="lg:w-[50vw]">
          <form 
            onSubmit={handleSubmit}
            className="border border-beacon-white/20 p-8"
          >
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
              <div>
                <label className="micro-label text-beacon-gray mb-2 block">
                  NAME
                </label>
                <input
                  type="text"
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  className="w-full bg-beacon-charcoal border border-beacon-white/20 px-4 py-3 text-beacon-white focus:border-beacon-gold outline-none transition-colors"
                  placeholder="Your name"
                  required
                />
              </div>
              <div>
                <label className="micro-label text-beacon-gray mb-2 block">
                  EMAIL
                </label>
                <input
                  type="email"
                  value={formData.email}
                  onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                  className="w-full bg-beacon-charcoal border border-beacon-white/20 px-4 py-3 text-beacon-white focus:border-beacon-gold outline-none transition-colors"
                  placeholder="your@email.com"
                  required
                />
              </div>
            </div>

            <div className="mb-6">
              <label className="micro-label text-beacon-gray mb-2 block">
                SUBJECT
              </label>
              <input
                type="text"
                value={formData.subject}
                onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
                className="w-full bg-beacon-charcoal border border-beacon-white/20 px-4 py-3 text-beacon-white focus:border-beacon-gold outline-none transition-colors"
                placeholder="How can we help?"
                required
              />
            </div>

            <div className="mb-8">
              <label className="micro-label text-beacon-gray mb-2 block">
                MESSAGE
              </label>
              <textarea
                value={formData.message}
                onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                className="w-full bg-beacon-charcoal border border-beacon-white/20 px-4 py-3 text-beacon-white focus:border-beacon-gold outline-none transition-colors resize-none"
                rows={5}
                placeholder="Your message..."
                required
              />
            </div>

            <button
              type="submit"
              className="btn-primary flex items-center gap-2 w-full md:w-auto"
            >
              Send message
              <Send size={16} />
            </button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
