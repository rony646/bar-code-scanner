import React, { ReactElement } from 'react'

import * as S from './styles'

interface ITextBoxProps {
  text?: string
  icon?: ReactElement
}

const TextBox = ({ text, icon }: ITextBoxProps) => {
  return (
    <S.Wrapper>
      <S.Text>{text}</S.Text>
      <S.IconWrapper>{icon}</S.IconWrapper>
    </S.Wrapper>
  )
}
export default TextBox
