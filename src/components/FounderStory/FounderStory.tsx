'use client';

import { useEffect, useRef, useState } from 'react';
import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';
import styles from './FounderStory.module.css';
import siteSettings from '@/data/siteSettings.json';

function useCountUp(end: number, duration: number = 2000) {
  const [count, setCount] = useState(0);
  const ref = useRef<HTMLDivElement>(null);
  const hasAnimated = useRef(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !hasAnimated.current) {
          hasAnimated.current = true;
          const start = 0;
          const startTime = performance.now();

          const animate = (currentTime: number) => {
            const elapsed = currentTime - startTime;
            const progress = Math.min(elapsed / duration, 1);
            const eased = 1 - Math.pow(1 - progress, 3);
            setCount(Math.round(start + (end - start) * eased));

            if (progress < 1) {
              requestAnimationFrame(animate);
            }
          };

          requestAnimationFrame(animate);
        }
      },
      { threshold: 0.3 }
    );

    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, [end, duration]);

  return { count, ref };
}

const stats = [
  { key: 'yearsExperience', label: 'Years of Curated Travel', suffix: '+' },
  { key: 'happyTravellers', label: 'Happy Travellers', suffix: '+' },
  { key: 'curatedTrips', label: 'Curated Trips', suffix: '+' },
  { key: 'repeatTravellers', label: 'Repeat Traveller Rate', suffix: '%' },
];

function StatCard({ value, label, suffix }: { value: number; label: string; suffix: string }) {
  const { count, ref } = useCountUp(value);
  return (
    <div className={styles.statCard} ref={ref}>
      <div className={styles.statNumber}>{count}{suffix}</div>
      <div className={styles.statLabel}>{label}</div>
    </div>
  );
}

export default function FounderStory() {
  return (
    <section className={styles.section} id="founder">
      <div className={styles.bgImage}>
        <img
          src="/images/destinations/western-ghats.jpg"
          alt="Maharashtra landscape"
          loading="lazy"
        />
      </div>
      <div className={styles.overlay} />

      <div className={styles.content}>
        <motion.div
          className={styles.textSide}
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
        >
          <p className={`section-label ${styles.label}`}>Our Story</p>
          <h2 className={`section-title ${styles.title}`}>Built by Travellers,<br />for Travellers</h2>
          <p className={styles.story}>
            BharatPravas was born from a simple frustration — we couldn&apos;t find
            a travel brand in Maharashtra that matched our values. We wanted{' '}
            <strong>small groups over bus tours</strong>, authentic local food over
            tourist restaurants, and real human connections over cookie-cutter itineraries.
          </p>
          <p className={styles.story}>
            Today, every trip we curate is one we&apos;d personally take. Our team
            scouts every trail, vets every stay, and builds relationships with local
            communities to create experiences that feel{' '}
            <strong>genuine, safe, and unforgettable</strong>.
          </p>
          <div className={styles.ctaWrap}>
            <a href="/about" className="btn btn-primary btn-lg">
              About Us <ArrowRight size={18} />
            </a>
          </div>
        </motion.div>

        <motion.div
          className={styles.statsGrid}
          initial={{ opacity: 0, x: 30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, delay: 0.2 }}
        >
          {stats.map((stat) => (
            <StatCard
              key={stat.key}
              value={siteSettings.stats[stat.key as keyof typeof siteSettings.stats]}
              label={stat.label}
              suffix={stat.suffix}
            />
          ))}
        </motion.div>
      </div>
    </section>
  );
}
