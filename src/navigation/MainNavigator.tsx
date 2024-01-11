import React from 'react'
import {createStackNavigator} from '@react-navigation/stack'
import {Home} from '../components/screens/home/home'
import {Profile} from '../components/screens/profile/profile'
import {AppNavigationParams, Screen} from './navigation'

const AppStack = createStackNavigator<AppNavigationParams>()

export const MainNavigation = (): JSX.Element | null => {
  return (
    <AppStack.Navigator
      screenOptions={{
        headerShown: false,
        // header: () => null,
        // stackAnimation: 'fade',
        // contentStyle: ,
        // gestureEnabled: false,
        // navigationBarColor: , // for android bar
      }}
      initialRouteName={Screen.HOME}>
      <AppStack.Screen name={Screen.HOME} component={Home} />
      <AppStack.Screen name={Screen.PROFILE} component={Profile} />
    </AppStack.Navigator>
  )
}
