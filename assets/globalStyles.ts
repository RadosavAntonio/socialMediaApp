import {StyleSheet} from 'react-native';
import {colors} from './colors';

export const globalStyle = StyleSheet.create({
  title: {
    color: colors.oceanEyesBlue,
    fontFamily: 'Inter',
    fontSize: 24,
    lineHeight: 29,
    fontWeight: '600',
    letterSpacing: 0.48,
  },

  width100Percent: {
    width: '100%',
  },
})
