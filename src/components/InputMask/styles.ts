import styled from 'styled-components/native'
import { TextInputMask } from 'react-native-masked-text'
import { RFValue } from 'react-native-responsive-fontsize'

interface IInputSpace {
  isInputFocused: boolean
  activeBorderColor: string
}

export const Wrapper = styled.View`
  width: 100%;
`

export const Label = styled.Text`
  font-family: ${({ theme }) => theme.font.family.regular};
  font-size: ${RFValue(14)}px;
  color: ${({ theme }) => theme.colors.black[300]};
  margin-bottom: 6px;
`

export const InputSpace = styled(TextInputMask)<IInputSpace>`
  width: 100%;
  padding: 16px 18px;

  background: ${({ theme }) => theme.colors.black.alpha36};
  border-radius: ${RFValue(24)}px;

  border-style: solid;
  border-width: 1px;
  border-color: ${({ theme, activeBorderColor, isInputFocused }) =>
    isInputFocused ? activeBorderColor : theme.colors.black[500]};

  font-size: ${RFValue(14)}px;
  font-family: ${({ theme }) => theme.font.family.regular};
  color: ${({ theme }) => theme.colors.text[300]};
`

export const ErrorWrapper = styled.Text`
  height: 24px;
  margin: 6px 0;
`

export const Error = styled.Text`
  font-family: ${({ theme }) => theme.font.family.regular};
  color: ${({ theme }) => theme.colors.danger[500]};
  font-size: ${RFValue(14)}px;
`
