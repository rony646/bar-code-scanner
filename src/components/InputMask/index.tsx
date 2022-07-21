import React, { ReactElement, useState } from 'react'
import {
  TextInputMaskOptionProp,
  TextInputMaskProps,
  TextInputMaskTypeProp
} from 'react-native-masked-text'
import { Controller, Control } from 'react-hook-form'

import * as S from './styles'

interface IInputMaskProps extends TextInputMaskProps {
  type: TextInputMaskTypeProp
  control: Control
  label: string
  name: string
  error?: string
  options?: TextInputMaskOptionProp
  activeBorderColor?: string
}

import theme from '../../global/styles/theme'

const InputMask = ({
  type,
  control,
  label,
  name,
  error,
  options,
  activeBorderColor = theme.colors.blue[500],
  ...rest
}: IInputMaskProps): ReactElement => {
  const [isInputFocused, setIsInputFocused] = useState(false)

  return (
    <S.Wrapper>
      <S.Label>{label}</S.Label>

      <Controller
        control={control}
        name={name}
        render={({ field: { onChange, value } }) => (
          <S.InputSpace
            isInputFocused={isInputFocused}
            onFocus={() => setIsInputFocused(true)}
            type={type}
            keyboardAppearance="dark"
            onChangeText={onChange}
            placeholderTextColor={theme.colors.black[400]}
            value={value}
            options={options}
            activeBorderColor={activeBorderColor}
            {...rest}
          />
        )}
      />

      <S.ErrorWrapper>
        <S.Error>{error}</S.Error>
      </S.ErrorWrapper>
    </S.Wrapper>
  )
}

export default InputMask
