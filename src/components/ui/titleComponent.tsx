import React, { useContext } from "react";
import { Text, View } from "react-native";
import { globalStyles } from "../../config/Global.styles";
import { useSafeAreaInsets } from "react-native-safe-area-context";
import { themeContext } from "../../context/ThemeContext";

interface Props {
  title: string;
  safe?: boolean;
  white?: boolean;
}

export const TitleComponent = ({ title, safe = false, white = false }: Props) => {
  const { top } = useSafeAreaInsets();
  const { colors } = useContext( themeContext );

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
