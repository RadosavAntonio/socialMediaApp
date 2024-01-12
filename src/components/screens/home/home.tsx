import React from 'react'
import {StyleSheet} from 'react-native'
import {Title} from '../components/title'
import {FriendsList} from './friendsList/friendsList'
import {PostsList} from './postsList/postsList'
import {SafeAreaView} from 'react-native-safe-area-context'
import {colors} from '../../../../assets/colors'
import {faMessage} from '@fortawesome/free-regular-svg-icons'
import {Screen} from '../../../navigation/navigation'
import {useAppNavigation} from '../../../navigation/hooks/useNavigation'

export const Home = (): JSX.Element => {
  const navigation = useAppNavigation()
  const navigateToProfile = () => navigation.navigate(Screen.PROFILE)

  return (
    <SafeAreaView edges={['top']} style={styles.container}>
      <Title
        title="Let's Explore"
        icon={faMessage}
        onIconPress={navigateToProfile}
      />
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
