import axios from 'axios';
import styled from 'styled-components';

const fetch = () => {
  return axios.get(``);
};

const SwotAnalysis = () => {
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
          <TableText></TableText>
          <TableText></TableText>
          <TableText></TableText>
          <TableText></TableText>
          <TableText></TableText>
        </SwotDiv>
        <SwotDiv>
          <TableTitle>Weakness 내부 약점을 적어주세요</TableTitle>
          <TableText></TableText>
          <TableText></TableText>
          <TableText></TableText>
          <TableText></TableText>
          <TableText></TableText>
        </SwotDiv>
        <SwotDiv>
          <TableTitle>Opportunity 외부 기회를 적어주세요</TableTitle>
          <TableText></TableText>
          <TableText></TableText>
          <TableText></TableText>
          <TableText></TableText>
          <TableText></TableText>
        </SwotDiv>
        <SwotDiv>
          <TableTitle>Treat 외부 위협을 적어주세요</TableTitle>
          <TableText></TableText>
          <TableText></TableText>
          <TableText></TableText>
          <TableText></TableText>
          <TableText></TableText>
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
const TableText = styled.p`
  font-weight: 400;
  font-size: 21px;
  line-height: 25px;

  color: #6c6c6c;

  opacity: 0.3;
`;
export default SwotAnalysis;
