import React from 'react'
import { Image } from 'react-native'

import { Feather } from '@expo/vector-icons'
import { useNavigation } from '@react-navigation/native'
import Toast from 'react-native-toast-message'

import Header from '../../components/Header'
import MenuItem from '../../components/MenuItem'

import { useAuth } from '../../hooks/auth'

import { data } from './data'

import theme from '../../global/styles/theme'
import * as S from './styles'

const menuItems = [
  {
    id: 1,
    icon: <Feather name="user" size={18} color={theme.colors.white} />,
    title: 'Perfil',
    isComingSoon: true,
    disabled: true
  },
  {
    id: 2,
    icon: <Feather name="settings" size={18} color={theme.colors.white} />,
    title: 'Configurações',
    isComingSoon: true,
    disabled: true
  },
  {
    id: 3,
    icon: <Feather name="github" size={18} color={theme.colors.white} />,
    title: 'Sobre',
    isComingSoon: true,
    disabled: true
  },
  {
    id: 4,
    icon: <Feather name="help-circle" size={18} color={theme.colors.white} />,
    title: 'Suporte',
    isComingSoon: true,
    disabled: true,
    onMenuItemPress: () => console.log('pressed')
  }
]

const Menu = () => {
  const navigation = useNavigation()
  const { user, signOut } = useAuth()

  return (
    <S.Wrapper>
      <S.BlueBackgroundWrapper>
        <Image source={require('../../../assets/blue-background.png')} />
      </S.BlueBackgroundWrapper>

      <S.HeaderWrapper>
        <Header
          shouldShowRightButton
          rightButtonIcon={
            <Feather name="x" color={theme.colors.white} size={22} />
          }
          onPressOnRightButton={() => navigation.goBack()}
          title={data.pageTitle}
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
            <S.UserGreeting>
              {data.userGreeting}, {user.name?.split(' ')[0]}
            </S.UserGreeting>
          </S.UserInfo>
        </S.UserInfoWrapper>

        <S.MenuOptionsWrapper>
          <S.MenuItemsWrapper>
            {menuItems.map((menuItem, index) => (
              <MenuItem
                key={menuItem.id}
                disabled={menuItem.disabled}
                icon={menuItem.icon}
                title={menuItem.title}
                isComingSoon={menuItem.isComingSoon}
                isLastItem={menuItems.length === index + 1}
                onMenuItemPress={menuItem.onMenuItemPress}
              />
            ))}
          </S.MenuItemsWrapper>

          <MenuItem
            icon={
              <Feather
                name="log-out"
                size={18}
                color={theme.colors.danger[500]}
              />
            }
            title={data.exitButtonTitle}
            titleColor={theme.colors.danger[500]}
            chevronIconColor={theme.colors.danger[500]}
            onMenuItemPress={async () => {
              try {
                await signOut()
                navigation.navigate('Login')
              } catch (error) {
                Toast.show({
                  type: 'error',
                  position: 'top',
                  text1: 'errorMessages.notExpectedTitle',
                  text2: 'Por favor, tente mais tarde.',
                  visibilityTime: 6000,
                  autoHide: true,
                  topOffset: 30,
                  bottomOffset: 40
                })
              }
            }}
            shouldHideBorders
          />
        </S.MenuOptionsWrapper>
      </S.WrapperContent>
    </S.Wrapper>
  )
}

export default Menu
