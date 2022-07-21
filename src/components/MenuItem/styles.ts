import { RFValue } from 'react-native-responsive-fontsize'
import styled from 'styled-components/native'

interface IWrapperProps {
  isLastItem?: boolean
  shouldHideBorders?: boolean
}

interface ITitleWrapperProps {
  titleColor?: string
}

export const Wrapper = styled.TouchableOpacity<IWrapperProps>`
  margin: 0 10px;
  padding: 24px 0;

  flex-direction: row;
  justify-content: space-between;

  border-top-width: ${({ shouldHideBorders }) => (shouldHideBorders ? 0 : 1)}px;
  border-bottom-width: ${({ isLastItem }) => (isLastItem ? 1 : 0)}px;
  border-color: ${({ theme }) => theme.colors.black.alpha40};
  border-style: solid;
`

export const LeftContentWrapper = styled.View`
  flex-direction: row;
`

export const RightContentWrapper = styled.View`
  flex-direction: row;
`

export const IsComingSoonWrapper = styled.Text`
  color: ${({ theme }) => theme.colors.black[400]};
  font-size: ${RFValue(14)}px;
  font-family: ${({ theme }) => theme.font.family.medium};
`

export const IconWrapper = styled.View``

export const TitleWrapper = styled.Text<ITitleWrapperProps>`
  color: ${({ theme, titleColor }) =>
    titleColor ? titleColor : theme.colors.white};
  font-size: ${RFValue(14)}px;
  font-family: ${({ theme }) => theme.font.family.medium};

  margin-left: 12px;
`
