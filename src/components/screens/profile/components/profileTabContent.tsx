import React from 'react'
import { ScrollView, StyleSheet, View } from 'react-native'
import { colors } from '../../../../../assets/colors'
import { getAdjustedWidth } from '../../../../../assets/globalUtilityFunctionsAndConstants'
import { BORDER_ROUND, SPACE } from '../../../../../assets/constants'

export const ProfileTabContent = (): JSX.Element => {
  return (
    <ScrollView
      contentContainerStyle={styles.outerSquare}
      bounces={false}
      showsVerticalScrollIndicator={false}>
      <View style={styles.container} />
      <View style={styles.container} />
      <View style={styles.container} />
      <View style={styles.container} />
      <View style={styles.container} />
    </ScrollView>
  )
}

const styles = StyleSheet.create({
  outerSquare: {
    flexGrow: 1,
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-around',
    paddingTop: SPACE[12],
    backgroundColor: colors.vogueWhite,
  },

  container: {
    height: getAdjustedWidth(220),
    width: '80%',
    backgroundColor: colors.lightBlue,
    borderRadius: BORDER_ROUND[18],
    marginBottom: SPACE[12],
  },
})
