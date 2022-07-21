import React from 'react'
import { createStackNavigator } from '@react-navigation/stack'

import Home from '../screens/Home'
import Login from '../screens/Login'
import LoginSocial from '../screens/LoginSocial'
import Menu from '../screens/Menu'

const { Navigator, Screen } = createStackNavigator()

const AppRoutes = () => {
  return (
    <Navigator headerMode="none" initialRouteName="Home">
      <Screen name="Home" component={Home} />
      <Screen name="Login" component={Login} />
      <Screen name="LoginSocial" component={LoginSocial} />
      <Screen name="Menu" component={Menu} />
    </Navigator>
  )
}

export { AppRoutes }
