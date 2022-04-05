import { URL } from '../API';
import { useQuery } from 'react-query';

const fetchBookmarkedFolderList = async userId => {
  if (!userId) return;
  const { data } = await URL.get(`/folder/bookmark/${userId}`);
  return data;
};

export const useBookmarkedFolder = userId => {
  return useQuery(['bookmarkedFolder', userId], () => fetchBookmarkedFolderList(userId), {
    enabled: !!userId,
  });
};