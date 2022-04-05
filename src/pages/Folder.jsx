import React, { useEffect } from 'react';
import styled from 'styled-components';
import Nav from '../components/menu/Nav';
import { ReactComponent as ArrowDownImg } from '../assets/icons/Arrow_down.svg';
import { ReactComponent as FileAddImg } from '../assets/icons/File_dock_light.svg';
import { ReactComponent as FolderAddImg } from '../assets/icons/Folder_add_light.svg';
import { useLocation, useNavigate } from 'react-router-dom';
import { useMutation, useQuery, useQueryClient } from 'react-query';
import { URL } from '../API';
import GridForm from '../components/form/GridForm';
import Dropdown from '../components/modules/Dropdown';

const Folder = () => {
  const queryClient = useQueryClient();
  const navigate = useNavigate();
  const location = useLocation().state;

  const getProject = useMutation(data => {
    URL.post('/folder/projects', data).then(res => {
      queryClient.setQueryData(['folderResult'], res);
    });
  });
  const folderTableId = location.folderTableId;

  const data = {
    folderTableId: folderTableId,
  };

  useEffect(() => {
    if (!folderTableId) return;
    getProject.mutate(data);
  }, [folderTableId]);

  const { data: folderResult } = useQuery(['folderResult'], () => {});
  console.log(folderResult);

  return (
    <StyledWrap>
      <Nav />
      <StyeldDiv>
        <Inner>
          <SplitDiv>
            <CurrentDoc>
              <p
                onClick={() => {
                  navigate('/main');
                }}
              >
                전체
              </p>
              <SvgWrap>
                <ArrowDownImg />
              </SvgWrap>
              <p>{location.folderName}</p>
              <ArrowDownImg />
            </CurrentDoc>
            <FlexDiv>
              {/* <AddBtn onClick={() => {}}>
                <FileAddImg />
              </AddBtn>
              <AddBtn>
                <FolderAddImg onClick={() => {}} />
              </AddBtn> */}
              <Dropdown />
            </FlexDiv>
          </SplitDiv>
          <ProjectDiv>
            {folderResult &&
              folderResult?.data.map((data, index) => (
                <GridForm
                  key={index}
                  projectName={data.projectName}
                  modifiedAt={data.modifiedAt}
                  memberList={data.memberList}
                  bookmark={data.bookmark}
                  thumbnailNum={data.thumbnailNum}
                  projectId={data.projectId}
                  trash={data.trash}
                  width="calc(100% / 5 - 60px)"
                  height="auto"
                />
              ))}
          </ProjectDiv>
        </Inner>
      </StyeldDiv>
    </StyledWrap>
  );
};

const StyledWrap = styled.div`
  width: 100%;
  display: flex;
`;
const StyeldDiv = styled.div`
  width: 100%;
  padding-left: 258px;
`;

const Inner = styled.div`
  width: 100%;
  max-width: 1340px;
  margin: 0 auto;
  padding-top: 130px;
`;

const SplitDiv = styled.div`
  max-width: 1280px;
  margin: 0 30px;
  display: flex;
  justify-content: space-between;
`;

const CurrentDoc = styled.div`
  width: auto;
  display: flex;
  align-items: center;
  justify-content: start;
  cursor: pointer;
  & p {
    font-weight: 700;
    font-size: 1.3em;
    color: #818181;
    padding-right: 10px;
  }
`;

const FlexDiv = styled.div`
  display: flex;
  cursor: pointer;
`;

const AddBtn = styled.div`
  width: 36px;
  height: 36px;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: #e3e0ff;
  border-radius: 10px;
  margin-left: 14px;
`;

const SvgWrap = styled.div`
  transform: rotate(270deg);
  margin-right: 10px;
`;

const ProjectDiv = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  flex-wrap: wrap;
  justify-content: start;
  margin-top: 1.7rem;
  margin-left: auto;
  margin-right: auto;
  overflow: hidden;
`;

export default Folder;
