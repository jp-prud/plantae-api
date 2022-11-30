import styled from 'styled-components';
import Button from '../Button';
import GenericContainer from '../GenericContainer';

export const Table = styled.div`
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

  @media (max-width: 680px) {
    flex-direction: column;
    align-items: start;
  }
`;

export const AddButton = styled(Button)`
  text-align: center;
  max-width: 360px;
`;

export const TableMain = styled(GenericContainer)`
  min-height: 140px;
  width: 100%;
  display: flex;
  flex-direction: column;
  gap: 16px;
  flex: 1;

  &:empty {
    display: none;
  }
`;

export const Separator = styled.div`
  width: 100%;
  height: 1px;
  background: #666;
  margin: 12px 0;
`;
