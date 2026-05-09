import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { HiX } from 'react-icons/hi';
import './PopupEnquiry.css';

export default function PopupEnquiry() {
  const [isOpen, setIsOpen] = useState(false);
  const [formData, setFormData] = useState({ name: '', phone: '', child: '' });
  const [submitted, setSubmitted] = useState(false);

  useEffect(() => {
    // Show popup after 5 seconds
    const timer = setTimeout(() => {
      setIsOpen(true);
    }, 5000);

    return () => clearTimeout(timer);
  }, []);

  const handleClose = () => {
    setIsOpen(false);
  };

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    
    // Construct the WhatsApp message
    const { name, phone, child } = formData;
    let text = `*Quick Inquiry from Website Popup* \n\n`;
    text += `*Name:* ${name}\n`;
    text += `*Phone:* ${phone}\n`;
    if (child) text += `*Class:* ${child}\n`;

    const encodedText = encodeURIComponent(text);
    const targetNumber = '919831499862'; 
    const whatsappUrl = `https://wa.me/${targetNumber}?text=${encodedText}`;

    // Open WhatsApp in a new tab
    window.open(whatsappUrl, '_blank');

    setSubmitted(true);
    setTimeout(() => {
      setSubmitted(false);
      handleClose();
    }, 2000);
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <div className="popup-wrapper">
          <motion.div 
            className="popup-overlay"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={handleClose}
          />
          <motion.div
            className="popup-container glass-card"
            initial={{ opacity: 0, scale: 0.9, y: 30 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.9, y: 30 }}
            transition={{ type: "spring", damping: 25, stiffness: 300 }}
          >
            <button className="popup-close" onClick={handleClose} aria-label="Close popup">
              <HiX />
            </button>
            
            <div className="popup-header">
              <h3 className="heading-md">Admissions Open</h3>
              <p className="text-sm">Secure your child's future today. Drop your details and we'll call you back!</p>
            </div>

            <form className="popup-form" onSubmit={handleSubmit}>
              <div className="form-group">
                <input
                  name="name"
                  type="text"
                  className="form-input"
                  placeholder="Parent's Name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                />
              </div>
              <div className="form-group">
                <input
                  name="phone"
                  type="tel"
                  className="form-input"
                  placeholder="Phone Number"
                  value={formData.phone}
                  onChange={handleChange}
                  required
                />
              </div>
              <div className="form-group">
                <select
                  name="child"
                  className="form-input"
                  value={formData.child}
                  onChange={handleChange}
                  required
                >
                  <option value="">Select class</option>
                  <option value="nursery">Nursery</option>
                  <option value="kg">KG</option>
                  <option value="1-5">Class I - V</option>
                  <option value="6-8">Class VI - VIII</option>
                  <option value="9-10">Class IX - X</option>
                </select>
              </div>
              <button type="submit" className="btn btn-primary" style={{ width: '100%', marginTop: '0.5rem' }} disabled={submitted}>
                {submitted ? 'Redirecting to WhatsApp...' : 'Get a Call Back'}
              </button>
            </form>
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
}
