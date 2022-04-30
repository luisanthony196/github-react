import React from 'react';
import reposService from '../services/repos';

function RepoGrid({ success, setSuccess }) {
  const handleLogout = () => {
    console.log('Logout completo');
    reposService.setAuth(null);
    setSuccess(false);
    window.localStorage.removeItem('LoggedNoteAppUser');
  };

  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-light">
      <div className="container-fluid">
        <button className="navbar-brand btn btn-link" type="button">Navbar</button>
        <button className="navbar-toggler btn btn-link" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon" />
        </button>
        <div className="collapse navbar-collapse" id="navbarNav">
          <div className="navbar-nav">
            <button className={`nav-link ${!success && 'active'} btn btn-link`} type="button">Home</button>
            <button className={`nav-link ${success && 'active'} btn btn-link`} title="Logout" aria-current="page" onClick={handleLogout} type="button">Logout</button>
          </div>
        </div>
      </div>
    </nav>
  );
}

export default RepoGrid;
