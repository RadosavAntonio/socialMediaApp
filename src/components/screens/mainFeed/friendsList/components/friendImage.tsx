import React from 'react'
import {StyleSheet, View} from 'react-native'
import {
  BORDER_ROUND,
  FRIENDS_IMAGE_CONTAINER,
} from '../../../../../../assets/constants'
import {colors} from '../../../../../../assets/colors'

export const FriendImage = () => {
  return (
    <View style={styles.wrapCircle}>
      <View style={styles.photoBackground}></View>
    </View>
  )
}

const styles = StyleSheet.create({
  wrapCircle: {
    height: FRIENDS_IMAGE_CONTAINER,
    width: FRIENDS_IMAGE_CONTAINER,
    borderRadius: BORDER_ROUND.circle,
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
