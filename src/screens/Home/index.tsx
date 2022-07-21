import React, { useEffect } from 'react'
import Button from '../../components/Button'
import { useNavigation } from '@react-navigation/native'

import { data } from './data'

import * as S from './styles'

export default function Home() {
  const navigation = useNavigation()

  useEffect(
    () =>
      navigation.addListener('beforeRemove', (e) => {
        e.preventDefault()
      }),
    [navigation]
  )

  return (
    <S.Wrapper>
      <S.Actions>
        <Button
          title={data.accessMyAccount}
          variant="#5273FF"
          fullWidth
          onPress={() => navigation.navigate('LoginSocial')}
        />

        <Button
          title={data.goToLogin}
          variant="#191A1F"
          fullWidth
          onPress={() => navigation.navigate('Login')}
        />
      </S.Actions>
    </S.Wrapper>
  )
}
