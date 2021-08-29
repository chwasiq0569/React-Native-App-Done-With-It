import React, { useState } from "react";
import Screen from "./components/Screen";
import { Image, StyleSheet, TextInput, View } from "react-native";
import AppTextInput from "./components/AppTextInput";
import colors from "./config/colors";
import defaultStyles from "./config/styles";
import AppButton from "./components/AppButton";

function LoginScreen(props) {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  return (
    <Screen style={styles.container}>
      <Image style={styles.logo} source={require("./assets/logo-red.png")} />
      <AppTextInput
        autoCapitalize="none"
        autoCorrect={false}
        keyboardType="email-address"
        textContentType="emailAddress"
        placeholder="Email"
        icon={require("./assets/emailblack.png")}
        onChangeText={(text) => setEmail(text)}
      />
      <AppTextInput
        autoCapitalize="none"
        autoCorrect={false}
        textContentType="password"
        secureTextEntry
        placeholder="Password"
        icon={require("./assets/password.png")}
        onChangeText={(text) => setPassword(text)}
      />
      <AppButton title="Login" onPress={() => console.log(email, password)} />
    </Screen>
  );
}

const styles = StyleSheet.create({
  container: {
    padding: 10,
  },
  logo: {
    width: 80,
    height: 80,
    alignSelf: "center",
    marginTop: 50,
    marginBottom: 20,
  },
});

export default LoginScreen;
