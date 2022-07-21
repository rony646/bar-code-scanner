import { SafeAreaView } from 'react-native'

import { RFValue } from 'react-native-responsive-fontsize'
import styled from 'styled-components/native'

export const Wrapper = styled(SafeAreaView)`
  position: relative;

  flex: 1;
  width: 100%;

  background: ${({ theme }) => theme.colors.black[500]};
`

export const WrapperContent = styled.ScrollView.attrs({
  showsVerticalScrollIndicator: false
})`
  flex: 1;
  width: 100%;
`

export const BlueBackgroundWrapper = styled.View`
  position: absolute;
`

export const HeaderWrapper = styled.View`
  padding-bottom: 8px;
`

export const UserInfoWrapper = styled.View`
  width: 100%;

  flex-direction: row;
  align-items: center;

  margin-top: 40px;
  padding: 0 10px;
`

export const UserImageWrapper = styled.View`
  align-items: center;
  justify-content: center;

  width: 40px;
  height: 40px;

  border-radius: 20px;

  background: ${({ theme }) => theme.colors.black.alpha40};
`

export const UserImage = styled.Image`
  width: 40px;
  height: 40px;

  border-radius: 20px;
`

export const UserInfo = styled.View`
  margin-left: 12px;
`

export const UserGreeting = styled.Text`
  color: ${({ theme }) => theme.colors.white};
  font-size: ${RFValue(18)}px;
  font-family: ${({ theme }) => theme.font.family.bold};
`

export const UserBankInfoWrapper = styled.View`
  flex-direction: row;
`

export const Agency = styled.Text`
  color: ${({ theme }) => theme.colors.black[300]};
  font-size: ${RFValue(14)}px;
  font-family: ${({ theme }) => theme.font.family.regular};

  margin-right: 8px;
`

export const Cc = styled.Text`
  color: ${({ theme }) => theme.colors.black[300]};
  font-size: ${RFValue(14)}px;
  font-family: ${({ theme }) => theme.font.family.regular};
`
