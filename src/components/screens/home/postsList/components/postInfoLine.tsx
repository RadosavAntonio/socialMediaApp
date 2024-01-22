import React from 'react'
import { Row } from '../../../../globalComponents/row'
import { SPACE } from '../../../../../../assets/constants'
import { Alert, StyleSheet } from 'react-native'
import {
  faBookmark,
  faComment,
  faHeart,
} from '@fortawesome/free-regular-svg-icons'
import { PostInfoLineItem } from './postInfoLine_item'
import { globalStyle } from '../../../../../../assets/globalStyles'
import { getAdjustedWidth } from '../../../../../../assets/globalUtilityFunctionsAndConstants'

export const PostInfoLine = () => {
  const onPress = () => Alert.alert('Pressed, coming soon')

  return (
    <Row style={styles.container}>
      <PostInfoLineItem icon={faHeart} iconText={'000'} onPress={onPress} />
      <PostInfoLineItem icon={faComment} iconText={'000'} onPress={onPress} />
      <PostInfoLineItem icon={faBookmark} iconText={'000'} onPress={onPress} />
    </Row>
  )
}

const styles = StyleSheet.create({
  container: {
    height: getAdjustedWidth(24),
    marginBottom: SPACE[24],
    alignItems: 'center',
  },

  textLocation: {
    ...globalStyle.details,
    marginLeft: SPACE[4],
  },
})
