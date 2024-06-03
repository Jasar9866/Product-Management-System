import React, { useEffect, useState } from "react";
import axios from "axios";
import { useNavigate, Link } from "react-router-dom";
import { Button } from "@mui/material";
import { faAdd } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

function CustomerList() {
  const [customers, setCustomers] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  const navigate = useNavigate();

  useEffect(() => {
    fetchCustomers();
  }, []);

  const fetchCustomers = async () => {
    try {
      const response = await axios.get(
        "http://localhost:5055/api/customers/all"
      );
      setCustomers(response.data);
      setLoading(false);
    } catch (error) {
      console.error("Error fetching customers:", error);
      setError("Failed to fetch customers");
      setLoading(false);
    }
  };

  const handleDelete = async (customerId) => {
    try {
      await axios.delete(`http://localhost:5055/api/customers/${customerId}`);
      fetchCustomers(); // Refresh the list after deletion
    } catch (error) {
      console.error("Failed to delete customer:", error);
    }
  };

  const handleEdit = (customerId) => {
    navigate(`/editCustomer/${customerId}`); // Navigate to edit page and pass customer ID
  };

  const styles = {
    container: {
      marginLeft: "16rem",
      marginTop: "2rem",
      padding: "20px",
      backgroundColor: "#f9f9f9",
      borderRadius: "10px",
      boxShadow: "0 4px 12px rgba(0,0,0,0.1)",
    },
    header: {
      display: "flex",
      justifyContent: "space-between",
      alignItems: "center",
      marginBottom: "20px",
    },
    table: {
      width: "100%",
      borderCollapse: "collapse",
    },
    th: {
      padding: "12px",
      textAlign: "left",
      backgroundColor: "#007BFF",
      color: "white",
      borderBottom: "2px solid #ddd",
    },
    td: {
      padding: "12px",
      textAlign: "left",
      borderBottom: "1px solid #ddd",
    },
    row: {
      backgroundColor: "#fff",
    },
    rowHover: {
      backgroundColor: "#f1f1f1",
    },
    button: {
      padding: "5px 10px",
      margin: "5px",
      cursor: "pointer",
      fontSize: "14px",
    },
    editButton: {
      backgroundColor: "#007BFF",
      color: "white",
      border: "none",
      "&:hover": {
        backgroundColor: "#0056b3",
      },
    },
    deleteButton: {
      backgroundColor: "#DC3545",
      color: "white",
      border: "none",
      "&:hover": {
        backgroundColor: "#b21f2d",
      },
    },
    tableResponsive: {
      overflowX: "auto",
    },
    linkContainer: {
      display: "flex",
      alignItems: "center",
      justifyContent: "flex-start",
      margin: "10px 0",
    },
    link: {
      textDecoration: "none",
      color: "#007BFF",
      fontWeight: "bold",
      fontSize: "16px",
      display: "flex",
      alignItems: "center",
    },
    icon: {
      marginRight: "5px",
    },
  };

  if (loading) return <p>Loading...</p>;
  if (error) return <p>{error}</p>;

  return (
    <div style={styles.container}>
      <div style={styles.header}>
        <h2>All Customers</h2>
        <div style={styles.linkContainer}>
          <Link to="/addCustomer" style={styles.link}>
            <FontAwesomeIcon icon={faAdd} style={styles.icon} /> Add Customer
          </Link>
        </div>
      </div>
      <div style={styles.tableResponsive}>
        <table style={styles.table}>
          <thead>
            <tr>
              <th style={styles.th}>ID</th>
              <th style={styles.th}>First Name</th>
              <th style={styles.th}>Last Name</th>
              <th style={styles.th}>NIC</th>
              <th style={styles.th}>Email</th>
              <th style={styles.th}>Phone</th>
              <th style={styles.th}>Address</th>
              <th style={styles.th}>Gender</th>
              <th style={styles.th}>Action</th>
            </tr>
          </thead>
          <tbody>
            {customers.map((customer, index) => (
              <tr
                key={customer.id}
                style={index % 2 === 0 ? styles.row : styles.rowHover}
              >
                <td style={styles.td}>{customer.id}</td>
                <td style={styles.td}>{customer.firstName}</td>
                <td style={styles.td}>{customer.lastName}</td>
                <td style={styles.td}>{customer.nic}</td>
                <td style={styles.td}>{customer.email}</td>
                <td style={styles.td}>{customer.phone}</td>
                <td style={styles.td}>{customer.address}</td>
                <td style={styles.td}>{customer.gender}</td>
                <td style={styles.td}>
                  <Button
                    style={{ ...styles.button, ...styles.editButton }}
                    onClick={() => navigate(`/viewCustomer/${customer.id}`)}
                  >
                    View
                  </Button>
                  <Button
                    style={{ ...styles.button, ...styles.editButton }}
                    onClick={() => handleEdit(customer.id)}
                  >
                    Edit
                  </Button>
                  <Button
                    style={{ ...styles.button, ...styles.deleteButton }}
                    onClick={() => handleDelete(customer.id)}
                  >
                    Delete
                  </Button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default CustomerList;
