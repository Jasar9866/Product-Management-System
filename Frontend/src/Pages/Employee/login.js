import React, { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { useAuth } from "../../context/AuthContext";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";

function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const navigate = useNavigate();
  const { setIsLoggedIn } = useAuth();

  const handleLogin = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post(
        "http://localhost:5055/api/employee/login",
        { email, password }
      );
      if (response.data.status) {
        setIsLoggedIn(true);
        localStorage.setItem("userId", response.data.employeeid);
        localStorage.setItem("userName", response.data.employeename);
        navigate("/sidebar");
      } else {
        setError(response.data.message);
      }
    } catch (err) {
      console.error("Login error:", err);
      setError("Failed to log in. Please check your connection and try again.");
    }
  };

  return (
    <div style={styles.background}>
      <div style={styles.overlay}>
        <div className="shadow p-5 rounded" style={styles.formContainer}>
          <h4 className="mb-4 text-center" style={styles.header}>
            Login
          </h4>
          <form onSubmit={handleLogin}>
            <TextField
              id="email"
              label="Email"
              type="email"
              variant="outlined"
              fullWidth
              required
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="mb-3"
            />
            <TextField
              id="password"
              label="Password"
              type="password"
              variant="outlined"
              fullWidth
              required
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="mb-3"
            />
            <div className="text-left mb-3">
              <a href="#" style={styles.forgotPassword}>
                Forgot password?
              </a>
            </div>
            {error && <p style={styles.error}>{error}</p>}
            <Button
              variant="contained"
              type="submit"
              fullWidth
              style={styles.button}
            >
              Login
            </Button>
          </form>
        </div>
      </div>
    </div>
  );
}

const styles = {
  background: {
    backgroundImage:
      'url("https://free-3dtextureshd.com/wallpapers/Abstract/Desktop%20version/1920%20x%201080/86_Abstract_Background_1920x1080px.jpg")', // Image URL
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
  forgotPassword: {
    color: "rgb(13, 2, 81)",
    textDecoration: "none",
  },
  error: {
    color: "red",
    marginTop: "10px",
  },
  button: {
    backgroundColor: "blue",
    color: "#fff",
  },
};

export default Login;
