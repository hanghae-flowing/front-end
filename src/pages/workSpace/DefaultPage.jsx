import React from 'react';
import styled from 'styled-components';
import { ReactComponent as KirinHi } from '../../assets/icons/KirinHi.svg';

const DefaultPage = () => {
  return (
    <StyeldWrap>
      <StyledDiv>
        <ImgWrap>
          <KirinHi />
        </ImgWrap>
        <LandignText>기린이와 기획을 시작해보세요!</LandignText>
      </StyledDiv>
    </StyeldWrap>
  );
};

const StyeldWrap = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const StyledDiv = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

const ImgWrap = styled.div`
  margin-bottom: 20px;
`;

const LandignText = styled.p`
  font-size: 28px;
  color: #301fad;
  font-weight: 500;
`;

export default DefaultPage;
