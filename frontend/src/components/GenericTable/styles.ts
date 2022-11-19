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
  justify-content: space-between;
  align-items: center;
  gap: 8px;

  > div {
    display: flex;
    flex-direction: column;
    gap: 8px;
  }
`;

export const TableMain = styled(GenericContainer)`
  width: 100%;
  display: flex;
  flex-direction: column;
  gap: 16px;
`;
