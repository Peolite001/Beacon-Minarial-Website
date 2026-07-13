import { Link } from 'react-router-dom';
import { FileText, Calendar, ArrowRight, ChevronLeft, Download, Filter } from 'lucide-react';
import { useState } from 'react';

const announcements = [
  { title: 'September 2025 Quarterly Report', date: '31 Oct 2025', type: 'Quarterly', category: 'quarterly' },
  { title: 'Stage 2 Grade Control Completed at Iguana', date: '11 Aug 2025', type: 'Exploration', category: 'exploration' },
  { title: '2025 Resource & Reserve Statement', date: '28 Aug 2025', type: 'Reserves', category: 'reserves' },
  { title: 'June 2025 Quarterly Report', date: '31 Jul 2025', type: 'Quarterly', category: 'quarterly' },
  { title: 'Drilling Results from MacPhersons Reward', date: '15 Jul 2025', type: 'Exploration', category: 'exploration' },
  { title: 'Mineral Resource Upgrade - Jaurdi Gold Project', date: '22 Jun 2025', type: 'Reserves', category: 'reserves' },
  { title: 'March 2025 Quarterly Report', date: '30 Apr 2025', type: 'Quarterly', category: 'quarterly' },
  { title: 'New Drilling Targets Identified at Iguana', date: '18 Mar 2025', type: 'Exploration', category: 'exploration' },
  { title: 'Ore Reserve Update - MacPhersons Project', date: '10 Feb 2025', type: 'Reserves', category: 'reserves' },
  { title: 'December 2024 Quarterly Report', date: '31 Jan 2025', type: 'Quarterly', category: 'quarterly' },
  { title: 'Exploration Results from Jaurdi Hills', date: '12 Dec 2024', type: 'Exploration', category: 'exploration' },
  { title: 'Annual Resource & Reserve Statement 2024', date: '20 Nov 2024', type: 'Reserves', category: 'reserves' },
];

const filterOptions = [
  { label: 'All', value: 'all' },
  { label: 'Quarterly', value: 'quarterly' },
  { label: 'Exploration', value: 'exploration' },
  { label: 'Reserves', value: 'reserves' },
];

const ASXAnnouncementsPage = () => {
  const [activeFilter, setActiveFilter] = useState('all');

  const filteredAnnouncements = activeFilter === 'all' 
    ? announcements 
    : announcements.filter(a => a.category === activeFilter);

  const typeColors: Record<string, string> = {
    'Quarterly': 'text-blue-400 bg-blue-400/10',
    'Exploration': 'text-green-400 bg-green-400/10',
    'Reserves': 'text-orange-400 bg-orange-400/10',
  };

  return (
    <div className="min-h-screen bg-beacon-black pt-20 pb-12">
      {/* Header */}
      <div className="px-[6vw] mb-8">
        <Link 
          to="/" 
          className="inline-flex items-center gap-2 text-beacon-gray hover:text-beacon-gold transition-colors mb-6"
        >
          <ChevronLeft size={16} />
          Back to Home
        </Link>

        <div className="flex flex-col md:flex-row md:items-end justify-between gap-4">
          <div>
            <span className="micro-label text-beacon-gold mb-2 block">ASX: BCN</span>
            <h1 className="headline-section text-beacon-white">ASX ANNOUNCEMENTS</h1>
            <div className="gold-line w-[16vw] mt-4" />
          </div>
          <p className="body-text text-beacon-gray max-w-md">
            Quarterly reports, exploration updates, and market releases from Beacon Minerals Ltd.
          </p>
        </div>
      </div>

      {/* Filter Bar */}
      <div className="px-[6vw] mb-8">
        <div className="border border-beacon-white/20 bg-beacon-charcoal p-4 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
          <div className="flex items-center gap-2">
            <Filter size={16} className="text-beacon-gold" />
            <span className="micro-label text-beacon-gray">FILTER BY:</span>
          </div>
          <div className="flex flex-wrap gap-2">
            {filterOptions.map((option) => (
              <button
                key={option.value}
                onClick={() => setActiveFilter(option.value)}
                className={`px-4 py-2 text-sm transition-colors ${
                  activeFilter === option.value
                    ? 'bg-beacon-gold text-beacon-black font-medium'
                    : 'border border-beacon-white/20 text-beacon-gray hover:text-beacon-white hover:border-beacon-gold'
                }`}
              >
                {option.label}
              </button>
            ))}
          </div>
        </div>
      </div>

      {/* Announcements List */}
      <div className="px-[6vw]">
        <div className="space-y-3">
          {filteredAnnouncements.map((item, index) => (
            <div 
              key={index}
              className="border border-beacon-white/20 bg-beacon-charcoal p-5 card-hover cursor-pointer group"
            >
              <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
                <div className="flex items-start gap-4">
                  <div className={`p-3 ${typeColors[item.type] || 'text-beacon-gray bg-beacon-white/5'}`}>
                    <FileText size={20} />
                  </div>
                  <div>
                    <span className={`micro-label mb-2 inline-block px-2 py-1 ${typeColors[item.type] || ''}`}>
                      {item.type}
                    </span>
                    <h3 className="font-display font-semibold text-lg text-beacon-white group-hover:text-beacon-gold transition-colors mt-2">
                      {item.title}
                    </h3>
                  </div>
                </div>
                <div className="flex items-center gap-4 md:ml-4">
                  <div className="flex items-center gap-2 text-beacon-gray">
                    <Calendar size={14} />
                    <span className="text-sm">{item.date}</span>
                  </div>
                  <button className="p-2 border border-beacon-white/20 text-beacon-gray hover:text-beacon-gold hover:border-beacon-gold transition-colors">
                    <Download size={16} />
                  </button>
                  <ArrowRight size={16} className="text-beacon-gray opacity-0 group-hover:opacity-100 transition-opacity" />
                </div>
              </div>
            </div>
          ))}
        </div>

        {filteredAnnouncements.length === 0 && (
          <div className="text-center py-16">
            <FileText size={48} className="text-beacon-gray mx-auto mb-4" />
            <p className="text-beacon-gray">No announcements found for this filter.</p>
          </div>
        )}
      </div>

      {/* Newsletter CTA */}
      <div className="px-[6vw] mt-12">
        <div className="border border-beacon-gold/30 bg-beacon-gold/5 p-8 text-center">
          <h2 className="font-display font-bold text-xl text-beacon-white mb-3">
            Stay Updated
          </h2>
          <p className="text-beacon-gray mb-6 max-w-md mx-auto">
            Get notified when new ASX announcements are published.
          </p>
          <Link 
            to="/"
            className="btn-primary inline-flex items-center gap-2"
          >
            Subscribe to Updates
            <ArrowRight size={14} />
          </Link>
        </div>
      </div>
    </div>
  );
};

export default ASXAnnouncementsPage;
