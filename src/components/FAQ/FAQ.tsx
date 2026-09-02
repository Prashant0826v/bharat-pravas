'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';
import { ChevronDown } from 'lucide-react';
import styles from './FAQ.module.css';
import faqs from '@/data/faqs.json';

export default function FAQ() {
  const [openId, setOpenId] = useState<string | null>(null);

  const toggle = (id: string) => {
    setOpenId(openId === id ? null : id);
  };

  return (
    <section className={styles.section} id="faq">
      <div className={styles.header}>
        <p className="section-label">FAQ</p>
        <h2 className="section-title">Frequently Asked Questions</h2>
        <p className="section-subtitle" style={{ margin: '0 auto' }}>
          Everything you need to know before your next adventure.
        </p>
      </div>

      <div className={styles.list}>
        {faqs.map((faq, i) => (
          <motion.div
            key={faq.id}
            className={`${styles.item} ${openId === faq.id ? styles.itemOpen : ''}`}
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.05, duration: 0.4 }}
          >
            <button
              className={styles.question}
              onClick={() => toggle(faq.id)}
              aria-expanded={openId === faq.id}
            >
              {faq.question}
              <span className={styles.questionIcon}>
                <ChevronDown size={16} />
              </span>
            </button>
            <div className={styles.answer}>
              <p className={styles.answerInner}>{faq.answer}</p>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
