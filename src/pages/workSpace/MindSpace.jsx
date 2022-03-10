import React from 'react';
import SpaceWrap from '../../components/SpaceWrap';
import styled from 'styled-components';
import Rectangle from '../../components/tools/Rectangle';
import { RectangleBox } from '../../components/modules/Module';

const MindSpace = () => {
  return (
    <SpaceWrap>
      <ContentBox>
        <RectangleBox width="100px" height="100px">
          <p>이거 어떻게 만드는거야 시부럴</p>
        </RectangleBox>
      </ContentBox>
      <ToolBox>
        <Rectangle></Rectangle>
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
  justify-content: space-evenly;
`;

const ContentBox = styled.div`
  width: 100%;
  height: 100%;
  background-color: #40659b;
  position: relative;
`;

export default MindSpace;
