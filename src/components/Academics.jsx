import { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import { HiOutlineSparkles, HiOutlineStar, HiOutlineBookOpen, HiOutlineAcademicCap } from 'react-icons/hi';
import './Academics.css';

const levels = [
  {
    icon: HiOutlineSparkles,
    title: 'Nursery & KG',
    ages: 'Ages 3–5',
    description: 'A nurturing play-based learning environment that sparks curiosity, builds foundational skills, and develops social-emotional intelligence through creative exploration.',
    highlights: ['Play-Based Learning', 'Motor Skills Development', 'Story Time & Music', 'Art & Craft Activities'],
    color: '#f59e0b',
    gradient: 'linear-gradient(135deg, #fef3c7, #fde68a)',
  },
  {
    icon: HiOutlineStar,
    title: 'Primary School',
    ages: 'Classes I–V',
    description: 'Building strong academic foundations in literacy, numeracy, and science while encouraging curiosity and independent thinking through interactive methods.',
    highlights: ['English & Hindi', 'Mathematics', 'Environmental Science', 'Computer Basics'],
    color: '#3b82f6',
    gradient: 'linear-gradient(135deg, #dbeafe, #bfdbfe)',
  },
  {
    icon: HiOutlineBookOpen,
    title: 'Middle School',
    ages: 'Classes VI–VIII',
    description: 'Expanding academic horizons with specialized subjects, project-based learning, and developing critical thinking and analytical skills for future success.',
    highlights: ['Advanced Sciences', 'Social Studies', 'Mathematics', 'Digital Literacy'],
    color: '#8b5cf6',
    gradient: 'linear-gradient(135deg, #ede9fe, #ddd6fe)',
  },
  {
    icon: HiOutlineAcademicCap,
    title: 'Secondary School',
    ages: 'Classes IX–X',
    description: 'Comprehensive board exam preparation with focused academics, career guidance, and all-round development to shape confident, capable young adults.',
    highlights: ['Board Exam Prep', 'Career Counseling', 'Lab Practicals', 'Competitive Exams'],
    color: '#10b981',
    gradient: 'linear-gradient(135deg, #d1fae5, #a7f3d0)',
  },
];

export default function Academics() {
  const sectionRef = useRef(null);
  const isInView = useInView(sectionRef, { once: true, margin: '-100px' });

  return (
    <section id="academics" className="section academics-section" ref={sectionRef}>
      {/* Background Decorations */}
      <div className="academics-bg-blob" />

      <div className="container">
        <motion.div
          className="academics-header"
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
        >
          <span className="section-label">Academic Program</span>
          <h2 className="heading-lg">
            A Complete <span className="text-gold">Learning Journey</span>
          </h2>
          <p className="text-lg" style={{ color: 'var(--dark-gray)', maxWidth: '600px', margin: '1rem auto 0' }}>
            From playful discovery to board exam excellence, our structured curriculum 
            nurtures every stage of your child's growth.
          </p>
        </motion.div>

        <div className="academics-grid">
          {levels.map((level, i) => (
            <motion.div
              key={i}
              className="academic-card"
              initial={{ opacity: 0, y: 40 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.15 + i * 0.12 }}
            >
              {/* Card Header */}
              <div className="academic-card-header" style={{ background: level.gradient }}>
                <div className="academic-icon-circle" style={{ background: `${level.color}20`, color: level.color }}>
                  <level.icon className="academic-icon" />
                </div>
                <div className="academic-step-number" style={{ color: `${level.color}40` }}>
                  0{i + 1}
                </div>
              </div>

              {/* Card Body */}
              <div className="academic-card-body">
                <div className="academic-meta">
                  <h3 className="heading-md">{level.title}</h3>
                  <span className="academic-ages" style={{ color: level.color }}>{level.ages}</span>
                </div>
                <p className="text-sm" style={{ color: 'var(--medium-gray)', marginBottom: '1.25rem' }}>
                  {level.description}
                </p>
                <div className="academic-highlights">
                  {level.highlights.map((h, j) => (
                    <span key={j} className="academic-tag" style={{ borderColor: `${level.color}25`, color: level.color }}>
                      {h}
                    </span>
                  ))}
                </div>
              </div>

              {/* Connection Line */}
              {i < levels.length - 1 && (
                <div className="academic-connector hide-mobile" />
              )}
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
