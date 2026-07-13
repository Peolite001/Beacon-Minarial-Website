# Beacon Minerals

<p align="center">
  <img src="public/hero_night_pit.jpg" alt="Beacon Minerals" width="800" />
</p>

<p align="center">
  <strong>A modern, cinematic corporate website for Beacon Minerals Ltd (ASX: BCN)</strong>
</p>

<p align="center">
  <a href="#-live-demo">Live Demo</a> •
  <a href="#-features">Features</a> •
  <a href="#-tech-stack">Tech Stack</a> •
  <a href="#-getting-started">Getting Started</a> •
  <a href="#-project-structure">Project Structure</a> •
  <a href="#-contributing">Contributing</a>
</p>

---

## Overview

Beacon Minerals is a modern, fully responsive corporate website built for an ASX-listed gold producer. The site features a cinematic scroll-driven experience with smooth animations, authentication system, trading products showcase, and investor relations content.

**ASX Code:** BCN  
**Industry:** Gold Mining & Exploration  
**Location:** Western Australia

---

## Features

### Core Website
- **Cinematic Hero Section** - Full-viewport scroll-driven animations with GSAP
- **Exploration Showcase** - Company exploration philosophy and approach
- **Resource Statistics** - Mineral resource and reserve data with animated counters
- **Operations Overview** - Processing plant and production capabilities
- **Sustainability Section** - ESG commitments and rehabilitation efforts
- **Growth Strategy** - 10-year mine life planning and reinvestment strategy
- **Leadership Team** - Board and management profiles
- **Investor Snapshot** - Financial metrics and key statistics
- **ASX Announcements** - Filterable quarterly reports and exploration updates
- **Contact Form** - Direct inquiry system with office details
- **Newsletter Subscription** - Email signup for updates

### Authentication System
- User registration with email validation
- Secure login with localStorage persistence
- Protected routes for authenticated content
- Logout functionality

### Trading Products (Post-Auth)
When logged in, users gain access to:
- **Range of Products** - Overview of all trading instruments
- **Indices CFDs** - 30+ global indices
- **Stock CFDs** - 10,000+ stocks from 25 exchanges
- **Forex CFDs** - 80+ currency pairs
- **Bonds CFDs** - Government and corporate bonds
- **Futures CFDs** - Commodity and index futures
- **Commodities CFDs** - Precious metals, energy, agriculture
- **Digital Currencies** - 50+ cryptocurrencies
- **Copy Trading** - Follow and copy expert traders

### User Dashboard
- Account balance overview
- Open positions tracker
- P&L monitoring (month-to-date)
- Market snapshot with live-style prices
- Recent activity feed
- Quick access to all trading products

### Legal Pages
- **Privacy Policy** - Comprehensive data protection documentation
- **Disclaimer** - Investment risk warnings and legal notices
- **ASX Announcements** - Publicly accessible historical filings

---

## Tech Stack

| Technology | Purpose |
|------------|---------|
| **React 18** | UI framework |
| **TypeScript** | Type safety |
| **Vite** | Build tool & dev server |
| **Tailwind CSS** | Utility-first styling |
| **shadcn/ui** | UI component primitives |
| **GSAP + ScrollTrigger** | Scroll-driven animations |
| **Lucide React** | Icon library |
| **React Router v6** | Client-side routing |
| **Context API** | State management (Auth) |

---

## Getting Started

### Prerequisites

- [Node.js](https://nodejs.org/) 18.0 or higher
- npm or yarn

### Installation

1. **Clone the repository**
   ```bash
   git clone https://github.com/yourusername/beacon-minerals.git
   cd beacon-minerals
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Start the development server**
   ```bash
   npm run dev
   ```

4. **Open your browser**
   Navigate to `http://localhost:5173`

### Building for Production

```bash
npm run build
```

The production build will be in the `dist/` directory.

---

## Project Structure

```
beacon-minerals/
├── public/                     # Static assets
│   ├── hero_night_pit.jpg
│   ├── exploration_terrain.jpg
│   ├── pit_haul_road.jpg
│   ├── processing_plant_dusk.jpg
│   ├── rehab_vegetation.jpg
│   └── infrastructure_landscape.jpg
├── src/
│   ├── components/
│   │   └── ProtectedRoute.tsx  # Route guard for auth
│   ├── contexts/
│   │   └── AuthContext.tsx     # Authentication state management
│   ├── pages/
│   │   ├── HomePage.tsx        # Main landing page
│   │   ├── LoginPage.tsx       # User login
│   │   ├── RegisterPage.tsx    # User registration
│   │   ├── DashboardPage.tsx   # User dashboard (post-auth)
│   │   ├── ProductsPage.tsx    # Trading products detail
│   │   ├── ASXAnnouncementsPage.tsx  # ASX filings
│   │   ├── PrivacyPage.tsx     # Privacy policy
│   │   └── DisclaimerPage.tsx  # Legal disclaimer
│   ├── sections/               # Homepage sections
│   │   ├── Navigation.tsx
│   │   ├── HeroSection.tsx
│   │   ├── ExplorationSection.tsx
│   │   ├── ReservesSection.tsx
│   │   ├── OperationsSection.tsx
│   │   ├── SustainabilitySection.tsx
│   │   ├── StrategySection.tsx
│   │   ├── LeadershipSection.tsx
│   │   ├── InvestorSection.tsx
│   │   ├── AnnouncementsSection.tsx
│   │   ├── ContactSection.tsx
│   │   ├── NewsletterSection.tsx
│   │   └── Footer.tsx
│   ├── App.tsx                 # Root component with routing
│   ├── main.tsx                # Entry point
│   ├── App.css                 # App-specific styles
│   └── index.css               # Global styles & Tailwind
├── .env.example                # Environment variables template
├── .gitignore
├── package.json
├── tailwind.config.js
├── tsconfig.json
├── tsconfig.app.json
├── tsconfig.node.json
├── vite.config.ts
└── README.md
```

---

## Design System

### Colors
- **Primary Background:** `#0B0C0E` (Near-black)
- **Secondary Background:** `#14171B` (Charcoal)
- **Accent/Gold:** `#C9A45C`
- **Text Primary:** `#F3F1EA` (Off-white)
- **Text Secondary:** `#A7ADB6` (Cool gray)

### Typography
- **Headlines:** Sora (700-800 weight, uppercase, tight tracking)
- **Body:** Inter (400-500 weight)
- **Labels:** IBM Plex Mono (500 weight, uppercase, wide tracking)

### Animation Principles
- Scroll-driven with GSAP ScrollTrigger
- Three-phase structure: Entrance → Settle → Exit
- Transform-based animations (no blur/backdrop-filter)
- Snap behavior for pinned sections

---

## Contributing

We welcome contributions! Please read our [CONTRIBUTING.md](CONTRIBUTING.md) for guidelines.

### Quick Start for Contributors

1. Fork the repository
2. Create a feature branch: `git checkout -b feature/amazing-feature`
3. Make your changes
4. Commit: `git commit -m 'Add amazing feature'`
5. Push: `git push origin feature/amazing-feature`
6. Open a Pull Request

See [CONTRIBUTING.md](CONTRIBUTING.md) for detailed guidelines.

---

## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

---

## Acknowledgments

- Design inspired by premium corporate aesthetics
- Images generated with AI for demonstration purposes
- Built with modern open-source technologies

---

## Contact

**Beacon Minerals Ltd**  
144 Vivian Street, Boulder WA 6432  
Phone: +61 8 9093 2477  
Email: enquiries@beaconminerals.com.au

---

<p align="center">
  Made with gold standard code
</p>
