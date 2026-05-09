import { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Pagination } from 'swiper/modules';
import { HiOutlineStar } from 'react-icons/hi';
import { FaQuoteLeft } from 'react-icons/fa';
import 'swiper/css';
import 'swiper/css/pagination';
import './Testimonials.css';

const testimonials = [
  {
    name: 'Mrs. Priya Sharma',
    role: 'Parent of Class VII Student',
    text: 'Divine Day School has been a transformative experience for my daughter. The teachers are incredibly supportive and the curriculum is well-rounded. I have seen remarkable growth in her confidence and academic performance.',
    rating: 5,
    initials: 'PS',
  },
  {
    name: 'Mr. Rajesh Kumar',
    role: 'Parent of Class IV Student',
    text: 'We are extremely satisfied with the education and values our son is receiving. The smart classrooms and interactive teaching methods make learning engaging and fun. Highly recommend Divine Day School!',
    rating: 5,
    initials: 'RK',
  },
  {
    name: 'Mrs. Anjali Das',
    role: 'Parent of Class IX Student',
    text: 'The dedication of the faculty at Divine Day School is unmatched. My son is excelling in both academics and extracurricular activities. The school truly focuses on holistic development.',
    rating: 5,
    initials: 'AD',
  },
  {
    name: 'Mr. Suresh Patel',
    role: 'Parent of Class II Student',
    text: 'From the moment my daughter joined, she has been excited about school every single day. The nurturing environment and creative approach to teaching is exactly what young children need.',
    rating: 5,
    initials: 'SP',
  },
  {
    name: 'Mrs. Meera Gupta',
    role: 'Parent of Class VI Student',
    text: 'The school has excellent infrastructure and the teachers genuinely care about each child. The cultural programs and sports activities give a well-rounded education that prepares children for the future.',
    rating: 5,
    initials: 'MG',
  },
];

export default function Testimonials() {
  const sectionRef = useRef(null);
  const isInView = useInView(sectionRef, { once: true, margin: '-100px' });

  return (
    <section className="section testimonials-section" ref={sectionRef}>
      {/* Decorative */}
      <div className="testimonials-decor" />

      <div className="container">
        <motion.div
          className="testimonials-header"
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
        >
          <span className="section-label">Testimonials</span>
          <h2 className="heading-lg">
            Loved By <span className="text-gold">Parents & Students</span>
          </h2>
          <p className="text-lg" style={{ color: 'var(--dark-gray)', maxWidth: '550px', margin: '1rem auto 0' }}>
            Hear from our community of parents who trust us with their children's future.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          <Swiper
            modules={[Autoplay, Pagination]}
            spaceBetween={24}
            slidesPerView={1}
            autoplay={{ delay: 5000, disableOnInteraction: false }}
            pagination={{ clickable: true, dynamicBullets: true }}
            breakpoints={{
              640: { slidesPerView: 2 },
              1024: { slidesPerView: 3 },
            }}
            className="testimonials-swiper"
          >
            {testimonials.map((t, i) => (
              <SwiperSlide key={i}>
                <div className="testimonial-card glass-card">
                  <FaQuoteLeft className="testimonial-quote-icon" />
                  <p className="testimonial-text">{t.text}</p>
                  <div className="testimonial-rating">
                    {Array.from({ length: t.rating }).map((_, j) => (
                      <HiOutlineStar key={j} className="testimonial-star" />
                    ))}
                  </div>
                  <div className="testimonial-author">
                    <div className="testimonial-avatar">
                      {t.initials}
                    </div>
                    <div>
                      <div className="testimonial-name">{t.name}</div>
                      <div className="testimonial-role">{t.role}</div>
                    </div>
                  </div>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </motion.div>
      </div>
    </section>
  );
}
