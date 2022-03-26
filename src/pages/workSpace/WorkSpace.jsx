import React, { useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';
import { Link, Outlet, useNavigate, useLocation } from 'react-router-dom';
import styled from 'styled-components';
import { WorkHeader } from '../../components/Header';
import { updateProjectId } from '../../redux/slice/spaceSlice';

const WorkSpace = props => {
  const dispatch = useDispatch();
  const location = useLocation();
  console.log(location);
  const title = location.state.projectName;
  console.log(title);

  useEffect(() => {
    const projectId = location.pathname.split('/')[2];
    dispatch(updateProjectId(projectId));
  }, []);

  return (
    <SpaceWrap>
      <WorkHeader title={title} />
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
