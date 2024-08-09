import React, { useEffect } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import { loginUser } from "../api";

export default function Login() {
  const [loginFormData, setLoginFormData] = React.useState({ email: "", password: "" });
  const [status, setStatus] = React.useState("idle");
  const [error, setError] = React.useState(null);
  const [user, setUser] = React.useState(() => {
    // Check if user is already logged in
   
    const loggedInUser = localStorage.getItem("loggedin");
    return loggedInUser ? JSON.parse(loggedInUser) : null;
  });
  const [newPassword, setNewPassword] = React.useState(""); // Store new password for change

  const location = useLocation();
  const navigate = useNavigate();
  const from = location.state?.from || "/host";
  function handleSubmit(e) {
    e.preventDefault();
    setStatus("submitting");
    loginUser(loginFormData)
      .then(data => {
        console.log("Login successful:", data);
        setError(null);
        setUser(data.user); // Save user info
        localStorage.setItem("loggedin", JSON.stringify(data.user));
        navigate("/host",{replace:true});
      })
      .catch(err => {
        console.error("Login failed:", err);
        setError(err);
      })
      .finally(() => {
        setStatus("idle");
      });
  }

  function handleChange(e) {
    const { name, value } = e.target;
    setLoginFormData(prev => ({
      ...prev,
      [name]: value
    }));
  }

  function handlePasswordChange(e) {
    setNewPassword(e.target.value);
  }

  function handlePasswordSubmit(e) {
    e.preventDefault();
    // Implement password change logic here
    console.log("Password changed to:", newPassword);
    setNewPassword("");
  }

  function handleLogout() {
    setUser(null);
    localStorage.removeItem("loggedin");
    navigate("/login");
  }

  return (
    <div className="login-container h-screen py-20 my-20 ">
      {location.state?.message && (
        <h3 className="text-xl font-semibold text-red-700 ">{location.state.message}!</h3>
      )}
      {user ? (
        <div >
          <h1 className="font-bold text-2xl m-5">Welcome, {user.name}</h1>
          <p>Email: {user.email}</p>
          <p>Password: {user.password}</p>
          <form onSubmit={handlePasswordSubmit} className="password-form mt-4">
            <input
              name="newPassword"
              onChange={handlePasswordChange}
              type="password"
              placeholder="New Password"
              value={newPassword}
              className="mb-3 p-2 border rounded"
            />
            <button className="bg-blue-500 text-white py-2 px-4 rounded hover:bg-black hover:text-gray-200 transition duration-200">
              Change Password
            </button>
          </form>
          <button 
            onClick={handleLogout} 
            className="mt-4 bg-red-500 text-white py-2 px-4 rounded hover:bg-black hover:text-gray-200 transition duration-200"
          >
            Logout
          </button>
        </div>
      ) : (
        <div>
          <h1 className="font-bold text-2xl m-5">Sign in to your account</h1>
          {error?.message && (
            <h3 className="text-xl font-semibold text-red-700 ">{error.message}!</h3>
          )}
          <form onSubmit={handleSubmit} className="login-form">
            <input
              name="email"
              onChange={handleChange}
              type="email"
              placeholder="Email address"
              value={loginFormData.email}
              className="mb-3 p-2 border rounded"
            />
            <input
              name="password"
              onChange={handleChange}
              type="password"
              placeholder="Password"
              value={loginFormData.password}
              className="mb-3 p-2 border rounded"
            />
            <button
              disabled={status === "submitting"}
              className="bg-blue-500 text-white py-2 px-4 rounded hover:bg-black hover:text-gray-200 transition duration-200"
            >
              {status === "submitting" ? "Logging in..." : "Log in"}
            </button>
          </form>
        </div>
      )}
    </div>
  );
}