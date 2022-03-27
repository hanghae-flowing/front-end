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
    <TextDiv>
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
      <TestDiv onClick={createNewLineHandler} />
    </TextDiv>
  );
};

const TextDiv = styled.div`
  width: 1190px;
  margin: 114px auto;
  cursor: text;
`;

const TestDiv = styled.div`
  background-color: #000;
  width: 24px;
  height: 24px;
`;
export default ProposalPage;
