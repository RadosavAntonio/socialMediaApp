import React from 'react'
import { StyleProp, StyleSheet, View, ViewStyle } from 'react-native'
import { FriendListData } from '../../screens/home/friendsList/friendsList'
import { SPACE } from '../../../../assets/constants'
import { FriendImage } from './friendImage'
import { AppText } from '../appText'

interface Props {
  item: FriendListData
  containerStyle?: StyleProp<ViewStyle>
  fontSize?: number
  imageSize?: number
}

export const FriendItem = ({
  item,
  containerStyle,
  fontSize = 12,
  imageSize,
}: Props): JSX.Element => {
  return (
    <View style={[styles.container, containerStyle]}>
      <FriendImage imageSize={imageSize} />
      <AppText fontSize={fontSize}>{item.firstName}</AppText>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    justifyContent: 'space-between',
    alignItems: 'center',
    marginRight: SPACE[24],
  },
})
