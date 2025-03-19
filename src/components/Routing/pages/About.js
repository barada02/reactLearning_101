import React from 'react';

function About() {
  return (
    <div className="page about-page">
      <h1>About Us</h1>
      <p>This is the About page of our React Router demonstration.</p>
      <p>React Router is a standard library for routing in React. It enables navigation among views of various components in a React application, allows changing the browser URL, and keeps the UI in sync with the URL.</p>
      <div className="about-section">
        <h2>Key Features of React Router</h2>
        <ul>
          <li>Declarative routing for React applications</li>
          <li>Route parameters for dynamic routing</li>
          <li>Nested routes for complex UIs</li>
          <li>History management</li>
          <li>Link components for navigation without page reloads</li>
        </ul>
      </div>
    </div>
  );
}

export default About;
