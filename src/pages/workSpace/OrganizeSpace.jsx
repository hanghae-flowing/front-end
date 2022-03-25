import { useState, useEffect } from 'react';
import axios from 'axios';
import { useMutation, useQuery } from 'react-query';
import Queries from './Queries';
import styled from 'styled-components';
import { useDispatch } from 'react-redux';
import { TestPost } from '../../redux/slice/postSlice';
import { useRef } from 'react';
const fetch = () => {
  return axios.get('http://13.209.41.157/api/test');
};

const OrganizeSpace = () => {
  const dispatch = useDispatch();
  const textRef = useRef();

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

  const onClickHandler = () => {
    const str = textRef.current.value;
    dispatch(TestPost(str));
  };

  return (
    <>
      <TextDiv>
        <h2>{`${data.data.랜덤이에용}`}</h2>
        <TextArea ref={textRef} type="text" id="textInput"></TextArea>
        <button onClick={onClickHandler}>submit</button>
      </TextDiv>
    </>
  );
};

const TextDiv = styled.div`
  width: 1190px;
`;

const TextArea = styled.textarea`
  width: 100%;
  min-height: 500px;
  padding: 12px 20px;
  box-sizing: border-box;
  border: 2px solid #ccc;
  border-radius: 4px;
  background-color: #f8f8f8;
  font-size: 16px;
  resize: none;
`;
export default OrganizeSpace;
