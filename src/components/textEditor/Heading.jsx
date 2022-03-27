import styled from 'styled-components';

const Heading = props => {
  return (
    <InputHeading
      color={props.color}
      weight={props.weight}
      fontSize={props.fontSize}
      id={props.documnetId}
      placeholder="사업계획서"
      defaultValue={props.text}
    />
  );
};

const InputHeading = styled.input`
  width: 100%;
  line-height: 70px;
  font-weight: 700;
  font-size: 64px;
  color: #7a7a7a;
  border: none;
`;

export default Heading;
