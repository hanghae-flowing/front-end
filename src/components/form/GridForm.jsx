import { useNavigate } from 'react-router-dom';
import { useCallback, useEffect, useState } from 'react';
import styled from 'styled-components';
import Moment from 'react-moment';
import 'moment/locale/ko';
import { useDispatch } from 'react-redux';
import { setList, unSetList } from '../../redux/slice/trashSlice';
import { OpenWorkSpace, setBookmark } from '../../redux/slice/postSlice';
import FileMenu from '../menu/FileMenu';
import thumbnailImage from '../../assets/images/File.png';
import { ThrowProject } from '../../redux/slice/postSlice';
import { ReactComponent as UnCheckedRing } from '../../assets/icons/unChecked.svg';
import { ReactComponent as CheckedRing } from '../../assets/icons/checked.svg';
import { ReactComponent as DotImage } from '../../assets/icons/projectMenuDot.svg';

import { ReactComponent as BookmarkedImage } from '../../assets/icons/Bookmark_light.svg';
import { ReactComponent as UnBookmarkedImage } from '../../assets/icons/Bookmark_light_blank.svg';
import { setProjectId } from '../../redux/slice/folderSlice';

const GridForm = props => {
  const [isOpen, setIsOpen] = useState(false);
  const [isChecked, setIsChecked] = useState(false);
  const [currentId, setCurrentId] = useState(0);

  const kakaoId =
    sessionStorage.getItem('userInfo') &&
    JSON.parse(sessionStorage.getItem('userInfo')).kakaoId;
  const accessToken =
    sessionStorage.getItem('userInfo') &&
    JSON.parse(sessionStorage.getItem('userInfo')).accessToken;
  const userId =
    sessionStorage.getItem('userInfo') &&
    JSON.parse(sessionStorage.getItem('userInfo')).userId;

  const {
    projectName,
    modifiedAt,
    memberList,
    bookmark,
    thumbnailNum,
    projectId,
    trash,
  } = props;

  const navigate = useNavigate();
  const dispatch = useDispatch();

  const [bookmarked, setBookmarked] = useState(bookmark);

  useEffect(() => {
    if (props.checked) {
      setIsChecked(true);
      dispatch(setList(projectId));
    } else {
      setIsChecked(false);
      dispatch(unSetList(projectId));
    }
  }, [props.checked]);

  const displayCreatedAt = createdAt => {
    let startTime = new Date(createdAt);
    let nowTime = Date.now();
    if (parseInt(startTime - nowTime) > -60000) {
      return <Moment format="?????? ???">{startTime}</Moment>;
    }
    if (parseInt(startTime - nowTime) < -86400000) {
      return <Moment format="MMM D???">{startTime}</Moment>;
    }
    if (parseInt(startTime - nowTime) > -86400000) {
      return <Moment fromNow>{startTime}</Moment>;
    }
  };

  const onClickHandler = () => {
    navigate(`/workspace/${projectId}`, { state: props });
    dispatch(OpenWorkSpace(projectId));
  };

  const clickMenuHandler = () => {
    setIsOpen(!isOpen);
  };

  const clickBookmarkHandler = () => {
    setBookmarked(!bookmarked);

    const sendingData = {
      userId,
      accessToken,
      kakaoId,
    };
    dispatch(setBookmark({ sendingData, projectId }));
  };

  const checkboxClickHandler = useCallback(() => {
    setIsChecked(!isChecked);
    if (!isChecked === true) {
      dispatch(setList(projectId));
    } else {
      dispatch(unSetList(projectId));
    }
  }, [isChecked]);

  const openProjectHandler = () => {
    navigate(`/workspace/${projectId}`);
    dispatch(OpenWorkSpace(projectId));
  };

  const moveToTrashcanHandler = () => {
    const sendingData = {
      projectId,
      userId,
    };
    window.alert('?????? ??????');
    dispatch(ThrowProject(sendingData));
  };

  const onDragStart = e => {
    setCurrentId(projectId);
  };

  const onDrag = e => {
    setCurrentId(projectId);
    dispatch(setProjectId(currentId));
  };

  if (trash === false) {
    return (
      <Wrapper
        // draggable
        // onDragStart={onDragStart}
        // onDrag={onDrag}
        width={props.width}
        height={props.height}
      >
        <MenuDiv onClick={() => clickMenuHandler()}>
          <DotImage />
        </MenuDiv>
        <ImageDiv
          draggable
          onDragStart={onDragStart}
          onDrag={onDrag}
          onClick={onClickHandler}
        ></ImageDiv>
        <ContentDiv>
          <Title>{projectName}</Title>
          <DateP>{displayCreatedAt(modifiedAt)}</DateP>
        </ContentDiv>
        <BookmarkDiv onClick={clickBookmarkHandler}>
          {bookmarked ? <BookmarkedImage /> : <UnBookmarkedImage />}
        </BookmarkDiv>
        <FileMenu
          projectId={projectId}
          open={isOpen}
          onClose={() => setIsOpen(false)}
          onClickHandler={openProjectHandler}
          deleteHandler={moveToTrashcanHandler}
        />
      </Wrapper>
    );
  } else {
    return (
      <Wrapper width={props.width} height={props.height}>
        <MenuDiv
          onClick={() => {
            checkboxClickHandler();
          }}
        >
          {isChecked ? <CheckedRing /> : <UnCheckedRing />}
        </MenuDiv>
        <ImageDiv></ImageDiv>
        <ContentDiv>
          <Title>{projectName}</Title>
          <DateP>{displayCreatedAt(modifiedAt)}</DateP>
        </ContentDiv>
      </Wrapper>
    );
  }
};

//@media ${({ theme }) => theme.device.tablet} {}

const Wrapper = styled.div`
  position: relative;
  width: ${props => props.width};
  height: ${props => props.height};
  min-width: 208px;
  cursor: pointer;
  margin: 0 30px;
  margin-bottom: 30px;
`;
const ImageDiv = styled.div`
  position: relative;
  background-image: url(${thumbnailImage});
  background-size: cover;
  border-radius: 25px;
  width: 100%;
  height: 144px;
  overflow: hidden;
  margin-right: 25px;
`;
const ContentDiv = styled.div`
  width: 100%;
  height: auto;
  padding: 0 14px;
`;

const Title = styled.h3`
  display: inline-block;
  white-space: nowrap;
  max-width: 147px;
  position: relative;
  font-weight: 400;
  font-size: 1rem;
  line-height: 1.7em;
  top: 0.5em;
  overflow: hidden;
  color: #818181;
`;

const DateP = styled.p`
  position: relative;
  top: 0.4em;
  font-weight: 400;
  font-size: 0.875rem;
  line-height: 1.3em;
  color: #c4c4c4;
`;

const MenuDiv = styled.div`
  position: absolute;
  right: 16px;
  top: 1px;
  width: 24px;
  height: 24px;
  border-radius: 6px;
  &:hover {
  }
  z-index: 10;
`;

const BookmarkDiv = styled.div`
  position: absolute;
  right: 20px;
  bottom: 33px;
  width: 24px;
  height: 24px;
`;

export default GridForm;
