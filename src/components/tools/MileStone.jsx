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
    ></StyledDiv>
  );
};

const StyledDiv = styled.div`
  width: 100px;
  height: 38px;
  border-radius: 40px;
  background-color: #eee0ff;
  box-shadow: 2px 4px 10px rgba(0, 0, 0, 0.15);
  cursor: pointer;
`;

export default MileStone;
