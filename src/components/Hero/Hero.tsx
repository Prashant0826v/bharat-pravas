'use client';

import { motion } from 'framer-motion';
import { Shield, Users, MapPin, Heart, ChevronDown, MessageCircle } from 'lucide-react';
import styles from './Hero.module.css';
import siteSettings from '@/data/siteSettings.json';

const trustPoints = [
  { icon: Heart, label: 'Women Safety First' },
  { icon: Users, label: 'Small Groups' },
  { icon: MapPin, label: 'Authentic Experiences' },
  { icon: Shield, label: 'Safety-Focused' },
];

export default function Hero() {
  const whatsappUrl = `https://wa.me/${siteSettings.whatsappNumber}?text=${encodeURIComponent(siteSettings.whatsappMessage)}`;

  return (
    <section className={styles.hero} id="hero">
      <div className={styles.heroBg}>
        <img
          src="/images/hero-bg.jpg"
          alt="Cinematic Maharashtra Western Ghats landscape at golden hour"
          loading="eager"
        />
      </div>
      <div className={styles.heroOverlay} />

      <motion.div
        className={styles.heroContent}
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
      >
        <motion.div
          className={styles.heroLabel}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3, duration: 0.6 }}
        >
          <span>✦</span> Premium Offbeat Travel in Maharashtra
        </motion.div>

        <motion.h1
          className={styles.heroTitle}
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4, duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
        >
          Maharashtra,{' '}
          <span className={styles.heroTitleAccent}>Unfiltered.</span>
        </motion.h1>

        <motion.p
          className={styles.heroSubtitle}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.6, duration: 0.6 }}
        >
          Curated group trips, weekend treks and women-only experiences
          through the wild heart of Maharashtra. Small groups, big adventures.
        </motion.p>

        <motion.div
          className={styles.heroCtas}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.8, duration: 0.6 }}
        >
          <a href="#departures" className="btn btn-primary btn-lg">
            Explore Trips
          </a>
          <a
            href={whatsappUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="btn btn-secondary btn-lg"
          >
            <MessageCircle size={18} />
            Chat on WhatsApp
          </a>
        </motion.div>

        <motion.div
          className={styles.trustBar}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.0, duration: 0.8 }}
        >
          {trustPoints.map((point) => (
            <div key={point.label} className={styles.trustItem}>
              <span className={styles.trustIcon}>
                <point.icon size={16} />
              </span>
              {point.label}
            </div>
          ))}
        </motion.div>
      </motion.div>

      <div className={styles.scrollIndicator}>
        <span>Explore</span>
        <ChevronDown size={18} />
      </div>
    </section>
  );
}
