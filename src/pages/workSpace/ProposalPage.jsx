import { useRef, useState } from 'react';
import { useDispatch } from 'react-redux';
import styled from 'styled-components';
import axios from 'axios';
import { useQuery } from 'react-query';
import { createNewLine } from '../../redux/slice/docSlice';
import DefaultText from '../../components/textEditor/DefaultText';

const fetch = () => {
  const documentId =
    sessionStorage.getItem('docInfo') && sessionStorage.getItem('docInfo');
  return axios.get(`http://13.209.41.157/documentLines/${documentId}`);
};

const ProposalPage = () => {
  const dispatch = useDispatch();

  const { isLoading, data, isError, error, isFetching, isSuccess } = useQuery(
    'data',
    fetch,
    {
      refetchInterval: 2000,
    },
  );

  if (isLoading) {
    return <h2>Loading....</h2>;
  }
  if (isError) {
    return <h2>{error.message}</h2>;
  }

  const h1Value = {
    text: ' ',
    weight: 700,
    fontSize: 64,
    color: '#7a7a7a',
  };

  const createNewLineHandler = val => {
    const { text, weight, fontSize, color } = val;

    const sendingData = {
      documentId: sessionStorage.getItem('docInfo'),
      text,
      weight,
      fontSize,
      color,
      indexNum: 0,
    };
    dispatch(createNewLine(sendingData));
  };
  //api 수정 시급~ 프로젝트 오픈시 docInfo 받아와야함

  return (
    <TextBoxDiv>
      <TextEditorDiv>
        {data.data &&
          data.data.map((props, index) => (
            <DefaultText
              key={index}
              lineId={props.lineId}
              documentId={props.documentId}
              text={props.text}
              weight={props.weight}
              fontSize={props.fontSize}
              color={props.color}
              indexNum={index}
            />
          ))}
      </TextEditorDiv>
      <AddingNewLineDiv>
        <button
          onClick={() => {
            createNewLineHandler(h1Value);
          }}
        >
          h1
        </button>
        <button>h2</button>
        <button>ph1</button>
        <button>ph2</button>
        <button>date</button>
        <button>p</button>
        <button>l1</button>
        <button>l2</button>
        <button>l3</button>
      </AddingNewLineDiv>
    </TextBoxDiv>
  );
};

const TextBoxDiv = styled.div`
  width: 1190px;
  margin: 114px auto;
  box-shadow: 0px 4px 10px rgba(0, 0, 0, 0.25);
  cursor: text;
`;

const TextEditorDiv = styled.div`
  width: 945px;
  margin: 155px auto;
`;

const AddingNewLineDiv = styled.div`
  width: 380px;
  height: 100px;
  background-color: #4a4a4a;
  border-radius: 18px;
  margin-right: auto;
  margin-left: auto;
  margin-bottom: 30px;
  cursor: pointer;
`;

export default ProposalPage;
