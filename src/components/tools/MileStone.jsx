import React from 'react';
import { useMutation } from 'react-query';
import { useSelector } from 'react-redux';
import styled from 'styled-components';
import { URL } from '../../API';

const MileStone = () => {
  const getGapNode = useSelector(state => state.gap.gapNodeId);
  // console.log(getGapNode);

  const sendingData = {
    xval: 180,
    text: '',
    gapNodeId: getGapNode,
  };

  const postMileStone = useMutation(sendingData => {
    URL.post('/gapStone', sendingData).then(res => {
      console.log(res);
    });
  });

  return (
    <StyledDiv
      onClick={() => {
        postMileStone.mutate(sendingData);
      }}
    >
      <Text>마일스톤</Text>
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
  width: 100px;
  height: 38px;
  border-radius: 40px;
  background-color: #eee0ff;
  box-shadow: 2px 4px 10px rgba(0, 0, 0, 0.15);
  cursor: pointer;
  transition: all 0.1s ease-in-out;
  margin: 0 10px;
  &:hover {
    transform: scale(1.3) translateY(-10px);
    margin: 0 20px;
    ${Text} {
      display: block;
    }
  }
`;

export default MileStone;
