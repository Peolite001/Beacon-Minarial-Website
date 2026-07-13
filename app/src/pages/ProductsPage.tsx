import { useParams, Link } from 'react-router-dom';
import { useAuth } from '../contexts/AuthContext';
import { Navigate } from 'react-router-dom';
import { 
  LayoutGrid, TrendingUp, BarChart3, DollarSign, 
  Landmark, Clock, Wheat, Bitcoin, Users, ArrowRight, ChevronLeft
} from 'lucide-react';

const productData: Record<string, {
  title: string;
  icon: React.ReactNode;
  description: string;
  features: string[];
  cta: string;
}> = {
  'range-of-products': {
    title: 'Range of Products',
    icon: <LayoutGrid size={32} />,
    description: 'Discover our comprehensive suite of trading instruments designed for both novice and experienced investors. From traditional stocks to cutting-edge digital assets, we provide access to global markets with competitive pricing and advanced trading tools.',
    features: [
      'Access to 15,000+ global instruments',
      'Competitive spreads from 0.1 pips',
      'Leverage up to 1:500 on select products',
      'Advanced charting and analysis tools',
      '24/5 dedicated customer support',
      'Real-time market data and news',
    ],
    cta: 'Explore All Products',
  },
  'indices-cfds': {
    title: 'Indices CFDs',
    icon: <TrendingUp size={32} />,
    description: 'Trade the world\'s leading stock indices with CFDs. Gain exposure to entire markets including the S&P 500, NASDAQ, FTSE 100, DAX 40, and ASX 200 with competitive leverage and tight spreads.',
    features: [
      'Trade 30+ major global indices',
      'Leverage up to 1:200',
      'No commission on index trades',
      'Real-time index tracking',
      'Hedge your portfolio exposure',
      'Trade during market hours',
    ],
    cta: 'Start Trading Indices',
  },
  'stock-cfds': {
    title: 'Stock CFDs',
    icon: <BarChart3 size={32} />,
    description: 'Access thousands of global stocks through CFDs. Trade shares of major companies like Apple, Tesla, BHP, and Commonwealth Bank without owning the underlying asset. Profit from both rising and falling markets.',
    features: [
      '10,000+ stocks from 25 exchanges',
      'Commission from just $5 per trade',
      'Leverage up to 1:20 for stocks',
      'Trade pre and post-market on US stocks',
      'Dividend adjustments on long positions',
      'Advanced stock screening tools',
    ],
    cta: 'Trade Stocks Now',
  },
  'forex-cfds': {
    title: 'Forex CFDs',
    icon: <DollarSign size={32} />,
    description: 'Trade the world\'s largest financial market with over 80 currency pairs. From major pairs like EUR/USD to exotic crosses, access deep liquidity and tight spreads around the clock.',
    features: [
      '80+ currency pairs available',
      'Spreads from 0.0 pips on majors',
      'Leverage up to 1:500',
      '24/5 market access',
      'Advanced forex trading platforms',
      'Economic calendar integration',
    ],
    cta: 'Trade Forex',
  },
  'bonds-cfds': {
    title: 'Bonds CFDs',
    icon: <Landmark size={32} />,
    description: 'Trade government and corporate bonds through CFDs. Gain exposure to fixed-income markets including US Treasuries, UK Gilts, German Bunds, and Australian Government Bonds with flexible position sizing.',
    features: [
      'Major government bonds available',
      'Corporate bond CFDs',
      'Leverage up to 1:100',
      'Low margin requirements',
      'Hedge against interest rate risk',
      'Stable, predictable returns',
    ],
    cta: 'Trade Bonds',
  },
  'futures-cfds': {
    title: 'Futures CFDs',
    icon: <Clock size={32} />,
    description: 'Trade commodity and index futures through CFDs without the complexity of futures exchanges. Access crude oil, natural gas, gold futures, and equity index futures with competitive pricing.',
    features: [
      'Trade futures without expiry management',
      'Commodity and index futures',
      'Leverage up to 1:200',
      'Continuous pricing on rolled contracts',
      'Advanced futures charting',
      'Low overnight financing rates',
    ],
    cta: 'Trade Futures',
  },
  'commodities-cfds': {
    title: 'Commodities CFDs',
    icon: <Wheat size={32} />,
    description: 'Diversify your portfolio with commodity CFDs. Trade precious metals like gold and silver, energy products including oil and gas, and agricultural commodities such as wheat and coffee.',
    features: [
      'Precious metals: Gold, Silver, Platinum',
      'Energy: Crude Oil, Natural Gas',
      'Agriculture: Wheat, Corn, Coffee',
      'Leverage up to 1:200',
      'Hedge against inflation',
      'Tight spreads on major commodities',
    ],
    cta: 'Trade Commodities',
  },
  'digital-currencies': {
    title: 'Digital Currencies',
    icon: <Bitcoin size={32} />,
    description: 'Trade the most popular cryptocurrencies including Bitcoin, Ethereum, Litecoin, and Ripple. Access crypto markets 24/7 with competitive spreads and advanced trading features.',
    features: [
      '50+ cryptocurrencies available',
      'Trade crypto 24/7/365',
      'Leverage up to 1:20 for crypto',
      'Crypto-to-fiat and crypto-to-crypto pairs',
      'Secure wallet integration',
      'Real-time blockchain data',
    ],
    cta: 'Trade Crypto',
  },
  'copy-trading': {
    title: 'Copy Trading',
    icon: <Users size={32} />,
    description: 'Follow and copy successful traders automatically. Our copy trading platform lets you replicate the strategies of experienced traders in real-time, making professional trading accessible to everyone.',
    features: [
      'Browse top-performing traders',
      'Auto-copy trades in real-time',
      'Full control over investment amount',
      'Detailed trader statistics and history',
      'Risk management tools',
      'Social trading community',
    ],
    cta: 'Start Copy Trading',
  },
};

