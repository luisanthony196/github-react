import React, { useEffect, useState } from 'react';
import login from '../services/login';
import reposService from '../services/repos';

function Login({ setSuccess }) {
  const [token, setToken] = useState('');
  const [user, setUser] = useState('');

  // Leer el localStorage
  useEffect(() => {
    console.log('Cargando cookies');
    const loggedUserJSON = window.localStorage.getItem('LoggedNoteAppUser');

    if (loggedUserJSON) {
      const auth = JSON.parse(loggedUserJSON);
      setUser(auth.username);
      setToken(auth.token);
      setSuccess(true);
      reposService.setAuth(auth);
    }
  }, [setSuccess]);

  const handleLogin = async (e) => {
    e.preventDefault();

    const auth = {
      username: user,
      token,
    };

    try {
      const response = await login(auth);

      window.localStorage.setItem(
        'LoggedNoteAppUser',
        JSON.stringify(auth),
      );
      console.log('Login correcto', response.status);

      reposService.setAuth(auth);
      setSuccess(true);
      setToken('');
    } catch (error) {
      alert('Credenciales invalidas');
      console.error(error);
    }
    // setToken('')
  };

  return (
    <div className="row vh-100 justify-content-center align-items-center">
      <div className="col-6 card pt-3">
        <img src="https://i0.wp.com/hipertextual.com/wp-content/uploads/2020/04/hipertextual-github-equipos-ahora-es-totalmente-gratis-2020680731.jpg?w=1560&quality=50&strip=all&ssl=1" className="card-img-top" alt="..." />
        <form className="card-body" onSubmit={handleLogin}>
          <div className="mb-3">
            <label htmlFor="user" className="form-label">Nombre de usuario</label>
            <input
              type="text"
              id="user"
              className="form-control"
              value={user}
              onChange={(e) => setUser(e.target.value)}
            />
          </div>
          <div className="mb-3">
            <label htmlFor="token" className="form-label">Token</label>
            <input
              type="password"
              id="token"
              className="form-control"
              value={token}
              onChange={(e) => setToken(e.target.value)}
            />
            <div id="passwordHelpBlock" className="form-text">Token autorizado por github</div>
          </div>
          <div className="text-center">
            <button type="submit" className="btn btn-primary">Go to github</button>
          </div>
        </form>
      </div>
    </div>
  );
}

export default Login;
