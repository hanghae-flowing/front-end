import React, { useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';
import { Link, Outlet, useNavigate, useLocation } from 'react-router-dom';
import styled from 'styled-components';
import { updateProjectId } from '../../redux/slice/spaceSlice';

const WorkSpace = props => {
  const [tab, setTab] = useState('mind');
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const projectId = useLocation().state.projectId;

  useEffect(() => {
    dispatch(updateProjectId(projectId));
  }, []);

  const onNext = () => {
    if (tab === 'mind') {
      setTab('core');
      navigate('core-space');
    } else if (tab === 'core') {
      setTab('organize');
      navigate('organize-space');
    }
  };

  const onBack = () => {
    if (tab === 'core') {
      setTab('mind');
      navigate('mind-space');
    } else if (tab === 'organize') {
      setTab('core');
      navigate('core-space');
    }
  };

  return (
    <SpaceWrap>
      <Side>
        {tab === 'mind' ? (
          <InfoTab height="calc(100% - 235px)">
            <div
              style={{
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'space-between',
              }}
            >
              <Title>step.1</Title>
              <Save>저장</Save>
            </div>
          </InfoTab>
        ) : (
          <Tab
            to="mind-space"
            onClick={() => {
              setTab('mind');
            }}
          >
            <Title>step.1</Title>
          </Tab>
        )}
        {tab === 'core' ? (
          <InfoTab height="calc(100% - 295px)">
            <Title>step.2</Title>
            <Save>저장</Save>
          </InfoTab>
        ) : (
          <Tab
            to="core-space"
            onClick={() => {
              setTab('core');
            }}
          >
            <Title>step.2</Title>
          </Tab>
        )}
        {tab === 'organize' ? (
          <InfoTab height="calc(100% - 295px)">
            <Title>step.3</Title>
            <Save>저장</Save>
          </InfoTab>
        ) : (
          <Tab
            to="organize-space"
            onClick={() => {
              setTab('organize');
            }}
          >
            <Title>step.3</Title>
          </Tab>
        )}
        {tab === 'mind' ? null : <BottomBtn onClick={onBack}>back</BottomBtn>}
        {tab === 'organize' ? (
          <BottomBtn
            onClick={() => {
              console.log('완성');
            }}
          >
            완성
          </BottomBtn>
        ) : (
          <BottomBtn onClick={onNext}>Next</BottomBtn>
        )}
      </Side>
      <Outlet />
    </SpaceWrap>
  );
};

const SpaceWrap = styled.div`
  padding-top: 84px;
  display: flex;
  align-items: start;
  justify-content: start;
  height: 100%;
`;

const Save = styled.button``;

const Side = styled.div`
  background-color: #e3e3e3;
  height: 100%;
  padding: 20px;
  width: 300px;
  flex-shrink: 0;
`;

const InfoTab = styled.div`
  background-color: #fff;
  border-radius: 10px;
  display: block;
  padding: 20px;
  margin-bottom: 20px;
  width: 100%;
  height: ${props => props.height};
`;

const Tab = styled(Link)`
  background-color: #fff;
  border-radius: 10px;
  display: block;
  padding: 20px;
  margin-bottom: 20px;
  transition: all 0.2s ease-in-out;
  &:hover {
    background-color: #9e9e9e;
  }
`;

const Title = styled.p`
  font-size: 18px;
`;

const BottomBtn = styled.button`
  height: 50px;
  width: 100%;
  border: none;
  border-radius: 50px;
  background-color: #9e9e9e;
  color: #fff;
  font-size: 18px;
  margin-bottom: 10px;
`;

export default WorkSpace;
