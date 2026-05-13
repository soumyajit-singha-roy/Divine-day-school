import { HiArrowRight, HiOutlineAcademicCap } from 'react-icons/hi';
import { FaChevronDown } from 'react-icons/fa';
import './Hero.css';

const stats = [
  { value: '2001', label: 'Established', icon: '🏛️' },
  { value: 'Nursery–X', label: 'Classes', icon: '📚' },
  { value: 'Smart', label: 'Classrooms', icon: '💡' },
  { value: '25+', label: 'Expert Teachers', icon: '👩‍🏫' },
];

export default function Hero() {
  const handleScrollDown = () => {
    const about = document.getElementById('about');
    if (about) about.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section id="home" className="hero">
      {/* Background Layers */}
      <div className="hero-bg">
        <div className="hero-bg-image" style={{ backgroundImage: `url(${import.meta.env.BASE_URL}hero-students.jpg)` }} />
        <div className="hero-bg-overlay" />
      </div>

      {/* Content */}
      <div className="hero-content container">
        <div className="hero-text stagger-children">
          <div className="hero-badge">
            <HiOutlineAcademicCap className="hero-badge-icon" />
            <span>Admissions Open 2025-26</span>
          </div>

          <h1 className="hero-title heading-xl">
            Shaping Young Minds
            <br />
            <span className="hero-title-accent">For A Brighter</span>
            <br />
            Tomorrow
          </h1>

          <p className="hero-subtitle text-lg">
            Nurturing creativity, excellence, and character through holistic education.
            <br className="hide-mobile" />
            Where every child discovers their extraordinary potential.
          </p>

          <div className="hero-ctas">
            <a href="#admissions" className="btn btn-primary btn-lg">
              Admissions Open
              <HiArrowRight className="btn-icon" />
            </a>
            <a href="#gallery" className="btn btn-secondary btn-lg">
              Explore Campus
            </a>
          </div>
        </div>

        {/* Stats Cards */}
        <div className="hero-stats stagger-children">
          {stats.map((stat, i) => (
            <div key={i} className="hero-stat-card glass-card-dark">
              <span className="hero-stat-icon">{stat.icon}</span>
              <span className="hero-stat-value">{stat.value}</span>
              <span className="hero-stat-label">{stat.label}</span>
            </div>
          ))}
        </div>
      </div>

      {/* Scroll Indicator */}
      <button
        className="hero-scroll-indicator reveal"
        onClick={handleScrollDown}
        aria-label="Scroll down"
      >
        <span className="scroll-text">Scroll to explore</span>
        <FaChevronDown className="scroll-arrow" />
      </button>

      {/* Bottom Wave */}
      <div className="hero-wave">
        <svg viewBox="0 0 1440 120" fill="none" xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="none">
          <path d="M0 120L48 105C96 90 192 60 288 50C384 40 480 50 576 55C672 60 768 60 864 55C960 50 1056 40 1152 45C1248 50 1344 70 1392 80L1440 90V120H1392C1344 120 1248 120 1152 120C1056 120 960 120 864 120C768 120 672 120 576 120C480 120 384 120 288 120C192 120 96 120 48 120H0Z" fill="white"/>
        </svg>
      </div>
    </section>
  );
}
