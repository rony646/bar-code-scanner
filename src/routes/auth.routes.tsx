import React from 'react'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import { createStackNavigator } from '@react-navigation/stack'

import { useTheme } from 'styled-components'
import { Platform } from 'react-native'

import Profile from '../screens/Profile'
import Dashboard from '../screens/Dashboard'
import Menu from '../screens/Menu'

import { Feather } from '@expo/vector-icons'

const Tab = createBottomTabNavigator()
const Stack = createStackNavigator()

interface ITabBarIconProps {
  size: number
  color: string
}

const Home = () => {
  const theme = useTheme()

  return (
    <Tab.Navigator
      tabBarOptions={{
        activeTintColor: theme.colors.white,
        inactiveTintColor: theme.colors.black[300],
        showLabel: false,
        style: {
          borderTopColor: theme.colors.black[400],
          borderTopWidth: 2,
          paddingVertical: Platform.OS === 'ios' ? 20 : 0,
          paddingHorizontal: 64,
          marginHorizontal: 20,
          height: Platform.OS === 'ios' ? 80 : 70,
          backgroundColor: theme.colors.black[500],
          position: 'absolute',
          elevation: 0,
          shadowOpacity: 0
        },
        activeBackgroundColor: theme.colors.black[500],
        inactiveBackgroundColor: theme.colors.black[500]
      }}
    >
      <Tab.Screen
        name="Dashboard"
        component={Dashboard}
        options={{
          tabBarIcon: ({ color }: ITabBarIconProps) => (
            <Feather name="home" size={18} color={color} />
          )
        }}
      />
      <Tab.Screen
        name="Profile"
        component={Profile}
        options={{
          tabBarIcon: ({ color }: ITabBarIconProps) => (
            <Feather name="user" size={18} color={color} />
          )
        }}
      />
    </Tab.Navigator>
  )
}

const AuthRoutes = () => {
  return (
    <Stack.Navigator headerMode="none">
      <Stack.Screen
        name="Home"
        component={Home}
        options={{ headerShown: false }}
      />
      <Stack.Screen name="Menu" component={Menu} />
    </Stack.Navigator>
  )
}

export { AuthRoutes }
