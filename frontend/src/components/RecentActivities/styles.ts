import styled from 'styled-components';
import GenericContainer from '../GenericContainer';

export const Wrapper = styled(GenericContainer)`
  height: fit-content;
  display: flex;
  flex-direction: column;
  gap: 24px;
  aspect-ratio: 1/1;
`;

export const Header = styled.h3`
  font-weight: 500;
  font-size: 16px;
  line-height: 26px;
  letter-spacing: 0.3px;
  color: #121212;
`;

export const ActivitiesList = styled.div`
  display: flex;
  flex-direction: column;
  gap: 20px;
`;

export const Activity = styled.div`
  display: grid;
  grid-template-areas: 'icon message' 'icon date';
  gap: 12px 8px;
  font-size: 12px;
  color: #41475e;

  img {
    grid-area: icon;
  }

  .message {
    font-weight: 600;
    line-height: 18px;
    letter-spacing: 0.5px;
    grid-area: message;

    strong {
      display: inline-block;
      margin-right: 4px;
    }
  }

  .date {
    font-weight: 400;
    line-height: 12px;
    letter-spacing: 0.3px;
    opacity: 0.5;
    grid-area: date;
  }
`;
