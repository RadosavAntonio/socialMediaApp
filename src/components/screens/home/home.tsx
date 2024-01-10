import React from 'react'
import {StyleSheet} from 'react-native'
import {Title} from './title/title'
import {FriendsList} from './friendsList/friendsList'
import {PostsList} from './postsList/postsList'
import {SafeAreaView} from 'react-native-safe-area-context'
import {colors} from '../../../../assets/colors'

export const Home = (): JSX.Element => {
  return (
    <SafeAreaView edges={['right', 'bottom', 'left']} style={styles.container}>
      <Title title="Let's Explore" />
      <FriendsList />
      <PostsList />
    </SafeAreaView>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.vogueWhite,
  },
})
