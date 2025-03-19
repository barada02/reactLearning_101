import React, { useState } from 'react';
import './App.css';
import ProfileCard from './components/ProfileCard/ProfileCard';
import profiles from './components/ProfileCard/profileData';

function App() {
  const [currentProfileIndex, setCurrentProfileIndex] = useState(0);
  const currentProfile = profiles[currentProfileIndex];

  const handleNextProfile = () => {
    setCurrentProfileIndex((prevIndex) => 
      prevIndex === profiles.length - 1 ? 0 : prevIndex + 1
    );
  };

  return (
    <div className="App">
      <header className="App-header">
        <h1>Personal Profile Card</h1>
        <p className="app-description">
          A React component demonstration project using props and component composition.
        </p>
      </header>
      
      <main className="App-main">
        <ProfileCard profile={currentProfile} />
        
        <div className="profile-controls">
          <button onClick={handleNextProfile} className="next-profile-btn">
            Next Profile
          </button>
        </div>
      </main>
      
      <footer className="App-footer">
        <p>React Learning Project - Phase 2: Components & Props</p>
      </footer>
    </div>
  );
}

export default App;
