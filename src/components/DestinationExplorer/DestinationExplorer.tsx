'use client';

import { motion } from 'framer-motion';
import { ArrowRight, MapPin } from 'lucide-react';
import styles from './DestinationExplorer.module.css';
import destinations from '@/data/destinations.json';

export default function DestinationExplorer() {
  return (
    <section className={styles.section} id="destinations">
      <div className={styles.header}>
        <p className="section-label">Discover Maharashtra</p>
        <h2 className="section-title">Explore by Destination</h2>
        <p className="section-subtitle" style={{ margin: '0 auto' }}>
          From misty Western Ghats to sun-kissed Konkan beaches — find your next adventure
          in Maharashtra&apos;s most extraordinary landscapes.
        </p>
      </div>

      <div className={styles.grid}>
        {destinations.map((dest, i) => (
          <motion.div
            key={dest.id}
            className={styles.card}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-50px' }}
            transition={{ delay: i * 0.1, duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
          >
            <div className={styles.cardImage}>
              <img src={dest.image} alt={dest.name} loading="lazy" />
            </div>
            <div className={styles.cardOverlay} />
            <div className={styles.cardContent}>
              <p className={styles.cardTagline}>{dest.tagline}</p>
              <h3 className={styles.cardTitle}>{dest.name}</h3>
              <div className={styles.cardMeta}>
                <MapPin size={14} />
                <span>{dest.tripCount} trips available</span>
              </div>
              <div className={styles.cardArrow}>
                Explore Region <ArrowRight size={16} />
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
