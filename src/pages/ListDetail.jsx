import ToastGridForm from '../components/form/ToastGridForm';
import styled from 'styled-components';
import { useDispatch } from 'react-redux';
import { LoadAllPost } from '../redux/slice/postSlice';
import { useEffect } from 'react';
import { useSelector } from 'react-redux';

const ListDetail = () => {
  const dispatch = useDispatch();

  const kakaoId =
    sessionStorage.getItem('userInfo') &&
    JSON.parse(sessionStorage.getItem('userInfo')).kakaoId;
  const accessToken =
    sessionStorage.getItem('userInfo') &&
    JSON.parse(sessionStorage.getItem('userInfo')).accessToken;
  const userId =
    sessionStorage.getItem('userInfo') &&
    JSON.parse(sessionStorage.getItem('userInfo')).userId;

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
    <WrapperDiv>
      <TitleDiv>
        <Title>기존 토스트</Title>
      </TitleDiv>

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
    </WrapperDiv>
  );
};

const WrapperDiv = styled.div`
  width: 1274px;
  margin-top: 164px;
  margin-left: auto;
  margin-right: auto;
`;

const ListDiv = styled.div`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  margin-top: 40px;
`;

const TitleDiv = styled.div`
  width: 157px;
  height: 43px;
`;

const Title = styled.h3`
  font-weight: 600;
  font-size: 36px;
  line-height: 43px;
  letter-spacing: -0.04em;
`;

export default ListDetail;
