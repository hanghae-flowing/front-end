import axios from 'axios';
import { useMutation } from 'react-query';

export const Queries = () => {
  const mutation = useMutation(newTodo => {
    return axios.post('http://13.209.41.157/api/test', newTodo);
  });
  const fetch = () => {
    return axios.get('http://13.209.41.157/api/test');
  };

  return;
};
