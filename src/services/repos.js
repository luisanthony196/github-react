import axios from 'axios';

const baseUrl = 'https://api.github.com/user/repos';

let token = null;

const setAuth = (auth) => {
  token = auth ? auth.token : null;
};

const getAll = async () => {
  const res = await axios.get(baseUrl, {
    headers: {
      Authorization: `token ${token}`,
    },
  });

  return res;
};

const getCollaborators = async (url) => {
  const res = await axios.get(url, {
    headers: {
      Authorization: `token ${token}`,
    },
  });

  return res;
};

const repos = {
  setAuth,
  getAll,
  getCollaborators,
};

export default repos;
