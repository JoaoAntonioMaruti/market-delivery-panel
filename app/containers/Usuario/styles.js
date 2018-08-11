import styled from 'styled-components';

const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  height:100vh;
`;

const CadastroBox = styled.div`
  width: 600px;
  background: #fff;
  padding: 15px;
  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.12), 0 1px 2px rgba(0, 0, 0, 0.24);
  border-radius: 2px;
  background: #e5e5e5;
`;
const ButtonContainer = styled.div`
  margin-top: 20px;
`;

export { CadastroBox, ButtonContainer, Container };
