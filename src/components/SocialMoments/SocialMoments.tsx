'use client';

import { motion } from 'framer-motion';
import { Camera, ArrowRight } from 'lucide-react';
import styles from './SocialMoments.module.css';
import siteSettings from '@/data/siteSettings.json';

const socialImages = [
  { src: 'https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=400&h=400&fit=crop', alt: 'Trekkers on mountain trail' },
  { src: 'https://images.unsplash.com/photo-1501785888041-af3ef285b470?w=400&h=400&fit=crop', alt: 'Sunset over Western Ghats' },
  { src: 'https://images.unsplash.com/photo-1507525428034-b723cf961d3e?w=400&h=400&fit=crop', alt: 'Beach camping setup' },
  { src: 'https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?w=400&h=400&fit=crop', alt: 'Mountain summit view' },
  { src: 'https://images.unsplash.com/photo-1470071459604-3b5ec3a7fe05?w=400&h=400&fit=crop', alt: 'Misty valley morning' },
  { src: 'https://images.unsplash.com/photo-1519681393784-d120267933ba?w=400&h=400&fit=crop', alt: 'Night sky over camp' },
  { src: 'https://images.unsplash.com/photo-1476514525535-07fb3b4ae5f1?w=400&h=400&fit=crop', alt: 'Lake and mountains' },
  { src: 'https://images.unsplash.com/photo-1486870591958-9b9d0d1dda99?w=400&h=400&fit=crop', alt: 'Sunrise trek' },
];

export default function SocialMoments() {
  return (
    <section className={styles.section} id="social">
      <div className={styles.header}>
        <p className="section-label">Moments That Matter</p>
        <h2 className="section-title">Join the Journey</h2>
        <p className="section-subtitle" style={{ margin: '0 auto' }}>
          Follow @bharatpravas for daily doses of Maharashtra magic, travel tips, and community stories.
        </p>
      </div>

      <div className={styles.grid}>
        {socialImages.map((img, i) => (
          <motion.a
            key={i}
            href={siteSettings.social.instagram}
            target="_blank"
            rel="noopener noreferrer"
            className={styles.item}
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.05, duration: 0.4 }}
          >
            <img src={img.src} alt={img.alt} loading="lazy" />
            <div className={styles.itemOverlay}>
              <span className={styles.itemIcon}>
                <Camera size={28} />
              </span>
            </div>
          </motion.a>
        ))}
      </div>

      <div className={styles.ctaWrap}>
        <a
          href={siteSettings.social.instagram}
          target="_blank"
          rel="noopener noreferrer"
          className="btn btn-outline btn-lg"
        >
          Follow Our Journey <ArrowRight size={18} />
        </a>
      </div>
    </section>
  );
}
