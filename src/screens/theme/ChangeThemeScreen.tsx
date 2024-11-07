import React, { useContext } from "react";
import { TitleComponent } from "../../components/ui/titleComponent";
import { CustomView } from "../../components/ui/CustomView";
import { ButtonComponent } from "../../components/ui/ButtonComponent";
import { themeContext } from "../../context/ThemeContext";
import { Text } from "react-native";
import { colors } from "../../config/Global.styles";

export const ChangeThemeScreen = () => {
  const { setTheme, currentTheme,colors } = useContext(themeContext);

  return (
    <CustomView
      style={{
        padding: 20,
      }}
    >
      <TitleComponent title={`Cambiar tema: ${currentTheme}`} />

      <ButtonComponent
        title="light"
        style={{
          marginBottom: 20,
        }}
        onPress={() => setTheme("light")}
      />
      <ButtonComponent title="dark" onPress={() => setTheme("dark")} />

      <Text style={{
        marginTop: 40,
        color: colors.text
      }}>{JSON.stringify(colors, null, 2)}</Text>
    </CustomView>
  );
};
