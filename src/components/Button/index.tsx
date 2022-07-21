import React from 'react'
import { ActivityIndicator, TouchableOpacityProps } from 'react-native'
import theme from '../../global/styles/theme'

import * as S from './styles'

export type ButtonProps = {
  title?: string
  variant: number | string
  fullWidth?: boolean
  icon?: string
  isLoading?: boolean
  isDisabled?: boolean
  textColor?: string
  disabledTextColor?: string
  loadingColor?: string
  iconSize?: number
} & TouchableOpacityProps

const Button = ({
  title,
  icon,
  fullWidth = false,
  variant,
  isLoading = false,
  isDisabled = false,
  textColor,
  loadingColor,
  iconSize,
  ...rest
}: ButtonProps) => (
  <S.Wrapper
    variant={variant}
    fullWidth={fullWidth}
    activeOpacity={0.8}
    icon={icon}
    disabled={isDisabled || isLoading}
    isLoading={isLoading}
    {...rest}
  >
    {isLoading ? (
      <ActivityIndicator
        color={loadingColor ? loadingColor : theme.colors.blue[500]}
        size="small"
      />
    ) : icon ? (
      <S.Icon
        isDisabled={isDisabled}
        textColor={textColor}
        name={icon}
        size={iconSize ? iconSize : 20}
      />
    ) : (
      <S.Title isDisabled={isDisabled} textColor={textColor}>
        {title}
      </S.Title>
    )}
  </S.Wrapper>
)

export default Button
