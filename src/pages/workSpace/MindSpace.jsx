import React from 'react';
import SpaceWrap from '../../components/container/SpaceWrap';
import styled from 'styled-components';
import Rectangle from '../../components/tools/Rectangle';
import Triangle from '../../components/tools/Triangle';
import Frame from '../../components/container/Frame';
import Viewport from '../../components/container/Viewport';
import Square from '../../components/modules/Square';

const MindSpace = () => {
  return (
    <SpaceWrap>
      <Frame>
        <Viewport>
          <Square>테스트</Square>
        </Viewport>
      </Frame>
      <ToolBox>
        <Rectangle></Rectangle>
        <Triangle></Triangle>
      </ToolBox>
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
  display: flex;
  align-items: center;
  justify-content: start;
  z-index: 11;
`;

export default MindSpace;
