import React, { useState } from "react";
import Toolbar from "@mui/material/Toolbar";
import "../login/login.css";
import FormGroup from "@mui/material/FormGroup";
import FormControlLabel from "@mui/material/FormControlLabel";
import Checkbox from "@mui/material/Checkbox";
import HeaderComponent from "../components/HeaderComponent";
import FooterComponent from "../components/footerComponent";
import { useNavigate } from "react-router-dom";

function LoginComponent() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [rememberMe, setRememberMe] = useState(false);
  const navigate = useNavigate();
  const handleSubmit = () => {
    // e.preventDefault();
    // Handle login logic here, e.g. send credentials to API
    console.log({ username, password, rememberMe });
    navigate("/home");
  };

  const registerButton = () => {
    navigate("/register");
  };

  return (
    <div>
      <Toolbar id="Navbar">
        <p>NexUrb</p>
      </Toolbar>
      <div className="wrapper">
        <form onSubmit={handleSubmit}>
          <h2>Login</h2>
          <div className="input-box">
            <input
              type="text"
              placeholder="Username"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
              required
            />
            <i className="bx bx-user"></i>
          </div>
          <div className="input-box">
            <input
              type="password"
              placeholder="Password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
            />
            <i className="bx bxs-lock-alt"></i>
          </div>
          <div className="remember-forgot">
            <FormControlLabel
              id="remember-me"
              sx={{
                color: "white", // applies to the label
                "& .MuiCheckbox-root": {
                  color: "white", // changes unchecked color of the box
                },
                "& .Mui-checked": {
                  color: "golden", // changes checked color of the box
                },
              }}
              control={<Checkbox defaultChecked />}
              onChange={() => setRememberMe(!rememberMe)}
              label="Remember Me"
              labelPlacement="end"
            />
            <a href="#">Forgot password?</a>
          </div>
          <button type="submit" className="btn">
            Login
          </button>
          <div className="register-link">
            <p>
              Don't have an account?{" "}
              <a href="#" onClick={registerButton}>
                Register
              </a>
            </p>
          </div>
        </form>
      </div>
      <FooterComponent />
    </div>
  );
}

export default LoginComponent;
