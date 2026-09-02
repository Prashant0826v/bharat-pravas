'use client';

import { motion } from 'framer-motion';
import { Search } from 'lucide-react';
import styles from './QuickSearch.module.css';

const popularChips = [
  'Women-Only Trips',
  'Weekend Treks',
  'Beach Getaways',
  'Hill Stations',
  'Monsoon Specials',
  'Custom Trips',
];

export default function QuickSearch() {
  return (
    <section className={styles.search} id="search">
      <motion.div
        className={styles.searchPanel}
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: '-50px' }}
        transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
      >
        <div className={styles.searchGrid}>
          <div className={styles.searchField}>
            <label className={styles.searchLabel}>Destination</label>
            <select className={styles.searchSelect} defaultValue="">
              <option value="" disabled>Where to?</option>
              <option value="western-ghats">Western Ghats</option>
              <option value="coastal">Coastal Maharashtra</option>
              <option value="hill-stations">Hill Stations</option>
              <option value="heritage-forts">Heritage & Forts</option>
              <option value="waterfalls">Waterfalls & Monsoon</option>
            </select>
          </div>

          <div className={styles.searchField}>
            <label className={styles.searchLabel}>Trip Type</label>
            <select className={styles.searchSelect} defaultValue="">
              <option value="" disabled>What kind?</option>
              <option value="women-only">Women-Only Tours</option>
              <option value="weekend-treks">Weekend Treks</option>
              <option value="beach">Beach Getaways</option>
              <option value="monsoon">Monsoon Specials</option>
              <option value="heritage">Heritage & Forts</option>
              <option value="custom">Custom Trips</option>
            </select>
          </div>

          <div className={styles.searchField}>
            <label className={styles.searchLabel}>Month</label>
            <select className={styles.searchSelect} defaultValue="">
              <option value="" disabled>When?</option>
              <option value="sep">September 2026</option>
              <option value="oct">October 2026</option>
              <option value="nov">November 2026</option>
              <option value="dec">December 2026</option>
              <option value="jan">January 2027</option>
              <option value="feb">February 2027</option>
            </select>
          </div>

          <div className={styles.searchField}>
            <label className={styles.searchLabel}>Duration</label>
            <select className={styles.searchSelect} defaultValue="">
              <option value="" disabled>How long?</option>
              <option value="1">1 Day</option>
              <option value="2">2 Days</option>
              <option value="3">3 Days</option>
              <option value="4-5">4-5 Days</option>
              <option value="6+">6+ Days</option>
            </select>
          </div>
        </div>

        <div className={styles.searchActions}>
          <button className={styles.searchBtn}>
            <Search size={18} />
            Search Trips
          </button>
        </div>

        <div className={styles.chips}>
          <span className={styles.chipsLabel}>Popular:</span>
          {popularChips.map((chip) => (
            <button key={chip} className={styles.chip}>
              {chip}
            </button>
          ))}
        </div>
      </motion.div>
    </section>
  );
}
