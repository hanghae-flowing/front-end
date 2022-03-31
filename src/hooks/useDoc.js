import { URL } from '../API';
import { useMutation, useQuery } from 'react-query';

const fetchDoc = async documentId => {
  const { data } = await URL.get(`/documentLines/${documentId}`);
  return data;
};

export const useDoc = documentId => {
  return useQuery(['docs', documentId], () => fetchDoc(documentId), {
    enabled: !!documentId,
    refetchInterval: 4000,
  });
};
