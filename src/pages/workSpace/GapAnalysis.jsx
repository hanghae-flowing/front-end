import React from 'react';
import styled from 'styled-components';
import { GapToolBox } from '../../components/tools/ToolBox';

const GapAnalysis = () => {
  return (
    <StyledDiv>
      <StyledWrap>
        <GapWrap>
          <p>AS-IS</p>
        </GapWrap>
        <GapWrap>
          <p>TO-BE</p>
        </GapWrap>
      </StyledWrap>
      <GapToolBox />
    </StyledDiv>
  );
};

const StyledDiv = styled.div`
  width: 100%;
  padding: 100px;
  background-color: #bfbfbf;
`;

const StyledWrap = styled.div`
  width: 100%;
  max-width: 1440px;
  margin: 0 auto;
  background-color: #e3e3e3;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const GapWrap = styled.div`
  width: 35%;
  padding: 30px;
  background-color: #fff;
`;

export default GapAnalysis;
