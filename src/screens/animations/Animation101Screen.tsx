import React, { useContext, useRef } from "react";
import { Animated, Easing, Pressable, StyleSheet, Text, View } from "react-native";
import { globalStyles, colors } from '../../config/Global.styles';
import { themeContext } from "../../context/ThemeContext";
import { TitleComponent } from "../../components/ui/titleComponent";

export const Animation101Screen = () => {
  const animateOpacity = useRef(new Animated.Value(0)).current;
  const animationScale = useRef(new Animated.Value(0)).current;

  const { colors } = useContext( themeContext );

  const FadeIn = (easing = Easing.bounce) => {
    // Inicia animación de opacidad
    Animated.timing(animateOpacity, {
      toValue: 1,
      duration: 1200,
      easing,
      useNativeDriver: true,
    }).start();

    // Inicia animación de escala con rebote
    Animated.timing(animationScale, {
      toValue: 1,
      duration: 1200,
      easing,
      useNativeDriver: true,
    }).start();
  };

  const animatedStyles = [
    styles.purpleBox,
    {
      opacity: animateOpacity,
      transform: [{ scale: animationScale }],
    },
  ];

  const FadeOut = () => {
    Animated.timing(animateOpacity, {
      toValue: 0,
      duration: 300,
      useNativeDriver: true,
    }).start();

    Animated.timing(animationScale, {
      toValue: 0,
      duration: 300,
      useNativeDriver: true,
    }).start();
  };

  return (
    <View style={{
      ...styles.container,
      backgroundColor: colors.background
    }}>

      <Animated.View style={animatedStyles} />

      <Pressable
        onPress={() => FadeIn()}
        style={{
          ...globalStyles.btnPrimary,
          marginTop: 10,
        }}
      >
        <Text
          style={{
            ...globalStyles.btnPrimaryText,
            color: colors.text,
          }}
        >
          Fade In
        </Text>
      </Pressable>

      <Pressable
        onPress={() => FadeOut()}
        style={{
          ...globalStyles.btnPrimary,
          marginTop: 10,
        }}
      >
        <Text
          style={{
            ...globalStyles.btnPrimaryText,
            color:  colors.text
          }}
        >
          Fade Out
        </Text>
      </Pressable>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    alignItems: "center",
    flex: 1,
    justifyContent: "center",
  },
  purpleBox: {
    backgroundColor: colors.primary,
    width: 150,
    height: 150,
  },
});
