import styled from 'styled-components/native'

export const Wrapper = styled.View`
  flex: 1;
  background: ${({ theme }) => theme.colors.black[500]};
  align-items: center;
  justify-content: center;
  padding: 0 30px;
  padding-bottom: 50px;
`

export const Title = styled.Text`
  color: #fff;
  font-size: ${({ theme }) => theme.font.sizes.large}px;
  font-family: ${({ theme }) => theme.font.family.medium};
  padding-bottom: 50px;
`

export const Actions = styled.View`
  flex-direction: column;
  width: 100%;
  justify-content: space-between;
  height: 130px;
`
