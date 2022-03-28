import { useDispatch } from 'react-redux';
import styled from 'styled-components';
import AddingButton from '../../components/textEditor/AddingButton';
import Heading from '../../components/textEditor/Heading';
import HeadingMiddle from '../../components/textEditor/HeadingMiddle';
import HeadingSmall from '../../components/textEditor/HeadingSmall';
import ParagraphText from '../../components/textEditor/ParagraphText';
import { createNewLine } from '../../redux/slice/docSlice';
import axios from 'axios';
import { useQuery } from 'react-query';
import DefaultText from '../../components/textEditor/DefaultText';
import { useState } from 'react';

const fetch = () => {
  const documentId =
    sessionStorage.getItem('docInfo') && sessionStorage.getItem('docInfo');
  return axios.get(`http://13.209.41.157/documentLines/${documentId}`);
};

const ProposalPage = () => {
  const dispatch = useDispatch();
  const [isOpen, setIsOpen] = useState(false);

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

  const createNewLineHandler = () => {
    const sendingData = {
      documentId: sessionStorage.getItem('docInfo'),
      text: '마마~~',
      weight: 700,
      fontSize: 64,
      color: '#7a7a7a',
      indexNum: 4,
    };
    dispatch(createNewLine(sendingData));
  };

  return (
    <TextBoxDiv>
      <TextEditorDiv>
        {data.data &&
          data.data.map(props => (
            <DefaultText
              key={props.indexNum}
              lineId={props.lineId}
              documentId={props.documentId}
              text={props.text}
              weight={props.weight}
              fontSize={props.fontSize}
              color={props.color}
              indexNum={props.indexNum}
            />
          ))}
      </TextEditorDiv>
      <TestButton onClick={createNewLineHandler} />
      <PlusButton onClick={createNewLineHandler} />
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
  margin: 155px, auto;
`;

const TestButton = styled.div`
  background-color: #770000;
  width: 24px;
  height: 24px;
`;

const PlusButton = styled.div`
  width: 380px;
  height: 100px;
  background-color: #4a4a4a;
  box-shadow: 2px 4px 10px rgba(0, 0, 0, 0.25);
`;
export default ProposalPage;
