import { useRef } from 'react';
import { useMutation } from 'react-query';
import { useDispatch } from 'react-redux';
import styled from 'styled-components';
import { deleteLine, editLine } from '../../redux/slice/docSlice';
import axios from 'axios';
import { queryClient } from '../../App';

const DefaultText = props => {
  const dispatch = useDispatch();
  const textRef = useRef();

  // if (textRef != null && textRef.current.value.length === 0) {
  //   dispatch(deleteLine(props.lineId));
  // }
  //마운트랜더링될때 언마운트될때 주소가같은 언마운트일때
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
      placeholder="type"
    />
  );
};

const InputText = styled.input`
  width: 100%;
  margin-bottom: 20px;
  font-weight: ${props => props.weight};
  font-size: ${props => props.fontSize}px;
  color: ${props => props.color};
  border: none;
  &:focus {
    outline: none;
  }
`;

export default DefaultText;
