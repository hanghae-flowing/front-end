import React from 'react';
import SpaceWrap from '../../components/SpaceWrap';
import styled from 'styled-components';
import Rectangle from '../../components/tools/Rectangle';
import { CircleBox, RectangleBox } from '../../components/modules/Module';
import Triangle from '../../components/tools/Triangle';

const MindSpace = () => {
  return (
    <SpaceWrap>
      <ContentBox>
        <RectangleBox width="100px" height="100px">
          <p>빌드 테스트4</p>
        </RectangleBox>
        <CircleBox
          width="100px"
          height="100px"
          borderColor="black"
          borderThick="2px"
        >
          <p>원형 테스트</p>
        </CircleBox>
      </ContentBox>
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
`;

const ContentBox = styled.div`
  width: 100%;
  height: 100%;
  position: relative;
`;

export default MindSpace;
