import React from 'react';
// import './HomePage.css';

function HomePage() {
  // Styles for the container, header, and paragraph elements
  const styles = {
    container: {
      marginLeft: "16rem",
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      backgroundColor: '#e0f7fa', // Changed background color to a light blue
      color: '#333',
      fontFamily: 'Arial, sans-serif',
      padding: '20px', // Added padding
      width: '80%' // Ensure the container takes full width if not already
    },
    header: {
      color: '#00695c', // Changed color to a dark teal
      fontSize: '2.5rem',
      textTransform: 'uppercase',
      letterSpacing: '1.5px',
      marginBottom: '2rem', // Added margin bottom for space below the header
      padding: '20px', // Adjusted padding
      marginTop: '5px',
      marginBottom: '5px',
    },
    section: {
      width: '100%', // Ensures the section takes full width
      padding: '30px', // Increased padding 
      borderRadius: '8px',
      marginBottom: '30px', // Adjusted margin bottom
    },
    varietyItem: {
      display: 'flex', // Ensure variety item is a flex container
      alignItems: 'center', // Align items vertically
      gap: '20px', // Add gap between image and description
      textAlign: 'left', // Align text to the left
      maxWidth: '900px', // Adjust max-width for better responsiveness
      backgroundColor: '#ffffff', // Changed background color to white
      boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)', // Softened box shadow
      borderRadius: '8px',
      overflow: 'hidden',
      padding: '20px',
      marginBottom: '20px', // Adjusted margin bottom
    },
    varietyImage: {
      maxWidth: '100px',
      height: '100px',
      flex: '0 0 200px', // Set flex properties for image
      borderRadius: '8px', // Added border radius to image
    },
    innerBox: {
      flex: '1', // Set flex properties for inner box (description)
    },
    para: {
      fontFamily: 'Arial, sans-serif',
      fontSize: '18px',
      lineHeight: '1.6',
      color: '#555',
      padding: '10px',
      borderRadius: '8px',
      margin: '5px',
    },
    btnPrimary: {
      display: 'inline-block',
      padding: '10px 20px',
      borderRadius: '5px',
      transition: 'background-color 0.3s, transform 0.3s',
      cursor: 'pointer',
      marginTop: '15px',
      backgroundColor: '#00695c', // Changed button background color to dark teal
      color: '#fff', // Button text color
      textDecoration: 'none',
    },
    btnPrimaryHover: {
      backgroundColor: '#004d40', // Button background color on hover
      transform: 'scale(1.05)', // Add a slight scale effect on hover
    },
  };

  return (
    <div style={styles.container}>
      <h1 style={styles.header}>Welcome to the Shop Management System</h1>
      <section style={styles.section} className="section variety-section">
        <div className="container-variety">
          <div className="variety-item" style={styles.varietyItem}>
            <img src="/Images/user.png" alt="Users" style={styles.varietyImage} />
            <div className="inner-box" style={styles.innerBox}>
              <h3>All Registered Customers</h3>
              <p style={styles.para}>
                Our valued customers can enjoy exclusive offers and updates on the latest products. 
                Stay informed about sales and special promotions just for you.
              </p>
              <a href="#" style={styles.btnPrimary} onMouseEnter={e => e.currentTarget.style.backgroundColor = styles.btnPrimaryHover.backgroundColor} onMouseLeave={e => e.currentTarget.style.backgroundColor = styles.btnPrimary.backgroundColor}>Learn More</a>
            </div>
          </div>
          <div className="variety-item" style={styles.varietyItem}>
            <img src="/Images/products.jpg" alt="Products" style={styles.varietyImage} />
            <div className="inner-box" style={styles.innerBox}>
              <h3>Products</h3>
              <p style={styles.para}>
                Explore our wide range of high-quality products. From the latest products 
                to everyday essentials, we have everything you need.
              </p>
              <a href="#" style={styles.btnPrimary} onMouseEnter={e => e.currentTarget.style.backgroundColor = styles.btnPrimaryHover.backgroundColor} onMouseLeave={e => e.currentTarget.style.backgroundColor = styles.btnPrimary.backgroundColor}>Learn More</a>
            </div>
          </div>
          <div className="variety-item" style={styles.varietyItem}>
            <img src="/Images/employee.png" alt="Employees" style={styles.varietyImage} />
            <div className="inner-box" style={styles.innerBox}>
              <h3>Employees</h3>
              <p style={styles.para}>
                Our dedicated team is here to assist you with all your shopping needs. 
                From customer service to product recommendations, we're here to help.
              </p>
              <a href="#" style={styles.btnPrimary} onMouseEnter={e => e.currentTarget.style.backgroundColor = styles.btnPrimaryHover.backgroundColor} onMouseLeave={e => e.currentTarget.style.backgroundColor = styles.btnPrimary.backgroundColor}>Learn More</a>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default HomePage;
