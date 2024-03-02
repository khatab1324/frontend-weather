import React from 'react';
import logo from './images/v2_69.png';
import Github from './images/github.png'

const Footer = () => {
  return (
    <footer id="footer"style={styles.footer}>
      <div style={styles.footerContent}>
        <p>&copy; 2024 WeatherWise Inc. All rights reserved.</p>
        <div style={styles.socialIcons}>
        <div style={styles.logoContainer}>
            <a href="/" style={styles.iconLink}>
              <img src={Github} alt="Github" style={styles.Github} />
            </a>
          </div>
          <a href="https://github.com/Osamasubani2003" style={styles.iconLink}><i className="fab fa-facebook-f"></i>Osama Subani</a>
          <a href="https://github.com/omarSarawi" style={styles.iconLink}><i className="fab fa-instagram"></i>Omar srawi</a>
        </div>
        <p>
          <div style={styles.logoContainer}>
            <a href="/" style={styles.iconLink}>
              <img src={logo} alt="Logo" style={styles.logo} />
            </a>
          </div>
        </p>
      </div>
    </footer>
  );
}

const styles = {
  footer: {
    backgroundColor: '#3b494d',
    color: '#bebebe',
    padding: '40px 0',
    textAlign: 'center',
  },
  footerContent: {
    maxWidth: '800px',
    margin: '0 auto',
  },
  link: {
    color: '#bebebe',
    textDecoration: 'none',
  }, 
  logoContainer: {
  marginRight: '20px',
  },
  logo: {
    width: '300px', 
    height: 'auto', 
  },
  Github:{
    
    width: '50px', 
    height: 'auto', 
  },
  socialIcons: {
    marginTop: '20px',
  },
  iconLink: {
    color: '#bebebe',
    fontSize: '24px',
    margin: '0 10px',
    textDecoration: 'none',
  },
};

export default Footer;
