'use client';

import { motion } from 'framer-motion';
import { Star, BadgeCheck, ArrowRight } from 'lucide-react';
import styles from './Testimonials.module.css';
import testimonials from '@/data/testimonials.json';

export default function Testimonials() {
  return (
    <section className={styles.section} id="testimonials">
      <div className={styles.header}>
        <p className="section-label">Traveller Stories</p>
        <h2 className="section-title">What Our Travellers Say</h2>
        <p className="section-subtitle" style={{ margin: '0 auto' }}>
          Real stories from real travellers. No scripts, no filters — just honest experiences.
        </p>
      </div>

      <div className={styles.carousel}>
        {testimonials.map((review, i) => (
          <motion.div
            key={review.id}
            className={styles.card}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.1, duration: 0.5 }}
          >
            <span className={styles.quoteIcon}>&ldquo;</span>
            <div className={styles.stars}>
              {[1, 2, 3, 4, 5].map((s) => (
                <Star
                  key={s}
                  size={16}
                  fill={s <= review.rating ? '#B88A3B' : 'none'}
                  className={s <= review.rating ? styles.star : styles.starEmpty}
                />
              ))}
            </div>
            <p className={styles.reviewText}>&ldquo;{review.review}&rdquo;</p>
            <p className={styles.tripContext}>{review.tripName}</p>
            <div className={styles.reviewer}>
              <div className={styles.avatar}>
                {review.name.charAt(0)}
              </div>
              <div className={styles.reviewerInfo}>
                <span className={styles.reviewerName}>{review.name}</span>
                <span className={styles.reviewerCity}>{review.city}</span>
              </div>
              {review.verified && (
                <span className={styles.verified}>
                  <BadgeCheck size={14} /> Verified
                </span>
              )}
            </div>
          </motion.div>
        ))}
      </div>

      <div className={styles.ctaWrap}>
        <a href="/reviews" className="btn btn-outline btn-lg">
          View All Reviews <ArrowRight size={18} />
        </a>
      </div>
    </section>
  );
}
