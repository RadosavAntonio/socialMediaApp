import React from 'react';
import {SafeAreaView} from 'react-native';
import {Title} from './title/title';
import {FriendsList} from './friendsList/friendsList';

export const MainFeed = (): JSX.Element => {
  return (
    <SafeAreaView>
      <Title title="Let's Explore" />
      <FriendsList />
    </SafeAreaView>
  );
};
