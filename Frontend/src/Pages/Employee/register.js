import React, { useState } from "react";
import axios from "axios";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";

function Register() {
  const [formData, setFormData] = useState({
    employeename: "",
    email: "",
    password: "",
    confirmPassword: "",
    gender: "",
  });
  const [message, setMessage] = useState("");
  const [messageStyle, setMessageStyle] = useState({});

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleRegister = async (e) => {
    e.preventDefault();
    if (formData.password !== formData.confirmPassword) {
      setMessage("Passwords do not match!");
      setMessageStyle({ color: "red" });
      return;
    }

    const userData = {
      employeename: formData.employeename,
      email: formData.email,
      password: formData.password,
      gender: formData.gender,
    };

    try {
      const response = await axios.post(
        "http://localhost:5055/api/employee/add",
        userData
      );
      if (response.status === 200) {
        setMessage("You have successfully registered your account!");
        setMessageStyle({ color: "green" });
        setFormData({
          employeename: "",
          email: "",
          password: "",
          confirmPassword: "",
          gender: "",
        });
      } else {
        setMessage("Registration failed. Please try again.");
        setMessageStyle({ color: "red" });
      }
    } catch (error) {
      console.error("Registration failed:", error);
      setMessage("Email already exists. Please use a different email.");
      setMessageStyle({ color: "red" });
    }
  };

  return (
    <div
      className="container-fluid"
      style={{
        backgroundRepeat: "no-repeat",
        backgroundColor: "#f8f9fa",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <div className="row p-3">
        <div
          className="col-sm-4 ms-auto me-auto pt-5 mt-3 shadow p-5 rounded"
          style={{
            background: "white",
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
            Sign Up
          </h4>
          <form className="ms-auto me-auto p-5" onSubmit={handleRegister}>
            <TextField
              id="employeename"
              label="Full Name"
              name="employeename"
              type="text"
              variant="outlined"
              fullWidth
              required
              value={formData.employeename}
              onChange={handleChange}
              className="mb-3"
            />
            <TextField
              id="email"
              label="Email"
              name="email"
              type="email"
              variant="outlined"
              fullWidth
              required
              value={formData.email}
              onChange={handleChange}
              className="mb-3"
            />
            <TextField
              id="password"
              label="Password"
              name="password"
              type="password"
              variant="outlined"
              fullWidth
              required
              value={formData.password}
              onChange={handleChange}
              className="mb-3"
            />
            <TextField
              id="confirm-password"
              label="Confirm Password"
              name="confirmPassword"
              type="password"
              variant="outlined"
              fullWidth
              required
              value={formData.confirmPassword}
              onChange={handleChange}
              className="mb-3"
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
              className="w-100 mt-3 p-3 mb-5"
              style={{ backgroundColor: "#032740", color: "#fff" }}
            >
              Register
            </Button>
            <div style={messageStyle}>{message}</div>
          </form>
        </div>
      </div>
    </div>
  );
}

export default Register;
