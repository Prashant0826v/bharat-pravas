'use client';

import { Globe, Heart, Play, AtSign, Mail, Phone, MapPin, Clock, MessageCircle } from 'lucide-react';
import styles from './Footer.module.css';
import siteSettings from '@/data/siteSettings.json';

export default function Footer() {
  const whatsappUrl = `https://wa.me/${siteSettings.whatsappNumber}?text=${encodeURIComponent(siteSettings.whatsappMessage)}`;

  return (
    <footer className={styles.footer} id="footer">
      <div className={styles.footerWave}>
        <svg viewBox="0 0 1440 60" fill="none" xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="none">
          <path d="M0 0L60 5C120 10 240 20 360 25C480 30 600 30 720 25C840 20 960 10 1080 8C1200 5 1320 10 1380 12.5L1440 15V60H1380C1320 60 1200 60 1080 60C960 60 840 60 720 60C600 60 480 60 360 60C240 60 120 60 60 60H0V0Z" fill="var(--color-surface)"/>
        </svg>
      </div>

      <div className={styles.footerInner}>
        <div className={styles.footerGrid}>
          {/* Brand Column */}
          <div className={styles.brandCol}>
            <div className={styles.brandName}>BHARATPRAVAS</div>
            <div className={styles.brandTagline}>Offbeat · Authentic · Yours</div>
            <p className={styles.brandDesc}>
              Curated small-group travel experiences across Maharashtra.
              Treks, beach getaways, heritage trails, and women-only tours
              designed for authentic discovery.
            </p>
            <div className={styles.socialLinks}>
              <a href={siteSettings.social.instagram} target="_blank" rel="noopener noreferrer" className={styles.socialLink} aria-label="Instagram">
                <AtSign size={18} />
              </a>
              <a href={siteSettings.social.facebook} target="_blank" rel="noopener noreferrer" className={styles.socialLink} aria-label="Facebook">
                <Globe size={18} />
              </a>
              <a href={siteSettings.social.youtube} target="_blank" rel="noopener noreferrer" className={styles.socialLink} aria-label="YouTube">
                <Play size={18} />
              </a>
              <a href={siteSettings.social.twitter} target="_blank" rel="noopener noreferrer" className={styles.socialLink} aria-label="Twitter">
                <Heart size={18} />
              </a>
            </div>
          </div>

          {/* Destinations */}
          <div className={styles.linkCol}>
            <h4>Destinations</h4>
            <ul>
              <li><a href="/destinations/western-ghats">Western Ghats</a></li>
              <li><a href="/destinations/coastal">Coastal Maharashtra</a></li>
              <li><a href="/destinations/hill-stations">Hill Stations</a></li>
              <li><a href="/destinations/heritage-forts">Heritage & Forts</a></li>
              <li><a href="/destinations/waterfalls">Waterfalls & Monsoon</a></li>
            </ul>
          </div>

          {/* Company */}
          <div className={styles.linkCol}>
            <h4>Company</h4>
            <ul>
              <li><a href="/about">About Us</a></li>
              <li><a href="/trips">All Trips</a></li>
              <li><a href="/women-only">Women-Only Tours</a></li>
              <li><a href="/custom">Custom Trips</a></li>
              <li><a href="/blog">Blog</a></li>
              <li><a href="/reviews">Reviews</a></li>
              <li><a href="/safety">Safety Guidelines</a></li>
            </ul>
          </div>

          {/* Contact */}
          <div className={styles.contactCol}>
            <h4>Get in Touch</h4>
            <div className={styles.contactItem}>
              <Mail size={16} />
              <span>{siteSettings.email}</span>
            </div>
            <div className={styles.contactItem}>
              <Phone size={16} />
              <span>{siteSettings.phone}</span>
            </div>
            <div className={styles.contactItem}>
              <MapPin size={16} />
              <span>{siteSettings.address}</span>
            </div>
            <div className={styles.contactItem}>
              <Clock size={16} />
              <span>{siteSettings.supportHours}</span>
            </div>
            <a href={whatsappUrl} target="_blank" rel="noopener noreferrer" className={styles.whatsappFooter}>
              <MessageCircle size={18} />
              Chat on WhatsApp
            </a>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className={styles.footerBottom}>
          <p className={styles.copyright}>
            © {new Date().getFullYear()} BharatPravas. All rights reserved.
          </p>
          <div className={styles.footerBottomLinks}>
            <a href="/terms">Terms & Conditions</a>
            <a href="/privacy">Privacy Policy</a>
            <a href="/cancellation">Cancellation Policy</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
