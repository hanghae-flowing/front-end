import { useDispatch } from 'react-redux';
import styled from 'styled-components';
import { deleteLine, editLine } from '../../redux/slice/docSlice';
import _ from 'lodash';
import { useCallback, useEffect, useState } from 'react';
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

  const debounceHandler = useCallback(
    _.debounce(sendingData => {
      mutation.mutate(sendingData);
    }, 2000),
    [],
  );

  const onChange = e => {
    const sendingData = {
      text: e.target.value,
      indexNum: props.indexNum,
      weight: props.weight,
      fontSize: props.fontSize,
      color: props.color,
    };
    debounceHandler(sendingData);
    setValue(e.target.value);
  };

  return (
    <InputText
      type="text"
      onChange={onChange}
      value={value}
      color={props.color}
      weight={props.weight}
      fontSize={props.fontSize}
      id={props.documnetId}
      placeholder={props.pla}
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
