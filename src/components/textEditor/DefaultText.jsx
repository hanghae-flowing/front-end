import { useRef } from 'react';
import { useMutation } from 'react-query';
import { useDispatch } from 'react-redux';
import styled from 'styled-components';
import { editLine } from '../../redux/slice/docSlice';
import axios from 'axios';

const DefaultText = props => {
  const dispatch = useDispatch();
  const textRef = useRef();

  const onChangeHandler = () => {
    const lineId = props.lineId;
    const sendingData = {
      text: textRef.current.value + ' ',
      indexNum: props.indexNum,
      weight: props.weight,
      fontSize: props.fontSize,
      color: props.color,
    };
    dispatch(editLine({ sendingData, lineId }));
  };
  return (
    <InputText
      onChange={onChangeHandler}
      defaultValue={props.text}
      ref={textRef}
      color={props.color}
      weight={props.weight}
      fontSize={props.fontSize}
      id={props.documnetId}
      placeholder="사업계획서"
    />
  );
};

const InputText = styled.input`
  width: 100%;
  line-height: 70px;
  font-weight: ${props => props.weight};
  font-size: ${props => props.fontSize}px;
  color: ${props => props.color};
  border: none;
`;

export default DefaultText;
