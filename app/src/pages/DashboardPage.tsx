import { useAuth } from '../contexts/AuthContext';
import { Link } from 'react-router-dom';
import { 
  LayoutDashboard, TrendingUp, DollarSign, BarChart3, 
  Landmark, Clock, Wheat, Bitcoin, Users, ArrowRight, 
  Bell, Settings, Wallet, Activity
} from 'lucide-react';

const quickLinks = [
  { title: 'Indices CFDs', path: '/products/indices-cfds', icon: <TrendingUp size={20} />, color: 'bg-blue-500/10 text-blue-400' },
  { title: 'Stock CFDs', path: '/products/stock-cfds', icon: <BarChart3 size={20} />, color: 'bg-green-500/10 text-green-400' },
  { title: 'Forex CFDs', path: '/products/forex-cfds', icon: <DollarSign size={20} />, color: 'bg-purple-500/10 text-purple-400' },
  { title: 'Bonds CFDs', path: '/products/bonds-cfds', icon: <Landmark size={20} />, color: 'bg-orange-500/10 text-orange-400' },
  { title: 'Futures CFDs', path: '/products/futures-cfds', icon: <Clock size={20} />, color: 'bg-pink-500/10 text-pink-400' },
  { title: 'Commodities', path: '/products/commodities-cfds', icon: <Wheat size={20} />, color: 'bg-yellow-500/10 text-yellow-400' },
  { title: 'Crypto', path: '/products/digital-currencies', icon: <Bitcoin size={20} />, color: 'bg-cyan-500/10 text-cyan-400' },
  { title: 'Copy Trading', path: '/products/copy-trading', icon: <Users size={20} />, color: 'bg-indigo-500/10 text-indigo-400' },
];

const recentActivity = [
  { action: 'Login', time: 'Just now', detail: 'Successful login from new device' },
  { action: 'Market Alert', time: '2 min ago', detail: 'Gold price reached A$3,850/oz' },
  { action: 'Portfolio', time: '1 hour ago', detail: 'Daily P&L updated: +2.4%' },
  { action: 'Announcement', time: '3 hours ago', detail: 'Q4 2025 Report now available' },
];

const marketSnapshot = [
  { symbol: 'XAU/USD', name: 'Gold', price: '2,854.30', change: '+1.24%', up: true },
  { symbol: 'XAG/USD', name: 'Silver', price: '32.15', change: '+0.87%', up: true },
  { symbol: 'BHP.AX', name: 'BHP Group', price: '44.82', change: '-0.35%', up: false },
  { symbol: 'AUD/USD', name: 'AUD/USD', price: '0.6234', change: '+0.12%', up: true },
  { symbol: 'BTC/USD', name: 'Bitcoin', price: '94,250.00', change: '+3.45%', up: true },
];

