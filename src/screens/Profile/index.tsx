import React, { useCallback, useState } from 'react'
import { Image, ScrollView, RefreshControl } from 'react-native'

import { useNavigation } from '@react-navigation/native'
import { Feather } from '@expo/vector-icons'

import Header from '../../components/Header'

import theme from '../../global/styles/theme'

import * as S from './styles'

import { data } from './data'

import { useAuth } from '../../hooks/auth'
import Table from '../../components/Table/index'

const wait = (timeout: number) => {
  return new Promise((resolve) => {
    setTimeout(resolve, timeout)
  })
}

const Dashboard = () => {
  const [refreshing, setRefreshing] = useState(false)

  const onRefresh = useCallback(async () => {
    setRefreshing(true)

    await console.log('refreshing')

    wait(1000).then(() => setRefreshing(false))
  }, [])

  const navigation = useNavigation()
  const { user } = useAuth()

  return (
    <S.Wrapper>
      <S.BlueBackgroundWrapper>
        <Image source={require('../../../assets/blue-background.png')} />
      </S.BlueBackgroundWrapper>

      <S.HeaderWrapper>
        <Header
          title="Profile"
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
            <Table
              rows={[
                {
                  id: 1,
                  label: 'Nome:',
                  value: user.name
                },
                {
                  id: 2,
                  label: 'Email:',
                  value: user.email
                },
                {
                  id: 3,
                  label: 'id:',
                  value: user.id
                }
              ]}
            ></Table>
          </S.UserInfo>
        </S.UserInfoWrapper>
      </S.WrapperContent>
    </S.Wrapper>
  )
}

export default Dashboard
