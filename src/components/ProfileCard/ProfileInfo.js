import React from 'react';

function ProfileInfo({ bio, location, email }) {
  return (
    <div className="profile-info">
      <div className="profile-bio">
        <p>{bio}</p>
      </div>
      <div className="profile-details">
        <p>
          <i className="location-icon">📍</i> {location}
        </p>
        <p>
          <i className="email-icon">✉️</i> {email}
        </p>
      </div>
    </div>
  );
}

export default ProfileInfo;
