import React, { useEffect, useState } from "react";
import axios from "axios";
import { useParams } from "react-router-dom";
import { Paper, Typography, CircularProgress } from "@mui/material";
import "./viewCustomer.css";

function ViewCustomer() {
  const { customerId } = useParams();
  const [customer, setCustomer] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  useEffect(() => {
    axios
      .get(`http://localhost:5055/api/customers/${customerId}`)
      .then((response) => {
        setCustomer(response.data);
        setLoading(false);
      })
      .catch((err) => {
        console.error("Error fetching customer:", err);
        setError("Failed to load customer data");
        setLoading(false);
      });
  }, [customerId]);

  if (loading)
    return (
      <div className="loading">
        <CircularProgress />
      </div>
    );
  if (error) return <div className="error-message">{error}</div>;
  if (!customer) return <div className="no-customer">No customer found</div>;

  return (
    <div className="view-customer-container">
      <Paper elevation={3} className="customer-paper">
        <Typography variant="h4" component="h2" gutterBottom>
          Customer Details
        </Typography>
        <div className="customer-detail">
          <strong>ID:</strong> <span>{customer.id}</span>
        </div>
        <div className="customer-detail">
          <strong>First Name:</strong> <span>{customer.firstName}</span>
        </div>
        <div className="customer-detail">
          <strong>Last Name:</strong> <span>{customer.lastName}</span>
        </div>
        <div className="customer-detail">
          <strong>NIC:</strong> <span>{customer.nic}</span>
        </div>
        <div className="customer-detail">
          <strong>Email:</strong> <span>{customer.email}</span>
        </div>
        <div className="customer-detail">
          <strong>Phone:</strong> <span>{customer.phone}</span>
        </div>
        <div className="customer-detail">
          <strong>Address:</strong> <span>{customer.address}</span>
        </div>
        <div className="customer-detail">
          <strong>Gender:</strong> <span>{customer.gender}</span>
        </div>
      </Paper>
    </div>
  );
}

export default ViewCustomer;
