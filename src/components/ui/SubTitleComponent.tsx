import { Text, View } from "react-native";
import React, { useContext } from "react";
import { colors, globalStyles } from "../../config/Global.styles";
import { useSafeAreaInsets } from "react-native-safe-area-context";
import { themeContext } from "../../context/ThemeContext";

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
  const { colors } = useContext(themeContext);
  
  return (
      <Text style={{
        ...globalStyles.subTitle,
        marginTop: safe ? top : 0,
        marginBottom: 10,
        color: colors.text
      }}>{title}</Text>
  );
};