const DashboardPage = () => {
  const { user } = useAuth();

  return (
    <div className="min-h-screen bg-beacon-black pt-20 pb-12">
      {/* Header Banner */}
      <div className="px-[6vw] mb-8">
        <div className="border border-beacon-white/20 bg-beacon-charcoal p-6 flex flex-col md:flex-row md:items-center justify-between gap-4">
          <div className="flex items-center gap-4">
            <div className="p-3 bg-beacon-gold/10 text-beacon-gold">
              <LayoutDashboard size={24} />
            </div>
            <div>
              <h1 className="font-display font-bold text-2xl text-beacon-white">
                Welcome back, {user?.firstName}
              </h1>
              <p className="text-sm text-beacon-gray">
                Here's your trading dashboard overview
              </p>
            </div>
          </div>
          <div className="flex items-center gap-3">
            <button className="p-2 border border-beacon-white/20 text-beacon-gray hover:text-beacon-gold hover:border-beacon-gold transition-colors">
              <Bell size={18} />
            </button>
            <button className="p-2 border border-beacon-white/20 text-beacon-gray hover:text-beacon-gold hover:border-beacon-gold transition-colors">
              <Settings size={18} />
            </button>
          </div>
        </div>
      </div>

      <div className="px-[6vw]">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          {/* Main Content */}
          <div className="lg:col-span-2 space-y-6">
            {/* Account Overview Cards */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
              <div className="border border-beacon-white/20 bg-beacon-charcoal p-5">
                <div className="flex items-center gap-2 mb-3">
                  <Wallet size={16} className="text-beacon-gold" />
                  <span className="micro-label text-beacon-gray">BALANCE</span>
                </div>
                <p className="font-display font-bold text-2xl text-beacon-white">A$14,420.50</p>
                <p className="text-xs text-green-400 mt-1">+A$320.50 today</p>
              </div>
              <div className="border border-beacon-white/20 bg-beacon-charcoal p-5">
                <div className="flex items-center gap-2 mb-3">
                  <Activity size={16} className="text-beacon-gold" />
                  <span className="micro-label text-beacon-gray">OPEN POSITIONS</span>
                </div>
                <p className="font-display font-bold text-2xl text-beacon-white">12</p>
                <p className="text-xs text-beacon-gray mt-1">Across 5 markets</p>
              </div>
              <div className="border border-beacon-white/20 bg-beacon-charcoal p-5">
                <div className="flex items-center gap-2 mb-3">
                  <TrendingUp size={16} className="text-beacon-gold" />
                  <span className="micro-label text-beacon-gray">P&L (MTD)</span>
                </div>
                <p className="font-display font-bold text-2xl text-green-400">+A$1,245.80</p>
                <p className="text-xs text-beacon-gray mt-1">+8.64% return</p>
              </div>
            </div>

            {/* Market Snapshot */}
            <div className="border border-beacon-white/20 bg-beacon-charcoal p-6">
              <div className="flex items-center justify-between mb-6">
                <h2 className="font-display font-bold text-lg text-beacon-white">Market Snapshot</h2>
                <Link to="/products/range-of-products" className="text-sm text-beacon-gold hover:underline flex items-center gap-1">
                  View All <ArrowRight size={14} />
                </Link>
              </div>
              <div className="overflow-x-auto">
                <table className="w-full">
                  <thead>
                    <tr className="border-b border-beacon-white/10">
                      <th className="text-left micro-label text-beacon-gray pb-3 pr-4">INSTRUMENT</th>
                      <th className="text-right micro-label text-beacon-gray pb-3 pr-4">PRICE</th>
                      <th className="text-right micro-label text-beacon-gray pb-3">CHANGE</th>
                    </tr>
                  </thead>
                  <tbody>
                    {marketSnapshot.map((item, index) => (
                      <tr key={index} className="border-b border-beacon-white/5 hover:bg-beacon-white/5 transition-colors">
                        <td className="py-3 pr-4">
                          <span className="font-medium text-beacon-white">{item.symbol}</span>
                          <span className="text-sm text-beacon-gray ml-2">{item.name}</span>
                        </td>
                        <td className="text-right py-3 pr-4 text-beacon-white">{item.price}</td>
                        <td className={`text-right py-3 ${item.up ? 'text-green-400' : 'text-red-400'}`}>
                          {item.change}
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>

            {/* Recent Activity */}
            <div className="border border-beacon-white/20 bg-beacon-charcoal p-6">
              <h2 className="font-display font-bold text-lg text-beacon-white mb-4">Recent Activity</h2>
              <div className="space-y-4">
                {recentActivity.map((activity, index) => (
                  <div key={index} className="flex items-start gap-4 pb-4 border-b border-beacon-white/5 last:border-0 last:pb-0">
                    <div className="w-2 h-2 bg-beacon-gold mt-2 flex-shrink-0" />
                    <div className="flex-1">
                      <div className="flex items-center justify-between">
                        <p className="text-beacon-white font-medium">{activity.action}</p>
                        <span className="text-xs text-beacon-gray">{activity.time}</span>
                      </div>
                      <p className="text-sm text-beacon-gray mt-1">{activity.detail}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Sidebar */}
          <div className="space-y-6">
            {/* Quick Links */}
            <div className="border border-beacon-white/20 bg-beacon-charcoal p-6">
              <h2 className="font-display font-bold text-lg text-beacon-white mb-4">Trading Products</h2>
              <div className="grid grid-cols-1 gap-2">
                {quickLinks.map((link, index) => (
                  <Link
                    key={index}
                    to={link.path}
                    className="flex items-center gap-3 p-3 hover:bg-beacon-white/5 transition-colors group"
                  >
                    <div className={`p-2 ${link.color}`}>
                      {link.icon}
                    </div>
                    <span className="text-beacon-white group-hover:text-beacon-gold transition-colors">
                      {link.title}
                    </span>
                    <ArrowRight size={14} className="ml-auto text-beacon-gray opacity-0 group-hover:opacity-100 transition-opacity" />
                  </Link>
                ))}
              </div>
            </div>

            {/* ASX Announcements Link */}
            <div className="border border-beacon-white/20 bg-beacon-charcoal p-6">
              <h2 className="font-display font-bold text-lg text-beacon-white mb-3">ASX Updates</h2>
              <p className="text-sm text-beacon-gray mb-4">
                Stay informed with the latest ASX announcements and market releases.
              </p>
              <Link 
                to="/asx-announcements"
                className="btn-primary w-full flex items-center justify-center gap-2"
              >
                View Announcements
                <ArrowRight size={14} />
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DashboardPage;
