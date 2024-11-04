import React, { ReactNode } from 'react'
import { StyleProp, Text, View, ViewStyle } from 'react-native'
import { globalStyles } from '../../config/Global.styles'
import { useSafeAreaInsets } from 'react-native-safe-area-context';

interface Props {
    style?: StyleProp<ViewStyle>;
    children?: ReactNode
}

export const CustomView = ({ style, children }: Props) => {
  const { top } = useSafeAreaInsets();
  return (
    <View style={[
        globalStyles.mainContainer,
        style,
        {
          top: top + 20
        }
    ]}>
        {children}
    </View>
  )
}
