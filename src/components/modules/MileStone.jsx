import { debounce } from 'lodash';
import React, { useCallback, useEffect, useRef, useState } from 'react';
import { useMutation } from 'react-query';
import styled from 'styled-components';
import { URL } from '../../API';

const MileStone = props => {
  const [onPress, setOnPress] = useState(false);
  const [visible, setVisible] = useState(false);
  const [transX, setTransX] = useState(props.xval);
  const [text, setText] = useState(props.text);
  const nodeRef = useRef(0);

  const gapStoneId = props.gapStoneId;
  const gapNodeId = props.gapNodeId;

  useEffect(() => {
    setTransX(props.xval);
    setText(props.text);
  }, [props.xval, props.text]);

  const onMouseDown = e => {
    setOnPress(true);
  };

  const onMouseMove = e => {
    e.preventDefault();
    const sendingData = {
      xval: transX,
      text: text,
      gapNodeId: gapNodeId,
    };
    if (onPress === true) {
      const el = props.fieldRef.current.getBoundingClientRect();
      let mouseX = e.clientX;
      let shiftX = mouseX - el.left - e.target.offsetWidth / 2;
      if (shiftX < 0) {
        shiftX = 0;
      }
      let rightEdge = el.offsetWidth - e.target.offsetWidth;
      if (shiftX > rightEdge) {
        shiftX = rightEdge;
      }
      debounceHandler(sendingData);
      setTransX(parseInt(shiftX));
    }
  };

  const onMouseUp = e => {
    setOnPress(false);
  };

  const updateStone = useMutation(data => {
    URL.put(`/gapStone/${gapStoneId}`, data);
  });

  const debounceHandler = useCallback(
    debounce(sendingData => {
      updateStone.mutate(sendingData);
    }, 1000),
    [],
  );

  const onChange = e => {
    const sendingData = {
      xval: transX,
      text: text,
      gapNodeId: gapNodeId,
    };
    debounceHandler(sendingData);
    setText(e.target.value);
  };

  const deleteStone = useMutation(() => {
    URL.delete(`/gapStone/${gapStoneId}`);
  });

  const onDelete = () => {
    deleteStone.mutate();
  };

  return (
    <StyledWrap
      ref={nodeRef}
      onMouseDown={onMouseDown}
      onMouseMove={onMouseMove}
      onMouseUp={onMouseUp}
      horizontal={transX}
      onMouseOver={() => {
        setVisible(true);
      }}
      onMouseOut={() => {
        setVisible(false);
      }}
    >
      <Delete visible={visible} onClick={onDelete}>
        <Line rotate="45deg" />
        <Line rotate="135deg" />
      </Delete>
      <StyledDiv>
        <Text
          type="text"
          placeholder="마일스톤"
          maxLength={8}
          value={text}
          onChange={onChange}
        />
      </StyledDiv>
    </StyledWrap>
  );
};

const StyledWrap = styled.div`
  position: absolute;
  top: -25px;
  left: 0;
  transform: translateX(${props => props.horizontal}px);
`;

const StyledDiv = styled.div`
  width: 150px;
  height: 50px;
  border-radius: 30px;
  background-color: #eee0ff;
  box-shadow: 2px 4px 10px rgba(0, 0, 0, 0.1);
  display: flex;
  align-items: center;
  justify-content: center;
`;

const Text = styled.input`
  width: 100%;
  height: 100%;
  padding: 5px;
  font-size: 16px;
  background: none;
  border: none;
  resize: none;
  overflow: auto;
  text-align: center;
  &:focus {
    outline: none;
  }
`;

const Delete = styled.div`
  display: ${props => (props.visible ? 'block' : 'none')};
  width: 22px;
  height: 22px;
  border-radius: 50px;
  background-color: #e3e3e3;
  position: absolute;
  top: -6px;
  right: -6px;
  cursor: pointer;
`;

const Line = styled.span`
  width: 10px;
  height: 2px;
  background-color: #222;
  display: block;
  position: absolute;
  top: 10px;
  left: 6px;
  transform: rotate(${props => props.rotate});
`;

export default MileStone;
