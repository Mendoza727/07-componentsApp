import { createStackNavigator } from "@react-navigation/stack";
import { HomeScreen } from "../screens/home/HomeScreen";
import { Animation101Screen } from "../screens/animations/Animation101Screen";
import { Animation102Screen } from "../screens/animations/Animation102Screen";
import { SwitchScreen } from "../screens/switches/SwitchScreen";
import { AlertScreen } from "../screens/alerts/AlertScreen";
import { TextInputScreen } from "../screens/inputs/TextInputScreen";
import { ChangeThemeScreen } from "../screens/theme/ChangeThemeScreen";
import { CustomSectionListScreen } from "../screens/ui/CustomSectionListScreen/CustomSectionListScreen";
import { InfiniteScrollScreen } from "../screens/ui/InfiniteScrollScreen/InfiniteScrollScreen";
import { ModalScreen } from "../screens/ui/ModalScreen/ModalScreen";
import { PullToRefreshScreen } from "../screens/ui/PullToRefreshScreen/PullToRefreshScreen";
import { SlidesScreen } from "../screens/ui/SlidesScreen/SlidesScreen";

const Stack = createStackNavigator();

export const NavigatorRoute = () => {
  return (
    <Stack.Navigator
      screenOptions={{
        headerShown: false,
      }}
    >
      <Stack.Screen name="Home" component={HomeScreen} />

      {/* list 1 */}
      <Stack.Screen name="Animation101Screen" component={Animation101Screen} />

      {/* list 2 */}
      <Stack.Screen name="PullToRefreshScreen" component={PullToRefreshScreen} />
      <Stack.Screen name="CustomSectionListScreen" component={CustomSectionListScreen} />
      <Stack.Screen name="ModalScreen" component={ModalScreen} />
      <Stack.Screen name="InfiniteScrollScreen" component={InfiniteScrollScreen} />
      <Stack.Screen name="SlidesScreen" component={SlidesScreen} />
      <Stack.Screen name="ChangeThemeScreen" component={ChangeThemeScreen} />

      {/* list 3 */}
      <Stack.Screen name="SwitchScreen" component={SwitchScreen} />
      <Stack.Screen name="AlertScreen" component={AlertScreen} />
      <Stack.Screen name="TextInputScreen" component={TextInputScreen} />
    </Stack.Navigator>
  );
};
