import React, { useState } from 'react';
import ProfileCard from './ProfileCard';
import profiles from './profileData';
import './ProfileCard.css';
import './ProfileCardDisplay.css';

function ProfileCardDisplay() {
  const [currentProfileIndex, setCurrentProfileIndex] = useState(0);
  const currentProfile = profiles[currentProfileIndex];

  const handleNextProfile = () => {
    setCurrentProfileIndex((prevIndex) => 
      prevIndex === profiles.length - 1 ? 0 : prevIndex + 1
    );
  };

  return (
    <div className="profile-card-display">
      <header className="profile-display-header">
        <h1>Personal Profile Card</h1>
        <p className="display-description">
          A React component demonstration project using props and component composition.
        </p>
      </header>
      
      <main className="profile-display-main">
        <ProfileCard profile={currentProfile} />
        
        <div className="profile-controls">
          <button onClick={handleNextProfile} className="next-profile-btn">
            Next Profile
          </button>
        </div>
      </main>
      
      <footer className="profile-display-footer">
        <p>React Learning Project - Phase 2: Components & Props</p>
      </footer>
    </div>
  );
}

export default ProfileCardDisplay;
