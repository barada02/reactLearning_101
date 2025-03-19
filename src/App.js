import React, { useState } from 'react';
import './App.css';
import ProfileCardDisplay from './components/ProfileCard/ProfileCardDisplay';
import AppRouter from './components/Routing/AppRouter';

function App() {
  // State to control which component to display
  const [activeComponent, setActiveComponent] = useState('router'); // 'profile' or 'router'

  return (
    <div className="App">
      <div className="component-selector">
        <button 
          onClick={() => setActiveComponent('profile')} 
          className={activeComponent === 'profile' ? 'active' : ''}
        >
          Profile Card Project
        </button>
        <button 
          onClick={() => setActiveComponent('router')} 
          className={activeComponent === 'router' ? 'active' : ''}
        >
          Routing Project
        </button>
      </div>

      {/* Conditionally render the selected component */}
      {activeComponent === 'profile' ? (
        <ProfileCardDisplay />
      ) : (
        <AppRouter />
      )}
    </div>
  );
}

export default App;