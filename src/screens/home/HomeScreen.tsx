import React, { useContext } from "react";
import { Text, View } from "react-native";
import { globalStyles } from "../../config/Global.styles";
import { ScrollView } from "react-native-gesture-handler";
import { TitleComponent } from "../../components/ui/titleComponent";
import { MenuItem } from "../../components/ui/MenuItem";
import { themeContext } from "../../context/ThemeContext";

const animationMenuItems = [
  // 01-animationMenuItems
  {
    name: "Animation 101",
    icon: "cube-outline",
    component: "Animation101Screen",
  },
  {
    name: 'Animation 102',
    icon: 'albums-outline',
    component: 'Animation102Screen',
  },
];

const menuItems = [
  // 02-menuItems
  {
    name: "Pull to refresh",
    icon: "refresh-outline",
    component: "PullToRefreshScreen",
  },
  {
    name: "Section List",
    icon: "list-outline",
    component: "CustomSectionListScreen",
  },
  {
    name: "Modal",
    icon: "copy-outline",
    component: "ModalScreen",
  },
  {
    name: "InfiniteScroll",
    icon: "download-outline",
    component: "InfiniteScrollScreen",
  },
  {
    name: "Slides",
    icon: "flower-outline",
    component: "SlidesScreen",
  },
  {
    name: "Themes",
    icon: "flask-outline",
    component: "ChangeThemeScreen",
  },
];

const uiMenuItems = [
  // 03- uiMenuItems
  {
    name: "Switches",
    icon: "toggle-outline",
    component: "SwitchScreen",
  },
  {
    name: "Alerts",
    icon: "alert-circle-outline",
    component: "AlertScreen",
  },
  {
    name: "TextInputs",
    icon: "document-text-outline",
    component: "TextInputScreen",
  },
];

export const HomeScreen = () => {
  const { colors } = useContext( themeContext );
  
  return (
    <View style={{
      ...globalStyles.mainContainer,
      backgroundColor: colors.background
    }}>
      <View style={globalStyles.globalMargin}>
        <ScrollView>
          <TitleComponent title="Opciones del menú" safe />

          {animationMenuItems.map((animation, index) => (
            <MenuItem
              key={index}
              name={animation.name}
              icon={animation.icon}
              component={animation.component}
              isFirst={index === 0}
              isLast={index === animationMenuItems.length - 1}
            />
          ))}

          <View style={{ marginTop: 30 }} />

          {uiMenuItems.map((ui, index) => (
            <MenuItem
              key={index}
              name={ui.name}
              icon={ui.icon}
              component={ui.component}
              isFirst={index === 0}
              isLast={index === uiMenuItems.length - 1}
              showSeparator
            />
          ))}

          <View style={{ marginTop: 30 }} />

          {menuItems.map((menu, index) => (
            <MenuItem
              key={index}
              name={menu.name}
              icon={menu.icon}
              component={menu.component}
              isFirst={index === 0}
              isLast={index === menuItems.length - 1}
            />
          ))}
        </ScrollView>
      </View>
    </View>
  );
};
