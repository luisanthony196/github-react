import React, { useState } from 'react';
import Login from './components/Login';
import RepoGrid from './components/RepoGrid';
import Navbar from './components/Navbar';
import './index.css';

function App() {
  const [success, setSuccess] = useState(false);

  return (
    <>
      <Navbar success={success} setSuccess={setSuccess} />
      {success ? (
        <RepoGrid />
      ) : (
        <Login setSuccess={setSuccess} />
      )}
      <div className="pop-over" />
    </>
  );
}

export default App;
