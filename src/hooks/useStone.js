import { useQuery } from "react-query";
import { URL } from "../API";

const fetchStoneList = async gapNodeId => {
  if (!gapNodeId) return;
  const { data } = await URL.get(`/gapStone/${gapNodeId}`);
  return data;
};

export const useStone = gapNodeId => {
  return useQuery(['stone', gapNodeId], () => fetchStoneList(gapNodeId), {
    enabled: !!gapNodeId,
    refetchInterval: 2000,
  });
};