// src/components/Lightbox.jsx
import React, { useEffect } from 'react';
import { X, ChevronLeft, ChevronRight } from 'lucide-react';

export const Lightbox = ({ item, onClose, onPrev, onNext }) => {
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === 'Escape') onClose();
      if (e.key === 'ArrowLeft') onPrev();
      if (e.key === 'ArrowRight') onNext();
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [onClose, onPrev, onNext]);

  if (!item) return null;

  return (
    <div className="lightbox-modal" onClick={onClose}>
      <div className="lightbox-content" onClick={(e) => e.stopPropagation()}>
        <button className="lightbox-close-btn" onClick={onClose} aria-label="Close image lightbox">
          <X size={32} />
        </button>

        <button className="lightbox-nav-btn lightbox-prev" onClick={onPrev} aria-label="Previous photo">
          <ChevronLeft size={28} />
        </button>

        <img src={item.image} alt={item.alt} className="lightbox-img" />

        <div className="lightbox-caption">
          <div className="lightbox-title">{item.title}</div>
          <div style={{ color: '#AAA', fontSize: '0.85rem', marginTop: '4px' }}>
            {item.category} • {item.subtitle}
          </div>
        </div>

        <button className="lightbox-nav-btn lightbox-next" onClick={onNext} aria-label="Next photo">
          <ChevronRight size={28} />
        </button>
      </div>
    </div>
  );
};

export default Lightbox;
