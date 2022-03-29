import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link, Outlet, useLocation, useNavigate } from 'react-router-dom';
import styled from 'styled-components';
import { WorkHeader } from '../../components/Header';
import TemplateList from '../../components/menu/TemplateList';
import { updateProjectId } from '../../redux/slice/nodeSlice';

const WorkSpace = props => {
  const dispatch = useDispatch();
  const location = useLocation();
  const projectInfo = useSelector(state => state.post.projectInfo);

  const projectId = projectInfo.projectId;

  useEffect(() => {
    if (!projectId) return;
    dispatch(updateProjectId(projectId));
  }, [projectId]);

  return (
    <SpaceWrap>
      <WorkHeader title={projectInfo.projectName} />
      <TemplateList projectId={projectInfo.projectId} />
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
