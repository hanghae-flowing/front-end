import axios from 'axios';
import styled from 'styled-components';
import { useQuery } from 'react-query';
import { URL } from '../../API';
import { useSelector } from 'react-redux';
import StrengthTableText from '../../components/swot/StrengthTableText';
import WeaknessTableText from '../../components/swot/WeaknessTableText';
import OpporTableText from '../../components/swot/OpporTableText';
import ThreatTableText from '../../components/swot/ThreatTableText';

const fetch = () => {
  const swotId = sessionStorage.getItem('swotInfo');
  return URL.get(`/swot/${swotId}`);
};

const SwotAnalysis = () => {
  const { isLoading, data, isError, error, isFetching, isSuccess } = useQuery(
    'data',
    fetch,
    {
      refetchInterval: 2000,
    },
  );

  console.log(data);

  if (isLoading) {
    return <h2>Loading....</h2>;
  }
  if (isError) {
    return <h2>{error.message}</h2>;
  }

  const swotStrengthList = data.data.strengthDtoList[0];
  const swotWeaknessList = data.data.weaknessDtoList[0];
  const swotOpportunityhList = data.data.opportunityDtoList[0];
  const swotThreatList = data.data.threatDtoList[0];
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
      <RowWrapper>
        <RowDiv>
          <RowName>긍정</RowName>
        </RowDiv>
        <RowDiv>
          <RowName>부정</RowName>
        </RowDiv>
      </RowWrapper>
      <GridWrapper>
        <SwotDiv>
          <TableTitle>Strength 내부 강점을 적어주세요</TableTitle>
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
          <TableTitle>Weakness 내부 약점을 적어주세요</TableTitle>
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
          <TableTitle>Opportunity 외부 기회를 적어주세요</TableTitle>
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
          <TableTitle>Treat 외부 위협을 적어주세요</TableTitle>
          {swotThreatList &&
            swotThreatList.map((props, index) => (
              <ThreatTableText
                key={index}
                lineId={props.lineId}
                text={props.text}
              ></ThreatTableText>
            ))}
        </SwotDiv>
      </GridWrapper>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  display: flex;
  width: 1230px;
  heihgt: 798px;
  margin: 165px 191px;
`;
const ColWrapper = styled.div`
  display: flex;
  flex-direction: column;
  margin-top: 92px;
  width: 126.21px;
  height: 706px;
  justify-content: space-between;
`;
const RowWrapper = styled.div`
  display: flex;
  width: 1072.76px;
  height: 71px;
  margin-left: 30px;
  justify-content: space-between;
`;
const GridWrapper = styled.div`
  position: absolute;
  left: 348.24px;
  top: 257px;
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 28px;
  width: 1072.76px;
  height: 706px;
`;

const SwotDiv = styled.div`
  width: 522.41px;
  height: 338px;
  background: #ebebeb;
  border-radius: 25px;
  padding: 54px 38.28px;
`;
const RowName = styled.h2`
  font-weight: 500;
  font-size: 32px;
  line-height: 38px;

  color: #e4e4e4;
`;
const RowDiv = styled.div`
  width: 522.41px;
  height: 71px;
  text-align: center;
  background: #221d7e;
  border-radius: 25px;
`;
const ColName = styled.h2`
  width: 20px;
  font-weight: 500;
  font-size: 32px;
  line-height: 38px;

  color: #e4e4e4;
`;
const ColDiv = styled.div`
  width: 126.21px;
  height: 338px;
  text-align: center;

  background: #221d7e;
  border-radius: 25px;
`;
const TableTitle = styled.h3`
  font-weight: 700;
  font-size: 24px;
  line-height: 29px;

  color: #6c6c6c;
`;
const TableText = styled.input`
  font-weight: 400;
  font-size: 21px;
  line-height: 25px;
  width: 450px;
  color: #6c6c6c;
  margin-top: 18px;
  opacity: 0.3;
  border: none;
  &:focus {
    outline: none;
  }
`;
export default SwotAnalysis;
