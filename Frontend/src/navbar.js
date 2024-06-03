import React from "react";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faRegistered, faSignIn } from "@fortawesome/free-solid-svg-icons";

const Navbar = () => {
  const styles = {
    navbar: {
      backgroundColor: "#292B44",
      display: "flex",
      justifyContent: "space-between",
      alignItems: "center",
      padding: "20px",
    },
    title: {
      fontFamily: "Sens-Serif, Verdana",
      fontSize: "50px",
      lineHeight: "1",
      color: "#D3D3D3",
      textAlign: "center",
      borderRadius: "8px",
      margin: "0",
    },
    subtitle: {
      fontFamily: "Courier New, Monospace",
      color: "#D3D3D3",
      fontSize: "18px",
      padding: "10px",
    },
    linkContainer: {
      display: "flex",
      justifyContent: "center",
    },
    link: {
      color: "whitesmoke",
      textDecoration: "none",
      margin: "0 15px",
      fontSize: "18px",
    },
  };

  return (
    <div>
      <nav style={styles.navbar}>
        <div>
          <h4 style={styles.title}>Product Management System</h4>
        </div>
        <div style={styles.linkContainer}>
          <Link to="/" style={styles.link}>
            <FontAwesomeIcon icon={faSignIn} style={styles.icon} /> Login
          </Link>
          <Link to="/registerEmployee" style={styles.link}>
            <FontAwesomeIcon icon={faRegistered} style={styles.icon} /> Register
          </Link>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
