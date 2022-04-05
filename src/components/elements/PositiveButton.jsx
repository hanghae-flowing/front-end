import styled from 'styled-components';

const PositiveButton = ({ text, onClickHandler }) => {
  return (
    <PositiveButtonStyled onClick={onClickHandler}>{text}</PositiveButtonStyled>
  );
};

const PositiveButtonStyled = styled.button`
  width: 180px;
  height: 50px;
  background: #5432d3;
  border-radius: 30px;
  font-weight: 400;
  font-size: 18px;
  line-height: 22px;
  color: #ffffff;
  margin-left: 20px;
`;

export default PositiveButton;
