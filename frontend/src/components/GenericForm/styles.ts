import styled from 'styled-components';
import GenericContainer from '../GenericContainer';

export const Container = styled(GenericContainer)`
  max-width: 560px;
  gap: 24px;
  display: flex;
  flex-direction: column;
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
  gap: 16px;
`;

export const FormGroup = styled.div`
  display: flex;
  flex-direction: column;
`;

export const Input = styled.input`
  height: 48px;
  width: 100%;
  padding: 0px 16px;
  background: #fafafa;
  border: 1px solid #9e9e9e;
  border-radius: 16px;
`;
