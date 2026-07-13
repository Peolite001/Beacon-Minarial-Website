import { Link } from 'react-router-dom';
import { ChevronLeft, AlertTriangle, TrendingUp, Globe, FileText, Scale } from 'lucide-react';

const sections = [
  {
    icon: <AlertTriangle size={20} />,
    title: 'General Disclaimer',
    content: `The information contained on this website is provided for general informational purposes only and does not constitute financial advice, investment advice, trading advice, or any other sort of advice.

Beacon Minerals Ltd ("Beacon Minerals", "we", "us", or "our") makes no representations or warranties of any kind, express or implied, about the completeness, accuracy, reliability, suitability, or availability of the information, products, services, or related graphics contained on this website for any purpose.`
  },
  {
    icon: <TrendingUp size={20} />,
    title: 'Investment Risk Warning',
    content: `Investing in securities, commodities, and financial instruments involves substantial risk of loss and is not suitable for all investors. The value of investments can go down as well as up, and you may not get back the amount you originally invested.

Past performance is not indicative of future results. Any reliance you place on the information provided on this website is strictly at your own risk. Before making any investment decision, you should seek advice from an independent financial adviser.`
  },
  {
    icon: <Globe size={20} />,
    title: 'Forward-Looking Statements',
    content: `This website may contain forward-looking statements that involve risks and uncertainties. Forward-looking statements include, but are not limited to, statements regarding future production, resource estimates, exploration results, financial projections, and business strategies.

These statements are based on current expectations, estimates, forecasts, and projections and are subject to known and unknown risks, uncertainties, and other factors that may cause actual results to differ materially from those expressed or implied.`
  },
  {
    icon: <FileText size={20} />,
    title: 'ASX Announcements',
    content: `All ASX announcements and market releases made by Beacon Minerals are published in accordance with the Australian Securities Exchange (ASX) Listing Rules. While we endeavour to keep the information up to date and correct, we make no representations or warranties of any kind about the completeness, accuracy, or timeliness of such announcements.

All ASX releases should be read in conjunction with the Company's full announcements available on the ASX website (www.asx.com.au) and should not be relied upon as a complete record.`
  },
  {
    icon: <Scale size={20} />,
    title: 'No Offer or Solicitation',
    content: `Nothing on this website constitutes an offer, solicitation, or invitation to buy or sell securities or financial instruments. The distribution of information on this website may be restricted by law in certain jurisdictions.

Persons who access this website are required to inform themselves about and observe any such restrictions. This website does not constitute an offer in any jurisdiction where such an offer would be unlawful.`
  },
];

const DisclaimerPage = () => {
  return (
    <div className="min-h-screen bg-beacon-black pt-20 pb-12">
      {/* Header */}
      <div className="px-[6vw] mb-10">
        <Link 
          to="/" 
          className="inline-flex items-center gap-2 text-beacon-gray hover:text-beacon-gold transition-colors mb-6"
        >
          <ChevronLeft size={16} />
          Back to Home
        </Link>

        <div className="flex items-center gap-4 mb-4">
          <div className="p-3 bg-beacon-gold/10 text-beacon-gold">
            <AlertTriangle size={24} />
          </div>
          <span className="micro-label text-beacon-gold">LEGAL</span>
        </div>

        <h1 className="headline-section text-beacon-white mb-4">DISCLAIMER</h1>
        <div className="gold-line w-[16vw] mb-4" />
        <p className="body-text text-beacon-gray max-w-2xl">
          Please read this disclaimer carefully before using this website. By accessing and using this website, you acknowledge and agree to the terms outlined below.
        </p>
      </div>

      {/* Important Notice Banner */}
      <div className="px-[6vw] mb-10">
        <div className="border border-red-500/30 bg-red-500/5 p-6">
          <div className="flex items-start gap-4">
            <AlertTriangle size={24} className="text-red-400 flex-shrink-0 mt-1" />
            <div>
              <h2 className="font-display font-bold text-lg text-red-400 mb-2">
                Important Notice
              </h2>
              <p className="text-beacon-gray">
                This website is not financial advice. The content provided is for informational purposes only and should not be construed as a recommendation to buy, sell, or hold any security or financial instrument. Always seek professional financial advice before making investment decisions.
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Content */}
      <div className="px-[6vw] max-w-4xl">
        <div className="space-y-8">
          {sections.map((section, index) => (
            <div key={index} className="border border-beacon-white/20 bg-beacon-charcoal p-6">
              <div className="flex items-center gap-3 mb-4">
                <div className="p-2 bg-beacon-gold/10 text-beacon-gold">
                  {section.icon}
                </div>
                <h2 className="font-display font-bold text-lg text-beacon-white">
                  {section.title}
                </h2>
              </div>
              <div className="text-beacon-gray whitespace-pre-line leading-relaxed">
                {section.content}
              </div>
            </div>
          ))}
        </div>

        {/* Additional Sections */}
        <div className="mt-10 space-y-8">
          <div className="border border-beacon-white/20 bg-beacon-charcoal p-6">
            <h2 className="font-display font-bold text-lg text-beacon-white mb-4">
              Third-Party Links
            </h2>
            <p className="text-beacon-gray leading-relaxed">
              This website may contain links to third-party websites. These links are provided for your convenience and do not signify endorsement. Beacon Minerals has no control over the content of third-party websites and accepts no responsibility for them or for any loss or damage that may arise from your use of them.
            </p>
          </div>

          <div className="border border-beacon-white/20 bg-beacon-charcoal p-6">
            <h2 className="font-display font-bold text-lg text-beacon-white mb-4">
              Website Availability
            </h2>
            <p className="text-beacon-gray leading-relaxed">
              We make every effort to keep the website up and running smoothly. However, Beacon Minerals takes no responsibility for, and will not be liable for, the website being temporarily unavailable due to technical issues beyond our control.
            </p>
          </div>

          <div className="border border-beacon-white/20 bg-beacon-charcoal p-6">
            <h2 className="font-display font-bold text-lg text-beacon-white mb-4">
              Jurisdiction
            </h2>
            <p className="text-beacon-gray leading-relaxed">
              The laws of Western Australia and the Commonwealth of Australia govern this disclaimer and your use of this website. By using this website, you submit to the exclusive jurisdiction of the courts of Western Australia.
            </p>
          </div>
        </div>

        {/* Contact */}
        <div className="mt-10 border border-beacon-gold/30 bg-beacon-gold/5 p-6">
          <h2 className="font-display font-bold text-lg text-beacon-white mb-3">
            Questions?
          </h2>
          <p className="text-beacon-gray mb-4">
            If you have any questions about this disclaimer, please contact us:
          </p>
          <div className="space-y-2 text-beacon-white">
            <p>Beacon Minerals Ltd</p>
            <p>144 Vivian Street, Boulder WA 6432</p>
            <p>Email: enquiries@beaconminerals.com.au</p>
            <p>Phone: +61 8 9093 2477</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DisclaimerPage;
