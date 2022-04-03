import React from 'react';
import { useMutation } from 'react-query';
import styled from 'styled-components';
import { URL } from '../../API';

const GapNode = props => {
  const gapTableId = props.gapTableId;

  const mutation = useMutation(data => {
    URL.post(`/gapNode`, data);
  });

  const sendingData = {
    subject: '',
    text: '',
    targetText: '',
    gapTableId: gapTableId,
  };

  const onCreate = () => {
    mutation.mutate(sendingData);
  };
  return <StyledDiv onClick={onCreate}></StyledDiv>;
};

const StyledDiv = styled.div`
  width: 100px;
  height: 38px;
  margin-right: 20px;
  border-radius: 10px;
  background-color: #f3f3f3;
  box-shadow: 0px 4px 10px rgba(0, 0, 0, 0.25);
  cursor: pointer;
`;

export default GapNode;
