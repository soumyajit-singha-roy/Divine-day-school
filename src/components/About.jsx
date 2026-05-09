import { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import { HiOutlineAcademicCap, HiOutlineHeart, HiOutlineGlobe, HiOutlineLightBulb } from 'react-icons/hi';
import './About.css';

const milestones = [
  { year: '2001', title: 'School Founded', desc: 'Established with a vision to nurture young minds in Entally, Kolkata.' },
  { year: '2008', title: 'Expanded to Class X', desc: 'Extended curriculum from Nursery to Class 10 for comprehensive education.' },
  { year: '2015', title: 'Smart Classrooms', desc: 'Upgraded to technology-enabled smart classrooms for interactive learning.' },
  { year: '2024', title: 'Modern Campus', desc: 'State-of-the-art facilities with science labs, computer labs, and library.' },
];

const values = [
  { icon: HiOutlineAcademicCap, title: 'Academic Excellence', desc: 'Rigorous curriculum designed to inspire lifelong learning and critical thinking.' },
  { icon: HiOutlineHeart, title: 'Character Building', desc: 'Instilling strong moral values, discipline, and integrity in every student.' },
  { icon: HiOutlineGlobe, title: 'Global Perspective', desc: 'Preparing students for a connected world with cultural awareness and open-mindedness.' },
  { icon: HiOutlineLightBulb, title: 'Creative Growth', desc: 'Encouraging innovation, artistic expression, and out-of-the-box thinking.' },
];

export default function About() {
  const sectionRef = useRef(null);
  const isInView = useInView(sectionRef, { once: true, margin: '-100px' });

  return (
    <section id="about" className="section about-section" ref={sectionRef}>
      {/* Decorative Elements */}
      <div className="about-decor-circle" />
      <div className="about-decor-dots" />

      <div className="container">
        {/* Header */}
        <motion.div
          className="about-header"
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
        >
          <span className="section-label">Our Story</span>
          <h2 className="heading-lg">
            A Legacy of <span className="text-gold">Excellence</span> Since 2001
          </h2>
          <p className="about-header-text text-lg">
            Divine Day School is a premier English-medium co-educational school nestled in the heart 
            of Entally, Kolkata. For over two decades, we have been shaping young minds from Nursery 
            to Class 10 with a perfect blend of traditional values and modern education.
          </p>
        </motion.div>

        {/* Split Content */}
        <div className="about-split">
          {/* Image Side */}
          <motion.div
            className="about-image-wrapper"
            initial={{ opacity: 0, x: -60 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 1, delay: 0.2 }}
          >
            <div className="about-image-container">
              <img
                src="/unnamed_3.jpg"
                alt="Students at Divine Day School"
                className="about-image"
                loading="lazy"
              />
              <div className="about-image-overlay" />
              {/* Floating Experience Card */}
              <div className="about-exp-card glass-card-dark">
                <span className="about-exp-number">23+</span>
                <span className="about-exp-text">Years of <br/>Excellence</span>
              </div>
            </div>
            {/* Accent Frame */}
            <div className="about-image-frame" />
          </motion.div>

          {/* Values Side */}
          <motion.div
            className="about-values"
            initial={{ opacity: 0, x: 60 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 1, delay: 0.4 }}
          >
            <h3 className="heading-md about-values-title">
              Our Core Values
            </h3>
            <div className="about-values-grid">
              {values.map((v, i) => (
                <motion.div
                  key={i}
                  className="about-value-card"
                  initial={{ opacity: 0, y: 20 }}
                  animate={isInView ? { opacity: 1, y: 0 } : {}}
                  transition={{ duration: 0.6, delay: 0.5 + i * 0.1 }}
                >
                  <div className="about-value-icon-wrapper">
                    <v.icon className="about-value-icon" />
                  </div>
                  <div>
                    <h4 className="heading-sm">{v.title}</h4>
                    <p className="text-sm" style={{ color: 'var(--medium-gray)', marginTop: '0.25rem' }}>
                      {v.desc}
                    </p>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>

        {/* Timeline */}
        <motion.div
          className="about-timeline"
          initial={{ opacity: 0, y: 60 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.6 }}
        >
          <h3 className="heading-md" style={{ textAlign: 'center', marginBottom: '3rem' }}>
            Our Journey
          </h3>
          <div className="timeline-track">
            <motion.div 
              className="timeline-line" 
              initial={{ height: 0 }}
              whileInView={{ height: '100%' }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 2, ease: "easeOut" }}
            />
            {milestones.map((m, i) => (
              <motion.div
                key={i}
                className={`timeline-item ${i % 2 === 0 ? 'timeline-left' : 'timeline-right'}`}
                initial={{ opacity: 0, y: 40, scale: 0.95 }}
                whileInView={{ opacity: 1, y: 0, scale: 1 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.5 }}
              >
                <div className="timeline-dot" />
                <div className="timeline-card glass-card">
                  <span className="timeline-year">{m.year}</span>
                  <h4 className="heading-sm">{m.title}</h4>
                  <p className="text-sm" style={{ color: 'var(--medium-gray)', marginTop: '0.35rem' }}>
                    {m.desc}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
