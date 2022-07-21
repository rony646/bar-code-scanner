import React from 'react'
import { Modal } from 'react-native'
import theme from '../../global/styles/theme'
import Button from '../Button'

import * as S from './styles'

export type ModalProps = {
  icon?: React.ReactElement
  title: string
  text?: string
  titleButton?: string
  showModal: boolean
  closeModal: () => void
}

export default function DoModal({
  icon,
  title,
  text,
  titleButton,
  showModal = false,
  closeModal
}: ModalProps) {
  return (
    <S.Wrapper>
      <Modal animationType="slide" transparent={true} visible={showModal}>
        <S.Wrapper>
          <S.ModalView>
            {icon && icon}
            <S.Title>{title}</S.Title>
            {text && <S.Text>{text}</S.Text>}
            {titleButton && (
              <Button
                title={titleButton}
                fullWidth
                variant={theme.colors.black.alpha40}
                onPress={() => closeModal()}
              />
            )}
          </S.ModalView>
        </S.Wrapper>
      </Modal>
    </S.Wrapper>
  )
}
