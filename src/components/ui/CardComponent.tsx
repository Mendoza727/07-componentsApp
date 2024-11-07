import React, { PropsWithChildren, useContext } from "react";
import { StyleProp, View, ViewStyle } from "react-native";
import { colors } from "../../config/Global.styles";
import { themeContext } from "../../context/ThemeContext";

interface Prop extends PropsWithChildren {
  style?: StyleProp<ViewStyle>;
}

export const CardComponent = ({ style, children }: Prop) => {
  const { colors } = useContext( themeContext );
  return (
    <View
      style={[
        {
          backgroundColor: colors.cardBackground,
          borderRadius: 10,
          padding: 10,
        },
        style
      ]}
    >
        {children}
    </View>
  );
};
