import React, { ReactElement, useEffect } from 'react'
import Animated, {
  Extrapolate,
  interpolate,
  runOnJS,
  useAnimatedStyle,
  useSharedValue,
  withTiming
} from 'react-native-reanimated'

import LogoSvg from '../../../assets/icon.png'

import * as S from './styles'
import { useNavigation } from '@react-navigation/native'

export default function Splash(): ReactElement {
  const navigation = useNavigation()
  const splashAnimation = useSharedValue(0)

  const logoStyle = useAnimatedStyle(() => {
    return {
      opacity: interpolate(
        splashAnimation.value,
        [0, 50],
        [0, 1],
        Extrapolate.CLAMP
      )
    }
  })

  const startApp = () => {
    navigation.navigate('Login')
  }

  useEffect(() => {
    splashAnimation.value = withTiming(50, { duration: 1500 }, () => {
      'worklet'

      runOnJS(startApp)()
    })
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  return (
    <S.Container>
      <Animated.View style={[logoStyle, { position: 'absolute' }]}>
        <LogoSvg width={200} height={59} />
      </Animated.View>
    </S.Container>
  )
}
