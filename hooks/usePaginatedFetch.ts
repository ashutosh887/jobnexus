import { useEffect, useState } from "react";

// @ts-ignore
import { RAPID_API_KEY } from "@env";
import axios from "axios";

const usePaginatedFetch = (
  endpoint: string,
  query: object
): UsePaginatedFetchType => {
  const [data, setData] = useState<JobInterface[]>([]);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState<Error | null>(null);
  const [page, setPage] = useState(1);

  const options = {
    method: "GET",
    url: `https://jsearch.p.rapidapi.com/${endpoint}`,
    headers: {
      "X-RapidAPI-Key": RAPID_API_KEY,
      "X-RapidAPI-Host": "jsearch.p.rapidapi.com",
    },
    params: { ...query, page },
  };

  const fetchData = async () => {
    setIsLoading(true);

    try {
      const response = await axios.request(options);

      setData(response.data.data);
    } catch (err) {
      const errorObject =
        err instanceof Error ? err : new Error(JSON.stringify(err));
      setError(errorObject);
      console.log(errorObject);
    } finally {
      setIsLoading(false);
    }
  };

  useEffect(() => {
    fetchData();
  }, [page]);

  const refetch = () => {
    setIsLoading(true);
    fetchData();
  };

  const nextPage = () => {
    setPage((prevPage) => prevPage + 1);
  };

  const prevPage = () => {
    if (page > 1) {
      setPage((prevPage) => prevPage - 1);
    }
  };

  return { data, isLoading, error, refetch, nextPage, prevPage, page };
};

export default usePaginatedFetch;
