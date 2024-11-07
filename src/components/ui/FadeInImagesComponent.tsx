import { ActivityIndicator, Animated, ImageStyle, StyleProp, Text, View } from 'react-native'
import React, { useState } from 'react'
import { colors } from '../../config/Global.styles';
import { useAnimation } from '../../hooks/useAnimation';

interface Prop {
  uri: string;
  style?: StyleProp<ImageStyle>;
}

export const FadeInImagesComponent = ({ uri, style }: Prop) => {
    const { animatedOpacity, fadeIn } = useAnimation();
    const [isLoading, setIsLoading] = useState(true);

    return (
      <View style={{
        justifyContent: 'center',
        alignItems: 'center'
      }}>

        {
          isLoading && (
            <ActivityIndicator 
              size={30}
              color="gray"
            />
          )
        }

        <Animated.Image 
          source={{ uri }}
          onLoadEnd={ () => {
            fadeIn({duration: 1500})
            setIsLoading(false);
          }}
          style={[ style, {opacity: animatedOpacity} ]}
        />
      </View>
    )
}
