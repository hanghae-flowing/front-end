import styled from 'styled-components';
import { useDispatch } from 'react-redux';
import { useEffect, useState } from 'react';
import {
  LoadAllPost,
  LoadIncludedPost,
  LoadMyPost,
} from '../../redux/slice/postSlice';
import { useSelector } from 'react-redux';
import ToastGridForm from '../../components/form/ToastGridForm';
import { LoadMyPage } from '../../redux/slice/userSlice';

const MyToast = () => {
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

  useEffect(() => {
    dispatch(LoadMyPage(sendingData));
  }, [dispatch]);

  const myProjectList = useSelector(state => state.post.project);
  const userInfo = useSelector(state => state.user);

  return (
    <Wrapper>
      <Title>마이토스트</Title>
      <UserDiv>
        <ProfileImage />
        <UserInfoDiv>
          <Name>이한솔</Name>
          <UserEmail>eeee@eeee.com</UserEmail>
        </UserInfoDiv>
      </UserDiv>
      <Menu>
        <li>
          <MenuList
            onClick={() => {
              setTab('included');
            }}
          >
            나의 토스트
          </MenuList>
        </li>
        <li>
          <MenuList
            onClick={() => {
              setTab('created');
            }}
          >
            찜한 토스트
          </MenuList>
        </li>
      </Menu>
      {tab === 'included' && (
        <ListDiv>
          {myProjectList.length > 0 &&
            myProjectList.map((project, index) => (
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
      {tab === 'created' && (
        <ListDiv>
          {myProjectList.length > 0 &&
            myProjectList.map((project, index) => (
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
  background-color: #777777;
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
`;
const MenuList = styled.button`
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
