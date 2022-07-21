import { Platform, SafeAreaView, KeyboardAvoidingView } from 'react-native'
import { RFValue } from 'react-native-responsive-fontsize'
import styled from 'styled-components/native'

export const Wrapper = styled(SafeAreaView)`
  flex: 1;
  width: 100%;

  background: ${({ theme }) => theme.colors.black[500]};
`

export const KeyboardAvoidingViewWrapper = styled(KeyboardAvoidingView)`
  width: 100%;
  flex: 1;
`

export const PageTitle = styled.Text`
  text-align: center;
  font-family: ${({ theme }) => theme.font.family.bold};
  color: ${({ theme }) => theme.colors.white};
  font-size: ${RFValue(18)}px;

  margin-top: 32px;
  margin-bottom: 24px;
`

export const Form = styled.View`
  flex: 1;

  width: 100%;
  padding: 0 28px;
`

export const ButtonWrapper = styled.View`
  margin: 0 auto;
  width: 48px;
  margin-top: 48px;

  flex: 1;
  justify-content: flex-end;
  margin-bottom: ${Platform.OS === 'ios' ? '8px' : '20px'};
`

export const InsertCodeWrapper = styled.View`
  align-items: center;
`

export const InsertCodeTitle = styled.Text`
  text-align: center;
  font-family: ${({ theme }) => theme.font.family.bold};
  color: ${({ theme }) => theme.colors.white};
  font-size: ${RFValue(20)}px;
`

export const InsertCodeArea = styled.View`
  flex-direction: row;
  align-items: center;
  justify-content: center;

  width: 100%;

  margin: 44px 0 28px;
`
export const InputGroupWrapper = styled.View`
  flex: 1;
  margin-top: 50px;
`

export const TextHelp = styled.Text`
  text-align: center;
  color: ${({ theme }) => theme.colors.white};
`

export const Bold = styled.Text`
  font-weight: bold;
`
