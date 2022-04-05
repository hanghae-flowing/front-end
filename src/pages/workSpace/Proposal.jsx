import { useRef, useState } from 'react';
import { useDispatch } from 'react-redux';
import styled from 'styled-components';
import axios from 'axios';
import { useQuery } from 'react-query';
import { createNewLine } from '../../redux/slice/docSlice';
import DefaultText from '../../components/textEditor/DefaultText';
import { URL } from '../../API';
import { useSelector } from 'react-redux';
import { useDoc } from '../../hooks/useDoc';
import { useCallback } from 'react';
import { ReactComponent as BigT } from '../../assets/icons/T.svg';
import { ReactComponent as SmallT } from '../../assets/icons/SmallT.svg';
import { ReactComponent as Paragraph } from '../../assets/icons/Paragraph.svg';

const ProposalPage = () => {
  const dispatch = useDispatch();
  const documentId = useSelector(state => state.post.documentId);

  const { status, data: docList, error, isFetching } = useDoc(documentId);
  console.log(docList);
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
                  key={index + 1}
                  lineId={props.lineId}
                  documentId={props.documentId}
                  text={props.text}
                  weight={props.weight}
                  fontSize={props.fontSize}
                  color={props.color}
                  indexNum={index + 1}
                  maxLength={props.maxLength}
                  placeholder={props.placeHolder}
                />
              ))}
          </>
        );
    }
  }, [isFetching]);

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
      <TextEditorDiv>
        <SeperationLine />
        {renderByStatus()}
      </TextEditorDiv>

      {/* <AddingNewLineDiv>
        <SeperationDiv onClick={createNewLineHandler}>
          <BigT />
        </SeperationDiv>
        <SeperationDiv onClick={createNewLineHandler}>
          <SmallT />
        </SeperationDiv>
        <SeperationDiv onClick={createNewLineHandler}>
          <Paragraph />
        </SeperationDiv>
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

const SeperationLine = styled.div`
  position: absolute;
  margin-top: 150px;
  width: 945px;
  border: 3px solid #e3e0ff;
`;

const AddingNewLineDiv = styled.div`
  width: 200px;
  height: 81px;
  display: flex;
  justify-content: center;
  align-items: center;
  background: #4a4a4a;
  border-radius: 15px;
  margin: 100px auto;
  padding: 8px 54px;
  box-shadow: 2px 4px 10px rgba(0, 0, 0, 0.25);
`;

const SeperationDiv = styled.div`
  margin: 0 10px;
`;
export default ProposalPage;
