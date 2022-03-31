import { useDispatch } from 'react-redux';
import styled from 'styled-components';
import { deleteLine, editLine } from '../../redux/slice/docSlice';
import _ from 'lodash';
import { useEffect, useState } from 'react';
import { useMutation } from 'react-query';
import { URL } from '../../API';

const DefaultText = props => {
  const lineId = props.lineId;
  const [value, setValue] = useState(props.text);

  const mutation = useMutation(newTodo =>
    URL.put(`/documentLines/${lineId}`, newTodo),
  );
  useEffect(() => {
    setValue(props.text);
  }, [props.text]);

  const throttle = _.throttle(e => {
    setValue(e.target.value);
    const sendingData = {
      text: e.target.value,
      indexNum: props.indexNum,
      weight: props.weight,
      fontSize: props.fontSize,
      color: props.color,
    };
    mutation.mutate(sendingData);
  }, 3000);

  return (
    <InputText
      onChange={throttle}
      value={value}
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
