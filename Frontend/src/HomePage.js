import React from "react";

function HomePage() {
  const styles = {
    container: {
      marginLeft: "16rem",
      display: "flex",
      flexDirection: "column",
      alignItems: "center",
      backgroundColor: "#e0f7fa",
      color: "#333",
      fontFamily: "Arial, sans-serif",
      padding: "20px",
      width: "80%",
    },
    header: {
      color: "#00695c",
      fontSize: "2.5rem",
      textTransform: "uppercase",
      letterSpacing: "1.5px",
      marginBottom: "2rem",
      padding: "20px",
      marginTop: "5px",
      marginBottom: "5px",
    },
    section: {
      width: "100%",
      padding: "30px",
      borderRadius: "8px",
      marginBottom: "30px",
    },
    varietyItem: {
      display: "flex",
      alignItems: "center",
      gap: "20px",
      textAlign: "left",
      maxWidth: "900px",
      backgroundColor: "#ffffff",
      boxShadow: "0 4px 8px rgba(0, 0, 0, 0.1)",
      borderRadius: "8px",
      overflow: "hidden",
      padding: "20px",
      marginBottom: "20px",
    },
    varietyImage: {
      maxWidth: "100px",
      height: "100px",
      flex: "0 0 200px",
      borderRadius: "8px",
    },
    innerBox: {
      flex: "1",
    },
    para: {
      fontFamily: "Arial, sans-serif",
      fontSize: "18px",
      lineHeight: "1.6",
      color: "#555",
      padding: "10px",
      borderRadius: "8px",
      margin: "5px",
    },
    btnPrimary: {
      display: "inline-block",
      padding: "10px 20px",
      borderRadius: "5px",
      transition: "background-color 0.3s, transform 0.3s",
      cursor: "pointer",
      marginTop: "15px",
      backgroundColor: "#00695c",
      color: "#fff",
      textDecoration: "none",
    },
    btnPrimaryHover: {
      backgroundColor: "#004d40",
      transform: "scale(1.05)",
    },
  };

  return (
    <div style={styles.container}>
      <h1 style={styles.header}>Welcome to the Shop Management System</h1>
      <section style={styles.section} className="section variety-section">
        <div className="container-variety">
          <div className="variety-item" style={styles.varietyItem}>
            <img
              src="/Images/user.png"
              alt="Users"
              style={styles.varietyImage}
            />
            <div className="inner-box" style={styles.innerBox}>
              <h3>Customers</h3>
              <p style={styles.para}>
                Our valued customers can enjoy exclusive offers and updates on
                the latest products. Stay informed about sales and special
                promotions just for you.
              </p>
              <a
                href="#"
                style={styles.btnPrimary}
                onMouseEnter={(e) =>
                  (e.currentTarget.style.backgroundColor =
                    styles.btnPrimaryHover.backgroundColor)
                }
                onMouseLeave={(e) =>
                  (e.currentTarget.style.backgroundColor =
                    styles.btnPrimary.backgroundColor)
                }
              >
                Learn More
              </a>
            </div>
          </div>
          <div className="variety-item" style={styles.varietyItem}>
            <img
              src="/Images/products.jpg"
              alt="Products"
              style={styles.varietyImage}
            />
            <div className="inner-box" style={styles.innerBox}>
              <h3>Products</h3>
              <p style={styles.para}>
                Explore our wide range of high-quality products. From the latest
                products to everyday essentials, we have everything you need.
              </p>
              <a
                href="#"
                style={styles.btnPrimary}
                onMouseEnter={(e) =>
                  (e.currentTarget.style.backgroundColor =
                    styles.btnPrimaryHover.backgroundColor)
                }
                onMouseLeave={(e) =>
                  (e.currentTarget.style.backgroundColor =
                    styles.btnPrimary.backgroundColor)
                }
              >
                Learn More
              </a>
            </div>
          </div>
          <div className="variety-item" style={styles.varietyItem}>
            <img
              src="/Images/employee.png"
              alt="Employees"
              style={styles.varietyImage}
            />
            <div className="inner-box" style={styles.innerBox}>
              <h3>Employees</h3>
              <p style={styles.para}>
                Our dedicated team is here to assist you with all your shopping
                needs. From customer service to product recommendations, we're
                here to help.
              </p>
              <a
                href="#"
                style={styles.btnPrimary}
                onMouseEnter={(e) =>
                  (e.currentTarget.style.backgroundColor =
                    styles.btnPrimaryHover.backgroundColor)
                }
                onMouseLeave={(e) =>
                  (e.currentTarget.style.backgroundColor =
                    styles.btnPrimary.backgroundColor)
                }
              >
                Learn More
              </a>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default HomePage;
