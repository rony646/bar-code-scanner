import { Platform } from 'react-native'

import { BorderlessButton } from 'react-native-gesture-handler'
import { RFValue } from 'react-native-responsive-fontsize'
import styled from 'styled-components/native'

export const Wrapper = styled.View`
  width: 100%;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;

  padding: 8px 32px;
  z-index: 10;
  margin-top: ${Platform.OS === 'ios' ? '8px' : '55px'};
`

export const HeaderBackButton = styled(BorderlessButton)`
  width: 20px;
`

export const HeaderTitleText = styled.Text`
  color: ${({ theme }) => theme.colors.white};
  font-size: ${RFValue(16)}px;
  font-family: ${({ theme }) => theme.font.family.bold};
`

export const HeaderCloseButton = styled(BorderlessButton)`
  width: 20px;
  justify-content: flex-end;
  align-items: flex-end;
`
