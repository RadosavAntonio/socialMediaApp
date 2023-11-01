import React from 'react'
import {Row} from '../../../../globalComponents/row'
import {FriendImage} from '../../friendsList/components/friendImage'
import {Alert, Pressable, StyleSheet, Text, View} from 'react-native'
import {
  FRIENDS_IMAGE_CONTAINER,
  SPACE,
} from '../../../../../../assets/constants'
import {FontAwesomeIcon} from '@fortawesome/react-native-fontawesome'
import {faEllipsis} from '@fortawesome/free-solid-svg-icons'
import {colors} from '../../../../../../assets/colors'
import {globalStyle} from '../../../../../../assets/globalStyles'
import {getAdjustedWidth} from '../../../../../../assets/globalUtilityFunctionsandConstants'

interface Props {
  item: any
}

export const PostTitle = ({item}: Props): JSX.Element => {
  return (
    <Row style={styles.container}>
      <Row>
        <FriendImage />
        <View style={styles.textContainer}>
          <Text style={styles.textName}>
            {`${item.firstName} ${item.lastName}`}
          </Text>
          <Text style={globalStyle.details}>{`${item.location}`}</Text>
        </View>
      </Row>
      <Pressable onPress={() => Alert.alert('Post details pressed')}>
        <FontAwesomeIcon
          icon={faEllipsis}
          color={colors.lightGrey}
          size={getAdjustedWidth(24)}
        />
      </Pressable>
    </Row>
  )
}

const styles = StyleSheet.create({
  container: {
    width: '100%',
    height: FRIENDS_IMAGE_CONTAINER,
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: SPACE[12],
  },

  textContainer: {
    justifyContent: 'space-between',
    padding: SPACE[12],
  },

  textName: {
    fontSize: 16,
    fontFamily: 'Inter',
    fontWeight: '500',
    color: colors.offBlack,
  },
})
