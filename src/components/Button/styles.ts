import styled, { css } from 'styled-components/native'
import { TouchableOpacity } from 'react-native'
import { RFValue } from 'react-native-responsive-fontsize'
import { ButtonProps } from '.'
import { Feather } from '@expo/vector-icons'

export type WrapperProps = {
  hasIcon: boolean
}

interface ITextColorProps {
  textColor?: string
  isDisabled: boolean
}

interface IWrapperProps extends ButtonProps {
  isLoading: boolean
}

export const Wrapper = styled(TouchableOpacity)<IWrapperProps>`
  ${({ variant, fullWidth, icon, theme, disabled, isLoading }) => css`
    display: flex;
    align-items: center;
    justify-content: center;

    height: 56px;
    padding: 12px;
    border-radius: 10px;
    background-color: ${disabled || isLoading
      ? theme.colors.black.alpha24
      : variant};
    border-width: 1px;
    border-style: solid;
    border-color: ${disabled || isLoading
      ? 'transparent'
      : variant === theme.colors.black[500]
      ? theme.colors.black.alpha40
      : variant};

    width: ${fullWidth ? '100%' : '56px'};
    max-width: ${icon ? '56px' : '100%'};
    min-width: 56px;
  `}
`

export const Title = styled.Text<ITextColorProps>`
  color: ${({ theme, textColor, isDisabled }) =>
    isDisabled && textColor
      ? theme.colors.white
      : textColor
      ? textColor
      : theme.colors.white};
  font-family: ${({ theme }) => theme.font.family.medium};
  font-size: ${RFValue(14)}px;
`

export const Icon = styled(Feather)<ITextColorProps>`
  color: ${({ theme, textColor, isDisabled }) =>
    isDisabled && textColor
      ? theme.colors.white
      : textColor
      ? textColor
      : theme.colors.white};
`
