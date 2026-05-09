import { useState } from 'react';
import { HiArrowRight } from 'react-icons/hi';
import { FaFacebookF, FaInstagram, FaTwitter, FaYoutube, FaWhatsapp } from 'react-icons/fa';
import './Footer.css';

const quickLinks = [
  { name: 'About Us', href: '#about' },
  { name: 'Academics', href: '#academics' },
  { name: 'Facilities', href: '#facilities' },
  { name: 'Gallery', href: '#gallery' },
  { name: 'Admissions', href: '#admissions' },
  { name: 'Contact', href: '#contact' },
];

const socialLinks = [
  { icon: FaFacebookF, href: '#', label: 'Facebook' },
  { icon: FaInstagram, href: '#', label: 'Instagram' },
  { icon: FaTwitter, href: '#', label: 'Twitter' },
  { icon: FaYoutube, href: '#', label: 'YouTube' },
  { icon: FaWhatsapp, href: 'https://wa.me/919831499862', label: 'WhatsApp' },
];

export default function Footer() {
  const [email, setEmail] = useState('');
  const [subscribed, setSubscribed] = useState(false);

  const handleSubscribe = (e) => {
    e.preventDefault();
    if (email) {
      setSubscribed(true);
      setEmail('');
      setTimeout(() => setSubscribed(false), 3000);
    }
  };

  const handleNavClick = (e, href) => {
    e.preventDefault();
    const target = document.querySelector(href);
    if (target) target.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <footer className="footer">
      {/* Top Wave */}
      <div className="footer-wave">
        <svg viewBox="0 0 1440 80" fill="none" preserveAspectRatio="none">
          <path d="M0 80L48 70C96 60 192 40 288 35C384 30 480 40 576 45C672 50 768 50 864 45C960 40 1056 30 1152 30C1248 30 1344 40 1392 45L1440 50V80H0Z" fill="var(--royal-blue-deep)"/>
        </svg>
      </div>

      <div className="footer-inner">
        <div className="container">
          <div className="footer-grid">
            {/* Brand */}
            <div className="footer-brand">
              <div className="footer-logo">
                <div className="footer-logo-icon">
                  <span>D</span>
                </div>
                <div>
                  <div className="footer-logo-name">Divine Day School</div>
                  <div className="footer-logo-tagline">Shaping Young Minds</div>
                </div>
              </div>
              <p className="footer-brand-text">
                A premier English-medium co-educational school in Entally, Kolkata, 
                committed to nurturing excellence since 2001.
              </p>
              <div className="footer-social">
                {socialLinks.map((s, i) => (
                  <a
                    key={i}
                    href={s.href}
                    className="footer-social-link"
                    aria-label={s.label}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <s.icon />
                  </a>
                ))}
              </div>
            </div>

            {/* Quick Links */}
            <div className="footer-col">
              <h4 className="footer-col-title">Quick Links</h4>
              <ul className="footer-links">
                {quickLinks.map((link, i) => (
                  <li key={i}>
                    <a href={link.href} onClick={(e) => handleNavClick(e, link.href)}>
                      {link.name}
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            {/* Contact */}
            <div className="footer-col">
              <h4 className="footer-col-title">Contact</h4>
              <ul className="footer-contact-list">
                <li>
                  <span className="footer-contact-label">Address</span>
                  <span>3, Onrait 2nd Lane, Entally, Kolkata – 700014</span>
                </li>
                <li>
                  <span className="footer-contact-label">Phone</span>
                  <a href="tel:+919831499862">+91 9831499862</a>
                </li>
                <li>
                  <span className="footer-contact-label">Hours</span>
                  <span>Mon – Sat: 8 AM – 3 PM</span>
                </li>
              </ul>
            </div>

            {/* Newsletter */}
            <div className="footer-col">
              <h4 className="footer-col-title">Stay Updated</h4>
              <p className="footer-newsletter-text">
                Subscribe to receive updates on admissions, events, and school news.
              </p>
              <form className="footer-newsletter-form" onSubmit={handleSubscribe}>
                <input
                  type="email"
                  placeholder="Your email address"
                  className="footer-newsletter-input"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  required
                />
                <button type="submit" className="footer-newsletter-btn" disabled={subscribed}>
                  {subscribed ? '✓' : <HiArrowRight />}
                </button>
              </form>
              {subscribed && (
                <p className="footer-subscribed">Thank you for subscribing!</p>
              )}
            </div>
          </div>

          {/* Bottom */}
          <div className="footer-bottom">
            <p>© {new Date().getFullYear()} Divine Day School, Kolkata. All rights reserved.</p>
            <p className="footer-credit">Crafted with ❤️ for the future of education</p>
          </div>
        </div>
      </div>
    </footer>
  );
}
