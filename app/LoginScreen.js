import React, { useState } from "react";
import Screen from "./components/Screen";
import { Image, StyleSheet, TextInput, View } from "react-native";
import AppTextInput from "./components/forms/AppTextInput";
import colors from "./config/colors";
import defaultStyles from "./config/styles";
import AppButton from "./components/AppButton";
import AppFrom from "./components/forms/AppFrom";

function LoginScreen(props) {
  return (
    <Screen style={styles.container}>
      <Image style={styles.logo} source={require("./assets/logo-red.png")} />
      <AppFrom />
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
