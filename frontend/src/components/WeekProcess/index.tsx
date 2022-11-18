import React from 'react';

import SettingsIcon from '../../assets/images/icons/Settings.svg';
import Process from '../../assets/images/Process.png';

import { Wrapper, Header, Container } from './styles';

export default function WeekProcess() {
  return (
    <Wrapper>
      <Header>
        <h3>Progresso Semanal</h3>
        <span>Começo em Aug 22-08, 2022</span>
        <img src={SettingsIcon} alt="Settings" />
      </Header>

      <Container>
        <img src={Process} alt="Week Process" />
      </Container>
    </Wrapper>
  );
}
