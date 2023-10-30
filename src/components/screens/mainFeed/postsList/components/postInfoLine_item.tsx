import {IconDefinition} from '@fortawesome/fontawesome-svg-core'
import React from 'react'
import {Alert, Pressable, StyleSheet, Text} from 'react-native'
import {Row} from '../../../../globalComponents/row'
import {FontAwesomeIcon} from '@fortawesome/react-native-fontawesome'
import {SPACE} from '../../../../../../assets/constants'
import {colors} from '../../../../../../assets/colors'

interface Props {
  icon: IconDefinition
  iconText: string
  onPress: () => void
}

export const PostInfoLineItem = ({
  icon,
  iconText,
  onPress,
}: Props): JSX.Element => {
  return (
    <Pressable onPress={() => Alert.alert('Pressed, coming soon')}>
      <Row style={styles.container}>
        <FontAwesomeIcon icon={icon} color={colors.lightGrey} size={20} />
        <Text style={styles.textLocation}>{`${iconText}`}</Text>
      </Row>
    </Pressable>
  )
}

const styles = StyleSheet.create({
  container: {
    justifyContent: 'center',
    alignItems: 'center',
    marginRight: SPACE[24],
  },

  textLocation: {
    fontSize: 12,
    fontFamily: 'Inter',
    fontWeight: '400',
    color: colors.lightGrey,
    marginLeft: SPACE[4],
  },
})
