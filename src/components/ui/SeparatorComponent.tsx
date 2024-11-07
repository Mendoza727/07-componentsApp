import React, { useContext } from "react";
import { StyleProp, View, ViewStyle } from "react-native";
import { themeContext } from "../../context/ThemeContext";

interface Prop {
  style?: StyleProp<ViewStyle>;
}

export const SeparatorComponent = ({ style }: Prop) => {
  const { colors } = useContext( themeContext );

  return (
    <View style={{
      backgroundColor: colors.cardBackground
    }}>
      <View
        style={[
          {
            alignSelf: "center",
            width: "80%",
            height: 1,
            backgroundColor: colors.text,
            opacity: 0.1,
            marginVertical: 8,
          },
          style,
        ]}
      />
    </View>
  );
};
