import styled from 'styled-components/native'
import { RFValue } from 'react-native-responsive-fontsize'

export const Wrapper = styled.View`
  flex: 1;
  justify-content: center;
  align-items: center;
  margin-top: 22px;
`

export const ModalView = styled.View`
  background-color: ${({ theme }) => theme.colors.black[600]};
  border-radius: 20px;
  padding: 35px 15px;
  align-items: center;
  justify-content: center;
  width: 295px;
  height: 371px;
  position: absolute;
  z-index: 99;
`

export const Title = styled.Text`
  color: ${({ theme }) => theme.colors.white};
  font-weight: bold;
  font-size: ${RFValue(20)}px;
  line-height: 24px;
  text-align: center;
  margin: 20px 0 10px;
`

export const Text = styled.Text`
  color: ${({ theme }) => theme.colors.black[300]};
  font-size: ${RFValue(12)}px;
  line-height: ${RFValue(20)}px;
  text-align: center;
  margin-bottom: 30px;
`
