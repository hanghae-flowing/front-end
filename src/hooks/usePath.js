import { URL } from "../API";
import { useQuery } from "react-query";

const fetchPathList = async (nodeTableId) => {
  const { data } = await URL.get(`/node/path/${nodeTableId}`);
  return data;
}

export const usePath = (nodeTableId) => {
  return useQuery(['path', nodeTableId], () => fetchPathList(nodeTableId), {
    enabled: !!nodeTableId,
    refetchInterval: 5000,
  })
}