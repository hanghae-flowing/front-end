import { useDispatch } from 'react-redux';
import styled from 'styled-components';
import { deleteLine, editLine } from '../../redux/slice/docSlice';
import _ from 'lodash';
import { useState } from 'react';
import { useMutation } from 'react-query';
import { URL } from '../../API';

const DefaultText = props => {
  const dispatch = useDispatch();
  const [value, setValue] = useState(props.text);
  const lineId = props.lineId;

  const mutation = useMutation(newTodo =>
    URL.put(`/documentLines/${lineId}`, newTodo),
  );

  const throttle = _.throttle(e => {
    setValue(e.target.value);
    const sendingData = {
      text: value + ' ',
      indexNum: props.indexNum,
      weight: props.weight,
      fontSize: props.fontSize,
      color: props.color,
    };
    mutation.mutate(sendingData);
    // dispatch(editLine({ sendingData, lineId }));
  }, 3000);

  //마운트랜더링될때 언마운트될때 주소가같은 언마운트일때

  return (
    <InputText
      onChange={throttle}
      defaultValue={value}
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
