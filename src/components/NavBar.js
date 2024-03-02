import React from 'react';
import logo from './images/v2_69.png';

const Navbar = () => {
  return (
    <nav style={styles.navbar}>
      <ul style={styles.navbarNav}>
      <li style={styles.navItem}>
          <a href="/" style={styles.navLink}>
            <div style={styles.logoContainer}>
              <img src={logo} alt="Logo" style={styles.logo} />
            </div>
          </a>
        </li>
        <li style={styles.navItem}>
          <a href="/" style={styles.navLink}>Home</a>
        </li>
        <li style={styles.navItem}>
          <a href="/components/Jordan" style={styles.navLink}>Landmarks</a>
        </li>
        <li style={styles.navItem}>
          <a href="/components/forms/ProfilePage" style={styles.navLink}>Profile</a>
        </li>
      </ul>
    </nav>
  );
}

const styles = {
  navbar: {
    backgroundColor: '#3b494d', 
    padding: '10px', 
    display: 'flex',
    alignItems: 'center', 
  },
  logoContainer: {
    marginRight: '20px',
  },
  logo: {
    width: '150px', 
    height: 'auto', 
  },
  navbarNav: {
    listStyleType: 'none', 
    padding: 0,
    margin: 0,
  },
  navItem: {
    display: 'inline-block',
    marginRight: '20px',
  },
  navLink: {
    color: '#bebebe',
    textDecoration: 'none', 
    fontSize: '40px', 
  }
};

export default Navbar;
