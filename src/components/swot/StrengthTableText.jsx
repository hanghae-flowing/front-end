import styled from 'styled-components';
import { useState } from 'react';
import { useMutation } from 'react-query';
import { useEffect } from 'react';
import { useCallback } from 'react';
import { URL } from '../../API';
import _ from 'lodash';
const StrengthTableText = props => {
  const lineId = props.lineId;
  const [value, setValue] = useState(props.text);

  const mutation = useMutation(newTodo =>
    URL.put(`/swot/strength/${lineId}`, newTodo),
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
    };
    debounceHandler(sendingData);
    setValue(e.target.value);
  };

  return <TableText onChange={onChange} value={value} />;
};

const TableText = styled.input`
  font-family: 'Spoqa Han Sans Neo';
  font-style: normal;
  font-weight: 400;
  font-size: 21px;
  line-height: 26px;
  width: 450px;
  color: #6c6c6c;
  margin-top: 18px;
  background: none;
  border: none;
  &:focus {
    outline: none;
  }
`;

export default StrengthTableText;
