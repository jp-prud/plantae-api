/* eslint-disable import/no-unresolved */
import React from 'react';

import {
  Wrapper,
  LeftContainer,
  RightContainer,
  NewProduct,
  Avatar,
} from './styles';

import PlusIcon from '../../assets/images/icons/Plus.svg';
import BellIcon from '../../assets/images/icons/Bell.svg';
import AvatarImage from '../../assets/images/Avatar.png';

export default function TopBar() {
  return (
    <Wrapper>
      <LeftContainer>
        <input placeholder="O que você procura ?" />
      </LeftContainer>

      <RightContainer>
        <NewProduct>
          <a role="button" href="/products">
            <img src={PlusIcon} alt="Plus Icon" />
            Adicione um novo Produto
          </a>
        </NewProduct>

        <img src={BellIcon} alt="Notification" />

        <Avatar>
          <img src={AvatarImage} alt="Avatar User" />
        </Avatar>
      </RightContainer>
    </Wrapper>
  );
}
