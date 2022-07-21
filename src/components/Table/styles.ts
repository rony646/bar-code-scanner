import { RFValue } from 'react-native-responsive-fontsize'
import styled from 'styled-components/native'

export const Table = styled.View`
  margin-left: -15px;
  margin-right: -15px;
`

export const Row = styled.View`
  justify-content: space-between;
  flex-direction: row;
  padding-left: 15px;
  padding-right: 15px;
  margin-bottom: 15px;
`

export const CellLeft = styled.Text`
  color: ${({ theme }) => theme.colors.black[300]};
  font-size: ${RFValue(14)}px;
  line-height: ${RFValue(20)}px;
`

export const CellRight = styled.Text`
  color: ${({ theme }) => theme.colors.white};
  font-family: ${({ theme }) => theme.font.family.medium};
  font-size: ${RFValue(14)}px;
  line-height: ${RFValue(20)}px;
`
