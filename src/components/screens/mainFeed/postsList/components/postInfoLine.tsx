import React from 'react'
import {Row} from '../../../../globalComponents/row'
import {colors} from '../../../../../../assets/colors'
import {SPACE, getAdjustedWidth} from '../../../../../../assets/constants'
import {StyleSheet} from 'react-native'
import {
  faBookmark,
  faComment,
  faHeart,
} from '@fortawesome/free-regular-svg-icons'
import {PostInfoLineItem} from './postInfoLine_item'

export const PostInfoLine = () => {
  return (
    <Row style={styles.container}>
      <PostInfoLineItem icon={faHeart} iconText={'000'} onPress={() => {}} />
      <PostInfoLineItem icon={faComment} iconText={'000'} onPress={() => {}} />
      <PostInfoLineItem icon={faBookmark} iconText={'000'} onPress={() => {}} />
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
    fontSize: 12,
    fontFamily: 'Inter',
    fontWeight: '400',
    color: colors.lightGrey,
    marginLeft: SPACE[4],
  },
})
