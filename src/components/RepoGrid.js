import React, { useState } from 'react';
import Repo from './Repo';
import login from '../services/login';
import useAxios from '../hooks/useAxios';

function RepoGrid({ setSuccess }) {
  const {
    response: repos,
    loading,
  } = useAxios('/user/repos');

  const [popover, setPopover] = useState(-1);

  const handleLogout = () => {
    console.log('Eliminando cookies');
    login.setAuth(null);
    setSuccess(false);
    window.localStorage.removeItem('LoggedNoteAppUser');
  };

  return (
    <>
      <nav className="d-flex justify-content-between p-3">
        <h1>Repositorios</h1>
        <button
          type="button"
          className="btn btn-primary"
          onClick={handleLogout}
        >
          Logout
        </button>
      </nav>
      {loading ? (
        <span>Loading</span>
      ) : (
        <div className="row">
          {repos.map((r) => (
            <Repo key={r.id} dataRepo={r} popover={popover} setPopover={setPopover} />
          ))}
        </div>
      )}
    </>
  );
}

export default RepoGrid;
