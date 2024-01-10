import React from 'react'
import {createStackNavigator} from '@react-navigation/stack'
import {Routes} from './Routes'
import {Home} from '../components/screens/home/home'

const Stack = createStackNavigator()

export const MainNavigation = () => {
  return (
    <Stack.Navigator screenOptions={{header: () => null, headerShown: false}}>
      <Stack.Screen name={Routes.HOME} component={Home} />
    </Stack.Navigator>
  )
}
