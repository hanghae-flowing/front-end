import React from 'react';
import styled from 'styled-components';

export const NewProject = props => {
  return (
    <StyeldDiv width={props.width} height={props.height}>
      <StyledWrap
        onClick={props.onClick}
        marginRight={props.marginRight}
        marginBottom={props.marginBottom}
      >
        <Line rotate="0" />
        <Line rotate="90deg" />
      </StyledWrap>
    </StyeldDiv>
  );
};

export const TemplateProject = props => {
  return (
    <TemplateWrap
      onClick={props.onClick}
      backgroundImage={props.backgroundImage}
    >
      {/* <div>{props.title}</div> */}
    </TemplateWrap>
  );
};

const StyeldDiv = styled.div`
  width: ${props => props.width};
  height: ${props => props.height};
  min-width: 208px;
  margin: 0 30px;
`;

const StyledWrap = styled.div`
  position: relative;
  width: 100%;
  height: 144px;
  background-color: #e3e0ff;
  border-radius: 25px;
  margin-right: ${props => props.marginRight};
  margin-bottom: ${props => props.marginBottom};
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-shrink: 0;
`;

const TemplateWrap = styled.div`
  position: relative;
  width: 100%;
  height: 180px;
  background-image: url(${props => props.backgroundImage});
  background-repeat: no-repeat;
  background-size: cover;
  background-position: center;
  border-radius: 25px;
  margin-bottom: 20px;
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-shrink: 0;
  transition: all 0.1s ease-in-out;
  &:hover {
    transform: scale(1.03);
  }
`;

const Line = styled.div`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%) rotate(${props => props.rotate});
  background-color: #fff;
  width: 30px;
  height: 3px;
  border-radius: 10px;
`;
