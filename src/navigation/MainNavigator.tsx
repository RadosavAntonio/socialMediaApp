import React from 'react'
import { Home } from '../components/screens/home/home'
import { Profile } from '../components/screens/profile/profile'
import { AppNavigationParams, Screen } from './navigation'
import { createNativeStackNavigator } from '@react-navigation/native-stack'

const AppStack = createNativeStackNavigator<AppNavigationParams>()

export const MainNavigation = (): JSX.Element | null => {
  return (
    <AppStack.Navigator
      screenOptions={{
        headerShown: false,
        // header: () => null,
        // gestureEnabled: false,
        // navigationBarColor: , // for android bar
        animation: 'fade_from_bottom',
      }}
      initialRouteName={Screen.HOME}>
      <AppStack.Screen name={Screen.HOME} component={Home} />
      <AppStack.Screen name={Screen.PROFILE} component={Profile} />
    </AppStack.Navigator>
  )
}
