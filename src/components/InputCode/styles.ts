import styled from 'styled-components/native'
import { TextInput } from 'react-native'
import { RFValue } from 'react-native-responsive-fontsize'

interface IInputCode {
  isFocused: boolean
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

export const InputSpace = styled(TextInput)`
  display: flex;
  width: 60px;
  height: 80px;
  text-align: center;

  align-items: center;
  justify-content: center;

  background: ${({ theme }) => theme.colors.black.alpha36};
  border-radius: ${RFValue(8)}px;

  font-size: ${RFValue(24)}px;
  font-family: ${({ theme }) => theme.font.family.bold};
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

export const CellInput = styled.Text<IInputCode>`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 42px;
  height: 60px;
  line-height: 60px;
  font-size: ${RFValue(24)}px;
  border-width: 1px;
  border-color: ${({ theme, isFocused }) =>
    isFocused ? theme.colors.black.alpha36 : theme.colors.blue[500]};
  background-color: ${({ theme }) => theme.colors.black.alpha36};
  color: ${({ theme }) => theme.colors.text[300]};
  text-align: center;
  margin-right: 8px;
  border-radius: 8px;
`
