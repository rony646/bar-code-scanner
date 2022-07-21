import React, { createContext, useState, useContext, ReactNode } from 'react'

interface IKeyboardVisibleContextDataProps {
  isKeyboardVisible: boolean
  setIsKeyboardVisible: (isKeyboardVisible: boolean) => void
}

interface IKeyboardVisibleProviderProps {
  children: ReactNode
}

const KeyboardVisibleContext = createContext<IKeyboardVisibleContextDataProps>(
  {} as IKeyboardVisibleContextDataProps
)

export const KeyboardVisibleProvider = ({
  children
}: IKeyboardVisibleProviderProps) => {
  const [isKeyboardVisible, setIsKeyboardVisible] = useState(false)

  return (
    <KeyboardVisibleContext.Provider
      value={{ isKeyboardVisible, setIsKeyboardVisible }}
    >
      {children}
    </KeyboardVisibleContext.Provider>
  )
}

export function useKeyboardVisible(): IKeyboardVisibleContextDataProps {
  const context = useContext(KeyboardVisibleContext)

  if (!context) {
    throw new Error(
      'useKeyboardVisible must be used within a KeyboardVisibleProvider'
    )
  }

  return context
}

export default KeyboardVisibleContext
