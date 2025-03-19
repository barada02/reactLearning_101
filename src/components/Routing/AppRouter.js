import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Navigation from './Navigation';
import ProtectedRoute from './ProtectedRoute';

// Page components
import Home from './pages/Home';
import About from './pages/About';
import Projects from './pages/Projects';
import ProjectDetail from './pages/ProjectDetail';
import Contact from './pages/Contact';
import Dashboard from './pages/Dashboard';
import Login from './pages/Login';

// Styles
import './styles/RoutingApp.css';

function AppRouter() {
  return (
    <BrowserRouter>
      <div className="routing-app">
        <Navigation />
        
        <div className="page-container">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/projects" element={<Projects />} />
            <Route path="/project/:id" element={<ProjectDetail />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/login" element={<Login />} />
            <Route 
              path="/dashboard" 
              element={
                <ProtectedRoute>
                  <Dashboard />
                </ProtectedRoute>
              } 
            />
            {/* Catch-all route for 404 pages */}
            <Route path="*" element={
              <div className="page not-found-page">
                <h1>404 - Page Not Found</h1>
                <p>The page you're looking for doesn't exist.</p>
              </div>
            } />
          </Routes>
        </div>
        
        <footer className="routing-footer">
          <p>&copy; {new Date().getFullYear()} React Router Demo | Phase 6: Routing & Navigation</p>
        </footer>
      </div>
    </BrowserRouter>
  );
}

export default AppRouter;
