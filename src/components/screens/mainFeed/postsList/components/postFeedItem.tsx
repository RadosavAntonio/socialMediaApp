import React from 'react'
import {StyleSheet, View} from 'react-native'
import {PostTitle} from './postTitle'

interface Props {
  item: any
}

export const PostFeedItem = ({item}: Props): JSX.Element => {
  return (
    <View style={styles.container}>
      <PostTitle item={item} />
    </View>
  )
}

const styles = StyleSheet.create({
  container: {},
})
