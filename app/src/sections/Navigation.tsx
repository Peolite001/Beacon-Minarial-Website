import { useEffect, useState, useRef } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { useAuth } from '../contexts/AuthContext';
import { ChevronDown, LogOut, User, Package, LayoutDashboard } from 'lucide-react';

const Navigation = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isProductsOpen, setIsProductsOpen] = useState(false);
  const productsRef = useRef<HTMLDivElement>(null);
  const { isAuthenticated, user, logout } = useAuth();
  const location = useLocation();
  const navigate = useNavigate();

  const isHomePage = location.pathname === '/';

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 100);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Close dropdown when clicking outside
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (productsRef.current && !productsRef.current.contains(event.target as Node)) {
        setIsProductsOpen(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const productLinks = [
    { label: 'Range of Products', path: '/products/range-of-products' },
    { label: 'Indices CFDs', path: '/products/indices-cfds' },
    { label: 'Stock CFDs', path: '/products/stock-cfds' },
    { label: 'Forex CFDs', path: '/products/forex-cfds' },
    { label: 'Bonds CFDs', path: '/products/bonds-cfds' },
    { label: 'Futures CFDs', path: '/products/futures-cfds' },
    { label: 'Commodities CFDs', path: '/products/commodities-cfds' },
    { label: 'Digital Currencies', path: '/products/digital-currencies' },
    { label: 'Copy Trading', path: '/products/copy-trading' },
  ];

  const handleLogoClick = () => {
    if (isAuthenticated) {
      navigate('/dashboard');
    } else {
      navigate('/');
    }
  };

  return (
    <nav 
      className={`fixed top-0 left-0 right-0 z-[100] transition-all duration-300 ${
        isScrolled || !isHomePage
          ? 'bg-beacon-black/95 backdrop-blur-sm border-b border-beacon-white/10' 
          : 'bg-transparent'
      }`}
    >
      <div className="flex items-center justify-between px-[4vw] lg:px-[6vw] py-4">
        {/* Logo */}
        <button 
          onClick={handleLogoClick}
          className="font-display font-bold text-beacon-white text-lg tracking-tight hover:text-beacon-gold transition-colors"
        >
          Beacon Minerals
        </button>

        {/* Nav Links */}
        <div className="hidden lg:flex items-center gap-6">
          {/* Dashboard link when authenticated */}
          {isAuthenticated && (
            <Link
              to="/dashboard"
              className={`micro-label flex items-center gap-1 transition-colors ${
                location.pathname === '/dashboard'
                  ? 'text-beacon-gold'
                  : 'text-beacon-gray hover:text-beacon-gold'
              }`}
            >
              <LayoutDashboard size={14} />
              Dashboard
            </Link>
          )}

          {isHomePage ? (
            <>
              <button
                onClick={() => scrollToSection('exploration')}
                className="micro-label text-beacon-gray hover:text-beacon-gold transition-colors"
              >
                About
              </button>
              <button
                onClick={() => scrollToSection('reserves')}
                className="micro-label text-beacon-gray hover:text-beacon-gold transition-colors"
              >
                Projects
              </button>
              <button
                onClick={() => scrollToSection('investor')}
                className="micro-label text-beacon-gray hover:text-beacon-gold transition-colors"
              >
                Investors
              </button>
              <button
                onClick={() => scrollToSection('sustainability')}
                className="micro-label text-beacon-gray hover:text-beacon-gold transition-colors"
              >
                Sustainability
              </button>
              <button
                onClick={() => scrollToSection('contact')}
                className="micro-label text-beacon-gray hover:text-beacon-gold transition-colors"
              >
                Contact
              </button>
            </>
          ) : (
            <>
              <Link
                to="/"
                className="micro-label text-beacon-gray hover:text-beacon-gold transition-colors"
              >
                Home
              </Link>
              <Link
                to="/asx-announcements"
                className={`micro-label transition-colors ${
                  location.pathname === '/asx-announcements'
                    ? 'text-beacon-gold'
                    : 'text-beacon-gray hover:text-beacon-gold'
                }`}
              >
                ASX
              </Link>
            </>
          )}

          {/* Products Dropdown - Only when authenticated */}
          {isAuthenticated && (
            <div 
              ref={productsRef}
              className="relative"
              onMouseEnter={() => setIsProductsOpen(true)}
            >
              <button
                onClick={() => setIsProductsOpen(!isProductsOpen)}
                className={`micro-label flex items-center gap-1 transition-colors ${
                  location.pathname.startsWith('/products')
                    ? 'text-beacon-gold'
                    : 'text-beacon-gray hover:text-beacon-gold'
                }`}
              >
                <Package size={14} />
                Products
                <ChevronDown 
                  size={12} 
                  className={`transition-transform ${isProductsOpen ? 'rotate-180' : ''}`}
                />
              </button>

              {/* Dropdown Menu */}
              {isProductsOpen && (
                <div 
                  className="absolute top-full left-0 mt-2 w-56 bg-beacon-charcoal border border-beacon-white/20 shadow-card py-2"
                  onMouseLeave={() => setIsProductsOpen(false)}
                >
                  {productLinks.map((link) => (
                    <Link
                      key={link.path}
                      to={link.path}
                      onClick={() => setIsProductsOpen(false)}
                      className={`block px-4 py-2.5 text-sm transition-colors ${
                        location.pathname === link.path
                          ? 'text-beacon-gold bg-beacon-gold/10'
                          : 'text-beacon-gray hover:text-beacon-white hover:bg-beacon-white/5'
                      }`}
                    >
                      {link.label}
                    </Link>
                  ))}
                </div>
              )}
            </div>
          )}
        </div>

        {/* Auth Buttons */}
        <div className="flex items-center gap-4">
          {isAuthenticated ? (
            <div className="flex items-center gap-4">
              <div className="flex items-center gap-2">
                <div className="p-1.5 bg-beacon-gold/10 text-beacon-gold">
                  <User size={14} />
                </div>
                <span className="micro-label text-beacon-white hidden sm:block">
                  {user?.firstName}
                </span>
              </div>
              <button
                onClick={logout}
                className="micro-label text-beacon-gray hover:text-beacon-gold transition-colors flex items-center gap-1"
              >
                <LogOut size={14} />
                <span className="hidden sm:inline">Logout</span>
              </button>
            </div>
          ) : (
            <div className="flex items-center gap-3">
              <Link
                to="/login"
                className="micro-label text-beacon-gray hover:text-beacon-gold transition-colors"
              >
                Login
              </Link>
              <Link
                to="/register"
                className="btn-primary text-xs py-2 px-4"
              >
                Register
              </Link>
            </div>
          )}
        </div>
      </div>
    </nav>
  );
};

export default Navigation;
