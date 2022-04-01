import React, { useState } from 'react';
import { useSelector } from 'react-redux';
import styled from 'styled-components';
import GapTable from '../../components/modules/GapTable';
import { GapToolBox } from '../../components/tools/ToolBox';
import { useGap } from '../../hooks/useGap';

const GapAnalysis = () => {
  const [visible, setVisible] = useState(false);
  const gapTableId = useSelector(state => state.post.gapTableId);
  const { data: gapList } = useGap(gapTableId);
  console.log(gapList);
  return (
    <StyledDiv>
      <StyledWrap>
        <TableWrap position="left" />
        <TableWrap position="right" />
        <StyledBox>
          <TitleWrap>
            <Title>AS-IS</Title>
          </TitleWrap>
          <TitleWrap>
            <Title>TO-BE</Title>
          </TitleWrap>
        </StyledBox>
        {gapList &&
          gapList.map(data => (
            <GapTable
              key={data.gapNodeId}
              gapNodeId={data.gapNodeId}
              subject={data.subject}
              text={data.text}
              targetText={data.targetText}
            />
          ))}
      </StyledWrap>
      <GapToolBox gapTableId={gapTableId} />
    </StyledDiv>
  );
};

const StyledDiv = styled.div`
  width: 100%;
  padding: 100px;
  background-color: #fff;
`;

const StyledWrap = styled.div`
  position: relative;
  width: 100%;
  max-width: 1440px;
  margin: 0 auto;
`;

const StyledBox = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const TableWrap = styled.div`
  width: 35%;
  height: 100%;
  background-color: #e3e3e3;
  position: absolute;
  top: 0;
  ${props => props.position} : 0;
  border-radius: 20px;
`;

const TitleWrap = styled.div`
  width: 35%;
  padding: 30px;
  z-index: 1;
`;

const Title = styled.h2`
  font-size: 28px;
  color: #818181;
`;

export default GapAnalysis;
