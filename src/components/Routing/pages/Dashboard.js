import React from 'react';
import { useNavigate } from 'react-router-dom';

function Dashboard() {
  const navigate = useNavigate();
  
  const handleLogout = () => {
    // In a real app, you would clear authentication tokens/cookies here
    localStorage.removeItem('isAuthenticated');
    navigate('/login');
  };
  
  return (
    <div className="page dashboard-page">
      <h1>User Dashboard</h1>
      <p>Welcome to your protected dashboard! This page is only accessible to authenticated users.</p>
      
      <div className="dashboard-content">
        <div className="dashboard-card">
          <h3>Your Profile</h3>
          <p>Username: demo_user</p>
          <p>Email: demo@example.com</p>
          <p>Member since: January 2025</p>
        </div>
        
        <div className="dashboard-card">
          <h3>Recent Activity</h3>
          <ul>
            <li>Updated profile picture</li>
            <li>Completed React Router tutorial</li>
            <li>Started new project</li>
          </ul>
        </div>
      </div>
      
      <button onClick={handleLogout} className="logout-btn">
        Logout
      </button>
    </div>
  );
}

export default Dashboard;
