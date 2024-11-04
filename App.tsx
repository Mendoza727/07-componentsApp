import "react-native-gesture-handler";

import { NavigationContainer } from "@react-navigation/native";
import { NavigatorRoute } from "./src/navigator/NavigatorRoute";
import { PaperProvider } from "react-native-paper";

export default function App() {
  return (
    <PaperProvider>
      <NavigationContainer>
        <NavigatorRoute />
      </NavigationContainer>
    </PaperProvider>
  );
}
