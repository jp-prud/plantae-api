import styled from 'styled-components';

import GenericContainer from '../GenericContainer';

export const Wrapper = styled(GenericContainer)`
  height: fit-content;
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 32px;

  > div {
    width: 100%;
    display: flex;
    align-items: center;
    gap: 32px;
  }
`;

export const LeftContainer = styled.div`
  display: block;
  justify-content: left;
  gap: 8px;

  input {
    height: 48px;
    width: 100%;
    max-width: 372px;
    padding: 0px 16px;
    background: #fafafa;
    border: 1px solid #9e9e9e;
    border-radius: 16px;
  }
`;

export const RightContainer = styled.div`
  justify-content: right;

  @media (max-width: 780px) {
    > img {
      display: none;
    }
  }
`;

export const NewProduct = styled.div`
  a {
    height: 48px;
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 12px;
    background: linear-gradient(286.17deg, #01b763 0%, #14e685 100%);
    border-radius: 16px;
    color: #fff;
    text-decoration: none;
    font-weight: 600;
    font-size: 16px;
    padding-inline: 16px;
  }
`;

export const Avatar = styled.div`
  height: 48px;
  width: 48px;
  border-radius: 24px;
`;
