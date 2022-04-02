import { useNavigate } from 'react-router-dom';
import { useState } from 'react';
import styled from 'styled-components';
import Moment from 'react-moment';
import 'moment/locale/ko';
import { useDispatch } from 'react-redux';
import { OpenWorkSpace } from '../../redux/slice/postSlice';
import FileMenu from '../menu/FileMenu';
import thumbnailImage from '../../assets/images/File.png';
import projectMenuImage from '../../assets/images/Menu-S.png';
import projectMenuHoverImage from '../../assets/images/Menu-S-hover.png';

const GridForm = props => {
  const [isOpen, setIsOpen] = useState(false);

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

  const onClickHandler = () => {
    navigate(`/workspace/${projectId}`, { state: props });
    dispatch(OpenWorkSpace(projectId));
  };
  if (trash === false) {
    return (
      <Wrapper>
        <MenuDiv onClick={() => setIsOpen(true)} />
        <ImageDiv onClick={onClickHandler}></ImageDiv>
        <Title>{projectName}</Title>
        <Date>{displayCreatedAt(modifiedAt)}</Date>
        <FileMenu
          projectId={projectId}
          open={isOpen}
          onClose={() => setIsOpen(false)}
        />
      </Wrapper>
    );
  } else {
    return (
      <Wrapper>
        <ImageDiv onClick={onClickHandler}></ImageDiv>
        <Title>{projectName}</Title>
        <Date>{displayCreatedAt(modifiedAt)}</Date>
      </Wrapper>
    );
  }
};

//@media ${({ theme }) => theme.device.tablet} {}

const Wrapper = styled.div`
  position: relative;
  width: 100%;
  height: 26%;
  cursor: pointer;
`;
const ImageDiv = styled.div`
  position: relative;
  background-image: url(${thumbnailImage});
  background-size: cover;
  border-radius: 25px;
  width: 100%;
  height: 150px;
  overflow: hidden;
  margin-right: 25px;
`;

const Title = styled.h3`
  display: inline-block;
  white-space: nowrap;
  max-width: 147px;
  position: relative;
  font-weight: 400;
  font-size: 1.4rem;
  line-height: 1.7em;
  top: 0.5em;
  overflow: hidden;
  color: #818181;
`;

const Date = styled.p`
  position: relative;
  top: 0.4em;
  font-weight: 400;
  font-size: 1.1em;
  line-height: 1.3em;
  color: #c4c4c4;
`;

const MenuDiv = styled.div`
  position: absolute;
  right: 10px;
  top: 10px;
  width: 24px;
  height: 24px;

  border-radius: 6px;
  &:hover {
  }
  z-index: 10;
`;

export default GridForm;
