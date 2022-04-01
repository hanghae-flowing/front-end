import { URL } from '../API';
import { useQuery } from 'react-query';

const fetchGapList = async gapTableId => {
  if (!gapTableId) return;
  const { data } = await URL.get(`/gapNode/all/${gapTableId}`);
  return data;
};

export const useGap = gapTableId => {
  return useQuery(['gap', gapTableId], () => fetchGapList(gapTableId), {
    enabled: !!gapTableId,
    refetchInterval: 2000,
  });
};