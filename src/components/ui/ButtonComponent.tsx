import React from 'react'
import { Pressable, StyleProp } from 'react-native';
import { Text, View, ViewStyle } from 'react-native'
import { colors, globalStyles } from '../../config/Global.styles';

interface Prop {
    title: string;
    style?: StyleProp<ViewStyle>
    onPress: () => void;
}

export const ButtonComponent = ({ title, style, onPress }: Prop) => {
  return (
    <Pressable
        onPress={onPress}
        style={({pressed}) => ([
            globalStyles.btnPrimary,
            {
                opacity:  pressed ? 0.8 : 1,
                backgroundColor: colors.primary
            },
            style
        ])}
    >
        <Text
            style={[
                globalStyles.btnPrimaryText,
                {
                    color: colors.buttonTextColor
                }
            ]}
        >{title}</Text>
    </Pressable>
  )
}
