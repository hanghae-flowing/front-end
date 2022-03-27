import { useState } from 'react';
import axios from 'axios';
import { useQuery } from 'react-query';
import styled from 'styled-components';
import { useDispatch } from 'react-redux';
import { TestPut } from '../../redux/slice/postSlice';
import { useRef } from 'react';
import Heading from '../../components/textEditor/Heading';

const fetch = () => {
  const textId =
    sessionStorage.getItem('textInfo') && sessionStorage.getItem('textInfo');
  return axios.get(`http://13.209.41.157/api/test/${textId}`);
};

const OrganizeSpace = () => {
  const dispatch = useDispatch();
  const textRef = useRef();
  const [value, setValue] = useState('');
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

  const onChangeHandler = () => {
    const sendingData = {
      text: textRef.current.value,
    };
    setValue(textRef.current.value);
    dispatch(TestPut(sendingData));
  };

  return (
    <TextDiv>
      <Heading />
    </TextDiv>
  );
};

const TextDiv = styled.div`
  width: 1190px;
  margin: 300px;
`;

export default OrganizeSpace;
