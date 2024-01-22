import React from 'react'
import { StyleSheet, View } from 'react-native'
import { SafeAreaView } from 'react-native-safe-area-context'
import { colors } from '../../../../assets/colors'
import { Title } from '../components/title'
import { useAppNavigation } from '../../../navigation/hooks/useNavigation'
import { faUser } from '@fortawesome/free-regular-svg-icons'
import { Screen } from '../../../navigation/navigation'

export const Profile = (): JSX.Element => {
  const navigation = useAppNavigation()
  const navigateToHome = () => navigation.navigate(Screen.HOME)

  return (
    <SafeAreaView edges={['top']} style={styles.container}>
      <View style={styles.profileTitleContainer}>
        <Title icon={faUser} onIconPress={navigateToHome} />
      </View>
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
