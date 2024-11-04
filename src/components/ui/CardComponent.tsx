import React, { PropsWithChildren } from "react";
import { StyleProp, View, ViewStyle } from "react-native";
import { colors } from "../../config/Global.styles";

interface Prop extends PropsWithChildren {
  style?: StyleProp<ViewStyle>;
}

export const CardComponent = ({ style, children }: Prop) => {
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
