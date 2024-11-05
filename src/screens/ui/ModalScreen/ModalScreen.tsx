import { Modal, Platform, Text, View } from "react-native";
import React, { useState } from "react";
import { CustomView } from "../../../components/ui/CustomView";
import { TitleComponent } from "../../../components/ui/titleComponent";
import { ButtonComponent } from "../../../components/ui/ButtonComponent";

export const ModalScreen = () => {
  const [isVisible, setIsVisible] = useState(false);

  return (
    <CustomView>
      <TitleComponent title="Modal" />

      <ButtonComponent title="Abrir Modal" onPress={() => setIsVisible(true)} />

      <Modal visible={isVisible} animationType="slide">
        <View style={{ flex: 1, backgroundColor: "rgba(0,0,0,0.1)" }}>
          <View style={{ paddingHorizontal: 10 }}>
            <TitleComponent title="Modal Content" safe />
          </View>
          <View style={{ flex: 1 }} />
          <ButtonComponent
            title="Cerrar Modal"
            onPress={() => setIsVisible(false)}
            style={{
              height: Platform.OS === 'android' ? 40 : 60,
              borderRadius: 0
            }}
          />
        </View>
      </Modal>
    </CustomView>
  );
};
