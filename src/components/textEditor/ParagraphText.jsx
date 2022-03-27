import styled from 'styled-components';

const ParagraphText = () => {
  return <InputText placeholder="사업계획서" />;
};

const InputText = styled.input`
  width: 100%;
  font-weight: 400;
  font-size: 18px;
  line-height: 22px;
  color: #7a7a7a;
  border: none;
`;

export default ParagraphText;
