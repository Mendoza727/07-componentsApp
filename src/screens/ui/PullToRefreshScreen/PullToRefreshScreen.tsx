import React, { useContext, useState } from "react";
import { CustomView } from "../../../components/ui/CustomView";
import { TitleComponent } from "../../../components/ui/titleComponent";
import { ScrollView } from "react-native-gesture-handler";
import { RefreshControl } from "react-native";
import { useSafeAreaInsets } from "react-native-safe-area-context";
import { colors, globalStyles } from "../../../config/Global.styles";
import { themeContext } from "../../../context/ThemeContext";

export const PullToRefreshScreen = () => {
  const { top } = useSafeAreaInsets();
  const { colors } = useContext( themeContext );

  const [isRefreshing, setIsRefreshing] = useState(false);

  const onRefresh = async () => {
    setIsRefreshing(true);

    setTimeout(() => {
      setIsRefreshing(false);
    }, 2000);
  };

  return (
    <ScrollView
      refreshControl={
        <RefreshControl
          refreshing={isRefreshing}
          progressViewOffset={top  + 30}
          colors={[colors.primary, "red", "orange", "green"]}
          onRefresh={onRefresh}
        />
      }
      style={[
        globalStyles.mainContainer,
        globalStyles.globalMargin,
        {
          backgroundColor: colors.background
        }
      ]}
    >
      <TitleComponent title="Pull To Refresh" safe />
    </ScrollView>
  );
};
