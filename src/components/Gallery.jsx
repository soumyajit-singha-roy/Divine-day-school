import { useRef, useState } from 'react';
import { motion, useInView, AnimatePresence } from 'framer-motion';
import { HiX, HiChevronLeft, HiChevronRight } from 'react-icons/hi';
import './Gallery.css';

const images = [
  { src: '/divine-day-school-entally-kolkata-english-medium-schools-1jw33k2e07-250.jpg', alt: 'Campus Life', span: 'tall' },
  { src: '/divine-day-school-entally-kolkata-english-medium-schools-sznqzqhil3-250.jpg', alt: 'Classroom Learning', span: 'wide' },
  { src: '/divine-day-school-kolkata-schools-2jdr2lj-250.jpg', alt: 'Library', span: 'normal' },
  { src: '/divine-day-school-kolkata-schools.jpg', alt: 'Sports & Activities', span: 'normal' },
  { src: '/unnamed_3.jpg', alt: 'Students', span: 'wide' },
  { src: '/divine-day-school-entally-kolkata-english-medium-schools-1jw33k2e07-250.jpg', alt: 'School Events', span: 'tall' },
];

export default function Gallery() {
  const sectionRef = useRef(null);
  const isInView = useInView(sectionRef, { once: true, margin: '-100px' });
  const [lightboxIndex, setLightboxIndex] = useState(null);

  const openLightbox = (i) => setLightboxIndex(i);
  const closeLightbox = () => setLightboxIndex(null);
  const prev = () => setLightboxIndex((i) => (i - 1 + images.length) % images.length);
  const next = () => setLightboxIndex((i) => (i + 1) % images.length);

  return (
    <section id="gallery" className="section gallery-section" ref={sectionRef}>
      <div className="container">
        <motion.div
          className="gallery-header"
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
        >
          <span className="section-label">Campus Life</span>
          <h2 className="heading-lg">
            Experience Our <span className="text-gold">Vibrant Campus</span>
          </h2>
          <p className="text-lg" style={{ color: 'var(--dark-gray)', maxWidth: '550px', margin: '1rem auto 0' }}>
            A glimpse into the dynamic, inspiring environment where your child will learn and grow.
          </p>
        </motion.div>

        <div className="gallery-masonry">
          {images.map((img, i) => (
            <motion.div
              key={i}
              className={`gallery-item gallery-${img.span}`}
              initial={{ opacity: 0, scale: 0.9 }}
              animate={isInView ? { opacity: 1, scale: 1 } : {}}
              transition={{ duration: 0.6, delay: 0.1 + i * 0.08 }}
              onClick={() => openLightbox(i)}
            >
              <img
                src={img.src}
                alt={img.alt}
                loading="lazy"
                className="gallery-image"
              />
              <div className="gallery-item-overlay">
                <span className="gallery-item-label">{img.alt}</span>
                <span className="gallery-item-icon">
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <circle cx="11" cy="11" r="8"/><line x1="21" y1="21" x2="16.65" y2="16.65"/>
                    <line x1="11" y1="8" x2="11" y2="14"/><line x1="8" y1="11" x2="14" y2="11"/>
                  </svg>
                </span>
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Lightbox */}
      <AnimatePresence>
        {lightboxIndex !== null && (
          <motion.div
            className="lightbox"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={closeLightbox}
          >
            <button className="lightbox-close" onClick={closeLightbox} aria-label="Close">
              <HiX />
            </button>
            <button className="lightbox-nav lightbox-prev" onClick={(e) => { e.stopPropagation(); prev(); }} aria-label="Previous">
              <HiChevronLeft />
            </button>
            <motion.img
              key={lightboxIndex}
              src={images[lightboxIndex].src}
              alt={images[lightboxIndex].alt}
              className="lightbox-image"
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.9 }}
              transition={{ duration: 0.3 }}
              onClick={(e) => e.stopPropagation()}
            />
            <button className="lightbox-nav lightbox-next" onClick={(e) => { e.stopPropagation(); next(); }} aria-label="Next">
              <HiChevronRight />
            </button>
            <div className="lightbox-counter">
              {lightboxIndex + 1} / {images.length}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}
