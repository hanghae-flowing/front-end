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
  return (
    <StyledDiv onClick={onCreate}>
      <Text>갭 추가</Text>
    </StyledDiv>
  );
};

const Text = styled.p`
  width: 100px;
  text-align: center;
  font-size: 14px;
  font-weight: 500;
  color: #878787;
  display: none;
  position: absolute;
  top: -24px;
  left: 50%;
  transform: translateX(-50%);
`;

const StyledDiv = styled.div`
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100px;
  height: 38px;
  margin: 0 10px;
  border-radius: 10px;
  background-color: #f3f3f3;
  box-shadow: 0px 4px 10px rgba(0, 0, 0, 0.25);
  cursor: pointer;
  transition: all 0.1s ease-in-out;
  &:hover {
    transform: scale(1.3) translateY(-10px);
    margin: 0 20px;
    ${Text} {
      display: block;
    }
  }
`;

export default GapNode;
