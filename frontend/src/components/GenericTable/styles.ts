import styled from 'styled-components';
import GenericContainer from '../GenericContainer';

export const Table = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  gap: 24px;
`;

export const TableHeader = styled(GenericContainer)`
  width: 100%;
  display: flex;
  flex-direction: column;
  gap: 8px;

  h1 {
  }

  span {
  }
`;
