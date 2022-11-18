import React, { useState } from 'react';
import activities from './mock';

import { Wrapper, Header, ActivitiesList, Activity } from './styles';
import { IRecentActivity } from './types';

import AlertIcon from '../../assets/images/icons/Alert.svg';

export default function RecentActivities() {
  const [activeList, setActiveList] =
    useState<Array<IRecentActivity>>(activities);

  console.log(setActiveList);

  return (
    <Wrapper>
      <Header>Atividades Recentes</Header>

      <ActivitiesList>
        {activeList?.map((item: IRecentActivity) => {
          return (
            <Activity key={Math.random()}>
              <img src={AlertIcon} alt="Item Activity" />

              <span className="message">
                <strong>{item.user}</strong>
                {item.message}
              </span>

              <span className="date">{item.date}</span>
            </Activity>
          );
        })}
      </ActivitiesList>
    </Wrapper>
  );
}
