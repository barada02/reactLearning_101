import React from 'react';
import ProfileHeader from './ProfileHeader';
import ProfileInfo from './ProfileInfo';
import ProfileSocial from './ProfileSocial';
import './ProfileCard.css';

function ProfileCard({ profile }) {
  return (
    <div className="profile-card">
      <ProfileHeader 
        name={profile.name} 
        title={profile.title} 
        avatar={profile.avatar} 
      />
      <ProfileInfo 
        bio={profile.bio} 
        location={profile.location} 
        email={profile.email} 
      />
      <ProfileSocial social={profile.social} />
    </div>
  );
}

// Default props
ProfileCard.defaultProps = {
  profile: {
    name: 'John Doe',
    title: 'Web Developer',
    avatar: 'https://via.placeholder.com/150',
    bio: 'Passionate web developer with experience in React and JavaScript.',
    location: 'New York, USA',
    email: 'john.doe@example.com',
    social: [
      { name: 'github', url: 'https://github.com' },
      { name: 'twitter', url: 'https://twitter.com' },
      { name: 'linkedin', url: 'https://linkedin.com' }
    ]
  }
};

export default ProfileCard;
