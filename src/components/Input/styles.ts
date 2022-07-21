import styled from 'styled-components/native'
import { TextInput } from 'react-native'
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

export const InputSpace = styled(TextInput)<IInputSpace>`
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

export const InputReturnsWrapper = styled.View`
  height: 24px;
  margin: 6px 0;

  width: 100%;
  flex-direction: row;
  justify-content: space-between;
`

export const Error = styled.Text`
  font-family: ${({ theme }) => theme.font.family.regular};
  color: ${({ theme }) => theme.colors.danger[500]};
  font-size: ${RFValue(14)}px;
`

export const CharacterCounter = styled.Text`
  font-family: ${({ theme }) => theme.font.family.regular};
  color: ${({ theme }) => theme.colors.black[300]};
  font-size: ${RFValue(14)}px;
`
