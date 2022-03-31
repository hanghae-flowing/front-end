import { URL } from '../API';
import { useQuery } from 'react-query';

const fetchNodeList = async nodeTableId => {
  if (!nodeTableId) return;
  const { data } = await URL.get(`/node/all/${nodeTableId}`);
  return data;
};

export const useNode = nodeTableId => {
  return useQuery(['node', nodeTableId], () => fetchNodeList(nodeTableId), {
    enabled: !!nodeTableId,
    refetchInterval: 2000,
  });
};
