import React from 'react'
import { StyleProp, StyleSheet, Text, TextProps, TextStyle } from 'react-native'
import { colors } from '../../../assets/colors'

interface Props extends TextProps {
  additionalStyle?: StyleProp<TextStyle>
  children: React.ReactNode
  color?: string
  fontSize?: number
  letterSpacing?: number
  marginTop?: number
  marginBottom?: number | string
  marginLeft?: number | string
  marginRight?: number | string
  iconCorrection?: boolean
  textAlign?: 'auto' | 'left' | 'right' | 'center' | 'justify'
  lineHeight?: number
  isUnderline?: boolean
  adjustSizeToFit?: boolean
  maxWidth?: number | string
  minimumFontScale?: number
  fontFamily?: string
}

export const AppText = ({
  children,
  fontSize = 12,
  color = colors.offBlack,
  letterSpacing = -0.25,
  marginTop = 0,
  marginBottom = 0,
  marginLeft = 0,
  marginRight = 0,
  additionalStyle,
  iconCorrection = false,
  textAlign = 'left',
  isUnderline = false,
  maxWidth,
  lineHeight,
  allowFontScaling = false,
  fontFamily = 'Inter',
  ...props
}: Props): JSX.Element => {
  const adjustedMarginTop =
    typeof marginTop === 'string'
      ? marginTop
      : marginTop + (iconCorrection ? fontSize * 0.2 : 0)

  return (
    <Text
      allowFontScaling={allowFontScaling}
      {...props}
      style={[
        style.text,
        {
          color,
          fontSize,
          letterSpacing,
          marginTop: adjustedMarginTop,
          marginBottom,
          marginLeft,
          marginRight,
          textAlign,
          lineHeight,
          textDecorationLine: isUnderline ? 'underline' : 'none',
          maxWidth,
          fontFamily,
        },
        additionalStyle,
        props.style,
      ]}>
      {children}
    </Text>
  )
}

const style = StyleSheet.create({
  text: {
    letterSpacing: -0.25,
    paddingBottom: 1,
  },
})
