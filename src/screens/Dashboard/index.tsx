import React from 'react'
import { Image } from 'react-native'

import { useNavigation } from '@react-navigation/native'
import { Feather } from '@expo/vector-icons'

import Header from '../../components/Header'

import theme from '../../global/styles/theme'

import * as S from './styles'

import { data } from './data'

import { useAuth } from '../../hooks/auth'

const Dashboard = () => {
  const navigation = useNavigation()
  const { user } = useAuth()

  return (
    <S.Wrapper>
      <S.BlueBackgroundWrapper>
        <Image source={require('../../../assets/blue-background.png')} />
      </S.BlueBackgroundWrapper>

      <S.HeaderWrapper>
        <Header
          title="Dashboard"
          shouldShowRightButton
          rightButtonIcon={
            <Feather name="align-left" color={theme.colors.white} size={22} />
          }
          onPressOnRightButton={() => navigation.navigate('Menu')}
        />
      </S.HeaderWrapper>

      <S.WrapperContent>
        <S.UserInfoWrapper>
          <S.UserImageWrapper>
            <S.UserImage
              source={{
                uri: user.photo
                  ? user.photo
                  : `https://ui-avatars.com/api/?name=${user.name}`
              }}
            />
          </S.UserImageWrapper>

          <S.UserInfo>
            <S.UserGreeting>{`${data.hello}, ${
              user.name?.split(' ')[0]
            }`}</S.UserGreeting>

            <S.UserBankInfoWrapper>
              <S.Agency>{data.infoBank.agency}</S.Agency>
              <S.Cc>{data.infoBank.cc}</S.Cc>
            </S.UserBankInfoWrapper>
          </S.UserInfo>
        </S.UserInfoWrapper>
      </S.WrapperContent>
    </S.Wrapper>
  )
}

export default Dashboard
