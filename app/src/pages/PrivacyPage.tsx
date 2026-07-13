import { Link } from 'react-router-dom';
import { ChevronLeft, Shield, Lock, Eye, Database, Share2, UserCheck } from 'lucide-react';

const sections = [
  {
    icon: <Shield size={20} />,
    title: 'Introduction',
    content: `Beacon Minerals Ltd ("Beacon Minerals", "we", "us", or "our") is committed to protecting your privacy. This Privacy Policy explains how we collect, use, disclose, and safeguard your personal information when you visit our website, use our services, or interact with us.

We comply with the Privacy Act 1988 (Cth) and the Australian Privacy Principles (APPs). By accessing our website or using our services, you consent to the practices described in this Privacy Policy.`
  },
  {
    icon: <Database size={20} />,
    title: 'Information We Collect',
    content: `We may collect the following types of personal information:

• Personal Identification: Name, email address, phone number, postal address
• Account Information: Username, password, account preferences
• Financial Information: Where relevant for investor relations or trading services
• Usage Data: IP address, browser type, pages visited, time spent on pages
• Cookies and Tracking Technologies: For website analytics and user experience improvement`
  },
  {
    icon: <Eye size={20} />,
    title: 'How We Use Your Information',
    content: `We use your personal information for the following purposes:

• To provide and maintain our services
• To notify you about changes to our services
• To provide investor relations communications
• To allow you to participate in interactive features
• To provide customer support
• To gather analysis and improve our website
• To monitor usage patterns and trends
• To detect, prevent, and address technical issues
• To comply with legal obligations`
  },
  {
    icon: <Lock size={20} />,
    title: 'Data Security',
    content: `The security of your personal information is important to us. We implement appropriate technical and organisational measures to protect your personal data against unauthorised access, alteration, disclosure, or destruction.

These measures include:
• SSL/TLS encryption for data transmission
• Secure server infrastructure
• Regular security assessments
• Access controls and authentication procedures
• Staff training on data protection practices`
  },
  {
    icon: <Share2 size={20} />,
    title: 'Disclosure of Information',
    content: `We may disclose your personal information in the following circumstances:

• To our subsidiaries and affiliates
• To contractors, service providers, and other third parties who support our business
• To comply with legal obligations, court orders, or government requests
• To enforce our Terms of Service and other agreements
• To protect the rights, property, or safety of Beacon Minerals, our customers, or others
• In connection with a merger, acquisition, or sale of assets`
  },
  {
    icon: <UserCheck size={20} />,
    title: 'Your Rights',
    content: `Under the Privacy Act 1988 (Cth), you have the right to:

• Access your personal information
• Request correction of inaccurate or incomplete information
• Request deletion of your personal information (subject to legal requirements)
• Object to processing of your personal information
• Request restriction of processing
• Request transfer of your personal information
• Withdraw consent at any time

To exercise these rights, please contact us using the details provided below.`
  },
];

const PrivacyPage = () => {
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
            <Shield size={24} />
          </div>
          <span className="micro-label text-beacon-gold">LEGAL</span>
        </div>

        <h1 className="headline-section text-beacon-white mb-4">PRIVACY POLICY</h1>
        <div className="gold-line w-[16vw] mb-4" />
        <p className="body-text text-beacon-gray max-w-2xl">
          This Privacy Policy describes how Beacon Minerals Ltd collects, uses, and protects your personal information. Last updated: January 2026.
        </p>
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

        {/* Contact Section */}
        <div className="mt-10 border border-beacon-gold/30 bg-beacon-gold/5 p-6">
          <h2 className="font-display font-bold text-lg text-beacon-white mb-3">
            Contact Us
          </h2>
          <p className="text-beacon-gray mb-4">
            If you have any questions about this Privacy Policy or our data practices, please contact us:
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

export default PrivacyPage;
