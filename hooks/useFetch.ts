import { useState, useEffect } from "react";
import axios from "axios";

// @ts-ignore
import { RAPID_API_KEY } from "@env";

const rapidApiKey = RAPID_API_KEY;

type UseFetchType = {
  data: JobInterface[];
  isLoading: boolean;
  error: Error | null;
  refetch: () => void;
};

const useFetch = (endpoint: string, query: object): UseFetchType => {
  const [data, setData] = useState<JobInterface[]>([]);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState<Error | null>(null);

  const options = {
    method: "GET",
    url: `https://jsearch.p.rapidapi.com/${endpoint}`,
    headers: {
      "X-RapidAPI-Key": rapidApiKey,
      "X-RapidAPI-Host": "jsearch.p.rapidapi.com",
    },
    params: { ...query },
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
  }, []);

  const refetch = () => {
    setIsLoading(true);
    fetchData();
  };

  return { data, isLoading, error, refetch };
};

export default useFetch;
