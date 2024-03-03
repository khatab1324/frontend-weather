import React from "react";
import { FaUser } from "react-icons/fa"; // Import the React icon for the profile
import logo from "./images/v2_69.png";
const username = sessionStorage.getItem("username");
const Navbar = () => (
  <nav style={styles.navbar}>
    <ul style={styles.navbarNav}>
      <NavItem link="/">{username ? `${username}` : <Logo />}</NavItem>
      <NavItem link="/">Home</NavItem>
      <NavItem link="/components/Jordan">Landmarks</NavItem>
    </ul>
    <div style={styles.profileContainer}>
      <NavItem link="/components/forms/ProfilePage">
        <FaUser /> {/* Replace "Profile" with the React icon */}
      </NavItem>
    </div>
  </nav>
);

const NavItem = ({ link, children }) => (
  <li style={styles.navItem}>
    <NavLink href={link}>{children}</NavLink>
  </li>
);

const NavLink = ({ href, children }) => (
  <a href={href} style={styles.navLink}>
    {children}
  </a>
);

const Logo = () => (
  <div style={styles.logoContainer}>
    <img src={logo} alt="Logo" style={styles.logo} />
  </div>
);

const styles = {
  navbar: {
    backgroundColor: "#3b494d",
    padding: "10px",
    display: "flex",
    alignItems: "center",
    justifyContent: "space-between",
  },
  navbarNav: {
    listStyleType: "none",
    padding: 0,
    margin: 0,
    display: "flex",
    alignItems: "center",
  },
  navItem: {
    marginRight: "20px",
  },
  navLink: {
    color: "#bebebe",
    textDecoration: "none",
    fontSize: "18px",
    transition: "color 0.3s ease",
  },
  logoContainer: {
    marginRight: "20px",
  },
  logo: {
    width: "150px",
    height: "auto",
  },
  profileContainer: {
    display: "flex",
    alignItems: "center",
  },
};

export default Navbar;
