import axios from 'axios';
import { useEffect, useState } from 'react';

export default function useGetAxios(url) {
  const [response, setResponse] = useState(undefined);
  const [loading, setLoading] = useState(true);

  const fetchData = async (params) => {
    try {
      const result = await axios.request(params);
      console.log(params.url);
      setResponse(result.data);
      setLoading(false);
    } catch (err) {
      console.error(err);
    }
  };

  useEffect(() => {
    fetchData({
      method: 'GET',
      url,
    });
  }, [url]);

  return {
    response,
    loading,
  };
}
