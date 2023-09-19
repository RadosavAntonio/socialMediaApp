import React from 'react'
import {StyleSheet, Text, View} from 'react-native'
import {colors} from '../../../../../../assets/colors'
import {FriendListData} from '../friendsList'
import {
  FRIENDS_IMAGE_CONTAINER,
  FRIENDS_LIST_HEIGHT,
  SPACE,
} from '../../../../../../assets/constants'
import {FriendImage} from './friendImage'

interface Props {
  item: FriendListData
}

export const FriendItem = ({item}: Props): JSX.Element => {
  return (
    <View style={styles.container}>
      <FriendImage />

      <Text>{item.firstName}</Text>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    height: FRIENDS_LIST_HEIGHT,
    width: FRIENDS_IMAGE_CONTAINER,
    justifyContent: 'space-between',
    alignItems: 'center',
    marginRight: SPACE[24],
  },
})
