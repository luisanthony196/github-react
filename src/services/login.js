import axios from 'axios';

axios.defaults.baseURL = 'https://api.github.com';

let authSave = null;

const setAuth = (auth) => {
  if (auth) {
    axios.defaults.headers.common.Authorization = `token ${auth.token}`;
    authSave = auth;
  } else {
    axios.defaults.headers.common.Authorization = '';
    authSave = null;
  }
};

const getAuth = () => authSave;

const getLogin = async ({ username, token }) => {
  const response = await axios.get('/user', {
    headers: {
      Authorization: `token ${token}`,
    },
  });

  if (username === response.data.login) {
    return response;
  }

  return null;
};

export default {
  setAuth,
  getAuth,
  getLogin,
};
