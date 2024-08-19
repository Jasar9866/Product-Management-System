import React, { useEffect, useState } from "react";
import axios from "axios";

function RegisteredEmployees() {
  const [employees, setEmployees] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  useEffect(() => {
    fetchEmployees();
  }, []);

  const fetchEmployees = async () => {
    try {
      const response = await axios.get(
        "http://localhost:5055/api/employee/all"
      );
      setEmployees(response.data);
      setLoading(false);
    } catch (error) {
      console.error("Error fetching employees:", error);
      setError("Failed to fetch employees");
      setLoading(false);
    }
  };

  const styles = {
    container: {
      marginTop: "1rem",
      marginLeft: "16rem",
      padding: "20px",
      backgroundColor: "#f5f5f5",
      borderRadius: "8px",
      boxShadow: "0 4px 8px rgba(0,0,0,0.1)",
    },
    table: {
      width: "100%",
      borderCollapse: "collapse",
      marginTop: "20px",
    },
    th: {
      padding: "12px",
      textAlign: "left",
      borderBottom: "1px solid #ddd",
    },
    td: {
      padding: "12px",
      textAlign: "left",
      borderBottom: "1px solid #ddd",
    },
    row: {
      backgroundColor: "#f9f9f9",
    },
    rowHover: {
      backgroundColor: "#e2e2e2",
    },
    tableResponsive: {
      overflowX: "auto",
    },
  };

  if (loading) return <p>Loading...</p>;
  if (error) return <p>{error}</p>;

  return (
    <div style={styles.container}>
      <h2>Registered Employees List</h2>
      <div style={styles.tableResponsive}>
        <table style={styles.table}>
          <thead>
            <tr>
              <th style={styles.th}>ID</th>
              <th style={styles.th}>Name</th>
              <th style={styles.th}>Email</th>
              <th style={styles.th}>Gender</th>
            </tr>
          </thead>
          <tbody>
            {employees.map((employee, index) => (
              <tr
                key={employee.id}
                style={index % 2 === 0 ? styles.row : styles.rowHover}
              >
                <td style={styles.td}>{employee.employeeid}</td>
                <td style={styles.td}>{employee.employeename}</td>
                <td style={styles.td}>{employee.email}</td>
                <td style={styles.td}>{employee.gender}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default RegisteredEmployees;
