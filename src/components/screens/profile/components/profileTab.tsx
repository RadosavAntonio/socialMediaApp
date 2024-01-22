import React from 'react'
import { StyleSheet } from 'react-native'
import { AppText } from '../../../globalComponents/appText'
import { getAdjustedHeight } from '../../../../../assets/globalUtilityFunctionsAndConstants'
import { colors } from '../../../../../assets/colors'

interface Props {
  title: string
  isFocused: boolean
}

export const ProfileTab = ({ title, isFocused }: Props): JSX.Element => {
  return (
    <AppText
      additionalStyle={[style.title, !isFocused && style.titleNotFocused]}>
      {title}
    </AppText>
  )
}

const style = StyleSheet.create({
  title: {
    color: colors.softBlack,
    fontSize: getAdjustedHeight(16),
    padding: getAdjustedHeight(15),
  },
  titleNotFocused: {
    color: colors.black25,
  },
})
