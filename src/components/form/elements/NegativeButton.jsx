import styled from 'styled-components';

const NegativeButton = ({ text, onClickHandler }) => {
  return (
    <NegativeButtonStyled onClick={onClickHandler}>{text}</NegativeButtonStyled>
  );
};

const NegativeButtonStyled = styled.button`
  width: 180px;
  height: 50px;
  border: 1px solid #5432d3;
  box-sizing: border-box;
  font-weight: 400;
  font-size: 18px;
  line-height: 22px;
  background-color: transparent;
  color: #5432d3;
  border-radius: 30px;
`;

export default NegativeButton;
