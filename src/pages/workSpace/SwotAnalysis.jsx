import styled from 'styled-components';
import { useQuery } from 'react-query';
import StrengthTableText from '../../components/swot/StrengthTableText';
import WeaknessTableText from '../../components/swot/WeaknessTableText';
import OpporTableText from '../../components/swot/OpporTableText';
import ThreatTableText from '../../components/swot/ThreatTableText';
import { useCallback } from 'react';
import { useSwot } from '../../hooks/useSwot';
import { useSelector } from 'react-redux';

const SwotAnalysis = () => {
  const swotId = useSelector(state => state.post.swotId);

  const { status, data: swotList, error, isFetching } = useSwot(swotId);
  const swotStrengthList = swotList && swotList.strengthDtoList[0];
  const swotWeaknessList = swotList && swotList.weaknessDtoList[0];
  const swotOpportunityhList = swotList && swotList.opportunityDtoList[0];
  const swotThreatList = swotList && swotList.threatDtoList[0];
  const renderByStatus = useCallback(() => {
    switch (status) {
      case 'loading':
        return <div>loading</div>;
      case 'error':
        if (error instanceof Error) {
          return <span>Error: {error.message}</span>;
        }
        break;
      default:
        return (
          <>
            <SwotDiv>
              <BakcgroundText>S</BakcgroundText>
              <TableTitle>Strength</TableTitle>
              {swotStrengthList &&
                swotStrengthList.map((props, index) => (
                  <StrengthTableText
                    key={index}
                    lineId={props.lineId}
                    text={props.text}
                  ></StrengthTableText>
                ))}
            </SwotDiv>
            <SwotDiv>
              <BakcgroundText>W</BakcgroundText>
              <TableTitle>Weakness</TableTitle>
              {swotWeaknessList &&
                swotWeaknessList.map((props, index) => (
                  <WeaknessTableText
                    key={index}
                    lineId={props.lineId}
                    text={props.text}
                  ></WeaknessTableText>
                ))}
            </SwotDiv>
            <SwotDiv>
              <BakcgroundText>O</BakcgroundText>
              <TableTitle>Opportunity</TableTitle>
              {swotOpportunityhList &&
                swotOpportunityhList.map((props, index) => (
                  <OpporTableText
                    key={index}
                    lineId={props.lineId}
                    text={props.text}
                  ></OpporTableText>
                ))}
            </SwotDiv>
            <SwotDiv>
              <BakcgroundText>T</BakcgroundText>
              <TableTitle>Treat</TableTitle>
              {swotThreatList &&
                swotThreatList.map((props, index) => (
                  <ThreatTableText
                    key={index}
                    lineId={props.lineId}
                    text={props.text}
                  ></ThreatTableText>
                ))}
            </SwotDiv>
          </>
        );
    }
  }, [isFetching]);

  return (
    <Wrapper>
      <ColWrapper>
        <ColDiv>
          <ColName>내부환경</ColName>
        </ColDiv>
        <ColDiv>
          <ColName>외부환경</ColName>
        </ColDiv>
      </ColWrapper>

      <GridWrapper>{renderByStatus()}</GridWrapper>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  display: flex;
  width: 1031px;
  height: 696px;

  margin: 130px auto;
`;

const BakcgroundText = styled.h1`
  font-family: 'Inter';
  font-style: normal;
  font-weight: 700;
  font-size: 128px;
  line-height: 155px;

  position: fixed;
  margin: 90px 186px;

  color: rgba(129, 129, 129, 0.25);
`;

const ColWrapper = styled.div`
  display: grid;
  grid-template-rows: repeat(2, 1fr);
  width: 71px;
  height: 706px;
  gap: 24px;
  margin-right: 24px;
`;

const GridWrapper = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 24px;
  width: 936x;
  height: 696px;
`;

const SwotDiv = styled.div`
  width: 522.41px;
  height: 338px;
  background: #ebebeb;
  border-radius: 25px;
  padding: 54px 38.28px;
`;

const ColName = styled.h2`
  font-family: 'Spoqa Han Sans Neo';
  font-style: normal;
  font-weight: 700;
  font-size: 32px;
  line-height: 40px;
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;

  color: #e4e4e4;
`;
const ColDiv = styled.div`
  width: 71px;
  height: 336px;
  padding: 94px 9px;
  border-radius: 25px;

  background: #5432d3;
  border-radius: 25px;
`;
const TableTitle = styled.h3`
  font-family: 'Inter';
  font-style: normal;
  font-weight: 700;
  font-size: 24px;
  line-height: 29px;
  /* identical to box height */

  color: #818181;
`;

export default SwotAnalysis;
