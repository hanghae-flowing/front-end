import { useMutation } from 'react-query';
import { TestPost } from '../../redux/slice/postSlice';

function useTextMutation() {
  return useMutation(formData => {
    return TestPost(formData);
  });
}

export default useTextMutation;
