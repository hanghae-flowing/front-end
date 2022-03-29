import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link, Outlet, useNavigate, useLocation } from 'react-router-dom';
import styled from 'styled-components';
import { WorkHeader } from '../../components/Header';
import TamplateList from '../../components/menu/TamplateList';
import { updateProjectId } from '../../redux/slice/spaceSlice';

const WorkSpace = props => {
  const dispatch = useDispatch();

  const projectInfo = useSelector(state => state.post.projectInfo);

  useEffect(() => {
    const projectId = sessionStorage.getItem('projectInfo');
    dispatch(updateProjectId(projectId));
  }, []);

  return (
    <SpaceWrap>
      <WorkHeader title={projectInfo.projectName} />
      <TamplateList />
      <Outlet />
    </SpaceWrap>
  );
};

const SpaceWrap = styled.div`
  display: flex;
  align-items: start;
  justify-content: start;
  height: 100%;
`;

export default WorkSpace;
