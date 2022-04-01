import React, { useEffect, useRef, useState } from 'react';
import { useMutation } from 'react-query';
import styled from 'styled-components';
import { URL } from '../../API';

const GapTable = props => {
  const gapNodeId = props.gapNodeId;
  const [subject, setSubject] = useState(props.subject);
  const [text, setText] = useState(props.text);
  const [targetText, setTargetText] = useState(props.targetText);
  const [visible, setVisible] = useState(false);

  const subRef = useRef(null);
  const textRef = useRef(null);
  const targetRef = useRef(null);

  const editGap = useMutation(data => {
    URL.put(`/gapNode/${gapNodeId}`, data);
  });

  const deleteGap = useMutation(() => {
    URL.delete(`gapNode/${gapNodeId}`);
  });

  useEffect(() => {
    setSubject(props.subject);
    setText(props.text);
    setTargetText(props.targetText);
  }, [props.subject, props.text, props.targetText]);

  const onChange = () => {
    setSubject(subRef.current.value);
    setText(textRef.current.value);
    setTargetText(targetRef.current.value);
    const sendingData = {
      subject: subject,
      text: text,
      targetText: targetText,
    };
    editGap.mutate(sendingData);
  };

  const onDelete = () => {
    deleteGap.mutate();
  };

  return (
    <StyledBox
      onMouseOver={() => {
        setVisible(true);
      }}
      onMouseOut={() => {
        setVisible(false);
      }}
    >
      <GapWrap>
        <Subtitle>
          <SubInput
            ref={subRef}
            onChange={onChange}
            placeholder="세부 과제명"
            defaultValue={subject}
            maxLength={10}
          />
        </Subtitle>
        <ContentBox>
          <Delete visible={visible} onClick={onDelete}>
            <Line1 />
            <Line2 />
          </Delete>
          <Content
            ref={textRef}
            onChange={onChange}
            placeholder="해당 과제의 현안 및 문제점을 입력해주세요."
            defaultValue={text}
          />
        </ContentBox>
      </GapWrap>
      <GapWrap>
        <EmptyBox />
        <ContentBox>
          <Content
            ref={targetRef}
            onChange={onChange}
            placeholder="해당 과제의 이상적인 개선결과를 입력해주세요."
            defaultValue={targetText}
          />
        </ContentBox>
      </GapWrap>
    </StyledBox>
  );
};

const StyledBox = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const GapWrap = styled.div`
  width: 35%;
  padding-bottom: 30px;
  padding-left: 30px;
  padding-right: 30px;
  z-index: 1;
`;

const Subtitle = styled.div`
  width: 170px;
  height: 40px;
  padding: 10px 20px;
  border-radius: 10px;
  background-color: #fff;
  font-size: 15px;
  box-shadow: 2px 4px 7px rgba(0, 0, 0, 0.1);
  display: inline-block;
  margin-bottom: 10px;
`;

const SubInput = styled.input`
  width: 100%;
  font-size: 15px;
  border: none;
  &:focus {
    outline: none;
  }
`;

const EmptyBox = styled.div`
  height: 40px;
`;

const ContentBox = styled.div`
  position: relative;
  width: 100%;
  background-color: #fff;
  border-radius: 10px;
  padding: 10px 20px;
  box-shadow: 2px 4px 7px rgba(0, 0, 0, 0.1);
`;

const Content = styled.textarea`
  width: 100%;
  height: 100px;
  resize: none;
  border: none;
  font-size: 14px;
  &:focus {
    outline: none;
  }
`;
const Delete = styled.button`
  display: ${props => (props.visible ? 'block' : 'none')};
  position: absolute;
  top: -10px;
  right: -10px;
  width: 30px;
  height: 30px;
  background-color: #c4c4c4;
  border-radius: 30px;
  border: none;
  box-shadow: 1px 2px 2px rgba(0, 0, 0, 0.25);
`;

const Line1 = styled.div`
  width: 15px;
  height: 2px;
  background-color: #fff;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%) rotate(45deg);
`;

const Line2 = styled.div`
  width: 15px;
  height: 2px;
  background-color: #fff;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%) rotate(135deg);
`;

export default GapTable;
