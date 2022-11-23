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

  @media (max-width: 960px) {
    flex-direction: column;
  }
`;

export const LeftContainer = styled.div`
  flex: 1;
`;

export const RightContainer = styled.div``;

export const Banner = styled.div`
  img {
    max-height: 362px;
    max-width: 100%;
    width: 100%;
    aspect-ratio: 1;
    object-fit: cover;
    border-radius: 24px;
  }
`;
