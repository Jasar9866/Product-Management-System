import React, { useState, useEffect, useRef } from "react";
import { useNavigate, Link } from "react-router-dom";
import { useAuth } from "./context/AuthContext";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUserGroup, faSignOutAlt, faReply, faUserCircle, faDashboard, faStaffAesculapius, faStore } from "@fortawesome/free-solid-svg-icons";


const Sidebar1 = () => {
  const navigate = useNavigate();
  const { setIsLoggedIn } = useAuth();
  const [showUsersDropdown, setShowUsersDropdown] = useState(false);
  const [showBooksDropdown, setShowBooksDropdown] = useState(false);
  const [showProductsDropdown, setShowProductsDropdown] = useState(false); // Define state for products dropdown
  const [showFeedbacksDropdown, setShowFeedbacksDropdown] = useState(false);

  const userName = localStorage.getItem("userName");

  const usersDropdownRef = useRef(null);
  const booksDropdownRef = useRef(null);
  const productsDropdownRef = useRef(null);
  const feedbacksDropdownRef = useRef(null);

  const logout = () => {
    localStorage.clear();
    setIsLoggedIn(false);
    navigate("/");
  };

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (usersDropdownRef.current && !usersDropdownRef.current.contains(event.target)) {
        setShowUsersDropdown(false);
      }
      if (booksDropdownRef.current && !booksDropdownRef.current.contains(event.target)) {
        setShowBooksDropdown(false);
      }
      if (feedbacksDropdownRef.current && !feedbacksDropdownRef.current.contains(event.target)) {
        setShowFeedbacksDropdown(false);
      }
      if (productsDropdownRef.current && !productsDropdownRef.current.contains(event.target)) {
        setShowProductsDropdown(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  const styles = {
    sidebar: {
      backgroundColor: "#2A1C10",
      position: "fixed",
      top: 0,
      left: 0,
      bottom: 0,
      width: "250px",
      zIndex: 1000
    },
    sidebarHeader: {
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
      padding: "20px",
      borderBottom: "1px solid #fff",
    },
    headerTitle: {
      fontFamily: "Sens-Serif, Verdana",
      fontSize: "20px",
      color: "#D3D3D3",
      textAlign: "center",
      margin: 0,
    },
    userInfo: {
      fontFamily: "Courier New, Monospace",
      color: "#D3D3D3",
      fontSize: "18px",
      margin: "10px 0",
    },
    linkContainer: {
      padding: "10px 0",
    },
    link: {
      display: "block",
      color: "whitesmoke",
      textDecoration: "none",
      padding: "10px 20px",
      fontSize: "18px",
      cursor: "pointer",
      transition: "background-color 0.3s",
    },
    dropdown: {
      backgroundColor: "#0B2952",
      display: "block",
      zIndex: 1001,
      marginLeft: "20px",
    },
    dropdownItem: {
      color: "whitesmoke",
      padding: "10px 20px",
      textDecoration: "none",
      fontSize: "16px",
      cursor: "pointer",
      transition: "background-color 0.3s",
      display: "block",
    },
    dropdownItemHover: {
      backgroundColor: "#1E5470",
    },
  };

  return (
    <div style={styles.sidebar}>
        

page content

      <div style={styles.sidebarHeader}>
        <h4 style={styles.headerTitle}>Jhon Keels Private Limited</h4>
      </div>
      <div style={{ ...styles.linkContainer, textAlign: "left", marginLeft: "20px" }}>
        <div style={styles.userInfo}><FontAwesomeIcon icon={faUserCircle} /> {userName}</div>
      </div>
      <div style={styles.linkContainer}>
        <Link to="/home" style={styles.link}>
          <FontAwesomeIcon icon={faDashboard} /> Dashboard
        </Link>
        <div ref={usersDropdownRef}>
          <div style={styles.link} onClick={() => setShowUsersDropdown(!showUsersDropdown)}>
            <FontAwesomeIcon icon={faStaffAesculapius} /> Employees
          </div>
          {showUsersDropdown && (
            <div style={styles.dropdown}>
              <Link to="/allEmployees" style={{ ...styles.dropdownItem, ...(showUsersDropdown ? styles.dropdownItemHover : null) }}>Employees List</Link>
             </div>
          )}
        </div>
        <div ref={booksDropdownRef}>
          <div style={styles.link} onClick={() => setShowBooksDropdown(!showBooksDropdown)}>
            <FontAwesomeIcon icon={faUserGroup} /> Customers
          </div>
          {showBooksDropdown && (
            <div style={styles.dropdown}>
              <Link to="/allCustomers" style={{ ...styles.dropdownItem, ...(showBooksDropdown ? styles.dropdownItemHover : null) }}>Customer List</Link>
              <Link to="/addCustomer" style={{ ...styles.dropdownItem, ...(showBooksDropdown ? styles.dropdownItemHover : null) }}>Add Customer</Link>
              <Link to="/allCustomers" style={{ ...styles.dropdownItem, ...(showBooksDropdown ? styles.dropdownItemHover : null) }}>Edit Customer</Link>
            </div>
          )}
        </div>
        <div ref={productsDropdownRef}>
          <div style={styles.link} onClick={() => setShowProductsDropdown(!showProductsDropdown)}>
            <FontAwesomeIcon icon={faStore} /> Product
          </div>
          {showProductsDropdown && (
            <div style={styles.dropdown}>
              <Link to="/productList" style={{ ...styles.dropdownItem, ...(showProductsDropdown ? styles.dropdownItemHover : null) }}>Product List</Link>
              <Link to="/addProduct" style={{ ...styles.dropdownItem, ...(showProductsDropdown ? styles.dropdownItemHover : null) }}>Add Product</Link>
              <Link to="/productList" style={{ ...styles.dropdownItem, ...(showProductsDropdown ? styles.dropdownItemHover : null) }}>Manage Products</Link>
            </div>
          )}
        </div>
        <div ref={feedbacksDropdownRef}>
          <div style={styles.link} onClick={() => setShowFeedbacksDropdown(!showFeedbacksDropdown)}>
            <FontAwesomeIcon icon={faReply} /> Reviews
          </div>
          {showFeedbacksDropdown && (
            <div style={styles.dropdown}>
              <Link to="/review" style={{ ...styles.dropdownItem, ...(showFeedbacksDropdown ? styles.dropdownItemHover : null) }}>Send Review</Link>
              <Link to="/reviewList" style={{ ...styles.dropdownItem, ...(showFeedbacksDropdown ? styles.dropdownItemHover : null) }}>View reviews</Link>
            </div>
          )}
        </div>
      </div>
      <div style={styles.linkContainer}>
        <div style={{ ...styles.link, marginTop: 'auto' }} onClick={logout}>
          <FontAwesomeIcon icon={faSignOutAlt} /> Logout
        </div>
      </div>
    </div>
  );
};

export default Sidebar1;
