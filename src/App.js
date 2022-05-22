import React, { useState } from 'react';
import Login from './components/Login';
import RepoGrid from './components/RepoGrid';
import './index.css';

function App() {
  const [success, setSuccess] = useState(false);

  return (
    <>
      {success ? (
        <RepoGrid success={success} setSuccess={setSuccess} />
      ) : (
        <Login setSuccess={setSuccess} />
      )}
      <div className="pop-over" />
    </>
  );
}

export default App;
