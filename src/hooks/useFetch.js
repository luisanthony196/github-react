import { useEffect, useState } from 'react';

export default function useFetch(getFunction) {
  const [state, setState] = useState({ data: null, loading: true, error: null });

  useEffect(() => {
    async function getData() {
      try {
        const data = await getFunction();
        setState({
          loading: false,
          error: null,
          data,
        });
      } catch (e) {
        console.error(e);
      }
    }
    getData();
  }, [getFunction]);

  return state;
}
