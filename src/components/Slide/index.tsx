import React, { useState, useRef } from 'react'
import { ViewToken } from 'react-native'
import { Dimensions, FlatList } from 'react-native'

import * as S from './styles'

interface ISliderProps {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  imagesUri: any[]
}

interface ChangeImagemProps {
  viewableItems: ViewToken[]
  changed: ViewToken[]
}

const { width } = Dimensions.get('window')

const Slide = ({ imagesUri }: ISliderProps) => {
  const [imageIdex, setImageIndex] = useState(0)

  const indexChange = useRef((info: ChangeImagemProps) => {
    setImageIndex(info.viewableItems[0].index!)
  })

  return (
    <S.Container screenWidth={width}>
      <FlatList
        data={imagesUri}
        keyExtractor={(item, index) => index.toString()}
        renderItem={({ item, index }) => (
          <S.ImagemWrapper>
            <S.Imagem key={String(index)} source={item} resizeMode="cover" />
          </S.ImagemWrapper>
        )}
        horizontal
        showsHorizontalScrollIndicator={false}
        onViewableItemsChanged={indexChange.current}
      ></FlatList>
      <S.BulletWrapper>
        {imagesUri.map((_, index) => (
          <S.BulletIndex key={String(index)} active={index === imageIdex} />
        ))}
      </S.BulletWrapper>
    </S.Container>
  )
}

export default Slide
