import React from 'react';
import { FaGithub } from 'react-icons/fa';
import logo from './images/v2_69.png';

const Footer = () => (
  <footer id="footer" style={styles.footer}>
    <div style={styles.logoContainer}>
      <a href="/" style={styles.iconLink}>
        <img src={logo} alt="Logo" style={styles.logo} />
      </a>
    </div>
    <div style={styles.footerContent}>
      <p style={styles.text}>&copy; 2024 WeatherWise Inc. All rights reserved.</p>
      <div style={styles.socialIcons}>
        <IconLink href="https://github.com/omarSarawi" icon={<FaGithub />} text="Omar Sarawi" />
        <IconLink href="https://github.com/Osamasubani2003" icon={<FaGithub />} text="Osama Subani" />
      </div>
    </div>
  </footer>
);

const IconLink = ({ href, icon, text }) => (
  <div style={styles.iconContainer}>
    <a href={href} style={styles.iconLink}>
      {icon}
      {text && <span style={styles.iconText}>{text}</span>}
    </a>
  </div>
);

const styles = {
  footer: {
    backgroundColor: '#3b494d',
    color: '#bebebe',
    textAlign: 'center',
    fontFamily: 'Arial, sans-serif',
    padding: '20px 0',
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  footerContent: {
    flex: '1',
    textAlign: 'center',
  },
  logoContainer: {
    marginLeft: '10px', // Adjust the margin here to move the logo to the right
    textAlign: 'left',
  },
  logo: {
    width: '100px',
    height: 'auto',
  },
  text: {
    fontSize: '14px',
    marginBottom: '10px',
  },
  iconContainer: {
    marginRight: '20px',
  },
  icon: {
    width: '30px',
    height: 'auto',
  },
  iconText: {
    marginLeft: '5px',
  },
  socialIcons: {
    display: 'flex',
    justifyContent: 'center',
  },
  iconLink: {
    color: '#bebebe',
    fontSize: '18px',
    textDecoration: 'none',
    display: 'flex',
    alignItems: 'center',
  },
};

export default Footer;
