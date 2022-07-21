import React, { ReactNode } from 'react'

import { AuthProvider } from './auth'
import { KeyboardVisibleProvider } from './keyboardVisible'

interface IAppProviderProps {
  children: ReactNode
}

function AppProvider({ children }: IAppProviderProps) {
  return (
    <AuthProvider>
      <KeyboardVisibleProvider>{children}</KeyboardVisibleProvider>
    </AuthProvider>
  )
}

export default AppProvider
