import React, { useState } from 'react';
import { Send, MapPin, Mail, Phone, CheckCircle } from 'lucide-react';
import { ref, push } from 'firebase/database';
import { db } from '../firebase';
import './Contact.css';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    project: ''
  });
  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    // Save to Firebase
    const contactRef = ref(db, 'contact_responses');
    const newResponse = {
      ...formData,
      date: new Date().toLocaleString(),
      timestamp: Date.now()
    };

    push(contactRef, newResponse)
      .then(() => {
        setSubmitted(true);
        setFormData({ name: '', email: '', project: '' });
        // Reset submission message after 5 seconds
        setTimeout(() => setSubmitted(false), 5000);
      })
      .catch((error) => {
        console.error("Error saving to Firebase:", error);
        alert("Failed to send message. Please try again.");
      });
  };

  return (
    <section id="contact" className="contact">
      <div className="contact-premium-grid">
        <div className="contact-details">
          <span className="text-gradient">04. Connection</span>
          <h2 className="section-title" style={{ textAlign: 'left' }}>Let's Build <br />Something Rare.</h2>

          <div className="contact-list">
            <div className="contact-item">
              <Mail className="icon" size={24} />
              <div className="text">
                <span className="label">Mail</span>
                <span className="value">mohsinabbas20191@example.com</span>
              </div>
            </div>
            <div className="contact-item">
              <MapPin className="icon" size={24} />
              <div className="text">
                <span className="label">Base</span>
                <span className="value">Islamabad, Pakistan</span>
              </div>
            </div>
            <div className="contact-item">
              <Phone className="icon" size={24} />
              <div className="text">
                <span className="label">Phone</span>
                <span className="value">0323-7086514</span>
              </div>
            </div>
          </div>
        </div>

        <form className="premium-form white-card" onSubmit={handleSubmit}>
          {submitted ? (
            <div className="submission-success">
              <CheckCircle size={48} className="success-icon" />
              <h3>Submission Received!</h3>
              <p>I'll be in touch with you shortly.</p>
            </div>
          ) : (
            <>
              <div className="input-group">
                <input
                  type="text"
                  name="name"
                  placeholder="Full Name"
                  required
                  value={formData.name}
                  onChange={handleChange}
                />
              </div>
              <div className="input-group">
                <input
                  type="email"
                  name="email"
                  placeholder="Email Address"
                  required
                  value={formData.email}
                  onChange={handleChange}
                />
              </div>
              <div className="input-group">
                <textarea
                  name="project"
                  placeholder="Tell me about your project"
                  rows="5"
                  required
                  value={formData.project}
                  onChange={handleChange}
                ></textarea>
              </div>
              <button type="submit" className="btn-primary" style={{ width: '100%' }}>
                Initiate Project <Send size={18} style={{ marginLeft: '12px' }} />
              </button>
            </>
          )}
        </form>
      </div>

      <footer className="premium-footer">
        <div className="footer-line"></div>
        <div className="footer-content">
          <span className="brand">MA.</span>
          <p>© 2025 Crafted with Elegance by Mohsin Abbas.</p>
        </div>
      </footer>
    </section>
  );
};

export default Contact;
