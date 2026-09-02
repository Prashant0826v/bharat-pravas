'use client';

import { motion } from 'framer-motion';
import { Compass, ShieldCheck, Users, Leaf, ArrowRight } from 'lucide-react';
import styles from './WhyBharatPravas.module.css';

const pillars = [
  {
    icon: Compass,
    title: 'Curated Experiences',
    desc: 'Every trip is handpicked and personally tested. No generic packages — only authentic Maharashtra moments that we believe in.',
  },
  {
    icon: ShieldCheck,
    title: 'Women Safety First',
    desc: 'Dedicated women-only trips with verified female leaders, clear safety protocols, and small-group travel designed for comfort and confidence.',
  },
  {
    icon: Users,
    title: 'Small Groups Only',
    desc: 'Intimate groups of 8–15 travellers mean real connections, personal attention from guides, and experiences you simply can\'t get on a bus tour.',
  },
  {
    icon: Leaf,
    title: 'Local & Authentic',
    desc: 'We work with local communities, serve regional food, stay in characterful accommodation, and take you to places most tourists never see.',
  },
];

export default function WhyBharatPravas() {
  return (
    <section className={styles.section} id="why-us">
      <div className={styles.header}>
        <p className="section-label">Why BharatPravas</p>
        <h2 className="section-title">Travel That Means Something</h2>
        <p className="section-subtitle" style={{ margin: '0 auto' }}>
          We&apos;re not another tour company. We&apos;re travellers who built the
          travel brand we always wanted to book with.
        </p>
      </div>

      <div className={styles.grid}>
        {pillars.map((pillar, i) => (
          <motion.div
            key={pillar.title}
            className={styles.card}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.12, duration: 0.5 }}
          >
            <div className={styles.iconWrap}>
              <pillar.icon size={28} />
            </div>
            <h3 className={styles.cardTitle}>{pillar.title}</h3>
            <p className={styles.cardDesc}>{pillar.desc}</p>
          </motion.div>
        ))}
      </div>

      <div className={styles.ctaWrap}>
        <a href="#founder" className="btn btn-outline btn-lg">
          Our Story <ArrowRight size={18} />
        </a>
      </div>
    </section>
  );
}
