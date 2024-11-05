import React, { useState } from "react";
import {
  KeyboardAvoidingView,
  Platform,
  Text,
  TextInput,
  View,
} from "react-native";
import { CustomView } from "../../components/ui/CustomView";
import { TitleComponent } from "../../components/ui/titleComponent";
import { globalStyles } from "../../config/Global.styles";
import { CardComponent } from "../../components/ui/CardComponent";
import { ScrollView } from "react-native-gesture-handler";

export const TextInputScreen = () => {
  const [form, setForm] = useState({
    name: "",
    email: "",
    phone: "",
    password: "",
  });

  return (
    <KeyboardAvoidingView
      behavior={Platform.OS === "ios" ? "padding" : undefined }
    >
      <ScrollView>
        <CustomView
          style={{
            ...globalStyles.globalMargin,
            marginBottom: 60,
          }}
        >
          <TitleComponent title="Text Inputs" />

          <CardComponent>
            <TextInput
              style={globalStyles.inputStyle}
              placeholder="Nombre Completo"
              autoCapitalize={"words"}
              autoCorrect={false}
              onChangeText={(value) => setForm({ ...form, name: value })}
            />

            <TextInput
              style={globalStyles.inputStyle}
              placeholder="Correo Electronico"
              autoCapitalize={"none"}
              keyboardType="email-address"
              autoCorrect={false}
              onChangeText={(value) => setForm({ ...form, email: value })}
            />

            <TextInput
              style={globalStyles.inputStyle}
              placeholder="Telefono"
              keyboardType="phone-pad"
              onChangeText={(value) => setForm({ ...form, phone: value })}
            />

            <TextInput
              style={globalStyles.inputStyle}
              placeholder="Password"
              keyboardType="default"
              autoCapitalize={"none"}
              autoCorrect={false}
              onChangeText={(value) => setForm({ ...form, password: value })}
            />
          </CardComponent>

          <View style={{ height: 10 }} />
          <CardComponent>
            <Text>{JSON.stringify(form, null, 2)}</Text>
            <Text>{JSON.stringify(form, null, 2)}</Text>
            <Text>{JSON.stringify(form, null, 2)}</Text>
            <Text>{JSON.stringify(form, null, 2)}</Text>
            <Text>{JSON.stringify(form, null, 2)}</Text>
            <Text>{JSON.stringify(form, null, 2)}</Text>
            <Text>{JSON.stringify(form, null, 2)}</Text>
          </CardComponent>
          <View style={{ height: 10 }} />

          <CardComponent>
            <TextInput
              style={globalStyles.inputStyle}
              placeholder="Telefono"
              keyboardType="phone-pad"
              onChangeText={(value) => setForm({ ...form, phone: value })}
            />
          </CardComponent>
        </CustomView>


        <View  style={{ height: 50 }} />
      </ScrollView>
    </KeyboardAvoidingView>
  );
};
