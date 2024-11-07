import React, { ReactNode, useContext } from 'react'
import { StyleProp, Text, View, ViewStyle } from 'react-native'
import { globalStyles } from '../../config/Global.styles'
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import { themeContext } from '../../context/ThemeContext';

interface Props {
    style?: StyleProp<ViewStyle>;
    children?: ReactNode
}

export const CustomView = ({ style, children }: Props) => {
  const { colors } = useContext( themeContext );  

  const { top } = useSafeAreaInsets();
  return (
    <View style={[
        globalStyles.mainContainer,
        style,
        {
          top: top + 20,
          backgroundColor: colors.background
        }
    ]}>
        {children}
    </View>
  )
}
