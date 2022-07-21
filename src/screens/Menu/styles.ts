import { SafeAreaView } from 'react-native'
import { RFValue } from 'react-native-responsive-fontsize'
import styled from 'styled-components/native'

export const Wrapper = styled(SafeAreaView)`
  position: relative;

  flex: 1;
  width: 100%;

  background: ${({ theme }) => theme.colors.black[500]};
`

export const WrapperContent = styled.View`
  flex: 1;
  width: 100%;
  padding-bottom: 50px;

  background: transparent;
`

export const BlueBackgroundWrapper = styled.View`
  position: absolute;
`

export const HeaderWrapper = styled.View`
  padding-bottom: 8px;
`

export const UserInfoWrapper = styled.View`
  width: 100%;

  align-items: center;

  margin-top: 40px;
  padding: 0 10px;
`

export const MenuOptionsWrapper = styled.View`
  flex: 1;
  justify-content: space-between;
`

export const UserImageWrapper = styled.View`
  align-items: center;
  justify-content: center;

  width: 72px;
  height: 72px;

  border-radius: 36px;

  background: ${({ theme }) => theme.colors.black.alpha40};
`

export const UserImage = styled.Image`
  width: 72px;
  height: 72px;

  border-radius: 36px;
`

export const UserInfo = styled.View`
  margin-top: 12px;
`

export const UserGreeting = styled.Text`
  color: ${({ theme }) => theme.colors.white};
  font-size: ${RFValue(18)}px;
  font-family: ${({ theme }) => theme.font.family.bold};
`

export const MenuItemsWrapper = styled.View`
  width: 100%;
  margin-top: 32px;
`
