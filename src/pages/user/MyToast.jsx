import styled from 'styled-components';
import { useDispatch, useSelector } from 'react-redux';
import { useEffect, useState } from 'react';
import ToastGridForm from '../../components/form/ToastGridForm';
import { LoadBookmarkedPost, LoadMyPost } from '../../redux/slice/postSlice';

const MyToast = props => {
  const dispatch = useDispatch();
  const [tab, setTab] = useState('');

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

  const projectList = useSelector(state => state.post.project);
  const userInfo = JSON.parse(sessionStorage.getItem('userInfo'));

  return (
    <Wrapper>
      <Title>마이토스트</Title>
      <UserDiv>
        <ProfileImage background={userInfo.ProfileImageURL} />
        <UserInfoDiv>
          <Name>{userInfo.nickname}</Name>
          <UserEmail>{userInfo.Email}</UserEmail>
        </UserInfoDiv>
      </UserDiv>
      <Menu>
        <MenuItem>
          <MenuList
            onClick={() => {
              setTab('created');
            }}
          >
            나의 토스트
          </MenuList>
        </MenuItem>
        <MenuItem>
          <MenuList
            onClick={() => {
              setTab('marked');
            }}
          >
            찜한 토스트
          </MenuList>
        </MenuItem>
      </Menu>

      {tab === 'created' && (
        <ListDiv>
          {projectList &&
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
      )}

      {tab === 'marked' && (
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
      )}
    </Wrapper>
  );
};

MyToast.defaultProps = {
  background:
    'https://images.mypetlife.co.kr/content/uploads/2019/05/09153834/adorable-animal-cat-1438503-scaled.jpg',
};

const Wrapper = styled.div``;

const Title = styled.h3`
  margin-top: 164px;
  margin-left: 323px;
  font-size: 36px;
  width: 156px;
  height: 43px;
  font-weight: 500;
`;

const UserDiv = styled.div`
  width: 322px;
  height: 100px;
  margin-top: 40px;
  margin-left: 323px;
`;

const ProfileImage = styled.div`
  background: ${props => `url(${props.background})`}
  width: 100px;
  height: 100px;
  border-radius: 50%;
  float: left;
`;

const UserInfoDiv = styled.div`
  display: grid;
  grid-template-rows: repeat(2, 1fr);
  width: 160px;
  heihgt: 64px;
  float: right;
`;

const Name = styled.p`
  font-weight: 400;
  font-size: 28px;
  line-height: 34px;
  width: 99px;
  height: 34px;
  font-size: 28px;
  margin-bottom: 8px;
`;

const UserEmail = styled.p`
  font-weight: 400;
  font-size: 18px;
  line-height: 22px;
`;

const Menu = styled.ul`
  list-style-type: none;
  margin: 50px 10px 0 300px;
  padding: 0;
  overflow: hidden;
`;

const MenuItem = styled.li`
  float: left;
  margin: 0 10px 0 10px;
`;
const MenuList = styled.button`
  display: block;
  color: white;
  text-align: center;
  font-weight: 600;
  font-size: 28px;
  line-height: 34px;
  letter-spacing: -0.05em;
  padding: 14px 16px;
  text-decoration: none;
`;

const ListDiv = styled.div`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  margin-top: 40px;
  margin-left: 324px;
  width: 1274px;
`;
export default MyToast;
