import React from 'react'
import { useNavigation } from '@react-navigation/native'
import { Platform, Alert } from 'react-native'

import { useAuth } from '../../hooks/auth'

import AppleIcon from '../../../assets/icons/apple.svg'
import GoogleIcon from '../../../assets/icons/google.svg'

import * as S from './styles'

import { data } from './data'

export default function LoginSocial() {
  const navigation = useNavigation()

  const { signInWithGoogle, signInWithApple } = useAuth()

  const handleSignInWithGoogle = async () => {
    try {
      await signInWithGoogle()
    } catch (error) {
      console.log(error)
      Alert.alert('Erro', 'Ocorreu um erro ao fazer login')
    }
  }

  const handleSignInWithApple = async () => {
    try {
      await signInWithApple()
    } catch (error) {
      console.log(error)
      Alert.alert('Erro', 'Ocorreu um erro ao fazer login')
    }
  }

  return (
    <S.Wrapper>
      <S.PageTitle>{data.pageTitle}</S.PageTitle>

      <S.SocialWrapper>
        <S.SocialButton onPress={handleSignInWithGoogle}>
          <S.SocialButtonIcon>
            <GoogleIcon />
          </S.SocialButtonIcon>
          <S.SocialButtonText>{data.socialButtonTextGoogle}</S.SocialButtonText>
        </S.SocialButton>

        {Platform.OS === 'ios' && (
          <S.SocialButton onPress={handleSignInWithApple}>
            <S.SocialButtonIcon>
              <AppleIcon />
            </S.SocialButtonIcon>
            <S.SocialButtonText>
              {data.socialButtonTextApple}
            </S.SocialButtonText>
          </S.SocialButton>
        )}
      </S.SocialWrapper>

      <S.TextHelp
        onPress={() => {
          navigation.navigate('Home')
        }}
      >
        {data.backLoginTitle}
      </S.TextHelp>
    </S.Wrapper>
  )
}
