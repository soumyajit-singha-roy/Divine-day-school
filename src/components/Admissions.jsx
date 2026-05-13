import { useRef, useEffect, useState } from 'react';
import { motion, useInView } from 'framer-motion';
import { HiArrowRight, HiOutlineCalendar, HiOutlineUserGroup, HiOutlineAcademicCap, HiOutlineBadgeCheck } from 'react-icons/hi';
import './Admissions.css';

const counters = [
  { target: 1500, suffix: '+', label: 'Students Enrolled', icon: HiOutlineUserGroup },
  { target: 23, suffix: '+', label: 'Years of Legacy', icon: HiOutlineBadgeCheck },
  { target: 98, suffix: '%', label: 'Parent Satisfaction', icon: HiOutlineAcademicCap },
  { target: 25, suffix: '+', label: 'Expert Faculty', icon: HiOutlineCalendar },
];

function AnimatedCounter({ target, suffix, duration = 2000, isInView }) {
  const [count, setCount] = useState(0);

  useEffect(() => {
    if (!isInView) return;
    let start = 0;
    const increment = target / (duration / 16);
    const timer = setInterval(() => {
      start += increment;
      if (start >= target) {
        setCount(target);
        clearInterval(timer);
      } else {
        setCount(Math.floor(start));
      }
    }, 16);
    return () => clearInterval(timer);
  }, [isInView, target, duration]);

  return <span>{count}{suffix}</span>;
}

export default function Admissions() {
  const sectionRef = useRef(null);
  const isInView = useInView(sectionRef, { once: true, margin: '-100px' });

  return (
    <section id="admissions" className="section admissions-section" ref={sectionRef}>
      {/* Animated Background */}
      <div className="admissions-bg">
        <div className="admissions-bg-image" style={{ backgroundImage: `url(${import.meta.env.BASE_URL}campus-3.jpg)` }} />
        <div className="admissions-bg-overlay" />
        <div className="admissions-spotlight" />
        <div className="admissions-glow-orb admissions-glow-1" />
        <div className="admissions-glow-orb admissions-glow-2" />
      </div>

      {/* Floating Particles */}
      <div className="admissions-particles">
        {Array.from({ length: 12 }).map((_, i) => (
          <div
            key={i}
            className="admissions-particle"
            style={{
              left: `${Math.random() * 100}%`,
              width: `${Math.random() * 3 + 2}px`,
              height: `${Math.random() * 3 + 2}px`,
              animationDuration: `${Math.random() * 12 + 8}s`,
              animationDelay: `${Math.random() * 8}s`,
              opacity: Math.random() * 0.4 + 0.1,
              background: i % 2 === 0 ? 'var(--gold-light)' : 'rgba(255,255,255,0.5)',
            }}
          />
        ))}
      </div>

      <div className="container" style={{ position: 'relative', zIndex: 5 }}>
        {/* Counters */}
        <motion.div
          className="admissions-counters"
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
        >
          {counters.map((c, i) => (
            <div key={i} className="counter-card glass-card-dark">
              <c.icon className="counter-icon" />
              <span className="counter-value">
                <AnimatedCounter target={c.target} suffix={c.suffix} isInView={isInView} />
              </span>
              <span className="counter-label">{c.label}</span>
            </div>
          ))}
        </motion.div>

        {/* Main CTA Content */}
        <motion.div
          className="admissions-content"
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.3 }}
        >
          <span className="section-label section-label-light">Admissions Open 2025-26</span>
          <h2 className="heading-lg" style={{ color: 'var(--white)' }}>
            Give Your Child The
            <br />
            <span className="text-gold">Best Start In Life</span>
          </h2>
          <p className="text-lg" style={{ color: 'rgba(255,255,255,0.7)', maxWidth: '600px', margin: '1rem auto 0' }}>
            Join the Divine Day School family and give your child access to world-class 
            education, caring mentors, and a nurturing environment that builds future leaders.
          </p>

          <div className="admissions-ctas">
            <a href="#contact" className="btn btn-primary btn-lg">
              Apply Now
              <HiArrowRight className="btn-icon" />
            </a>
            <a href="#contact" className="btn btn-secondary btn-lg">
              Book Campus Visit
              <HiOutlineCalendar className="btn-icon" />
            </a>
          </div>

          {/* Trust Indicators */}
          <div className="admissions-trust">
            <div className="trust-item">
              <span className="trust-check">✓</span>
              <span>Limited Seats Available</span>
            </div>
            <div className="trust-item">
              <span className="trust-check">✓</span>
              <span>No Donation Required</span>
            </div>
            <div className="trust-item">
              <span className="trust-check">✓</span>
              <span>Affordable Fee Structure</span>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
