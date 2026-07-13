import { useState } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import { useAuth } from '../contexts/AuthContext';
import { UserPlus, Mail, Lock, User, ArrowRight, CheckCircle } from 'lucide-react';

const RegisterPage = () => {
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState('');
  const { register } = useAuth();
  const navigate = useNavigate();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError('');

    if (password !== confirmPassword) {
      setError('Passwords do not match');
      return;
    }

    if (password.length < 6) {
      setError('Password must be at least 6 characters');
      return;
    }

    setIsLoading(true);

    try {
      const success = await register(firstName, lastName, email, password);
      if (success) {
        navigate('/dashboard');
      }
    } catch {
      setError('Registration failed. Please try again.');
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-beacon-black flex items-center justify-center relative">
      {/* Background Image */}
      <div className="absolute inset-0">
        <img 
          src="/infrastructure_landscape.jpg" 
          alt="Background"
          className="w-full h-full object-cover opacity-30"
        />
        <div className="absolute inset-0 bg-beacon-black/70" />
      </div>

      {/* Content */}
      <div className="relative z-10 w-full max-w-lg mx-4 py-8">
        {/* Logo */}
        <div className="text-center mb-8">
          <Link to="/" className="font-display font-bold text-2xl text-beacon-white hover:text-beacon-gold transition-colors">
            Beacon Minerals
          </Link>
          <p className="micro-label text-beacon-gray mt-2">ASX: BCN</p>
        </div>

        {/* Register Form */}
        <div className="border border-beacon-white/20 bg-beacon-black/80 backdrop-blur-sm p-8">
          <div className="flex items-center gap-3 mb-6">
            <div className="p-2 bg-beacon-gold/10 text-beacon-gold">
              <UserPlus size={20} />
            </div>
            <div>
              <h1 className="font-display font-bold text-xl text-beacon-white">Create Account</h1>
              <p className="text-sm text-beacon-gray">Join Beacon Minerals</p>
            </div>
          </div>

          {error && (
            <div className="mb-4 p-3 bg-red-500/10 border border-red-500/30 text-red-400 text-sm">
              {error}
            </div>
          )}

          <form onSubmit={handleSubmit} className="space-y-5">
            <div className="grid grid-cols-2 gap-4">
              <div>
                <label className="micro-label text-beacon-gray mb-2 block">FIRST NAME</label>
                <div className="relative">
                  <User size={16} className="absolute left-4 top-1/2 -translate-y-1/2 text-beacon-gray" />
                  <input
                    type="text"
                    value={firstName}
                    onChange={(e) => setFirstName(e.target.value)}
                    className="w-full bg-beacon-charcoal border border-beacon-white/20 pl-10 pr-4 py-3 text-beacon-white focus:border-beacon-gold outline-none transition-colors"
                    placeholder="John"
                    required
                  />
                </div>
              </div>
              <div>
                <label className="micro-label text-beacon-gray mb-2 block">LAST NAME</label>
                <div className="relative">
                  <User size={16} className="absolute left-4 top-1/2 -translate-y-1/2 text-beacon-gray" />
                  <input
                    type="text"
                    value={lastName}
                    onChange={(e) => setLastName(e.target.value)}
                    className="w-full bg-beacon-charcoal border border-beacon-white/20 pl-10 pr-4 py-3 text-beacon-white focus:border-beacon-gold outline-none transition-colors"
                    placeholder="Doe"
                    required
                  />
                </div>
              </div>
            </div>

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
                  placeholder="Min 6 characters"
                  required
                />
              </div>
            </div>

            <div>
              <label className="micro-label text-beacon-gray mb-2 block">CONFIRM PASSWORD</label>
              <div className="relative">
                <Lock size={16} className="absolute left-4 top-1/2 -translate-y-1/2 text-beacon-gray" />
                <input
                  type="password"
                  value={confirmPassword}
                  onChange={(e) => setConfirmPassword(e.target.value)}
                  className="w-full bg-beacon-charcoal border border-beacon-white/20 pl-10 pr-4 py-3 text-beacon-white focus:border-beacon-gold outline-none transition-colors"
                  placeholder="Confirm your password"
                  required
                />
              </div>
            </div>

            <div className="flex items-start gap-3">
              <CheckCircle size={16} className="text-beacon-gold mt-0.5 flex-shrink-0" />
              <p className="text-xs text-beacon-gray">
                By creating an account, you agree to our Terms of Service and Privacy Policy. 
                You also confirm that you are at least 18 years of age.
              </p>
            </div>

            <button
              type="submit"
              disabled={isLoading}
              className="btn-primary w-full flex items-center justify-center gap-2 disabled:opacity-50"
            >
              {isLoading ? 'Creating account...' : 'Create Account'}
              <ArrowRight size={16} />
            </button>
          </form>

          <div className="mt-6 pt-6 border-t border-beacon-white/10 text-center">
            <p className="text-sm text-beacon-gray">
              Already have an account?{' '}
              <Link to="/login" className="text-beacon-gold hover:underline">
                Login
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

export default RegisterPage;
