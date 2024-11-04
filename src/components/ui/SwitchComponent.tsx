import React from "react";
import { Platform, StyleSheet, Switch, Text, View } from "react-native";

interface Prop {
    title?: string
    toggleSwitch: (value: boolean) => void;
    isEnabled: boolean
}

export const SwitchComponent = ({ toggleSwitch, isEnabled, title }: Prop) => {
  return (
    <View style={style.switchRow}>
      {
        title && (<Text>{title}</Text>)
      }

      <Switch
        thumbColor={ Platform.OS === 'android' ? '':    ''}
        ios_backgroundColor="#3e3e3e"
        onValueChange={toggleSwitch}
        value={isEnabled}
      />
    </View>
  );
};

const style = StyleSheet.create({
  switchRow: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginVertical: 5,
  },
});
