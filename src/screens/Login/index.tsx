import React, { useState } from 'react'

import * as Yup from 'yup'
import { useForm } from 'react-hook-form'
import { useNavigation } from '@react-navigation/native'

import { Platform } from 'react-native'

import Input from '../../components/Input'
import Button from '../../components/Button'
import InputCode from '../../components/InputCode'

import { yupResolver } from '@hookform/resolvers/yup'

import theme from '../../global/styles/theme'

import { data } from './data'

import * as S from './styles'
import { useAuth } from '../../hooks/auth'

const schema = Yup.object().shape({
  email: Yup.string()
    .required(data.emailRequiredValidation)
    .email(data.emailValidation),
  password: Yup.string()
    .required(data.passwordRequiredValidation)
    .max(6, data.passwordSizeValidation)
    .min(6, data.passwordSizeValidation),
  code: Yup.string()
    .required(data.codeRequiredValidation)
    .max(6, data.codeSizeValidation)
    .min(6, data.codeSizeValidation)
})

export default function SingIn() {
  const [isLoading, setIsLoading] = useState(false)
  const [showCode, setShowCode] = useState(false)

  const navigation = useNavigation()
  const { signInWithEmail } = useAuth()

  const {
    control,
    trigger,
    getValues,
    setError,
    formState: { errors }
  } = useForm({
    resolver: yupResolver(schema)
  })

  const validateSingleField = async (fieldName: string) => {
    await trigger(fieldName)
  }

  const handleSubmitEmailInput = async () => {
    setIsLoading(true)

    const values = getValues()
    await console.log('email', values)
  }

  const handleSignIn = async () => {
    setIsLoading(true)

    const email = getValues('email')
    const password = getValues('password')

    if (email === 'gdccomunicacao@gmail.com' && password === '123456') {
      setTimeout(() => {
        setIsLoading(false)
        setShowCode(true)
      }, 2000)
    }
  }

  const handleConfirmCode = async () => {
    setIsLoading(true)

    const code = getValues('code')

    if (code === '123456') {
      setTimeout(() => {
        setIsLoading(false)
        setShowCode(false)
        signInWithEmail()
      }, 2000)
    } else {
      console.log('deu erro')
      setIsLoading(false)
      setShowCode(true)
      setError('code', {
        type: 'manual',
        message: data.incorrectCode
      })
    }
  }

  return (
    <S.KeyboardAvoidingViewWrapper
      behavior={Platform.OS === 'ios' ? 'padding' : undefined}
    >
      <S.Wrapper>
        <S.PageTitle>{data.pageTitle}</S.PageTitle>

        <S.Form>
          {!showCode && (
            <S.InputGroupWrapper>
              <Input
                autoFocus
                name="email"
                label={data.emailInputLabel}
                placeholder={data.emailInputPlaceholder}
                autoCapitalize="none"
                keyboardType="email-address"
                control={control}
                autoCorrect={false}
                error={errors.email && errors.email.message}
                onSubmitEditing={async () => {
                  await validateSingleField('email')

                  if (!errors.email) {
                    await handleSubmitEmailInput()
                  }
                }}
              />

              <Input
                control={control}
                autoFocus
                secureTextEntry
                label={data.passwordInputLabel}
                placeholder={data.passwordInputPlaceholder}
                name="password"
                autoCapitalize="none"
                maxLength={8}
                autoCorrect={false}
                error={errors.password && errors.password.message}
                onSubmitEditing={async () => {
                  await validateSingleField('password')
                }}
              />

              <S.TextHelp
                onPress={() => {
                  navigation.navigate('LoginSocial')
                }}
              >
                {data.createAccountTitle}
                <S.Bold>{data.createAccountLinkTitle}</S.Bold>
              </S.TextHelp>

              <S.ButtonWrapper>
                <Button
                  isLoading={isLoading}
                  icon="arrow-right"
                  variant={theme.colors.blue[500]}
                  onPress={async () => {
                    await handleSignIn()
                  }}
                />
              </S.ButtonWrapper>
            </S.InputGroupWrapper>
          )}

          {showCode && (
            <S.InsertCodeWrapper>
              <S.InsertCodeTitle>Insira o código</S.InsertCodeTitle>

              <S.InsertCodeArea>
                <InputCode
                  inputCode={6}
                  control={control}
                  name="code"
                  error={errors.code && errors.code.message}
                />
              </S.InsertCodeArea>
              <Button
                isLoading={isLoading}
                icon="arrow-right"
                variant={theme.colors.blue[500]}
                onPress={async () => {
                  await validateSingleField('code')
                  await handleConfirmCode()
                }}
              />
            </S.InsertCodeWrapper>
          )}
        </S.Form>
      </S.Wrapper>
    </S.KeyboardAvoidingViewWrapper>
  )
}
