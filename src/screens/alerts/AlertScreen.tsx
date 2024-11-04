import React, { useState } from "react";
import { Alert, Text, View } from "react-native";
import { CustomView } from "../../components/ui/CustomView";
import { TitleComponent } from "../../components/ui/titleComponent";
import { globalStyles } from "../../config/Global.styles";
import { useSafeAreaInsets } from "react-native-safe-area-context";
import { ButtonComponent } from "../../components/ui/ButtonComponent";

import prompt from "react-native-prompt-android";
import { Button, Dialog, Portal, TextInput } from "react-native-paper";

export const AlertScreen = () => {
  const { top } = useSafeAreaInsets();

  const [visible, setVisible] = useState(false);
  const [inputValue, setInputValue] = useState('');

  const showDialog = () => setVisible(true);
  const hideDialog = () => setVisible(false);

  const handleDone = () => {
    // Aquí puedes manejar el valor ingresado en el prompt
    console.log('Valor ingresado:', inputValue);
    hideDialog();
  };

  const createTwoButtonAlert = () =>
    Alert.alert("Alert Title", "My Alert Msg", [
      {
        text: "Cancel",
        onPress: () => console.log("Cancel Pressed"),
        style: "cancel",
      },
      { text: "OK", onPress: () => console.log("OK Pressed") },
    ]);

  const createThreeButtonAlert = () =>
    Alert.alert("Alert Title", "My Alert Msg", [
      {
        text: "Ask me later",
        onPress: () => console.log("Ask me later pressed"),
      },
      {
        text: "Cancel",
        onPress: () => console.log("Cancel Pressed"),
        style: "cancel",
      },
      { text: "OK", onPress: () => console.log("OK Pressed") },
    ]);

  return (
    <CustomView
      style={{
        ...globalStyles.globalMargin,
      }}
    >
      <TitleComponent title="alertas" />

      <ButtonComponent
        title="Alerta - 2 Botones"
        onPress={() => createTwoButtonAlert()}
      />

      <View style={{ marginTop: 15 }} />

      <ButtonComponent
        title="Alerta - 3 Botones"
        onPress={() => createThreeButtonAlert()}
      />

      <View style={{ marginTop: 15 }} />

      <ButtonComponent title="Prompt - Input" onPress={showDialog} />

      <Portal>
        <Dialog visible={visible} onDismiss={hideDialog}>
          <Dialog.Title>Ingrese un valor</Dialog.Title>
          <Dialog.Content>
            <Text>Por favor, introduce un valor:</Text>
            <TextInput
              label="Entrada"
              value={inputValue}
              onChangeText={(text) => setInputValue(text)}
              keyboardType="default"
              style={{ marginTop: 10 }}
            />
          </Dialog.Content>
          <Dialog.Actions>
            <Button onPress={hideDialog}>Cancelar</Button>
            <Button onPress={handleDone}>Aceptar</Button>
          </Dialog.Actions>
        </Dialog>
      </Portal>
    </CustomView>
  );
};
