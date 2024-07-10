import React from 'react';
import { Link } from 'react-router-dom';

const HomePage = () => {
  const isLoggedIn = false; 

  return (
    <div className="home-page">
      <nav>
        <ul>
          <li><Link to="/">Home</Link></li>
          <li><Link to="/landing">Landing</Link></li>
        </ul>
        <div>
          {isLoggedIn ? (
            <button>Logout</button>
          ) : (
            <button>Login</button>
          )}
        </div>
      </nav>
      <div className="content">
        
      </div>
    </div>
  );
};

export default HomePage;
