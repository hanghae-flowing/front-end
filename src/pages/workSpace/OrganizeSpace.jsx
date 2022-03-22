import axios from 'axios';
import React from 'react';
import { useQuery } from 'react-query';

const fetchData = () => {
  return axios.get('http://loacalhost:3000');
};

const OrganizeSpace = () => {
  const { isLoading, data, isError, error, isFetching } = useQuery(
    'node',
    fetchData,
    {
      refetchInterval: 2000,
    },
  );
  console.log({ isLoading, isFetching });
  return;
};

export default OrganizeSpace;
