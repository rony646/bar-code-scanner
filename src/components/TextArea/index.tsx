import React, { ReactElement, useState } from 'react'
import { TextInputProps } from 'react-native'
import { Controller, Control } from 'react-hook-form'

import { useTheme } from 'styled-components'

import * as S from './styles'

interface IInputProps extends TextInputProps {
  control: Control
  label?: string
  name: string
  error?: string
  activeBorderColor?: string
  shouldShowCharacterCounter?: boolean
  characterLimit?: number
  characterCounter?: number | string
}

import theme from '../../global/styles/theme'

const TextArea = ({
  control,
  label,
  name,
  error,
  activeBorderColor = theme.colors.blue[500],
  shouldShowCharacterCounter,
  characterLimit,
  characterCounter,
  ...rest
}: IInputProps): ReactElement => {
  const theme = useTheme()

  const [isInputFocused, setIsInputFocused] = useState(false)

  return (
    <S.Wrapper>
      <S.Label>{label}</S.Label>

      <Controller
        control={control}
        name={name}
        render={({ field: { onChange, value } }) => (
          <S.InputSpace
            multiline
            isInputFocused={isInputFocused}
            keyboardAppearance="dark"
            onChangeText={onChange}
            placeholderTextColor={theme.colors.black[400]}
            value={value}
            onFocus={() => setIsInputFocused(true)}
            activeBorderColor={activeBorderColor}
            {...rest}
          />
        )}
      />

      <S.InputReturnsWrapper>
        <S.Error>{error}</S.Error>
        {shouldShowCharacterCounter && (
          <S.CharacterCounter>
            {characterCounter === undefined ? 0 : characterCounter}/
            {characterLimit}
          </S.CharacterCounter>
        )}
      </S.InputReturnsWrapper>
    </S.Wrapper>
  )
}

export default TextArea
