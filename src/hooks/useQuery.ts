import { useEffect, useState } from "react";

interface Query {
  url: string;
  options?: RequestInit;
}

export function useQuery(query: Query) {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(Error || null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(query.url, query.options);
        if (response.status === 200) {
          const getData = await response.json()
          setData(await getData.results)
        } else {
          setError(new Error(response.statusText))
        }
      } catch(err) {
        setError(err as Error)
      } finally {
        setLoading(false)
      }
    }

    fetchData();
  }, [])

  return {
    data,
    loading,
    error
  }
}