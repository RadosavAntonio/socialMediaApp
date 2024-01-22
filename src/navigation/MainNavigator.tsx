import React from 'react'
import { Home } from '../components/screens/home/home'
import { Profile } from '../components/screens/profile/profile'
import { AppNavigationParams, Screen } from './navigation'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs'
import { ProfileTab } from '../components/screens/profile/components/profileTab'
import { ProfileTabContent } from '../components/screens/profile/components/profileTabContent'

const ProfileTabs = createMaterialTopTabNavigator()

export const ProfileTabsNavigation = () => {
  return (
    <ProfileTabs.Navigator
      screenOptions={{
        tabBarIndicatorStyle: {
          backgroundColor: 'transparent',
        },
        tabBarStyle: {
          zIndex: 0,
          elevation: 0,
        },
      }}>
      <ProfileTabs.Screen
        name={'Tab1'}
        options={{
          tabBarLabel: ({ focused }) => (
            <ProfileTab isFocused={focused} title={'Photos'} />
          ),
        }}
        component={ProfileTabContent}
      />
      <ProfileTabs.Screen
        name={'Tab2'}
        options={{
          tabBarLabel: ({ focused }) => (
            <ProfileTab isFocused={focused} title={'Videos'} />
          ),
        }}
        component={ProfileTabContent}
      />
      <ProfileTabs.Screen
        name={'Tab3'}
        options={{
          tabBarLabel: ({ focused }) => (
            <ProfileTab isFocused={focused} title={'Saved'} />
          ),
        }}
        component={ProfileTabContent}
      />
    </ProfileTabs.Navigator>
  )
}

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
