import { useEffect } from 'react';
import { BrowserRouter, Routes, Route, useLocation } from 'react-router-dom';
import { AuthProvider } from './contexts/AuthContext';
import ProtectedRoute from './components/ProtectedRoute';
// Layout & Sections
import Navigation from './sections/Navigation';

// Pages
import HomePage from './pages/HomePage';
import LoginPage from './pages/LoginPage';
import RegisterPage from './pages/RegisterPage';
import DashboardPage from './pages/DashboardPage';
import ProductsPage from './pages/ProductsPage';
import ASXAnnouncementsPage from './pages/ASXAnnouncementsPage';
import PrivacyPage from './pages/PrivacyPage';
import DisclaimerPage from './pages/DisclaimerPage';

// Scroll to top on route change
const ScrollToTop = () => {
  const { pathname } = useLocation();
  
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);
  
  return null;
};

function AppContent() {
  return (
    <div className="relative bg-beacon-black min-h-screen">
      {/* Noise overlay */}
      <div className="noise-overlay" />
      
      {/* Navigation */}
      <Navigation />
      
      {/* Routes */}
      <ScrollToTop />
      <Routes>
        {/* Public Routes */}
        <Route path="/" element={<HomePage />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/register" element={<RegisterPage />} />
        
        {/* Protected Routes - Require Login */}
        <Route 
          path="/dashboard" 
          element={
            <ProtectedRoute>
              <DashboardPage />
            </ProtectedRoute>
          } 
        />
        <Route 
          path="/products/:productId" 
          element={
            <ProtectedRoute>
              <ProductsPage />
            </ProtectedRoute>
          } 
        />
        <Route 
          path="/products" 
          element={
            <ProtectedRoute>
              <ProductsPage />
            </ProtectedRoute>
          } 
        />
        
        {/* Public Content Pages */}
        <Route path="/asx-announcements" element={<ASXAnnouncementsPage />} />
        <Route path="/privacy" element={<PrivacyPage />} />
        <Route path="/disclaimer" element={<DisclaimerPage />} />
      </Routes>
    </div>
  );
}

function App() {
  return (
    <BrowserRouter>
      <AuthProvider>
        <AppContent />
      </AuthProvider>
    </BrowserRouter>
  );
}

export default App;
