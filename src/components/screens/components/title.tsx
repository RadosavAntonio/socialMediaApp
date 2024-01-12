import React from 'react'
import {Pressable, StyleSheet, Text, View} from 'react-native'
import {globalStyle} from '../../../../assets/globalStyles'
import {FontAwesomeIcon} from '@fortawesome/react-native-fontawesome'
import {IconDefinition} from '@fortawesome/free-regular-svg-icons'
import {Row} from '../../globalComponents/row'
import {
  BORDER_ROUND,
  SCREEN_MARGIN_HORIZONTAL,
} from '../../../../assets/constants'
import {colors} from '../../../../assets/colors'
import {getAdjustedWidth} from '../../../../assets/globalUtilityFunctionsAndConstants'

interface Props {
  title?: string
  icon: IconDefinition
  onIconPress: () => void
}

export const Title = ({title, icon, onIconPress}: Props): JSX.Element => {
  return (
    <View style={styles.container}>
      <Row style={styles.titleContainer}>
        {title && <Text style={globalStyle.title}>{title}</Text>}
        <Pressable style={styles.iconContainer} onPress={onIconPress}>
          <FontAwesomeIcon
            icon={icon}
            color={colors.mediumGrey}
            size={getAdjustedWidth(24)}
          />
          <View style={styles.notificationBubble}>
            <Text style={styles.notificationText}>2</Text>
          </View>
        </Pressable>
      </Row>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    marginHorizontal: SCREEN_MARGIN_HORIZONTAL,
  },

  titleContainer: {
    width: '100%',
    paddingBottom: 10,
    justifyContent: 'space-between',
    alignItems: 'center',
  },

  iconContainer: {
    padding: 12,
    borderRadius: BORDER_ROUND.circle,
    backgroundColor: colors.veryLightGrey,
  },

  notificationBubble: {
    height: 15,
    width: 15,
    borderRadius: BORDER_ROUND.circle,
    backgroundColor: colors.caraPink,
    justifyContent: 'center',
    alignItems: 'center',
    position: 'absolute',
    right: 8,
    top: 8,
  },

  notificationText: {
    fontSize: 10,
    fontFamily: 'Inter',
    fontWeight: '700',
    color: colors.vogueWhite,
  },
})
