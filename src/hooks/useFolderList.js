import { URL } from '../API';
import { useQuery } from 'react-query';

const fetchFolderList = async userId => {
  if (!userId) return;
  const { data } = await URL.get(`/folder/${userId}`);
  return data;
};

export const useFolderList = userId => {
  return useQuery(['folder', userId], () => fetchFolderList(userId), {
    enabled: !!userId,
  });
};