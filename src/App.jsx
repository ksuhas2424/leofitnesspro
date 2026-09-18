// src/App.jsx
import React, { useState, useEffect } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Features from './components/Features';
import MembershipPlans from './components/MembershipPlans';
import Gallery from './components/Gallery';
import Contact from './components/Contact';
import Footer from './components/Footer';
import Lightbox from './components/Lightbox';
import Toast from './components/Toast';
import EnquiryModal from './components/EnquiryModal';

export function App() {
  const [activeSection, setActiveSection] = useState('hero');
  const [toast, setToast] = useState(null); // { message, type }
  const [selectedPlan, setSelectedPlan] = useState(null);
  
  // Lightbox state
  const [lightboxState, setLightboxState] = useState({
    isOpen: false,
    item: null,
    currentIndex: 0,
    itemsList: []
  });

  // Track scroll section for active navbar link
  useEffect(() => {
    const handleScroll = () => {
      const sections = ['hero', 'plans', 'gallery', 'contact'];
      const scrollPosition = window.scrollY + 200;

      for (const sectionId of sections) {
        const element = document.getElementById(sectionId);
        if (element) {
          const top = element.offsetTop;
          const height = element.offsetHeight;
          if (scrollPosition >= top && scrollPosition < top + height) {
            setActiveSection(sectionId);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const showToast = (message, type = 'success') => {
    setToast({ message, type });
  };

  const handleOpenLightbox = (item, index, list) => {
    setLightboxState({
      isOpen: true,
      item,
      currentIndex: index,
      itemsList: list
    });
  };

  const handleCloseLightbox = () => {
    setLightboxState((prev) => ({ ...prev, isOpen: false }));
  };

  const handlePrevLightbox = () => {
    setLightboxState((prev) => {
      const newIndex = (prev.currentIndex - 1 + prev.itemsList.length) % prev.itemsList.length;
      return {
        ...prev,
        currentIndex: newIndex,
        item: prev.itemsList[newIndex]
      };
    });
  };

  const handleNextLightbox = () => {
    setLightboxState((prev) => {
      const newIndex = (prev.currentIndex + 1) % prev.itemsList.length;
      return {
        ...prev,
        currentIndex: newIndex,
        item: prev.itemsList[newIndex]
      };
    });
  };

  const handleExplorePlans = () => {
    const plansElem = document.getElementById('plans');
    if (plansElem) {
      plansElem.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="app-main-wrapper">
      {/* Sticky Navbar */}
      <Navbar activeSection={activeSection} />

      {/* Hero Section */}
      <Hero onExplorePlans={handleExplorePlans} />

      {/* 3-Feature Section */}
      <Features />

      {/* Membership Plans Section */}
      <MembershipPlans onSelectPlan={(plan) => setSelectedPlan(plan)} />

      {/* Gallery Section */}
      <Gallery onOpenLightbox={handleOpenLightbox} />

      {/* Contact Us Section */}
      <Contact onShowToast={showToast} />

      {/* Footer */}
      <Footer />

      {/* Lightbox Modal */}
      {lightboxState.isOpen && (
        <Lightbox
          item={lightboxState.item}
          onClose={handleCloseLightbox}
          onPrev={handlePrevLightbox}
          onNext={handleNextLightbox}
        />
      )}

      {/* Plan Enquiry Modal */}
      {selectedPlan && (
        <EnquiryModal
          plan={selectedPlan}
          onClose={() => setSelectedPlan(null)}
          onSuccess={(msg) => showToast(msg, 'success')}
        />
      )}

      {/* Toast Feedback */}
      {toast && (
        <Toast
          message={toast.message}
          type={toast.type}
          onClose={() => setToast(null)}
        />
      )}
    </div>
  );
}

export default App;
