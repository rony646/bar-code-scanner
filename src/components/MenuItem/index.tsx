import React, { ReactElement } from 'react'

import { Feather } from '@expo/vector-icons'

import * as S from './styles'
import theme from '../../global/styles/theme'

interface IMenuItemProps {
  icon: ReactElement
  title: string
  titleColor?: string
  isComingSoon?: boolean
  isLastItem?: boolean
  shouldHideBorders?: boolean
  chevronIconColor?: string
  disabled?: boolean
  onMenuItemPress?: () => void
}

const MenuItem = ({
  icon,
  title,
  titleColor,
  isComingSoon = false,
  isLastItem,
  shouldHideBorders,
  chevronIconColor,
  disabled = false,
  onMenuItemPress
}: IMenuItemProps) => (
  <S.Wrapper
    activeOpacity={0.8}
    onPress={() => {
      if (onMenuItemPress) {
        onMenuItemPress()
      }
    }}
    isLastItem={isLastItem}
    disabled={disabled}
    shouldHideBorders={shouldHideBorders}
  >
    <S.LeftContentWrapper>
      <S.IconWrapper>{icon}</S.IconWrapper>
      <S.TitleWrapper titleColor={titleColor}>{title}</S.TitleWrapper>
    </S.LeftContentWrapper>

    <S.RightContentWrapper>
      {isComingSoon ? (
        <S.IsComingSoonWrapper>em breve</S.IsComingSoonWrapper>
      ) : (
        <Feather
          name="chevron-right"
          color={chevronIconColor ? chevronIconColor : theme.colors.white}
          size={20}
        />
      )}
    </S.RightContentWrapper>
  </S.Wrapper>
)

export default MenuItem
