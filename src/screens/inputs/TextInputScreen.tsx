import React, { useContext, useState } from "react";
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
import { themeContext } from "../../context/ThemeContext";

export const TextInputScreen = () => {
  const [form, setForm] = useState({
    name: "",
    email: "",
    phone: "",
    password: "",
  });

  const { colors } = useContext(themeContext);

  return (
    <KeyboardAvoidingView
      behavior={Platform.OS === "ios" ? "padding" : undefined}
    >
      <ScrollView>
        <CustomView
          style={{
            ...globalStyles.globalMargin,
            marginBottom: 60,
            backgroundColor: colors.background,
          }}
        >
          <TitleComponent title="Text Inputs" />

          <CardComponent>
            <TextInput
              style={{
                ...globalStyles.inputStyle,
                backgroundColor: colors.text,
              }}
              placeholder="Nombre Completo"
              autoCapitalize={"words"}
              autoCorrect={false}
              onChangeText={(value) => setForm({ ...form, name: value })}
            />

            <TextInput
              style={{
                ...globalStyles.inputStyle,
                backgroundColor: colors.text,
              }}
              placeholder="Correo Electronico"
              autoCapitalize={"none"}
              keyboardType="email-address"
              autoCorrect={false}
              onChangeText={(value) => setForm({ ...form, email: value })}
            />

            <TextInput
              style={{
                ...globalStyles.inputStyle,
                backgroundColor: colors.text,
              }}
              placeholder="Telefono"
              keyboardType="phone-pad"
              onChangeText={(value) => setForm({ ...form, phone: value })}
            />

            <TextInput
              style={{
                ...globalStyles.inputStyle,
                backgroundColor: colors.text,
              }}
              placeholder="Password"
              keyboardType="default"
              autoCapitalize={"none"}
              autoCorrect={false}
              onChangeText={(value) => setForm({ ...form, password: value })}
            />
          </CardComponent>

          <View style={{ height: 10 }} />
          <CardComponent>
            <Text
              style={{
                color: colors.text,
              }}
            >
              {JSON.stringify(form, null, 2)}
            </Text>
            <Text
              style={{
                color: colors.text,
              }}
            >
              {JSON.stringify(form, null, 2)}
            </Text>
            <Text
              style={{
                color: colors.text,
              }}
            >
              {JSON.stringify(form, null, 2)}
            </Text>
            <Text
              style={{
                color: colors.text,
              }}
            >
              {JSON.stringify(form, null, 2)}
            </Text>
            <Text
              style={{
                color: colors.text,
              }}
            >
              {JSON.stringify(form, null, 2)}
            </Text>
            <Text
              style={{
                color: colors.text,
              }}
            >
              {JSON.stringify(form, null, 2)}
            </Text>
            <Text
              style={{
                color: colors.text,
              }}
            >
              {JSON.stringify(form, null, 2)}
            </Text>
          </CardComponent>
          <View style={{ height: 10 }} />

          <CardComponent>
            <TextInput
              style={{
                ...globalStyles.inputStyle,
                backgroundColor: colors.text,
              }}
              placeholder="Telefono"
              keyboardType="phone-pad"
              onChangeText={(value) => setForm({ ...form, phone: value })}
            />
          </CardComponent>
        </CustomView>

        <View style={{ height: 50, backgroundColor: colors.background }} />
      </ScrollView>
    </KeyboardAvoidingView>
  );
};
