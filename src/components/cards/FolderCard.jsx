import React from 'react';
import folderThumbnail from '../../assets/images/img_folder.png';
import styled from 'styled-components';
import Moment from 'react-moment';
import 'moment/locale/ko';
import { useNavigate } from 'react-router-dom';
import FileMenu from '../menu/FileMenu';
import { useState } from 'react';
import { setFolderBookmark, ThrowFolder } from '../../redux/slice/postSlice';
import { useDispatch } from 'react-redux';

import { ReactComponent as BookmarkedImage } from '../../assets/icons/Bookmark_light.svg';
import { ReactComponent as UnBookmarkedImage } from '../../assets/icons/Bookmark_light_blank.svg';

const FolderCard = props => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [isOpen, setIsOpen] = useState(false);
  const [isChecked, setIsChecked] = useState(false);
  const [bookmarked, setBookmarked] = useState(props.bookmark);
  const folderTableId = props.folderTableId;

  const displayCreatedAt = createdAt => {
    let startTime = new Date(createdAt);
    let nowTime = Date.now();
    if (parseInt(startTime - nowTime) > -60000) {
      return <Moment format="방금 전">{startTime}</Moment>;
    }
    if (parseInt(startTime - nowTime) < -86400000) {
      return <Moment format="MMM D일">{startTime}</Moment>;
    }
    if (parseInt(startTime - nowTime) > -86400000) {
      return <Moment fromNow>{startTime}</Moment>;
    }
  };

  const openFolder = () => {
    navigate(`/folder/${folderTableId}`, { state: props });
  };

  const clickMenuHandler = () => {
    setIsOpen(!isOpen);
  };

  const moveToTrashcanHandler = () => {
    const sendingData = {
      folderTableId,
    };
    console.log(sendingData);
    window.alert('삭제 완료');
    dispatch(ThrowFolder(sendingData));
  };

  const clickBookmarkHandler = () => {
    setBookmarked(!bookmarked);

    const sendingData = {
      folderTableId,
    };
    console.log(sendingData);
    dispatch(setFolderBookmark(sendingData));
  };

  return (
    <StyledWrap>
      <MenuBtn onClick={clickMenuHandler}>
        <Dot />
        <Dot />
        <Dot />
      </MenuBtn>
      <ImageDiv onClick={openFolder}></ImageDiv>
      <ContentDiv>
        <Title>{props.folderName}</Title>
        <DateP>{displayCreatedAt(props.modifiedAt)}</DateP>
      </ContentDiv>
      <BookmarkDiv onClick={clickBookmarkHandler}>
        {bookmarked ? <BookmarkedImage /> : <UnBookmarkedImage />}
      </BookmarkDiv>
      <FileMenu
        projectId={props.folderTableId}
        open={isOpen}
        onClose={() => setIsOpen(false)}
        onClickHandler={openFolder}
        deleteHandler={moveToTrashcanHandler}
      />
    </StyledWrap>
  );
};

const StyledWrap = styled.div`
  position: relative;
  width: calc(100% / 5 - 60px);
  height: auto;
  min-width: 208px;
  cursor: pointer;
  margin: 0 30px;
  margin-bottom: 30px;
`;

const ImageDiv = styled.div`
  position: relative;
  background-image: url(${folderThumbnail});
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

const MenuBtn = styled.div`
  position: absolute;
  top: 0px;
  right: 10px;
  width: 28px;
  height: 30px;
  display: flex;
  align-items: center;
  justify-content: space-evenly;
  cursor: pointer;
  z-index: 110;
`;

const Dot = styled.div`
  width: 5px;
  height: 5px;
  border-radius: 5px;
  background-color: #e3e0ff;
`;

const BookmarkDiv = styled.div`
  position: absolute;
  right: 20px;
  bottom: 20px;
  width: 24px;
  height: 24px;
`;

export default FolderCard;
