import React, { useEffect, useRef, useState } from 'react';
import { useMutation } from 'react-query';
import styled from 'styled-components';
import { URL } from '../../API';

const GapTable = props => {
  const gapNodeId = props.gapNodeId;
  const [subject, setSubject] = useState(props.subject);
  const [text, setText] = useState(props.text);
  const [targetText, setTargetText] = useState(props.targetText);

  const subRef = useRef(null);
  const textRef = useRef(null);
  const targetRef = useRef(null);

  const mutation = useMutation(data => {
    URL.put(`/gapNode/${gapNodeId}`, data);
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
    mutation.mutate(sendingData);
  };

  return (
    <StyledBox>
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

export default GapTable;
