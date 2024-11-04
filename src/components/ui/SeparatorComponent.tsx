import React from "react";
import { StyleProp, View, ViewStyle } from "react-native";
import { colors } from "../../config/Global.styles";

interface Prop {
  style?: StyleProp<ViewStyle>;
}

export const SeparatorComponent = ({ style }: Prop) => {
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
