import { useRef, useState } from 'react';
import { motion, useInView } from 'framer-motion';
import { 
  HiOutlineDesktopComputer, HiOutlineBeaker, HiOutlineChip, 
  HiOutlineLightningBolt, HiOutlineBookOpen, HiOutlineMusicNote,
  HiOutlineShieldCheck, HiOutlineUserGroup 
} from 'react-icons/hi';
import './WhyChooseUs.css';

const features = [
  { icon: HiOutlineDesktopComputer, title: 'Smart Classrooms', desc: 'Interactive digital learning with projectors, smart boards, and multimedia resources.', color: '#3b82f6' },
  { icon: HiOutlineBeaker, title: 'Science Lab', desc: 'Hands-on experiments in our fully equipped physics, chemistry, and biology labs.', color: '#8b5cf6' },
  { icon: HiOutlineChip, title: 'Computer Lab', desc: 'Modern computer lab with latest hardware and software for digital literacy.', color: '#06b6d4' },
  { icon: HiOutlineLightningBolt, title: 'Sports Activities', desc: 'Comprehensive sports program fostering teamwork, fitness, and competitive spirit.', color: '#f59e0b' },
  { icon: HiOutlineBookOpen, title: 'Library', desc: 'Extensive collection of books, journals, and digital resources for every age.', color: '#10b981' },
  { icon: HiOutlineMusicNote, title: 'Cultural Programs', desc: 'Annual festivals, dance, music, drama, and art programs for creative expression.', color: '#ec4899' },
  { icon: HiOutlineShieldCheck, title: 'Safe Campus', desc: 'CCTV monitored, secure environment with trained staff ensuring student safety.', color: '#14b8a6' },
  { icon: HiOutlineUserGroup, title: 'Expert Teachers', desc: '25+ dedicated and experienced educators committed to student success.', color: '#f97316' },
];

function TiltCard({ feature, index, isInView }) {
  const cardRef = useRef(null);
  const [tilt, setTilt] = useState({ x: 0, y: 0 });
  const [isHovered, setIsHovered] = useState(false);

  const handleMouseMove = (e) => {
    if (!cardRef.current) return;
    const rect = cardRef.current.getBoundingClientRect();
    const x = (e.clientX - rect.left) / rect.width - 0.5;
    const y = (e.clientY - rect.top) / rect.height - 0.5;
    setTilt({ x: y * -12, y: x * 12 });
  };

  const handleMouseLeave = () => {
    setTilt({ x: 0, y: 0 });
    setIsHovered(false);
  };

  return (
    <motion.div
      ref={cardRef}
      className={`feature-card ${isHovered ? 'feature-card-hovered' : ''}`}
      onMouseMove={handleMouseMove}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={handleMouseLeave}
      initial={{ opacity: 0, y: 40 }}
      animate={isInView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.6, delay: 0.1 + index * 0.08 }}
      style={{
        transform: `perspective(800px) rotateX(${tilt.x}deg) rotateY(${tilt.y}deg)`,
      }}
    >
      {/* Glow Border */}
      <div
        className="feature-card-glow"
        style={{
          background: `radial-gradient(circle at ${(tilt.y / 12 + 0.5) * 100}% ${(tilt.x / -12 + 0.5) * 100}%, ${feature.color}22, transparent 60%)`,
        }}
      />

      <div className="feature-card-inner">
        <div className="feature-icon-wrapper" style={{ background: `${feature.color}12` }}>
          <feature.icon className="feature-icon" style={{ color: feature.color }} />
        </div>
        <h3 className="heading-sm feature-title">{feature.title}</h3>
        <p className="text-sm feature-desc">{feature.desc}</p>
        
        {/* Bottom accent line */}
        <div className="feature-accent" style={{ background: feature.color }} />
      </div>
    </motion.div>
  );
}

export default function WhyChooseUs() {
  const sectionRef = useRef(null);
  const isInView = useInView(sectionRef, { once: true, margin: '-100px' });

  return (
    <section id="facilities" className="section why-section" ref={sectionRef}>
      {/* Background Decoration */}
      <div className="why-bg-gradient" />

      <div className="container" style={{ position: 'relative', zIndex: 1 }}>
        <motion.div
          className="why-header"
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
        >
          <span className="section-label">Why Choose Us</span>
          <h2 className="heading-lg">
            World-Class <span className="text-gold">Facilities</span> For Your Child
          </h2>
          <p className="text-lg" style={{ color: 'var(--dark-gray)', maxWidth: '600px', margin: '1rem auto 0' }}>
            We provide an enriching environment equipped with modern amenities 
            to ensure holistic development of every student.
          </p>
        </motion.div>

        <div className="features-grid">
          {features.map((feature, i) => (
            <TiltCard key={i} feature={feature} index={i} isInView={isInView} />
          ))}
        </div>
      </div>
    </section>
  );
}
