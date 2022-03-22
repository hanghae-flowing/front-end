import { useState, useEffect } from 'react';
import axios from 'axios';
import { isError, useQuery } from 'react-query';

const fetch = () => {
  return axios.get('http://13.209.41.157/api/test');
};

const OrganizeSpace = () => {
  const { isLoading, data, isError, error, isFetching } = useQuery(
    'data',
    fetch,
    {
      refetchInterval: 2000,
      refetchIntervalInBackground: true,
    },
  );

  console.log(data.data);
  console.log(isFetching);

  if (isLoading) {
    return <h2>Loading....</h2>;
  }

  if (isError) {
    return <h2>{error.message}</h2>;
  }

  return (
    <div>
      <h2>{`${data.data.랜덤이에용}`}</h2>
      <input></input>
    </div>
  );
};

export default OrganizeSpace;

// const [isLoading, setIsLoading] = useState(true);
// const [data, setData] = useState();
// useEffect(() => {
//   axios.get('http://13.209.41.157/api/test').then(res => {
//     setData(res);
//     setIsLoading(false);
//   });
// }, []);
// if (isLoading) {
//   return <h2>Loading......</h2>;
// }
// console.log(data);
// return <div>organize</div>;
