import "react-native-gesture-handler";

import { DarkTheme, NavigationContainer } from "@react-navigation/native";
import { NavigatorRoute } from "./src/navigator/NavigatorRoute";
import { DefaultTheme, PaperProvider } from "react-native-paper";
import { PropsWithChildren, useContext } from "react";
import { themeContext, ThemeProvider } from "./src/context/ThemeContext";

const AppNavigation = ({ children }: PropsWithChildren) => {
  const {  isDark } = useContext( themeContext );

  return (
    <PaperProvider theme={ isDark ? DarkTheme : DefaultTheme }>
      <NavigationContainer>{children}</NavigationContainer>
    </PaperProvider>
  );
};

const AppTheme = ({ children }: PropsWithChildren) => {
  return (
    <ThemeProvider>
      <AppNavigation>{children}</AppNavigation>
    </ThemeProvider>
  );
};

export default function App() {
  return (
    <AppTheme>
      <NavigatorRoute />
    </AppTheme>
  );
}
