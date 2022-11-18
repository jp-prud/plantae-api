import styled from 'styled-components';
import GenericContainer from '../GenericContainer';

export const Wrapper = styled(GenericContainer)`
  display: flex;
  flex-direction: column;
  gap: 24px;
  aspect-ratio: 1/1;
`;

export const Header = styled.div`
  display: grid;
  grid-template-areas:
    'title settings'
    'subtitle settings';
  justify-content: space-between;
  align-items: center;
  gap: 16px;

  h3 {
    font-weight: 500;
    font-size: 16px;
    line-height: 24px;
    letter-spacing: 0.3px;
    color: #121212;
    grid-area: title;
  }

  span {
    font-weight: 400;
    font-size: 12px;
    line-height: 12px;
    letter-spacing: 0.3px;
    color: #41475e;
    opacity: 0.5;
    grid-area: subtitle;
  }

  img {
    grid-area: settings;
  }
`;

export const Container = styled.div`
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;

  img {
    width: 100%;
    max-width: 170px;
    aspect-ratio: 1;
  }
`;
