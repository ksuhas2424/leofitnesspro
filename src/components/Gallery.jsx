// src/components/Gallery.jsx
import React, { useState } from 'react';
import galleryData from '../data/gallery';

export const Gallery = ({ onOpenLightbox }) => {
  const [selectedCategory, setSelectedCategory] = useState('ALL');
  const [visibleCount, setVisibleCount] = useState(12);

  const categories = ['ALL', 'STRENGTH', 'CARDIO', 'FACILITIES', 'PERSONAL TRAINING'];

  const filteredPhotos = selectedCategory === 'ALL'
    ? galleryData
    : galleryData.filter((item) => item.category === selectedCategory);

  const visiblePhotos = filteredPhotos.slice(0, visibleCount);

  const handleCategoryChange = (cat) => {
    setSelectedCategory(cat);
    setVisibleCount(12);
  };

  const handleLoadMore = () => {
    setVisibleCount((prev) => Math.min(prev + 12, filteredPhotos.length));
  };

  return (
    <section id="gallery" className="gallery-section">
      <div className="container">
        {/* Header */}
        <div className="section-title-wrap">
          <div className="section-title-lines">
            <h2 className="section-title">OUR GALLERY</h2>
          </div>
          <p className="section-subtitle">
            A glimpse inside LEO Fitness Pro — where champions are built.
          </p>
          <div className="gallery-badge">38 PHOTOS</div>
        </div>

        {/* Category Filters */}
        <div style={{ display: 'flex', justifyContent: 'center', flexWrap: 'wrap', gap: '10px', marginBottom: '30px' }}>
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => handleCategoryChange(cat)}
              style={{
                padding: '8px 18px',
                borderRadius: '999px',
                border: selectedCategory === cat ? '2px solid var(--gold)' : '1px solid var(--border-light)',
                backgroundColor: selectedCategory === cat ? 'var(--gold)' : 'var(--white)',
                color: selectedCategory === cat ? 'var(--black)' : 'var(--mid-gray)',
                fontFamily: 'var(--font-heading)',
                fontSize: '0.85rem',
                fontWeight: 700,
                letterSpacing: '1px',
                cursor: 'pointer',
                transition: 'all 0.2s ease'
              }}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Gallery Grid */}
        <div className="gallery-grid">
          {visiblePhotos.map((item, index) => (
            <div
              key={item.id}
              className="gallery-item"
              onClick={() => onOpenLightbox(item, index, filteredPhotos)}
            >
              <img
                src={item.image}
                alt={item.alt}
                className="gallery-img"
                loading="lazy"
              />
              <div className="gallery-overlay">
                <div className="gallery-title">{item.title}</div>
                <div className="gallery-subtitle">{item.subtitle}</div>
              </div>
            </div>
          ))}
        </div>

        {/* Load More Button */}
        {visibleCount < filteredPhotos.length && (
          <div className="load-more-wrap">
            <button className="btn-load-more" onClick={handleLoadMore}>
              LOAD MORE
            </button>
          </div>
        )}
      </div>
    </section>
  );
};

export default Gallery;
