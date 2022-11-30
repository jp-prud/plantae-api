import styled from 'styled-components';
import GenericContainer from '../GenericContainer';

export const Container = styled(GenericContainer)`
  max-width: 560px;
  gap: 32px;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 32px;

  .error-message {
    color: #fc5050;
  }
`;

export const Header = styled.div`
  display: flex;
  flex-direction: column;
  gap: 8px;
`;

export const Form = styled.form`
  display: flex;
  flex-direction: column;
  flex: 1;
  width: 100%;
  gap: 16px;
`;

export const FormGroup = styled.div`
  display: flex;
  flex-direction: column;
  flex: 1;
`;

export const Input = styled.input`
  height: 48px;
  width: 100%;
  padding: 0px 16px;
  background: #fafafa;
  border: 1px solid #9e9e9e;
  border-radius: 16px;
`;
