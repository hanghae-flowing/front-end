import { useRef, useState } from 'react';
import { useDispatch } from 'react-redux';
import styled from 'styled-components';
import axios from 'axios';
import { useMutation, useQuery } from 'react-query';
import { createNewLine } from '../../redux/slice/docSlice';
import DefaultText from '../../components/textEditor/DefaultText';
import { URL } from '../../API';
import { useSelector } from 'react-redux';
import { useDoc } from '../../hooks/useDoc';
import { useCallback } from 'react';

const ProposalPage = () => {
  const documentId = useSelector(state => state.post.documentId);

  const {
    status,
    data: docList,
    error,
    isFetching,
    onSuccess,
  } = useDoc(documentId);

  const mutation = useMutation(newTodo => URL.post('', newTodo));

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
            {docList &&
              docList.map((props, index) => (
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
          </>
        );
    }
  }, [status, isFetching]);
  // const h1Value = {
  //   text: ' ',
  //   weight: 700,
  //   fontSize: 64,
  //   color: '#7a7a7a',
  // };

  // const createNewLineHandler = val => {
  //   const { text, weight, fontSize, color } = val;

  //   const sendingData = {
  //     documentId: JSON.parse(sessionStorage.getItem('docInfo')).documentId,
  //     text,
  //     weight,
  //     fontSize,
  //     color,
  //     indexNum: 0,
  //   };
  //   dispatch(createNewLine(sendingData));
  // };

  return (
    <TextBoxDiv>
      <TextEditorDiv>{renderByStatus()}</TextEditorDiv>
      {/* <AddingNewLineDiv>
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
      </AddingNewLineDiv> */}
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

// const AddingNewLineDiv = styled.div`
//   width: 380px;
//   height: 100px;
//   background-color: #4a4a4a;
//   border-radius: 18px;
//   margin-right: auto;
//   margin-left: auto;
//   margin-bottom: 30px;
//   cursor: pointer;
// `;

export default ProposalPage;
