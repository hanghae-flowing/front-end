import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import styled from 'styled-components';
import { ReactComponent as DropdownIcon } from '../../assets/icons/Arrow_drop_down.svg';
import { selectSort } from '../../redux/slice/sortSlice';

const Dropdown = () => {
  const dispatch = useDispatch();
  const [isOpen, setIsOpen] = useState(false);
  const [sort, setSort] = useState('최신순');
  return (
    <StyledWrap>
      <StyeldDiv onClick={() => setIsOpen(!isOpen)}>
        <DropDown>{sort}</DropDown>
        <DropdownIcon />
      </StyeldDiv>
      <Items isOpen={isOpen}>
        <Item
          onClick={() => {
            setSort('최신순');
            dispatch(selectSort('최신순'));
            setIsOpen(false);
          }}
        >
          최신순
        </Item>
        <Item
          onClick={() => {
            setSort('북마크');
            dispatch(selectSort('북마크'));
            setIsOpen(false);
          }}
        >
          북마크
        </Item>
      </Items>
    </StyledWrap>
  );
};

const StyledWrap = styled.div`
  width: auto;
  position: relative;
`;

const StyeldDiv = styled.div`
  width: 108px;
  height: 36px;
  border-radius: 10px;
  background-color: #fff;
  box-shadow: 0px 2px 5px rgba(0, 0, 0, 0.25);
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 10px 14px;
  margin-left: 14px;
  cursor: pointer;
`;

const DropDown = styled.div`
  font-size: 16px;
  color: #818181;
`;

const Items = styled.div`
  display: ${props => (props.isOpen ? 'block' : 'none')};
  position: absolute;
  top: 50px;
  right: 0;
  width: 108px;
  height: auto;
  background-color: #fff;
  border-radius: 10px;
  box-shadow: 0px 2px 5px rgba(0, 0, 0, 0.25);
  padding: 10px 14px;
  z-index: 20;
`;

const Item = styled.p`
  font-size: 16px;
  color: #818181;
  padding: 6px 0;
`;

export default Dropdown;
