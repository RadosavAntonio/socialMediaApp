import React from 'react'
import {StyleSheet, View} from 'react-native'
import {PostTitle} from './postTitle'
import {PostImage} from './postImage'
import {PostInfoLine} from './postInfoLine'

interface Props {
  item: any
}

export const PostFeedItem = ({item}: Props): JSX.Element => {
  return (
    <View style={styles.container}>
      <PostTitle item={item} />
      <PostImage imageUrl={null} />
      <PostInfoLine />
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    height: 'auto',
  },
})
