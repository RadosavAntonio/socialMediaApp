import React from 'react'
import {FlatList, StyleSheet, View} from 'react-native'
import {SCREEN_MARGIN_HORIZONTAL, SPACE} from '../../../../../assets/constants'
import {PostFeedItem} from './components/postFeedItem'

export const PostsList = () => {
  return (
    <View style={styles.container}>
      <FlatList
        data={posts}
        renderItem={item => {
          return PostFeedItem(item)
        }}
      />
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginHorizontal: SCREEN_MARGIN_HORIZONTAL,
    marginTop: SPACE[24],
    backgroundColor: 'pink',
  },
})

const posts = [
  {
    firstName: 'Allison',
    lastName: 'Becker',
    location: 'Sukabumi, Jawa Barat',
    likes: 1201,
    comments: 24,
    bookmarks: 55,
    id: 1,
  },
  {
    firstName: 'Jennifer',
    lastName: 'Wilkson',
    location: 'Pondok Leungsir, Jawa Barat',
    likes: 570,
    comments: 12,
    bookmarks: 60,
    id: 2,
  },
  {
    firstName: 'Adam',
    lastName: 'Spera',
    location: 'Boston, Massachusetts',
    likes: 100,
    comments: 8,
    bookmarks: 7,
    id: 3,
  },
  {
    firstName: 'Nata',
    lastName: 'Vacheishvili',
    location: 'New York, New York',
    likes: 300,
    comments: 18,
    bookmarks: 17,
    id: 4,
  },
  {
    firstName: 'Nicolas',
    lastName: 'Namoradze',
    location: 'Berlin, Germany',
    likes: 1240,
    comments: 56,
    bookmarks: 20,
    id: 5,
  },
]
