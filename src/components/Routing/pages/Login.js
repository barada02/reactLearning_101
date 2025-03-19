import React, { useState } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';

function Login() {
  const [credentials, setCredentials] = useState({
    username: '',
    password: ''
  });
  
  const [error, setError] = useState('');
  const navigate = useNavigate();
  const location = useLocation();
  
  // Get the page the user was trying to visit before being redirected to login
  const from = location.state?.from?.pathname || '/dashboard';
  
  const handleChange = (e) => {
    const { name, value } = e.target;
    setCredentials(prev => ({
      ...prev,
      [name]: value
    }));
  };
  
  const handleSubmit = (e) => {
    e.preventDefault();
    setError('');
    
    // Simple authentication for demo purposes
    // In a real app, you would validate against a server
    if (credentials.username === 'demo' && credentials.password === 'password') {
      // Set authentication state
      localStorage.setItem('isAuthenticated', 'true');
      
      // Redirect to the page they were trying to visit or dashboard
      navigate(from, { replace: true });
    } else {
      setError('Invalid username or password');
    }
  };
  
  return (
    <div className="page login-page">
      <h1>Login</h1>
      <p>Please log in to access protected areas of the site.</p>
      <p className="demo-credentials">Demo credentials: username: <strong>demo</strong>, password: <strong>password</strong></p>
      
      {error && <div className="error-message">{error}</div>}
      
      <form onSubmit={handleSubmit} className="login-form">
        <div className="form-group">
          <label htmlFor="username">Username:</label>
          <input
            type="text"
            id="username"
            name="username"
            value={credentials.username}
            onChange={handleChange}
            required
          />
        </div>
        
        <div className="form-group">
          <label htmlFor="password">Password:</label>
          <input
            type="password"
            id="password"
            name="password"
            value={credentials.password}
            onChange={handleChange}
            required
          />
        </div>
        
        <button type="submit" className="login-btn">Login</button>
      </form>
    </div>
  );
}

export default Login;
