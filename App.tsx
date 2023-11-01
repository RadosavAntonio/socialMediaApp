import React from 'react'
import {MainFeed} from './src/components/screens/mainFeed/mainFeed'
import {NavigationContainer} from '@react-navigation/native'

const App = (): JSX.Element => {
  return (
    <NavigationContainer>
      <MainFeed />
    </NavigationContainer>
  )
}

export default App
