import { Dimensions } from 'react-native'
import { RFValue } from 'react-native-responsive-fontsize'
import styled from 'styled-components/native'

interface IContainerProps {
  screenWidth: number
}
interface ISliderPros {
  active?: boolean
}

export const Container = styled.View<IContainerProps>`
  width: ${(props) => props.screenWidth}px;
`

export const BulletWrapper = styled.View`
  justify-content: center;
  flex-direction: row;
  margin-top: 20px;
`
export const BulletIndex = styled.View<ISliderPros>`
  width: ${({ active }) => (active ? '30px' : '8px')};
  height: 8px;
  background-color: ${({ theme, active }) =>
    active ? theme.colors.green[500] : theme.colors.white};
  margin: 5px;
  border-radius: 50px;
`

export const ImagemWrapper = styled.View`
  width: ${Dimensions.get('window').width}px;
`

export const Imagem = styled.Image`
  width: 100%;
  height: ${RFValue(510)}px;
`
