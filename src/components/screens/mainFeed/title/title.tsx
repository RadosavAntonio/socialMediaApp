import React from 'react'
import {
  Alert,
  Pressable,
  SafeAreaView,
  StyleSheet,
  Text,
  View,
} from 'react-native'
import {globalStyle} from '../../../../../assets/globalStyles'
import {FontAwesomeIcon} from '@fortawesome/react-native-fontawesome'
import {faComment} from '@fortawesome/free-regular-svg-icons'
import {Row} from '../../../globalComponents/row'
import {
  BORDER_ROUND,
  SCREEN_MARGIN_HORIZONTAL,
} from '../../../../../assets/constants'
import {colors} from '../../../../../assets/colors'
import {getAdjustedWidth} from '../../../../../assets/globalUtilityFunctionsandConstants'

interface Props {
  title: string
}

export const Title = ({title}: Props): JSX.Element => {
  return (
    <SafeAreaView style={styles.container}>
      <Row style={styles.titleContainer}>
        <Text style={globalStyle.title}>{title}</Text>
        <Pressable
          style={styles.iconContainer}
          onPress={() => Alert.alert('Messages pressed')}>
          <FontAwesomeIcon
            icon={faComment}
            color={colors.mediumGrey}
            size={getAdjustedWidth(24)}
          />
          <View style={styles.notificationBubble}>
            <Text style={styles.notificationText}>2</Text>
          </View>
        </Pressable>
      </Row>
    </SafeAreaView>
  )
}

const styles = StyleSheet.create({
  container: {
    marginHorizontal: SCREEN_MARGIN_HORIZONTAL,
  },

  titleContainer: {
    width: '100%',
    paddingVertical: 10,
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
