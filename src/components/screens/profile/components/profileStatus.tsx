import React from 'react'
import { AppText } from '../../../globalComponents/appText'
import { StyleSheet, View } from 'react-native'
import {
  getAdjustedHeight,
  getAdjustedWidth,
} from '../../../../../assets/globalUtilityFunctionsAndConstants'
import { colors } from '../../../../../assets/colors'

export interface ProfileStatusItem {
  id: number
  value: number
  title: string
}

export const ProfileStatus = () => {
  return (
    <View style={style.statContainer}>
      <View>
        <AppText additionalStyle={style.statAmount}>45</AppText>
        <AppText additionalStyle={style.statType}>Following</AppText>
      </View>
      <View style={style.statBorder} />
      <View>
        <AppText additionalStyle={style.statAmount}>30M</AppText>
        <AppText additionalStyle={style.statType}>Followers</AppText>
      </View>
      <View style={style.statBorder} />
      <View>
        <AppText additionalStyle={style.statAmount}>100</AppText>
        <AppText additionalStyle={style.statType}>Posts</AppText>
      </View>
    </View>
  )
}

const style = StyleSheet.create({
  statAmount: {
    fontSize: getAdjustedHeight(20),
    textAlign: 'center',
  },
  statType: {
    fontSize: getAdjustedHeight(16),
    textAlign: 'center',
    color: colors.lightGrey,
  },
  statContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginHorizontal: getAdjustedWidth(40),
    paddingVertical: getAdjustedHeight(30),
    borderBottomWidth: 1,
    borderColor: colors.black25,
  },
  statBorder: {
    borderRightWidth: 1,
    borderColor: colors.black25,
  },
})
