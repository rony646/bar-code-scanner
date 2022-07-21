import { RFValue } from 'react-native-responsive-fontsize'
import styled from 'styled-components/native'

export const Wrapper = styled.View`
  width: 100%;

  background: ${({ theme }) => theme.colors.black.alpha40};

  padding: 16px;
  border-radius: 8px;

  flex-direction: row;
  align-items: center;
  justify-content: space-between;
`

export const Text = styled.Text`
  color: ${({ theme }) => theme.colors.text.alpha70};
  font-size: ${RFValue(14)}px;
  font-family: ${({ theme }) => theme.font.family.regular};

  text-align: left;
`

export const IconWrapper = styled.View`
  padding: 8px;
`
