import { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { HiMenuAlt3, HiX } from 'react-icons/hi';
import './Navbar.css';

const navLinks = [
  { name: 'Home', href: '#home' },
  { name: 'About', href: '#about' },
  { name: 'Academics', href: '#academics' },
  { name: 'Facilities', href: '#facilities' },
  { name: 'Gallery', href: '#gallery' },
  { name: 'Admissions', href: '#admissions' },
  { name: 'Contact', href: '#contact' },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('home');
  const navRef = useRef(null);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);

      // Determine active section
      const sections = navLinks.map(l => l.href.substring(1));
      for (let i = sections.length - 1; i >= 0; i--) {
        const el = document.getElementById(sections[i]);
        if (el) {
          const rect = el.getBoundingClientRect();
          if (rect.top <= 150) {
            setActiveSection(sections[i]);
            break;
          }
        }
      }
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Lock body scroll when mobile menu is open
  useEffect(() => {
    if (mobileOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    return () => { document.body.style.overflow = ''; };
  }, [mobileOpen]);

  const handleNavClick = (e, href) => {
    e.preventDefault();
    const target = document.querySelector(href);
    if (target) {
      target.scrollIntoView({ behavior: 'smooth' });
    }
    setMobileOpen(false);
  };

  return (
    <>
      <nav
        ref={navRef}
        className={`navbar ${scrolled ? 'navbar-scrolled' : ''}`}
        id="navbar"
      >
        <div className="navbar-container">
          {/* Logo */}
          <a href="#home" className="navbar-logo" onClick={(e) => handleNavClick(e, '#home')}>
            <div className="logo-icon">
              <span className="logo-letter">D</span>
            </div>
            <div className="logo-text">
              <span className="logo-name">Divine Day</span>
              <span className="logo-tagline">School</span>
            </div>
          </a>

          {/* Desktop Nav Links */}
          <div className="navbar-links hide-mobile">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className={`nav-link ${activeSection === link.href.substring(1) ? 'active' : ''}`}
                onClick={(e) => handleNavClick(e, link.href)}
              >
                {link.name}
                {activeSection === link.href.substring(1) && (
                  <motion.div
                    className="nav-active-indicator"
                    layoutId="activeNav"
                    transition={{ type: 'spring', stiffness: 380, damping: 30 }}
                  />
                )}
              </a>
            ))}
          </div>

          {/* CTA */}
          <a
            href="#contact"
            className="btn btn-primary navbar-cta hide-mobile"
            style={{ color: 'var(--near-black)' }}
            onClick={(e) => handleNavClick(e, '#contact')}
          >
            <span style={{ position: 'relative', zIndex: 1 }}>Apply Now</span>
          </a>

          {/* Mobile Toggle */}
          <button
            className="navbar-toggle hide-desktop"
            onClick={() => setMobileOpen(!mobileOpen)}
            aria-label="Toggle menu"
          >
            {mobileOpen ? <HiX /> : <HiMenuAlt3 />}
          </button>
        </div>
      </nav>

      {/* Mobile Menu */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            className="mobile-menu"
            initial={{ opacity: 0, x: '100%' }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: '100%' }}
            transition={{ type: 'spring', stiffness: 300, damping: 30 }}
          >
            <div className="mobile-menu-bg" />
            <div className="mobile-menu-content">
              {navLinks.map((link, i) => (
                <motion.a
                  key={link.name}
                  href={link.href}
                  className={`mobile-link ${activeSection === link.href.substring(1) ? 'active' : ''}`}
                  onClick={(e) => handleNavClick(e, link.href)}
                  initial={{ opacity: 0, x: 40 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.1 + i * 0.05, type: 'spring', stiffness: 300, damping: 25 }}
                >
                  <span className="mobile-link-number">0{i + 1}</span>
                  <span>{link.name}</span>
                </motion.a>
              ))}
              <motion.a
                href="#contact"
                className="btn btn-primary mobile-cta"
                style={{ color: 'var(--near-black)' }}
                onClick={(e) => handleNavClick(e, '#contact')}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.5 }}
              >
                <span style={{ position: 'relative', zIndex: 1 }}>Apply Now</span>
              </motion.a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
