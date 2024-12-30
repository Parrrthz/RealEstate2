import React from 'react'
import { useQuery } from 'react'
import { isError } from 'react-query';
import { getAllProperties } from '../utils/api.js';

const useProperties = () => {

  const { data, error, isLoading, refetch } = useQuery(
    "allProperties",
    getAllProperties,
    {refetchOnWindowFocus:false}
  );
  return {
       data,isLoading, isError, refetch
    // data, isError, isLoading, refetch
 };
};

export default useProperties