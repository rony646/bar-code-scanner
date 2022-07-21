import React, { ReactElement } from 'react'

import LogoSvg from '../../../assets/icon.png'

import * as S from './styles'

interface IHeaderProps {
  shouldShowLeftButton?: boolean
  onPressOnLeftButton?: () => void
  leftButtonIcon?: ReactElement
  shouldShowRightButton?: boolean
  onPressOnRightButton?: () => void
  rightButtonIcon?: ReactElement
  shouldHideMiddleContent?: boolean
  title?: string
  shouldHideLogo?: boolean
}

const Header = ({
  shouldShowLeftButton,
  onPressOnLeftButton,
  leftButtonIcon,
  shouldShowRightButton = false,
  onPressOnRightButton,
  rightButtonIcon,
  shouldHideMiddleContent = false,
  title,
  shouldHideLogo = false
}: IHeaderProps) => {
  return (
    <S.Wrapper>
      <S.HeaderBackButton onPress={onPressOnLeftButton}>
        {shouldShowLeftButton && leftButtonIcon}
      </S.HeaderBackButton>

      {shouldHideMiddleContent || title ? (
        <S.HeaderTitleText>{title}</S.HeaderTitleText>
      ) : (
        !shouldHideLogo && <LogoSvg width={103} height={23} />
      )}

      <S.HeaderCloseButton onPress={onPressOnRightButton}>
        {shouldShowRightButton && rightButtonIcon}
      </S.HeaderCloseButton>
    </S.Wrapper>
  )
}

export default Header
