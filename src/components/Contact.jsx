import { useRef, useState } from 'react';
import { motion, useInView } from 'framer-motion';
import { HiOutlineLocationMarker, HiOutlinePhone, HiOutlineMail, HiOutlineClock, HiArrowRight } from 'react-icons/hi';
import './Contact.css';

const contactInfo = [
  { icon: HiOutlineLocationMarker, label: 'Address', value: '3, Onrait 2nd Lane, Entally, Kolkata – 700014', link: 'https://maps.google.com/?q=3+Onrait+2nd+Lane+Entally+Kolkata+700014' },
  { icon: HiOutlinePhone, label: 'Phone', value: '+91 9831499862', link: 'tel:+919831499862' },
  { icon: HiOutlineMail, label: 'Email', value: 'info@divinedayschool.com', link: 'mailto:info@divinedayschool.com' },
  { icon: HiOutlineClock, label: 'Hours', value: 'Mon – Sat: 8:00 AM – 3:00 PM', link: null },
];

export default function Contact() {
  const sectionRef = useRef(null);
  const isInView = useInView(sectionRef, { once: true, margin: '-100px' });
  const [formData, setFormData] = useState({ name: '', phone: '', email: '', child: '', message: '' });
  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    
    // Construct the WhatsApp message
    const { name, phone, email, child, message } = formData;
    let text = `*New Inquiry from Website* \n\n`;
    text += `*Name:* ${name}\n`;
    text += `*Phone:* ${phone}\n`;
    if (email) text += `*Email:* ${email}\n`;
    if (child) text += `*Class:* ${child}\n`;
    if (message) text += `*Message:* ${message}\n`;

    const encodedText = encodeURIComponent(text);
    const targetNumber = '919831499862'; // From the contact info
    const whatsappUrl = `https://wa.me/${targetNumber}?text=${encodedText}`;

    // Open WhatsApp in a new tab
    window.open(whatsappUrl, '_blank');

    setSubmitted(true);
    setFormData({ name: '', phone: '', email: '', child: '', message: '' });
    setTimeout(() => setSubmitted(false), 4000);
  };

  return (
    <section id="contact" className="section contact-section" ref={sectionRef}>
      <div className="container">
        <motion.div
          className="contact-header"
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
        >
          <span className="section-label">Get In Touch</span>
          <h2 className="heading-lg">
            We'd Love To <span className="text-gold">Hear From You</span>
          </h2>
          <p className="text-lg" style={{ color: 'var(--dark-gray)', maxWidth: '550px', margin: '1rem auto 0' }}>
            Have questions about admissions? Want to visit our campus? Reach out and our team will get back to you promptly.
          </p>
        </motion.div>

        <div className="contact-grid">
          {/* Contact Info & Map */}
          <motion.div
            className="contact-info-col"
            initial={{ opacity: 0, x: -40 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <div className="contact-info-cards">
              {contactInfo.map((item, i) => (
                <a
                  key={i}
                  href={item.link || '#'}
                  className="contact-info-card"
                  target={item.link && item.link.startsWith('http') ? '_blank' : undefined}
                  rel="noopener noreferrer"
                  onClick={item.link ? undefined : (e) => e.preventDefault()}
                >
                  <div className="contact-info-icon-wrapper">
                    <item.icon className="contact-info-icon" />
                  </div>
                  <div>
                    <div className="contact-info-label">{item.label}</div>
                    <div className="contact-info-value">{item.value}</div>
                  </div>
                </a>
              ))}
            </div>

            {/* Map */}
            <div className="contact-map-wrapper">
              <iframe
                title="Divine Day School Location"
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3684.1!2d88.36!3d22.56!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMjLCsDMzJzM2LjAiTiA4OMKwMjEnMzYuMCJF!5e0!3m2!1sen!2sin!4v1"
                width="100%"
                height="220"
                style={{ border: 0, borderRadius: 'var(--radius-lg)' }}
                allowFullScreen=""
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              />
            </div>
          </motion.div>

          {/* Contact Form */}
          <motion.div
            className="contact-form-col"
            initial={{ opacity: 0, x: 40 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            <form className="contact-form" onSubmit={handleSubmit}>
              <h3 className="heading-md" style={{ marginBottom: '0.5rem' }}>Send a Message</h3>
              <p className="text-sm" style={{ color: 'var(--medium-gray)', marginBottom: '1.5rem' }}>
                Fill in the form below and we'll get back to you within 24 hours.
              </p>

              <div className="form-row">
                <div className="form-group">
                  <label className="form-label" htmlFor="contact-name">Parent's Name</label>
                  <input
                    id="contact-name"
                    name="name"
                    type="text"
                    className="form-input"
                    placeholder="Your full name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                  />
                </div>
                <div className="form-group">
                  <label className="form-label" htmlFor="contact-phone">Phone Number</label>
                  <input
                    id="contact-phone"
                    name="phone"
                    type="tel"
                    className="form-input"
                    placeholder="+91 XXXXX XXXXX"
                    value={formData.phone}
                    onChange={handleChange}
                    required
                  />
                </div>
              </div>

              <div className="form-row">
                <div className="form-group">
                  <label className="form-label" htmlFor="contact-email">Email Address</label>
                  <input
                    id="contact-email"
                    name="email"
                    type="email"
                    className="form-input"
                    placeholder="your@email.com"
                    value={formData.email}
                    onChange={handleChange}
                  />
                </div>
                <div className="form-group">
                  <label className="form-label" htmlFor="contact-child">Child's Class</label>
                  <select
                    id="contact-child"
                    name="child"
                    className="form-input"
                    value={formData.child}
                    onChange={handleChange}
                  >
                    <option value="">Select class</option>
                    <option value="nursery">Nursery</option>
                    <option value="kg">KG</option>
                    <option value="1-5">Class I - V</option>
                    <option value="6-8">Class VI - VIII</option>
                    <option value="9-10">Class IX - X</option>
                  </select>
                </div>
              </div>

              <div className="form-group">
                <label className="form-label" htmlFor="contact-message">Message <span style={{opacity: 0.6, fontWeight: 'normal', fontSize: '0.85em'}}>(Optional)</span></label>
                <textarea
                  id="contact-message"
                  name="message"
                  className="form-input form-textarea"
                  placeholder="Tell us about your inquiry..."
                  rows="4"
                  value={formData.message}
                  onChange={handleChange}
                />
              </div>

              <button type="submit" className="btn btn-primary btn-lg form-submit" disabled={submitted}>
                {submitted ? '✓ Message Sent!' : 'Send Message'}
                {!submitted && <HiArrowRight className="btn-icon" />}
              </button>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