const defaultProduct = productData['range-of-products'];

const ProductsPage = () => {
  const { productId } = useParams<{ productId: string }>();
  const { isAuthenticated } = useAuth();

  if (!isAuthenticated) {
    return <Navigate to="/login" replace />;
  }

  const product = productId ? productData[productId] : defaultProduct;

  if (!product) {
    return <Navigate to="/products/range-of-products" replace />;
  }

  return (
    <div className="min-h-screen bg-beacon-black">
      {/* Header */}
      <div className="relative pt-24 pb-16 px-[6vw]">
        <div className="absolute inset-0 opacity-20">
          <img 
            src="/processing_plant_dusk.jpg" 
            alt=""
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-beacon-black/50 to-beacon-black" />
        </div>

        <div className="relative z-10 max-w-4xl">
          <Link 
            to="/" 
            className="inline-flex items-center gap-2 text-beacon-gray hover:text-beacon-gold transition-colors mb-6"
          >
            <ChevronLeft size={16} />
            Back to Home
          </Link>

          <div className="flex items-center gap-4 mb-4">
            <div className="p-3 bg-beacon-gold/10 text-beacon-gold">
              {product.icon}
            </div>
            <span className="micro-label text-beacon-gold">TRADING PRODUCTS</span>
          </div>

          <h1 className="headline-section text-beacon-white mb-6">
            {product.title}
          </h1>

          <div className="gold-line w-[20vw] mb-6" />

          <p className="body-text text-beacon-gray max-w-2xl mb-8">
            {product.description}
          </p>

          <button className="btn-primary flex items-center gap-2">
            {product.cta}
            <ArrowRight size={16} />
          </button>
        </div>
      </div>

      {/* Features Grid */}
      <div className="px-[6vw] pb-20">
        <h2 className="font-display font-bold text-2xl text-beacon-white mb-8">
          Key Features
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {product.features.map((feature, index) => (
            <div 
              key={index}
              className="border border-beacon-white/20 p-6 flex items-start gap-4"
            >
              <div className="w-2 h-2 bg-beacon-gold mt-2 flex-shrink-0" />
              <p className="text-beacon-white">{feature}</p>
            </div>
          ))}
        </div>
      </div>

      {/* Product Navigation */}
      <div className="px-[6vw] pb-20">
        <h2 className="font-display font-bold text-2xl text-beacon-white mb-8">
          Explore Other Products
        </h2>
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4">
          {Object.entries(productData).map(([key, data]) => (
            <Link
              key={key}
              to={`/products/${key}`}
              className={`border p-4 text-center transition-all hover:border-beacon-gold ${
                key === productId 
                  ? 'border-beacon-gold bg-beacon-gold/10' 
                  : 'border-beacon-white/20'
              }`}
            >
              <div className={`mx-auto mb-3 ${key === productId ? 'text-beacon-gold' : 'text-beacon-gray'}`}>
                {data.icon}
              </div>
              <p className={`text-sm ${key === productId ? 'text-beacon-gold' : 'text-beacon-white'}`}>
                {data.title}
              </p>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ProductsPage;
