import { Link } from 'react-router-dom';

const Footer = () => {
  return (
    <footer className="bg-beacon-black py-[6vh] px-[6vw] border-t border-beacon-white/10">
      <div className="flex flex-col md:flex-row justify-between items-center gap-6">
        {/* Copyright */}
        <div className="text-center md:text-left">
          <p className="text-sm text-beacon-gray">
            © 2026 Beacon Minerals Ltd. ACN 119 611 559
          </p>
        </div>

        {/* Legal Links */}
        <div className="flex gap-6">
          <Link 
            to="/privacy"
            className="micro-label text-beacon-gray hover:text-beacon-gold transition-colors"
          >
            Privacy
          </Link>
          <Link 
            to="/disclaimer"
            className="micro-label text-beacon-gray hover:text-beacon-gold transition-colors"
          >
            Disclaimer
          </Link>
          <Link 
            to="/asx-announcements"
            className="micro-label text-beacon-gray hover:text-beacon-gold transition-colors"
          >
            ASX Announcements
          </Link>
        </div>
      </div>

      {/* Disclaimer */}
      <div className="mt-8 pt-6 border-t border-beacon-white/10 text-center">
        <p className="text-xs text-beacon-gray/60">
          This website is not financial advice. Please refer to our <Link to="/disclaimer" className="text-beacon-gold/60 hover:text-beacon-gold">Disclaimer</Link> for details.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
