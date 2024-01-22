import React from 'react'
import { StyleSheet, View } from 'react-native'
import { BORDER_ROUND, SPACE } from '../../../../../../assets/constants'
import { colors } from '../../../../../../assets/colors'
import { getAdjustedWidth } from '../../../../../../assets/globalUtilityFunctionsAndConstants'

interface Props {
  imageUrl: string
}

export const PostImage = ({ imageUrl }: Props): JSX.Element => {
  // imageUrl will be used later on
  return <View style={styles.container} />
}

const styles = StyleSheet.create({
  container: {
    height: getAdjustedWidth(220),
    backgroundColor: colors.lightBlue,
    borderRadius: BORDER_ROUND[18],
    marginBottom: SPACE[12],
  },
})
