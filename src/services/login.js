import axios from 'axios';

const baseUrl = 'https://api.github.com/issues';

const login = async (auth) => {
  const response = await axios.get(baseUrl, {
    headers: {
      Authorization: `token ${auth.token}`,
    },
  });
  return response;
};

export default login;
