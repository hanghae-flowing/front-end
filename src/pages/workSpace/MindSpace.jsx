import React from 'react';
import SpaceWrap from '../../components/SpaceWrap';
import styled from 'styled-components';

const MindSpace = () => {
  return (
    <SpaceWrap>
      <div>ㅎㅇㅎㅇ</div>
      <ToolBox></ToolBox>
    </SpaceWrap>
  );
};

const ToolBox = styled.div`
  width: 500px;
  height: 80px;
  background-color: #fff;
  position: fixed;
  bottom: 30px;
  left: 50%;
  transform: translateX(-50%);
  border-radius: 50px;
  box-shadow: 0px 10px 30px -2px rgba(0, 0, 0, 0.3);
`;

export default MindSpace;
