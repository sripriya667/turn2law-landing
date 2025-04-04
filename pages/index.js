import { motion } from 'framer-motion';
import { FaRegLightbulb, FaHandshake, FaGavel, FaPhoneAlt } from 'react-icons/fa'; // Importing icons
import styles from '../styles/Home.module.css'; // Import CSS module

export default function Home() {
    // Alert function when button is clicked
    const handleConsultNowClick = () => {
      alert("Thank you for your interest! A consultant will get in touch with you shortly.");
    };
    
  return (
    <div className={styles.container}>
      {/* Header */}
      <header className={styles.header}>

        <motion.h1 
            initial={{ opacity: 0, y: 100 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 1 }}
            viewport={{ once: true }}
        >
          Welcome to Turn2Law
        </motion.h1>
        <motion.p 
          initial={{ scale: 0.8, opacity: 0 }} 
          animate={{ scale: 1, opacity: 1 }} 
          transition={{ duration: 1 }}
        >
          Your one-stop platform for legal services
        </motion.p>

         {/* Logo */}
         <motion.div 
          className={styles.logo}
          initial={{ opacity: 0, y: -100 }} // Start from top
          animate={{ opacity: 1, y: 0 }}   // Fall into place
          transition={{ duration: 1, ease: 'easeOut' }} // Add fall timing
        >
          <img src="/image.png" alt="Official Turn2Law company logo" width = {100} height = {100}/>
        </motion.div>

      </header>
        {/* Key Features Section */}
        <section className={styles.features}>
        <motion.h2
        initial={{ opacity: 0, y: 100 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
        viewport={{ once: true }}
      >
    Key Features & Services
  </motion.h2>
  <div className={styles.cardContainer}>
    <motion.div
      className={styles.card}
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 1 }}
    >
      <FaRegLightbulb className={styles.icon} />
      <h3>Instant Access</h3>
      <p>Get immediate access to legal consultations at your convenience.</p>
    </motion.div>

    <motion.div
      className={styles.card}
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 1, delay: 0.2 }}
    >
      <FaHandshake className={styles.icon} />
        <h3>Lawyer Matchmaking</h3>
        <p>We connect you with lawyers who fit your legal needs.</p>
    </motion.div>

    <motion.div
      className={styles.card}
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 1, delay: 0.4 }}
    >
      <FaGavel className={styles.icon} />
      <h3>Book consultations based on your case</h3>
      <p>Schedule a consultation at your convenience.</p>
    </motion.div>
  </div>

  <motion.button
    className={styles.btn}
    whileHover={{ scale: 1.1 }}
    whileTap={{ scale: 0.9 }}
    onClick={handleConsultNowClick} // Add the click handler here
  >
    Consult Now
  </motion.button>
</section>


      {/* How It Works Section */}
      <section className={styles.howItWorks}>
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

      {/* Contact Section */}
      <section className={styles.contact}>
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
          <FaPhoneAlt className={styles.icon1} /> Reach out: <a href="mailto:support@turn2law.com">support@turn2law.com</a>
        </motion.p>
      </section>

      {/* Footer */}
      <footer className={styles.footer}>
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 2 }}
        >
          &copy; 2025 Turn2Law. All rights reserved.
        </motion.p>
      </footer>
    </div>
  );
}
