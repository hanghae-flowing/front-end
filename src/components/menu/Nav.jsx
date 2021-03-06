import React, { useCallback, useState } from 'react';
import styled from 'styled-components';
import { ReactComponent as SearchImg } from '../../assets/icons/Search_duotone_line.svg';
import { ReactComponent as LogoutImg } from '../../assets/icons/Sign_out.svg';
import { ReactComponent as GarbageImg } from '../../assets/icons/Trash_light.svg';
import { ReactComponent as AllImg } from '../../assets/icons/Widget_light.svg';
import { useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { debounce } from 'lodash';
import { useMutation, useQueryClient } from 'react-query';
import { URL } from '../../API';

const Nav = () => {
  const navigate = useNavigate();
  const queryClient = useQueryClient();

  const isLogin = useSelector(state => state.user.isLogin);
  const tabbed = useSelector(state => state.nav.tabbed);
  const crtPage = useSelector(state => state.nav.currentPage);

  const [searchValue, setSearchValue] = useState('');

  const nickname =
    sessionStorage.getItem('userInfo') &&
    JSON.parse(sessionStorage.getItem('userInfo')).nickname;
  const email =
    sessionStorage.getItem('userInfo') &&
    JSON.parse(sessionStorage.getItem('userInfo')).Email;
  const profileImg =
    sessionStorage.getItem('userInfo') &&
    JSON.parse(sessionStorage.getItem('userInfo')).ProfileImageURL;
  const userId =
    sessionStorage.getItem('userInfo') &&
    JSON.parse(sessionStorage.getItem('userInfo')).userId;

  const handleDebounce = useCallback(
    debounce(value => {}, 500),
    [],
  );

  const onChangeSearchValue = e => {
    handleDebounce(e.target.value);
    setSearchValue(e.target.value);
  };

  const searchMutation = useMutation(sendingData => {
    URL.post(`/project/searching`, sendingData).then(res => {
      queryClient.setQueryData(['searchResult'], res);
    });
  });

  const sendingData = {
    userId: userId,
    text: searchValue,
  };

  const inputEnter = e => {
    if (e.keyCode === 13) {
      searchMutation.mutate(sendingData);
    }
  };

  return (
    <StyledWrap toggle={tabbed}>
      {isLogin ? (
        <FlexDiv padding="0 0 20px 0">
          <ProfileCircle>
            <ProfileImage
              bgImg={isLogin ? `url(${profileImg})` : `none`}
            ></ProfileImage>
          </ProfileCircle>
          <FlexDiv column={true} justify="space-between" padding="0 0 0 10px;">
            <Nickname>{nickname}</Nickname>
            <Email>{email}</Email>
          </FlexDiv>
        </FlexDiv>
      ) : (
        <FlexDiv>????????? ????????????</FlexDiv>
      )}
      <FlexDiv padding="0 0 30px 0">
        <SearchWrap>
          <SearchImg />
          <Search
            onChange={onChangeSearchValue}
            value={searchValue}
            onKeyUp={inputEnter}
          />
        </SearchWrap>
      </FlexDiv>
      <FlexDiv grow="1" column={true}>
        <Tab
          tab={crtPage === 'main' ? true : false}
          onClick={() => {
            navigate('/main');
          }}
        >
          <p>??????</p>
          <TabIcon>
            <AllImg />
          </TabIcon>
        </Tab>
        <Tab
          tab={crtPage === 'garbage' ? true : false}
          onClick={() => {
            navigate('/trash-bin');
          }}
        >
          <p>?????????</p>
          <TabIcon>
            <GarbageImg />
          </TabIcon>
        </Tab>
        <Tab onClick={() => navigate('/signout')}>
          <p>????????????</p>
          <TabIcon>
            <LogoutImg />
          </TabIcon>
        </Tab>
      </FlexDiv>
    </StyledWrap>
  );
};

const StyledWrap = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  background-color: #5b36e5;
  height: 100vh;
  width: 258px;
  padding: 120px 20px 20px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  z-index: 999;
  transition: all 0.2s ease-in-out;
`;
const FlexDiv = styled.div`
  position: relative;
  display: flex;
  flex-direction: ${props => (props.column ? 'column' : 'row')};
  justify-content: ${props => props.justify};
  align-items: ${props => props.align};
  padding: ${props => props.padding};
  flex-grow: ${props => props.grow};
`;

const ProfileCircle = styled.div`
  width: 48px;
  height: 48px;
  border-radius: 60px;
  background-color: #4222b9;
  overflow: hidden;
  flex-shrink: 0;
`;

const ProfileImage = styled.div`
  background-image: ${props => props.bgImg};
  background-size: cover;
  width: 100%;
  height: 100%;
`;

const Nickname = styled.p`
  color: #fff;
  font-size: 24px;
  font-weight: 500;
`;

const Email = styled.p`
  color: #bfbfbf;
  font-size: 14px;
  font-weight: 400;
`;

const SearchWrap = styled.div`
  width: 100%;
  height: 43px;
  border-radius: 11px;
  background-color: #4929c1;
  box-shadow: -3px 4px 10px rgba(0, 0, 0, 0.04);
  display: flex;
  align-items: center;
  justify-content: start;
  padding: 0 10px;
`;

const Search = styled.input`
  width: 100%;
  font-size: 18px;
  background-color: #4929c1;
  border: none;
  padding-left: 10px;
  color: #bfbfbf;
  &:focus {
    outline: none;
  }
`;

const Tab = styled.div`
  width: 100%;
  height: 38px;
  background-color: ${props => (props.tab ? '#4929C1' : 'none')};
  cursor: pointer;
  border-radius: 11px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 10px;
  margin-bottom: 13px;
  &:hover {
    background-color: #4929c1;
  }
  p {
    color: #fff;
    font-size: 21px;
  }
`;

const TabIcon = styled.div`
  border-radius: 50px;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const LogoutBtn = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;
  cursor: pointer;
  p {
    color: #fff;
    font-size: 21px;
  }
`;

export default Nav;
