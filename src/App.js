// App.js
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMagnifyingGlass } from '@fortawesome/free-solid-svg-icons';
import './App.css';

function App() {
  const [psNumber, setPsNumber] = useState('');
  const navigate = useNavigate();

  const handleSearch = () => {
    // Navigate to the employee detail page with the entered PS number
    navigate(`/employee/${psNumber}`);
  };

  return (
    <div className="App">
      <div className="image-background">
        {/* Using an image instead of a video */}
        <img src="/images/background.png" alt="Background" className="background-img" />
        <div className="overlay"></div>
      </div>

      <div className="content">
        <div className="logo-container-full">
          <img src="logo.png" alt="Logo" className="logo logo-container" />
        </div>

        <h1 className="welcome-text">Welcome to the HR Portal</h1>
        <div className="scroll-content">
          <p>Explore the HR services and find the right contacts.</p>
        </div>

        <div className="search-section">
          <input
            type="text"
            placeholder="Enter PS number to search HR..."
            value={psNumber}
            onChange={(e) => setPsNumber(e.target.value)}
          />
        </div>
        <br />
        <button onClick={handleSearch}>
          Search <FontAwesomeIcon icon={faMagnifyingGlass} />
        </button>
      </div>

      <div className="info-section">
        <h2>Search HR by PS Number</h2>
        <p>Type the (PS) number to locate the HR details for any employee or department.</p>
      </div>
    </div>
  );
}

export default App;
