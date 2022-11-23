import styled from 'styled-components';

export const Wrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  flex-wrap: wrap;
  gap: 24px;
  flex: 1;

  @media (max-width: 960px) {
    flex-direction: column;
  }

  > div {
    width: 100%;
    flex: 1;
  }

  > div:last-child {
    flex: unset;
  }
`;
export const CenteredContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex: 1;
`;

export const ProductItem = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 32px;
`;

export const ProductDetails = styled.div`
  display: flex;
  align-items: center;
  justify-content: flex-start;
  white-space: nowrap;
  flex-wrap: wrap;
  gap: 12px;
  flex: 1;
`;

export const Actions = styled.div`
  display: flex;
  align-items: center;
  gap: 16px;
  flex: 1/2;
  justify-content: flex-end;

  a {
    line-height: 0;
  }
`;
