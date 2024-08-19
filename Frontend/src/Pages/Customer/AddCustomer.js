import React, { useState } from "react";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";

function AddCustomer() {
  const initialFormData = {
    firstName: "",
    lastName: "",
    nic: "",
    dateOfBirth: "",
    email: "",
    phone: "",
    address: "",
    gender: "",
  };

  const [formData, setFormData] = useState(initialFormData);
  const [message, setMessage] = useState("");
  const [messageStyle, setMessageStyle] = useState({});

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    
    fetch("http://localhost:5055/api/customers/add", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(formData),
    })
      .then((response) => response.json())
      .then((data) => {
        if (data.id) {
          setMessage("Customer has been successfully added!");
          setMessageStyle({ color: "green" });
          setFormData(initialFormData); // Reset form after successful registration
        } else {
          setMessage(data.message || "Failed to add Customer"); // Assuming the error message
          setMessageStyle({ color: "red" });
        }
      })
      .catch((error) => {
        console.error("Error:", error);
        setMessage("Failed to add customer. Please try again.");
        setMessageStyle({ color: "red" });
      });
  };

  return (
    <div
      className="container-fluid"
      style={{
        marginTop: "2rem",
        background: "white",
        backgroundRepeat: "no-repeat",
        backgroundSize: "cover",
        height: "100vh",
      }}
    >
      <div className="row p-3">
        <div
          className="col-sm-8 mx-auto pt-5 mt-3 shadow"
          style={{
            backdropFilter: "blur(5px)",
            backgroundColor: "rgba(255, 255, 255)",
            boxShadow: "0 15px 20px rgba(0, 0, 0, 0.6)",
            borderRadius: "10px",
          }}
        >
          <h4
            style={{
              fontWeight: "900",
              fontFamily: "sen sarif",
              textAlign: "center",
            }}
          >
            Add Customer
          </h4>
          <form
            className="p-5"
            onSubmit={handleSubmit}
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(2, 1fr)",
              gap: "20px",
            }}
          >
            <TextField
              label="First Name"
              name="firstName"
              variant="outlined"
              fullWidth
              required
              value={formData.firstName}
              onChange={handleChange}
              style={{ marginBottom: 12 }}
            />
            <TextField
              label="Last Name"
              name="lastName"
              variant="outlined"
              fullWidth
              required
              value={formData.lastName}
              onChange={handleChange}
              style={{ marginBottom: 12 }}
            />
            <TextField
              label="NIC"
              name="nic"
              variant="outlined"
              fullWidth
              required
              value={formData.nic}
              onChange={handleChange}
              style={{ marginBottom: 12 }}
            />

            <TextField
              id="dateOfBirth"
              label="Date of Birth"
              name="dateOfBirth"
              type="date"
              variant="outlined"
              fullWidth
              required
              value={formData.dateOfBirth}
              onChange={handleChange}
              InputLabelProps={{ shrink: true }}
              style={{ marginBottom: 12 }}
            />
            <TextField
              label="Email"
              name="email"
              type="email"
              variant="outlined"
              fullWidth
              required
              value={formData.email}
              onChange={handleChange}
              style={{ marginBottom: 12 }}
            />
            <TextField
              label="Phone"
              name="phone"
              type="tel"
              variant="outlined"
              fullWidth
              required
              value={formData.phone}
              onChange={handleChange}
              style={{ marginBottom: 12 }}
            />

            <TextField
              label="Address"
              name="address"
              variant="outlined"
              fullWidth
              required
              value={formData.address}
              onChange={handleChange}
              style={{ marginBottom: 12 }}
            />
            <div
              style={{
                display: "flex",
                alignItems: "center",
                margin: "20px 0",
              }}
            >
              <div style={{ marginRight: "10px" }}>Gender:</div>
              <div className="gender-category">
                <label style={{ marginRight: "10px" }}>
                  <input
                    type="radio"
                    name="gender"
                    value="male"
                    onChange={handleChange}
                    checked={formData.gender === "male"}
                    required
                  />{" "}
                  Male
                </label>
                <label style={{ marginRight: "10px" }}>
                  <input
                    type="radio"
                    name="gender"
                    value="female"
                    onChange={handleChange}
                    checked={formData.gender === "female"}
                  />{" "}
                  Female
                </label>
                <label>
                  <input
                    type="radio"
                    name="gender"
                    value="other"
                    onChange={handleChange}
                    checked={formData.gender === "other"}
                  />{" "}
                  Other
                </label>
              </div>
            </div>
            <Button
              variant="contained"
              type="submit"
              className="w-100 mt-3 p-3"
              style={{ backgroundColor: "blue", marginLeft: "13rem" }}
            >
              Add Customer
            </Button>
            <br></br>
            <br></br>
            <br></br>
            <div style={messageStyle}>{message}</div>
          </form>
        </div>
      </div>
    </div>
  );
}

export default AddCustomer;
