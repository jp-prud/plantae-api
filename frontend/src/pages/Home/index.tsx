import React from 'react';
import RecentActivities from '../../components/RecentActivities';
import WeekProcess from '../../components/WeekProcess';

import { Wrapper, LeftContainer, RightContainer, Banner } from './styles';

import HomeBanner from '../../assets/images/HomeBanner.png';

export default function HomePage() {
  return (
    <Wrapper>
      <LeftContainer>
        <Banner>
          <img src={HomeBanner} alt="Home Banner" />
        </Banner>
      </LeftContainer>

      <RightContainer>
        <WeekProcess />
        <RecentActivities />
      </RightContainer>
    </Wrapper>
  );
}
