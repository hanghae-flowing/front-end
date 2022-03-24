import { useState, useEffect } from 'react';
import axios from 'axios';
import { isError, useMutation, useQuery } from 'react-query';
import { CKEditor } from 'ckeditor4-react';
import mutation from './Queries';

const fetch = () => {
  return axios.get('http://13.209.41.157/api/test');
};

const OrganizeSpace = () => {
  const { isLoading, data, isError, error, isFetching } = useQuery(
    'data',
    fetch,
    {
      refetchInterval: 2000,
    },
  );

  if (isLoading) {
    return <h2>Loading....</h2>;
  }
  if (isError) {
    return <h2>{error.message}</h2>;
  }

  return (
    <>
      re
      <div>
        <h2>{`${data.data.랜덤이에용}`}</h2>
        <CKEditor
          initData={<p>사업계획서 /n 사업계획서 ㅋㅋㅋㅋ</p>}
          onInstanceReady={() => {
            alert('Editor is ready!');
          }}
          onChange={() => {}}
        />
      </div>
    </>
  );
};

export default OrganizeSpace;
