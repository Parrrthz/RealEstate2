import { useQuery } from 'react-query'; // Fixed import for useQuery
import { getAllProperties } from '../utils/api.js';

const useProperties = () => {
  const { data, isError, isLoading, refetch } = useQuery(
    "allProperties",
    getAllProperties,
    { refetchOnWindowFocus: false }
  );

  return {
    data,
    isError,
    isLoading,
    refetch,
  };
};

export default useProperties;
