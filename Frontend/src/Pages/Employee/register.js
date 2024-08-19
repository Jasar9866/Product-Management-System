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
    <div style={styles.background}>
      <div style={styles.overlay}>
        <div className="shadow p-5 rounded" style={styles.formContainer}>
          <h4 className="mb-4 text-center" style={styles.header}>
            Sign Up
          </h4>
          <form onSubmit={handleRegister}>
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
              fullWidth
              style={styles.button}
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

const styles = {
  background: {
    backgroundImage:
      'url("https://free-3dtextureshd.com/wallpapers/Abstract/Desktop%20version/1920%20x%201080/23_Abstract_Background_1920x1080px.jpg")', // Image URL
    backgroundSize: "cover",
    backgroundPosition: "center",
    height: "90vh",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
  },
  overlay: {
    width: "100%",
    height: "100%",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
  },
  formContainer: {
    maxWidth: "400px",
    width: "100%",
    background: "white",
    borderRadius: "10px",
    padding: "20px",
  },
  header: {
    fontWeight: "900",
    fontFamily: "Sen, sans-serif",
  },
  button: {
    backgroundColor: "blue",
    color: "#fff",
  },
};

export default Register;
