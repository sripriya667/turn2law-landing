import { Users, Scale, BadgeCheck } from 'lucide-react';
import Head from 'next/head';
import { motion, AnimatePresence } from 'framer-motion';
import { FaRegLightbulb, FaHandshake, FaGavel, FaEnvelope } from 'react-icons/fa'; // Importing icons
import styles from '../styles/Home.module.css'; // Import CSS module
import React, { useEffect } from 'react';
import { useState } from "react";
import { Menu, X } from "lucide-react";

export default function Home() {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => setMenuOpen(!menuOpen);

  useEffect(() => {
    if (window.location.hash) {
      // Remove the hash to prevent auto-scrolling on refresh
      window.history.replaceState(null, '', window.location.pathname);
    }
  }, []);
  // Alert function when button is clicked
  const handleConsultNowClick = () => {
    alert("Thank you for your interest! A consultant will get in touch with you shortly.");
  };

  return (
    <div className={styles.container}>
      <Head>
        <title>Turn2Law - Legal Solutions</title>
        <meta name="description" content="Your one-stop legal service provider." />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      </Head>

      {/* Header */}
      <header className={styles.header}>

        <div className={styles.hamburger}>
          <span></span>
          <span></span>
          <span></span>
        </div>


        {/* Hero Section (keep as is below this) */}
        <div className={styles.heroContent}>
          <motion.h1
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 1 }}
            viewport={{ once: true }}
          >
            Welcome to <span className={styles.highlight}>Turn2Law</span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.2 }}
            viewport={{ once: true }}
          >
            Your gateway to instant legal advice, consultation & case assistance.
          </motion.p>

          <motion.button
            className={styles.ctaButton}
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.95 }}
            transition={{ duration: 0.3 }}
            onClick={handleConsultNowClick}
          >
            <b>📞 Get Legal Help Now</b>
          </motion.button>
        </div>
      </header>
      {/* Sticky Header Container */}
      <div className={styles.stickyHeader}>
        {/* Brand Logo + Title - Left */}
        <motion.div
          className={styles.brand}
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 1 }}
        >
          <img src="/image.png" alt="Turn2Law Logo" className={styles.brandLogo} />

        </motion.div>

        {/* Nav Links - Right */}
        <nav className={styles.navbar}>
          <ul className={styles.navLinks}>
            <li>
              <span
                className={styles.navLink}
                onClick={() => {
                  document.getElementById('about')?.scrollIntoView({ behavior: 'smooth' });
                }}
              >
                About
              </span>
            </li>
            <li>
              <span
                className={styles.navLink}
                onClick={() => {
                  document.getElementById('features')?.scrollIntoView({ behavior: 'smooth' });
                }}
              >
                Features
              </span>
            </li>
            <li>
              <span
                className={styles.navLink}
                onClick={() => {
                  document.getElementById('services')?.scrollIntoView({ behavior: 'smooth' });
                }}
              >
                Services
              </span>
            </li>
            <li>
              <span
                className={styles.navLink}
                onClick={() => {
                  document.getElementById('how')?.scrollIntoView({ behavior: 'smooth' });
                }}
              >
                How It Works
              </span>
            </li>
            <li>
              <span
                className={styles.navLink}
                onClick={() => {
                  document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' });
                }}
              >
                Contact
              </span>
            </li>
          </ul>
          <button className={styles.hamburgerBtn} onClick={toggleMenu}>
            {menuOpen ? <X size={28} /> : <Menu size={28} />}
          </button>

          <AnimatePresence>
            {menuOpen && (
              <motion.div
                className={styles.mobileMenu}
                initial={{ y: -200, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                exit={{ y: -200, opacity: 0 }}
                transition={{ duration: 0.4 }}
              >
                <ul>
                  <li><a href="#about" onClick={toggleMenu}>About</a></li>
                  <li><a href="#features" onClick={toggleMenu}>Features</a></li>
                  <li><a href="#services" onClick={toggleMenu}>Services</a></li>
                  <li><a href="#howitworks" onClick={toggleMenu}>howItWorks</a></li>
                  <li><a href="#contact" onClick={toggleMenu}>Contact</a></li>
                </ul>
              </motion.div>
            )}
          </AnimatePresence>
        </nav>
      </div>


      <motion.section
        id="about"
        className={styles.about}
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
      >
        <h2 className={styles.sectionTitle}>About Us</h2>
        <p className={styles.sectionDescription}>
          Turn2Law is a modern legal platform offering seamless access to legal services, expert advice, and personalized solutions. From instant agreements to lawyer consultations, we make justice accessible, affordable, and efficient for everyone.
        </p>

        <div className={styles.aboutContent}>
          <div className={styles.aboutBox}>
            <Users className={styles.aboutIcon} />
            <h3>Who We Are</h3>
            <p>
              Turn2Law is a modern legal service provider committed to delivering accessible, professional, and efficient legal assistance.
              Our team of experienced attorneys and legal advisors serve individuals, startups, and enterprises with integrity and innovation.
            </p>
          </div>
          <div className={styles.aboutBox}>
            <Scale className={styles.aboutIcon} />
            <h3>What We Do</h3>
            <ul>
              <li>⚖️ Civil & Criminal Litigation</li>
              <li>👪 Family and Divorce Law</li>
              <li>🏢 Corporate Legal Consulting</li>
              <li>🏠 Property & Real Estate Law</li>
              <li>📝 Contract Drafting and Review</li>
            </ul>
          </div>
          <div className={styles.aboutBox}>
            <BadgeCheck className={styles.aboutIcon} />
            <h3>Why Choose Us</h3>
            <p>
              With Turn2Law, you don’t just get legal advice — you gain a reliable legal partner.
              Our platform ensures transparency, seamless communication, and timely case updates.
            </p>
          </div>
        </div>
      </motion.section>
      {/* Key Features Section */}
      <section id="features" className={styles.features}>
        <motion.h2
          initial={{ opacity: 0, y: 100 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          viewport={{ once: true }}
        >
          Key Features
        </motion.h2>

        <div className={styles.cardContainer}>
          <motion.div
            className={styles.card}
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 1 }}
            viewport={{ once: true }}
          >
            <FaRegLightbulb className={styles.icon} />
            <h3>Instant Access</h3>
            <p>Get immediate access to legal consultations at your convenience.</p>
          </motion.div>

          <motion.div
            className={styles.card}
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.2 }}
            viewport={{ once: true }}
          >
            <FaHandshake className={styles.icon} />
            <h3>Lawyer Matchmaking</h3>
            <p>We connect you with lawyers who fit your legal needs.</p>
          </motion.div>

          <motion.div
            className={styles.card}
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.4 }}
            viewport={{ once: true }}
          >
            <FaGavel className={styles.icon} />
            <h3>Book consultations based on your case</h3>
            <p>Schedule a consultation at your convenience.</p>
          </motion.div>
        </div>

        <motion.button
          className={styles.btn}
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.95 }}
          onClick={handleConsultNowClick} // replace with your actual handler
        >
          Consult Now
        </motion.button>
      </section>

      {/* Our Services Section */}
      <section className={styles.servicesSection} id="services">
        <h2 className={styles.sectionTitle}>Our Services</h2>
        <div className={styles.servicesGrid}>
          <div className={styles.serviceCard}>
            <h3>Legal Consultation</h3>
            <p>Expert legal advice tailored to your needs, delivered with clarity and precision.</p>
          </div>
          <div className={styles.serviceCard}>
            <h3>Contract Drafting & Review</h3>
            <p>Professionally drafted and reviewed contracts to protect your rights and interests.</p>
          </div>
          <div className={styles.serviceCard}>
            <h3>Dispute Resolution</h3>
            <p>Effective negotiation, mediation, and litigation strategies to resolve conflicts.</p>
          </div>
          <div className={styles.serviceCard}>
            <h3>Corporate Law Advisory</h3>
            <p>End-to-end legal support for businesses, startups, and corporate transactions.</p>
          </div>
        </div>
      </section>
      {/* How It Works Section */}
      <section id="how" className={styles.howItWorks}>
        <motion.h2
          initial={{ opacity: 0, y: 100 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          viewport={{ once: true }}
        >
          How It Works
        </motion.h2>
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1.5 }}
        >
          It’s simple! Answer a few questions, and our system will connect you with a qualified lawyer who fits your needs.
        </motion.p>
      </section>
      <section id="testimonials" className={styles.testimonialsSection}>
        <motion.h2
          className={styles.sectionTitle}
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          What Our Clients Say
        </motion.h2>

        <div className={styles.testimonialsGrid}>
          <motion.div
            className={styles.testimonialCard}
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <p>"Turn2Law made my legal process so smooth. Highly recommended!"</p>
            <h4>– Priya Sharma</h4>
          </motion.div>

          <motion.div
            className={styles.testimonialCard}
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
          >
            <p>"Efficient, responsive, and professional service. Thank you!"</p>
            <h4>– Rohan Mehta</h4>
          </motion.div>

          <motion.div
            className={styles.testimonialCard}
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            viewport={{ once: true }}
          >
            <p>"A reliable platform for all legal needs. Excellent team!"</p>
            <h4>– Anita Verma</h4>
          </motion.div>
        </div>
      </section>


      {/* Contact Section */}
      <section id="contact" className={styles.contact}>
        <motion.h2
          initial={{ opacity: 0, y: 100 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          viewport={{ once: true }}
        >
          Contact Us
        </motion.h2>
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1.5 }}
        >
          <FaEnvelope class=".emailIcon"></FaEnvelope> Reach out: <a href="mailto:support@turn2law.com">support@turn2law.com</a>
        </motion.p>
      </section>

      {/* Footer */}
      {/* Footer */}
      <footer className={styles.footer}>
        <div className={styles.footerContent}>
          <div className={styles.footerColumn}>
            <img src="/image.png" alt="Turn2Law Logo" className={styles.footerLogo} />
            <p>Empowering legal solutions for everyone.</p>
          </div>

          <div className={styles.footerColumn}>
            <h4>Quick Links</h4>
            <ul>
              <li><a href="#about">About</a></li>
              <li><a href="#features">Features</a></li>
              <li><a href="#services">Services</a></li>
              <li><a href="#how">How It Works</a></li>
              <li><a href="#contact">Contact</a></li>
            </ul>
          </div>

          <div className={styles.footerColumn}>
            <h4>Contact Us</h4>
            <p>Email: <a href="mailto:support@turn2law.com">support@turn2law.com</a></p>
            <p>Phone: +91 98765 43210</p>
            <div className={styles.socialIcons}>
              <a href="#"><i className="fab fa-facebook"></i></a>
              <a href="#"><i className="fab fa-twitter"></i></a>
              <a href="#"><i className="fab fa-linkedin"></i></a>
            </div>
          </div>
        </div>

        <div className={styles.footerBottom}>
          <p>&copy; {new Date().getFullYear()} Turn2Law. All rights reserved.</p>
        </div>
      </footer>


      {/* Floating Chatbot Icon */}
      <motion.div
        className={styles.chatbotIcon}
        initial={{ y: 0 }}
        animate={{ y: [0, -10, 0] }}
        transition={{
          duration: 2,
          repeat: Infinity,
          repeatType: 'loop',
          ease: 'easeInOut'
        }}
      >
        <img src="https://cdn-icons-png.flaticon.com/512/4712/4712027.png" alt="Chatbot" />
      </motion.div>
    </div>
  );
}
