import styled from 'styled-components';

const HeadingSmall = () => {
  return <InputHeading placeholder="사업계획서" />;
};

const InputHeading = styled.input`
  width: 100%;
  font-weight: 700;
  font-size: 24px;
  line-height: 29px;
  color: #7a7a7a;
  border: none;
`;

export default HeadingSmall;
