'use client';

import { useState, useEffect } from 'react';
import { MessageCircle } from 'lucide-react';
import styles from './Header.module.css';
import siteSettings from '@/data/siteSettings.json';

const navLinks = [
  { label: 'Destinations', href: '#destinations' },
  { label: 'Trips', href: '#departures' },
  { label: 'Women-Only', href: '#departures' },
  { label: 'Custom Trips', href: '#planner' },
  { label: 'About', href: '#founder' },
  { label: 'Contact', href: '#footer' },
];

export default function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    if (menuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    return () => { document.body.style.overflow = ''; };
  }, [menuOpen]);

  const whatsappUrl = `https://wa.me/${siteSettings.whatsappNumber}?text=${encodeURIComponent(siteSettings.whatsappMessage)}`;

  return (
    <header className={`${styles.header} ${scrolled ? styles.scrolled : ''}`} id="header">
      <div className={styles.headerInner}>
        <a href="/" className={styles.logo}>
          <div className={styles.logoTop}>
            <span className={styles.logoEmblem}>B</span>
            <span className={styles.logoName}>BHARATPRAVAS</span>
          </div>
          <span className={styles.logoTagline}>Offbeat · Authentic · Yours</span>
        </a>

        <nav className={styles.nav}>
          {navLinks.map((link) => (
            <a key={link.label} href={link.href} className={styles.navLink}>
              {link.label}
            </a>
          ))}
        </nav>

        <div className={styles.headerActions}>
          <a
            href={whatsappUrl}
            target="_blank"
            rel="noopener noreferrer"
            className={styles.whatsappBtn}
            aria-label="Chat on WhatsApp"
          >
            <MessageCircle size={20} />
          </a>
          <a href="#departures" className={styles.ctaBtn}>
            Explore Trips
          </a>
          <button
            className={`${styles.menuToggle} ${menuOpen ? styles.menuOpen : ''}`}
            onClick={() => setMenuOpen(!menuOpen)}
            aria-label="Toggle menu"
          >
            <span className={styles.menuBar}></span>
            <span className={styles.menuBar}></span>
            <span className={styles.menuBar}></span>
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <div className={`${styles.mobileMenu} ${menuOpen ? styles.open : ''}`}>
        {navLinks.map((link) => (
          <a
            key={link.label}
            href={link.href}
            className={styles.mobileNavLink}
            onClick={() => setMenuOpen(false)}
          >
            {link.label}
          </a>
        ))}
        <div className={styles.mobileCta}>
          <a href={whatsappUrl} target="_blank" rel="noopener noreferrer" className="btn btn-whatsapp btn-lg">
            <MessageCircle size={20} />
            Chat on WhatsApp
          </a>
        </div>
      </div>
    </header>
  );
}
