import React from 'react'
import { ScrollView, StyleSheet, View } from 'react-native'
import { SafeAreaView } from 'react-native-safe-area-context'
import { colors } from '../../../../assets/colors'
import { Title } from '../components/title'
import { useAppNavigation } from '../../../navigation/hooks/useNavigation'
import { faUser } from '@fortawesome/free-regular-svg-icons'
import { Screen } from '../../../navigation/navigation'
import { FriendItem } from '../../globalComponents/friend/friendItem'
import { getAdjustedWidth } from '../../../../assets/globalUtilityFunctionsAndConstants'
import { ProfileStatus } from './components/profileStatus'
import { globalStyle } from '../../../../assets/globalStyles'
import { ProfileTabsNavigation } from '../../../navigation/MainNavigator'

export interface FriendListData {
  firstName: string
  id: number
}

export const Profile = (): JSX.Element => {
  const navigation = useAppNavigation()
  const navigateToHome = () => navigation.navigate(Screen.HOME)

  return (
    <SafeAreaView edges={['top']} style={styles.container}>
      <ScrollView contentContainerStyle={globalStyle.flexGrow}>
        <View style={styles.profileTitleContainer}>
          <Title icon={faUser} onIconPress={navigateToHome} />
        </View>
        <FriendItem
          item={{ firstName: 'usernameHere', id: 0 }}
          fontSize={26}
          imageSize={getAdjustedWidth(128)}
        />
        <ProfileStatus />
        <View style={globalStyle.flex}>
          <ProfileTabsNavigation />
        </View>
      </ScrollView>
    </SafeAreaView>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.vogueWhite,
  },

  profileTitleContainer: {
    alignSelf: 'flex-end',
  },
})
