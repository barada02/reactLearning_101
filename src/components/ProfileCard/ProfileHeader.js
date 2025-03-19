import React from 'react';

function ProfileHeader({ name, title, avatar }) {
  return (
    <div className="profile-header">
      <div className="profile-avatar">
        <img src={avatar} alt={`${name}'s avatar`} />
      </div>
      <div className="profile-title">
        <h2>{name}</h2>
        <p>{title}</p>
      </div>
    </div>
  );
}

export default ProfileHeader;
