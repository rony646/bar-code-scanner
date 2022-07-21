import React from 'react'

import * as S from './styles'

interface InputCurrencyProps {
  value: number
  onChangeValue?: (value: number) => void
  maxValue?: number
  placeholderTextColor?: string
}

const InputCurrency = ({
  value,
  onChangeValue,
  maxValue,
  placeholderTextColor
}: InputCurrencyProps) => {
  return (
    <S.WrapInputCurrency>
      <S.CurrencySymbol>R$</S.CurrencySymbol>
      <S.InputCurrency
        value={value}
        onChangeValue={onChangeValue}
        delimiter="."
        separator=","
        maxValue={maxValue}
        keyboardAppearance="dark"
        placeholderTextColor={placeholderTextColor}
        placeholder="0,00"
      />
    </S.WrapInputCurrency>
  )
}

export default InputCurrency
