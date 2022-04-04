import styled from 'styled-components';
import HelloFromKirin from '../../assets/images/KirinHi.png';

const MainModalForm = () => {
  return (
    <Modal>
      <ImageDiv />
    </Modal>
  );
};

const ImageDiv = styled.div`
  width: 150px;
  height: 150px;
  border-radius: 50%;
  background-image; url(${HelloFromKirin});
`;

const Modal = styled.div`
  width: 480px;
  height: 340px;
  background: #ffffff;
  box-shadow: 0px 4px 20px rgba(0, 0, 0, 0.15);
  border-radius: 31px;
`;

export default MainModalForm;
