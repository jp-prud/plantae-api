import styled from 'styled-components';

export const Wrapper = styled.main`
  display: flex;
  gap: 24px;
  flex-wrap: wrap;

  > div {
    display: flex;
    flex-direction: column;
    gap: 24px;
  }
`;

export const LeftContainer = styled.div``;

export const RightContainer = styled.div``;

export const Banner = styled.image`
  img {
    aspect-ratio: 1;
  }
`;
