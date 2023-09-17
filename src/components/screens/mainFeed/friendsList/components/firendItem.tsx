import React from 'react'
import {StyleSheet, Text, View} from 'react-native'
import {colors} from '../../../../../../assets/colors'
import {FriendListData} from '../friendsList'
import {
  FRIENDS_IMAGE_CONTAINER,
  FRIENDS_LIST_HEIGHT,
  SPACE,
} from '../../../../../../assets/constants'

interface Props {
  item: FriendListData
}

export const FriendItem = ({item}: Props): JSX.Element => {
  return (
    <View style={styles.container}>
      <View style={styles.wrapCircle}>
        <View style={styles.photoBackground}></View>
      </View>

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

  wrapCircle: {
    height: FRIENDS_IMAGE_CONTAINER,
    width: FRIENDS_IMAGE_CONTAINER,
    borderRadius: 100,
    borderWidth: 1,
    borderColor: colors.caraPink,
    backgroundColor: 'transparent',
    justifyContent: 'center',
    alignItems: 'center',
  },

  photoBackground: {
    height: FRIENDS_IMAGE_CONTAINER - 10,
    width: FRIENDS_IMAGE_CONTAINER - 10,
    borderRadius: 100,
    backgroundColor: colors.lightBlue,
  },
})
