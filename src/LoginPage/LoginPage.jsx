import React, { useState } from "react";
import "./LoginPage.css";
      
const LoginPage = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  const handleLogin = async () => {
    setError("");
        
    try {
      setLoading(true);

      const response = await fetch("", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ email, password }),
      });

      const data = await response.json();

      if (!response.ok) {
        throw new Error(data.message || "Login failed");
      }

      console.log("User logged in:", data);

      localStorage.setItem("token", data.token);

      alert("Login successful!");
    } catch (err) {
      if (err.message.includes("fetch")) {
        alert("Server not responding. Please try again later.");
      } else {
        alert(err.message || "Something went wrong");
      }
    } finally {
      setLoading(false);
    }
  };

  return (
    <>
      <div className="container">

        {/* <div className="left">
          <img src="wallpaper.png" alt="wallpaper" className="illustration" />
        </div> */}

        <div className="right">
          <div className="login-card">
              
            <h1>Hello!</h1>
            <p className="subtitle">Sign Up to Get Started</p>

            <div className="input-group">
              <img src="Emailicon.webp" alt="Email" className="input-icon" />
              <input
                type="text"
                placeholder="Email Address"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
            </div>

            <div className="input-group">
              <img src="Passwordicon.jpg" alt="Password" className="input-icon" />
              <input
                type="password"
                placeholder="Password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
            </div>
            
            <button className="btn" onClick={handleLogin} disabled={loading}>
              {loading ? "Logging in..." : "Login"}
            </button>

            <p className="forgot">Forgot Password</p>

          </div>
        </div>

      </div>

    </>
  );
}

export default LoginPage;
