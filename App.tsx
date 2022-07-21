import React from 'react'

import * as Localization from 'expo-localization'
import i18n from 'i18n-js'
import { fr, en, es } from './src/locales'

i18n.fallbacks = true
i18n.translations = { en, fr, es }
i18n.locale = Localization.locale

import { StatusBar } from 'expo-status-bar'
import { View } from 'react-native'
import { ThemeProvider } from 'styled-components'
import Toast from 'react-native-toast-message'
import AppLoading from 'expo-app-loading'

import AppProvider from './src/hooks'

import {
  useFonts,
  DMSans_400Regular,
  DMSans_500Medium,
  DMSans_700Bold
} from '@expo-google-fonts/dm-sans'

import { Routes } from './src/routes'
import { useAuth } from './src/hooks/auth'

import theme from './src/global/styles/theme'

export default function App() {
  const [fontsLoaded] = useFonts({
    DMSans_400Regular,
    DMSans_500Medium,
    DMSans_700Bold
  })

  const { userStorageLoading } = useAuth()

  if (!fontsLoaded || userStorageLoading) {
    return <AppLoading />
  }
  return (
    <ThemeProvider theme={theme}>
      <StatusBar style="light" />
      <AppProvider>
        <View style={{ flex: 1, backgroundColor: theme.colors.black[500] }}>
          <Routes />
        </View>
      </AppProvider>
      <Toast ref={(ref) => Toast.setRef(ref)} />
    </ThemeProvider>
  )
}
