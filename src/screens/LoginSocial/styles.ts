import { SafeAreaView, TouchableOpacity } from 'react-native'

import { RFValue } from 'react-native-responsive-fontsize'
import styled from 'styled-components/native'

export const Wrapper = styled(SafeAreaView)`
  flex: 1;
  width: 100%;

  background: ${({ theme }) => theme.colors.black[500]};
`

export const PageTitle = styled.Text`
  text-align: center;
  font-family: ${({ theme }) => theme.font.family.bold};
  color: ${({ theme }) => theme.colors.white};
  font-size: ${RFValue(18)}px;

  margin-top: 32px;
  margin-bottom: 24px;
`

export const SocialWrapper = styled.View`
  flex: 1;
  justify-content: center;
  align-items: center;
  padding: 0 28px;
`

export const SocialButton = styled(TouchableOpacity)`
  display: flex;
  flex-direction: row;
  align-items: center;
  height: ${RFValue(56)}px;
  background: ${({ theme }) => theme.colors.black[500]};
  margin-bottom: 16px;
  border-radius: 4px;
  border: 1px solid ${({ theme }) => theme.colors.white};
`

export const SocialButtonIcon = styled.View`
  height: 100%;
  justify-content: center;
  align-items: center;

  padding: ${RFValue(16)}px;

  border-right-width: 1px;
  border-right-color: ${({ theme }) => theme.colors.white};
`

export const SocialButtonText = styled.Text`
  flex: 1;
  text-align: center;

  font-family: ${({ theme }) => theme.font.family.medium};
  font-size: ${RFValue(14)}px;
  color: ${({ theme }) => theme.colors.white};
`

export const TextHelp = styled.Text`
  text-align: center;
  color: ${({ theme }) => theme.colors.white};
`
