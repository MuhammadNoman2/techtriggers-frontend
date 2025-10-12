import { useState, lazy, Suspense } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import GetStarted from './components/GetStarted';
import Products from './components/Products';
import Contact from './components/Contact';
import Service from './components/Services';
import BookingForm from './components/BookingForm';
import Footer from './components/Footer';
import WhatsAppButton from './components/WhatsAppButton';
import './styles/main.css';

// Lazy load less frequently accessed pages
const AboutUs = lazy(() => import('./components/AboutUs'));
const Team = lazy(() => import('./components/Team'));
const Careers = lazy(() => import('./components/Careers'));
const Blog = lazy(() => import('./components/Blog'));
const PrivacyPolicy = lazy(() => import('./components/PrivacyPolicy'));
const TermsAndConditions = lazy(() => import('./components/TermsConditions'));
const Security = lazy(() => import('./components/Security'));
const GDPR = lazy(() => import('./components/GDPR'));
const Cookies = lazy(() => import('./components/Cookies'));
const NotFound = lazy(() => import('./components/NotFound'));

// Loading component
const LoadingFallback = () => (
  <div style={{
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    minHeight: '100vh',
    background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
    color: 'white',
    fontSize: '1.5rem'
  }}>
    Loading...
  </div>
);

function App() {
  const [isBookingOpen, setIsBookingOpen] = useState(false);

  const startProject = () => setIsBookingOpen(true);
  const closeProjectForm = () => setIsBookingOpen(false);

  return (
    <Router>
      <div className="app">
        <a href="#main-content" className="skip-link">
          Skip to main content
        </a>
        <Navbar startProject={startProject} />
        <WhatsAppButton />
        <main id="main-content" role="main">
        <Routes>
          <Route
            path="/"
            element={
              <>
                <Hero />
                <div id="get-started">
                  <GetStarted startProject={startProject} />
                </div>
                <div id="products">
                  <Products />
                </div>
                <div id="service">
                  <Service  startProject={startProject} />
                </div>
                <div id="contact">
                  <Contact />
                </div>
                <BookingForm isOpen={isBookingOpen} onClose={closeProjectForm} formType="project" />
                <div id="footer">
                  <Footer />
                </div>
              </>
            }
          />

          {/* Company Pages */}
          <Route path="/about" element={
            <Suspense fallback={<LoadingFallback />}>
              <AboutUs />
              <div id="footer">
                <Footer />
              </div>
            </Suspense>
          } />
          <Route path="/team" element={
            <Suspense fallback={<LoadingFallback />}>
              <Team />
              <div id="footer">
                <Footer />
              </div>
            </Suspense>
          } />
          <Route path="/careers" element={
            <Suspense fallback={<LoadingFallback />}>
              <Careers />
              <div id="footer">
                <Footer />
              </div>
            </Suspense>
          } />
          <Route path="/blog" element={
            <Suspense fallback={<LoadingFallback />}>
              <Blog />
              <div id="footer">
                <Footer />
              </div>
            </Suspense>
          } />

          {/* Legal Pages */}
          <Route path="/privacy" element={
            <Suspense fallback={<LoadingFallback />}>
              <PrivacyPolicy />
              <div id="footer">
                <Footer />
              </div>
            </Suspense>
          } />
          <Route path="/terms" element={
            <Suspense fallback={<LoadingFallback />}>
              <TermsAndConditions />
              <div id="footer">
                <Footer />
              </div>
            </Suspense>
          } />
          <Route path="/cookies" element={
            <Suspense fallback={<LoadingFallback />}>
              <Cookies />
              <div id="footer">
                <Footer />
              </div>
            </Suspense>
          } />
          <Route path="/gdpr" element={
            <Suspense fallback={<LoadingFallback />}>
              <GDPR />
              <div id="footer">
                <Footer />
              </div>
            </Suspense>
          } />
          <Route path="/security" element={
            <Suspense fallback={<LoadingFallback />}>
              <Security />
              <div id="footer">
                <Footer />
              </div>
            </Suspense>
          } />

          {/* 404 Not Found Route */}
          <Route path="*" element={
            <Suspense fallback={<LoadingFallback />}>
              <NotFound />
            </Suspense>
          } />
        </Routes>
        </main>
      </div>
    </Router>
  );
}

export default App;