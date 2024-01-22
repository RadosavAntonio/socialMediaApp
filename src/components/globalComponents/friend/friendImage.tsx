import React from 'react'
import { StyleSheet, View } from 'react-native'
import {
  BORDER_ROUND,
  FRIENDS_IMAGE_CONTAINER,
} from '../../../../assets/constants'
import { colors } from '../../../../assets/colors'

interface Props {
  imageSize?: number
}

export const FriendImage = ({
  imageSize = FRIENDS_IMAGE_CONTAINER,
}: Props): JSX.Element => {
  return (
    <View style={[styles.wrapCircle, { height: imageSize, width: imageSize }]}>
      <View
        style={[
          styles.photoBackground,
          { height: imageSize - 10, width: imageSize - 10 },
        ]}
      />
    </View>
  )
}

const styles = StyleSheet.create({
  wrapCircle: {
    borderRadius: BORDER_ROUND.circle,
    borderWidth: 1,
    borderColor: colors.caraPink,
    backgroundColor: 'transparent',
    justifyContent: 'center',
    alignItems: 'center',
  },

  photoBackground: {
    borderRadius: 100,
    backgroundColor: colors.lightBlue,
  },
})
