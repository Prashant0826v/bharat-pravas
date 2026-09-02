'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';
import { Send, CheckCircle, MessageCircle } from 'lucide-react';
import styles from './CustomPlanner.module.css';
import siteSettings from '@/data/siteSettings.json';

export default function CustomPlanner() {
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  const whatsappUrl = `https://wa.me/${siteSettings.whatsappNumber}?text=${encodeURIComponent('Hi! I would like to plan a custom trip.')}`;

  return (
    <section className={styles.section} id="planner">
      <div className={styles.inner}>
        <div className={styles.header}>
          <p className="section-label">Custom Trip Planner</p>
          <h2 className="section-title">Plan Your Perfect Trip</h2>
          <p className="section-subtitle" style={{ margin: '0 auto' }}>
            Tell us your dream Maharashtra experience and our team will craft a personalised
            itinerary just for you — within 48 hours.
          </p>
        </div>

        <motion.div
          className={styles.form}
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          {!submitted ? (
            <form onSubmit={handleSubmit}>
              <div className={styles.formGrid}>
                <div className={styles.field}>
                  <label className={styles.fieldLabel}>
                    Preferred Dates <span className={styles.fieldRequired}>*</span>
                  </label>
                  <input type="date" className={styles.fieldInput} required />
                </div>

                <div className={styles.field}>
                  <label className={styles.fieldLabel}>
                    Preferred Region <span className={styles.fieldRequired}>*</span>
                  </label>
                  <select className={styles.fieldSelect} required defaultValue="">
                    <option value="" disabled>Select region</option>
                    <option value="western-ghats">Western Ghats</option>
                    <option value="coastal">Coastal Maharashtra</option>
                    <option value="hill-stations">Hill Stations</option>
                    <option value="heritage-forts">Heritage & Forts</option>
                    <option value="waterfalls">Waterfalls & Monsoon</option>
                    <option value="any">Surprise Me!</option>
                  </select>
                </div>

                <div className={styles.field}>
                  <label className={styles.fieldLabel}>
                    Trip Type <span className={styles.fieldRequired}>*</span>
                  </label>
                  <select className={styles.fieldSelect} required defaultValue="">
                    <option value="" disabled>Select type</option>
                    <option value="trek">Trekking</option>
                    <option value="women-only">Women-Only</option>
                    <option value="beach">Beach Getaway</option>
                    <option value="heritage">Heritage & Culture</option>
                    <option value="monsoon">Monsoon Special</option>
                    <option value="mixed">Mixed Experience</option>
                  </select>
                </div>

                <div className={styles.field}>
                  <label className={styles.fieldLabel}>
                    Group Size <span className={styles.fieldRequired}>*</span>
                  </label>
                  <input
                    type="number"
                    className={styles.fieldInput}
                    placeholder="Number of travellers"
                    min="1"
                    max="30"
                    required
                  />
                </div>

                <div className={`${styles.field} ${styles.fullWidth}`}>
                  <label className={styles.fieldLabel}>Budget / Preferences</label>
                  <input
                    type="text"
                    className={styles.fieldInput}
                    placeholder="e.g. ₹5000-8000/person, prefer homestays"
                  />
                </div>

                <div className={`${styles.field} ${styles.fullWidth}`}>
                  <label className={styles.fieldLabel}>Additional Preferences</label>
                  <textarea
                    className={styles.fieldTextarea}
                    placeholder="Tell us about your ideal trip — activities, pace, dietary needs, accessibility requirements..."
                  />
                </div>

                <div className={styles.field}>
                  <label className={styles.fieldLabel}>
                    Full Name <span className={styles.fieldRequired}>*</span>
                  </label>
                  <input type="text" className={styles.fieldInput} placeholder="Your name" required />
                </div>

                <div className={styles.field}>
                  <label className={styles.fieldLabel}>
                    Phone / Email <span className={styles.fieldRequired}>*</span>
                  </label>
                  <input
                    type="text"
                    className={styles.fieldInput}
                    placeholder="Phone number or email"
                    required
                  />
                </div>
              </div>

              <div className={styles.submitWrap}>
                <button type="submit" className={styles.submitBtn}>
                  <Send size={18} />
                  Plan My Trip
                </button>
                <p className={styles.whatsappAlt}>
                  Or reach us directly on{' '}
                  <a href={whatsappUrl} target="_blank" rel="noopener noreferrer">
                    <MessageCircle size={14} style={{ display: 'inline', verticalAlign: 'middle' }} /> WhatsApp
                  </a>
                </p>
              </div>
            </form>
          ) : (
            <motion.div
              className={styles.successMsg}
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5 }}
            >
              <div className={styles.successIcon}>
                <CheckCircle size={32} />
              </div>
              <h3 className={styles.successTitle}>We&apos;ve Got Your Request!</h3>
              <p className={styles.successText}>
                Our team will craft your personalised itinerary and get back to you
                within 48 hours. We&apos;ll reach you on the contact details you provided.
              </p>
            </motion.div>
          )}
        </motion.div>
      </div>
    </section>
  );
}
