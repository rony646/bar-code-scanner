import React, { ReactElement, useState } from 'react'
import { TextInputProps, SafeAreaView } from 'react-native'
import { Controller, Control } from 'react-hook-form'

import {
  CodeField,
  Cursor,
  useBlurOnFulfill,
  useClearByFocusCell
} from 'react-native-confirmation-code-field'

import * as S from './styles'

interface IInputCodeProps extends TextInputProps {
  error?: string
  inputCode: number
  control: Control
  name: string
}

const InputCode = ({
  error,
  inputCode,
  control,
  name
}: IInputCodeProps): ReactElement => {
  const [value, setValue] = useState('')
  const ref = useBlurOnFulfill({ value, cellCount: inputCode })
  const [props, getCellOnLayoutHandler] = useClearByFocusCell({
    value,
    setValue
  })

  return (
    <S.Wrapper>
      <SafeAreaView>
        <Controller
          control={control}
          name={name}
          render={({ field: { onChange, value } }) => (
            <CodeField
              ref={ref}
              {...props}
              value={value}
              onChangeText={onChange}
              cellCount={inputCode}
              keyboardType="number-pad"
              textContentType="oneTimeCode"
              keyboardAppearance="dark"
              renderCell={({ index, symbol, isFocused }) => (
                <S.CellInput
                  key={index}
                  onLayout={getCellOnLayoutHandler(index)}
                  isFocused
                >
                  {symbol || (isFocused ? <Cursor /> : null)}
                </S.CellInput>
              )}
            />
          )}
        />
      </SafeAreaView>

      <S.ErrorWrapper>
        <S.Error>{error}</S.Error>
      </S.ErrorWrapper>
    </S.Wrapper>
  )
}

export default InputCode
