import ToastGridForm from '../components/form/ToastGridForm';
import styled from 'styled-components';
const ListDetail = () => {
  return (
    <ListDiv>
      <ToastGridForm />
      <ToastGridForm />
      <ToastGridForm />
      <ToastGridForm />
      <ToastGridForm />
      <ToastGridForm />
      <ToastGridForm />
      <ToastGridForm />
      <ToastGridForm />
      <ToastGridForm />
      <ToastGridForm />
      <ToastGridForm />
      <ToastGridForm />
      <ToastGridForm />
      <ToastGridForm />
      <ToastGridForm />
      <ToastGridForm />
      <ToastGridForm />
      <ToastGridForm />
    </ListDiv>
  );
};

const ListDiv = styled.div`
  padding-top: 5%;
  width: 100%;
  display: flex;
  flex-flow: row wrap;
  justify-content: center;
  align-content: center;
`;

export default ListDetail;
