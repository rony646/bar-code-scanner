import { RFValue } from 'react-native-responsive-fontsize'
import styled from 'styled-components/native'
import CurrencyInput from 'react-native-currency-input'

export const WrapInputCurrency = styled.View`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  margin-top: 15px;
`

export const CurrencySymbol = styled.Text`
  font-size: ${RFValue(20)}px;
  line-height: ${RFValue(24)}px;
  color: ${({ theme }) => theme.colors.black[400]};
  margin-right: 15px;
`

export const InputCurrency = styled(CurrencyInput)`
  font-size: ${RFValue(48)}px;
  line-height: ${RFValue(56)}px;
  color: ${({ theme }) => theme.colors.white};
  width: auto;
  min-width: 110px;
`
