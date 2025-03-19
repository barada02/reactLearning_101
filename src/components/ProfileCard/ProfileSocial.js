import React from 'react';

function ProfileSocial({ social }) {
  // Map of social media platform names to emoji icons
  const socialIcons = {
    github: '💻',
    twitter: '🐦',
    linkedin: '🔗',
    facebook: '👥',
    instagram: '📷'
  };

  return (
    <div className="profile-social">
      <ul>
        {social.map((platform, index) => (
          <li key={index}>
            <a href={platform.url} target="_blank" rel="noopener noreferrer">
              <span className="social-icon">{socialIcons[platform.name] || '🌐'}</span>
              {platform.name}
            </a>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default ProfileSocial;
