import styled from 'styled-components';

interface IWrapper {
  isOpen: boolean;
}

export const Wrapper = styled.div<IWrapper>`
  height: 100vh;
  width: ${(props: IWrapper) => (props.isOpen ? 260 : 60)}px;
  padding: 32px 16px;
  background: #fff;
  transition: 0.5s all;

  span {
    opacity: ${(props: IWrapper) => (props.isOpen ? '1' : '0')};
    pointer-events: ${(props: IWrapper) => (props.isOpen ? 'initial' : 'none')};
    transition: 0.5s all;
  }

  @media (max-width: 980px) {
    width: 60px;

    span {
      display: none;
    }
  }
`;

export const LinksList = styled.ul`
  text-decoration: none;
  display: flex;
  flex-direction: column;
  transition: 0.5s all;

  a {
    height: 40px;
    padding-inline: 16px;
    display: flex;
    align-items: center;
    border-bottom: 1px solid #cacaca;
    font-weight: 600;
    font-size: 12px;
    line-height: 18px;
    letter-spacing: 0.5px;
    color: #41475e;
    transition: 0.5s all;

    &:hover {
      opacity: 0.7;
    }
  }
`;
