import { useRef } from 'react';
import { useDispatch } from 'react-redux';
import styled from 'styled-components';
import { editStrTableText } from '../../redux/slice/swotSlice';

const StrengthTableText = props => {
  const textRef = useRef();
  const dispatch = useDispatch();

  const onChangeHandler = () => {
    const lineId = props.lineId;
    const swotSendingData = {
      text: textRef.current.value + ' ',
    };
    dispatch(editStrTableText({ swotSendingData, lineId }));
  };
  return (
    <TableText
      defaultValue={props.text}
      ref={textRef}
      onChange={onChangeHandler}
    />
  );
};

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

export default StrengthTableText;
