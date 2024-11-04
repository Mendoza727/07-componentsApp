import React from "react";
import { Text, View } from "react-native";
import { colors, globalStyles } from "../../config/Global.styles";
import { useSafeAreaInsets } from "react-native-safe-area-context";

interface Props {
  title: string;
  safe?: boolean;
  white?: boolean;
}

export const TitleComponent = ({ title, safe = false, white = false }: Props) => {
  const { top } = useSafeAreaInsets();

  return (
    <Text
      style={{
        ...globalStyles.title,
        marginTop: safe ? top +20 : 0,
        marginBottom: 10,
        color: white ? 'white' : colors.text,
        textAlign: 'center'
      }}
    >
      {title}
    </Text>
  );
};
