import { Text, View } from "react-native";
import React from "react";
import { colors, globalStyles } from "../../config/Global.styles";
import { useSafeAreaInsets } from "react-native-safe-area-context";

interface Prop {
  title: string;
  safe?: boolean;
  backgroundColor: string;
}

export const SubTitleComponent = ({
  title,
  safe = false,
  backgroundColor = colors.background,
}: Prop) => {
  const { top } = useSafeAreaInsets();

  return (
      <Text style={{
        ...globalStyles.subTitle,
        marginTop: safe ? top : 0,
        marginBottom: 10,
        backgroundColor
      }}>{title}</Text>
  );
};
