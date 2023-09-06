import React from 'react';
import {StyleSheet, Text, View} from 'react-native';
import {colors} from '../../../../assets/colors';
import {FriendListData} from './friendsList';

interface Props {
  item: FriendListData;
}

export const FriendItem = ({item}: Props): JSX.Element => {
  return (
    <View style={styles.container}>
      <View style={styles.wrapCircle}>
        <View style={styles.photoBackground}></View>
      </View>

      <Text>{item.firstName}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    height: 85,
    width: 65,
    justifyContent: 'space-between',
    alignItems: 'center',
    marginRight: 20,
  },

  wrapCircle: {
    height: 65,
    width: 65,
    borderRadius: 100,
    borderWidth: 1,
    borderColor: colors.caraPink,
    backgroundColor: 'transparent',
    justifyContent: 'center',
    alignItems: 'center',
  },

  photoBackground: {
    height: 55,
    width: 55,
    borderRadius: 100,
    backgroundColor: colors.lightBlue,
  },
});
