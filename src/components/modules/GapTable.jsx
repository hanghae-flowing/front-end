import React, { useCallback, useEffect, useRef, useState } from 'react';
import { useMutation } from 'react-query';
import styled from 'styled-components';
import { URL } from '../../API';
import { debounce } from 'lodash';
import MileStone from './MileStone';
import { useDispatch } from 'react-redux';
import { setGapNodeId } from '../../redux/slice/gapSlice';
import { useStone } from '../../hooks/useStone';

const GapTable = props => {
  const dispatch = useDispatch();

  const gapNodeId = props.gapNodeId;
  const [subject, setSubject] = useState(props.subject);
  const [text, setText] = useState(props.text);
  const [targetText, setTargetText] = useState(props.targetText);
  const [visible, setVisible] = useState(false);
  const [isFocus, setIsFocus] = useState(false);
  const offsetRef = useRef(0);

  useEffect(() => {
    setSubject(props.subject);
    setText(props.text);
    setTargetText(props.targetText);
  }, [props.subject, props.text, props.targetText]);

  const subRef = useRef('');
  const textRef = useRef('');
  const targetRef = useRef('');

  const editGap = useMutation(data => {
    URL.put(`/gapNode/${gapNodeId}`, data);
  });

  const debounceHandler = useCallback(
    debounce(sendingData => {
      editGap.mutate(sendingData);
    }, 1000),
    [],
  );

  const deleteGap = useMutation(() => {
    URL.delete(`/gapNode/${gapNodeId}`);
  });

  const onChange = () => {
    const sendingData = {
      subject: subject,
      text: text,
      targetText: targetText,
    };
    debounceHandler(sendingData);
    setSubject(subRef.current.value);
    setText(textRef.current.value);
    setTargetText(targetRef.current.value);
  };

  const onDelete = () => {
    deleteGap.mutate();
  };

  const setGapNode = () => {
    dispatch(setGapNodeId(gapNodeId));
  };

  const { status, data: stoneList, error, isFetching } = useStone(gapNodeId);
  // console.log(stoneList);

  const renderByStatus = useCallback(() => {
    switch (status) {
      case 'loading':
        return <div>loading</div>;
      case 'error':
        if (error instanceof Error) {
          return <span>Error: {error.message}</span>;
        }
        break;
      default:
        return (
          <>
            {stoneList?.map(data => (
              <MileStone
                fieldRef={offsetRef}
                key={data.gapStoneId}
                xval={data.xval}
                text={data.text}
                gapStoneId={data.gapStoneId}
                gapNodeId={gapNodeId}
              />
            ))}
          </>
        );
    }
  }, [status, isFetching]);

  return (
    <StyledBox
      onMouseOver={() => {
        setVisible(true);
      }}
      onMouseOut={() => {
        setVisible(false);
      }}
      onFocus={() => {
        setIsFocus(true);
        setGapNode();
      }}
      onBlur={() => {
        setIsFocus(false);
      }}
    >
      <GapWrap>
        <Subtitle>
          <SubInput
            ref={subRef}
            onChange={onChange}
            placeholder="?????? ?????????"
            value={subject}
            maxLength={10}
          />
        </Subtitle>
        <ContentBox focus={isFocus}>
          <Delete visible={visible} onClick={onDelete}>
            <Line1 />
            <Line2 />
          </Delete>
          <Content
            ref={textRef}
            onChange={onChange}
            placeholder="?????? ????????? ?????? ??? ???????????? ??????????????????."
            value={text}
          />
        </ContentBox>
      </GapWrap>
      <MileStoneField ref={offsetRef}>{renderByStatus()}</MileStoneField>
      <GapWrap>
        <EmptyBox />
        <ContentBox focus={isFocus}>
          <Content
            ref={targetRef}
            onChange={onChange}
            placeholder="?????? ????????? ???????????? ??????????????? ??????????????????."
            value={targetText}
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
  position: relative;
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
  border: ${props => (props.focus ? '1px solid #999' : 'none')};
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

const MileStoneField = styled.div`
  width: 36%;
  height: 3px;
  background-color: #5432d3;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
`;

export default GapTable;
