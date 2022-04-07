import { URL } from '../API';
import { useMutation, useQuery } from 'react-query';

const fetchSwot = async swotId => {
  const { data } = await URL.get(`/swot/${swotId}`);
  return data;
};

export const useSwot = swotId => {
  return useQuery(['swot', swotId], () => fetchSwot(swotId), {
    enabled: !!swotId,
    refetchInterval: 2000,
  });
};
