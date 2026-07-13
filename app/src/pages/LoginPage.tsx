import { useState } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import { useAuth } from '../contexts/AuthContext';
import { LogIn, Mail, Lock, ArrowRight } from 'lucide-react';

const LoginPage = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState('');
  const { login } = useAuth();
  const navigate = useNavigate();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError('');
    setIsLoading(true);

    try {
      const success = await login(email, password);
      if (success) {
        navigate('/dashboard');
      }
    } catch {
      setError('Invalid email or password');
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-beacon-black flex items-center justify-center relative">
      {/* Background Image */}
      <div className="absolute inset-0">
        <img 
          src="/hero_night_pit.jpg" 
          alt="Background"
          className="w-full h-full object-cover opacity-30"
        />
        <div className="absolute inset-0 bg-beacon-black/70" />
      </div>

      {/* Content */}
      <div className="relative z-10 w-full max-w-md mx-4">
        {/* Logo */}
        <div className="text-center mb-8">
          <Link to="/" className="font-display font-bold text-2xl text-beacon-white hover:text-beacon-gold transition-colors">
            Beacon Minerals
          </Link>
          <p className="micro-label text-beacon-gray mt-2">ASX: BCN</p>
        </div>

        {/* Login Form */}
        <div className="border border-beacon-white/20 bg-beacon-black/80 backdrop-blur-sm p-8">
          <div className="flex items-center gap-3 mb-6">
            <div className="p-2 bg-beacon-gold/10 text-beacon-gold">
              <LogIn size={20} />
            </div>
            <div>
              <h1 className="font-display font-bold text-xl text-beacon-white">Login</h1>
              <p className="text-sm text-beacon-gray">Access your account</p>
            </div>
          </div>

          {error && (
            <div className="mb-4 p-3 bg-red-500/10 border border-red-500/30 text-red-400 text-sm">
              {error}
            </div>
          )}

          <form onSubmit={handleSubmit} className="space-y-5">
            <div>
              <label className="micro-label text-beacon-gray mb-2 block">EMAIL</label>
              <div className="relative">
                <Mail size={16} className="absolute left-4 top-1/2 -translate-y-1/2 text-beacon-gray" />
                <input
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="w-full bg-beacon-charcoal border border-beacon-white/20 pl-10 pr-4 py-3 text-beacon-white focus:border-beacon-gold outline-none transition-colors"
                  placeholder="your@email.com"
                  required
                />
              </div>
            </div>

            <div>
              <label className="micro-label text-beacon-gray mb-2 block">PASSWORD</label>
              <div className="relative">
                <Lock size={16} className="absolute left-4 top-1/2 -translate-y-1/2 text-beacon-gray" />
                <input
                  type="password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  className="w-full bg-beacon-charcoal border border-beacon-white/20 pl-10 pr-4 py-3 text-beacon-white focus:border-beacon-gold outline-none transition-colors"
                  placeholder="Enter your password"
                  required
                />
              </div>
            </div>

            <div className="flex items-center justify-between">
              <label className="flex items-center gap-2 cursor-pointer">
                <input type="checkbox" className="accent-beacon-gold" />
                <span className="text-sm text-beacon-gray">Remember me</span>
              </label>
              <button type="button" className="text-sm text-beacon-gold hover:underline">
                Forgot password?
              </button>
            </div>

            <button
              type="submit"
              disabled={isLoading}
              className="btn-primary w-full flex items-center justify-center gap-2 disabled:opacity-50"
            >
              {isLoading ? 'Signing in...' : 'Sign In'}
              <ArrowRight size={16} />
            </button>
          </form>

          <div className="mt-6 pt-6 border-t border-beacon-white/10 text-center">
            <p className="text-sm text-beacon-gray">
              Don't have an account?{' '}
              <Link to="/register" className="text-beacon-gold hover:underline">
                Register
              </Link>
            </p>
          </div>
        </div>

        {/* Back to home */}
        <div className="text-center mt-6">
          <Link to="/" className="text-sm text-beacon-gray hover:text-beacon-gold transition-colors">
            Back to home
          </Link>
        </div>
      </div>
    </div>
  );
};

export default LoginPage;
