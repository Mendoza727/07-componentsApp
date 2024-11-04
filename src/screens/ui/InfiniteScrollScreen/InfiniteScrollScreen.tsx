import { Text, View } from "react-native";
import React from "react";
import { CustomView } from "../../../components/ui/CustomView";
import { TitleComponent } from "../../../components/ui/titleComponent";

export const InfiniteScrollScreen = () => {
  return (
    <CustomView>
      <TitleComponent title="Infinity Scroll" />
    </CustomView>
  );
};
