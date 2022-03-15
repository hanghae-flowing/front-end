import ToastGridForm from '../components/form/ToastGridForm';
import styled from 'styled-components';
import { useDispatch } from 'react-redux';
import { LoadAllPost } from '../redux/slice/postSlice';
import { useEffect } from 'react';
import { useSelector } from 'react-redux';

const ListDetail = () => {
  const dispatch = useDispatch();

  const kakaoId = JSON.parse(sessionStorage.getItem('userInfo')).kakaoId;
  const accessToken = JSON.parse(
    sessionStorage.getItem('userInfo'),
  ).accessToken;
  const userId = JSON.parse(sessionStorage.getItem('userInfo')).userId;

  const sendingData = {
    kakaoId,
    accessToken,
    userId,
  };

  useEffect(() => {
    dispatch(LoadAllPost(sendingData));
  }, [dispatch]);

  const projectList = useSelector(state => state.post.project);

  return (
    <ListDiv>
      {projectList.length > 0 &&
        projectList.map((project, index) => (
          <ToastGridForm
            key={index}
            projectName={project.projectName}
            modifiedAt={project.modifiedAt}
            memberList={project.memberList}
            bookmark={project.bookmark}
            thumbnailNum={project.thumbnailNum}
          />
        ))}
    </ListDiv>
  );
};

const ListDiv = styled.div`
  padding-top: 5%;
  width: 100%;
  display: flex;
  flex-flow: row wrap;
  justify-content: center;
  align-content: center;
`;

export default ListDetail;
