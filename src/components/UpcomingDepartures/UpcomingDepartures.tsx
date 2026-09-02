'use client';

import { motion } from 'framer-motion';
import { Calendar, Clock, ArrowRight } from 'lucide-react';
import styles from './UpcomingDepartures.module.css';
import trips from '@/data/trips.json';

export default function UpcomingDepartures() {
  return (
    <section className={styles.section} id="departures">
      <div className={styles.waveTop}>
        <svg viewBox="0 0 1440 45" fill="none" xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="none">
          <path d="M0 0C320 35 640 45 960 30C1200 18 1360 5 1440 0V45H0V0Z" fill="var(--color-background)" />
        </svg>
      </div>

      <div className={styles.header}>
        <p className={`section-label ${styles.sectionLabel}`}>Upcoming Departures</p>
        <h2 className={`section-title ${styles.sectionTitle}`}>Your Next Adventure Awaits</h2>
        <p className={`section-subtitle ${styles.sectionSubtitle}`} style={{ margin: '0 auto' }}>
          Handpicked departures with confirmed dates. Book your spot before it fills up.
        </p>
      </div>

      <div className={styles.scrollContainer}>
        {trips.map((trip, i) => (
          <motion.div
            key={trip.id}
            className={styles.card}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.1, duration: 0.5 }}
          >
            <div className={styles.cardImageWrap}>
              <img src={trip.image} alt={trip.title} loading="lazy" />
              <span className={`${styles.badge} ${trip.badge === 'Women-Only' ? styles.badgeWomen : ''}`}>
                {trip.badge}
              </span>
            </div>
            <div className={styles.cardBody}>
              <h3 className={styles.cardTitle}>{trip.title}</h3>
              <div className={styles.cardMeta}>
                <div className={styles.cardMetaRow}>
                  <Calendar size={14} />
                  <span>{trip.dates}</span>
                </div>
                <div className={styles.cardMetaRow}>
                  <Clock size={14} />
                  <span>{trip.duration}</span>
                </div>
              </div>
              <div className={styles.cardPriceRow}>
                <div>
                  <span className={styles.price}>₹{trip.price.toLocaleString('en-IN')}</span>
                  <span className={styles.priceUnit}>/person</span>
                  {trip.originalPrice && (
                    <span className={styles.originalPrice}>₹{trip.originalPrice.toLocaleString('en-IN')}</span>
                  )}
                </div>
                <span className={styles.availability}>{trip.availability}</span>
              </div>
              <button className={styles.cardCta}>
                View Details <ArrowRight size={16} />
              </button>
            </div>
          </motion.div>
        ))}
      </div>

      <div className={styles.viewAll}>
        <a href="/trips" className="btn btn-secondary btn-lg">
          View All Trips <ArrowRight size={18} />
        </a>
      </div>
    </section>
  );
}
