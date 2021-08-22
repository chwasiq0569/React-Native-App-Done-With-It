import React from "react";
import { Image, ImageBackground, StyleSheet, Text, View } from "react-native";

import colors from "./config/colors";
import AppButton from "./components/AppButton";

function WelcomeScreen() {
  return (
    <ImageBackground
      blurRadius={2}
      style={styles.background}
      source={require("./assets/background.jpg")}
    >
      <View style={styles.logoContainer}>
        <Image
          style={styles.brandLogo}
          source={require("./assets/logo-red.png")}
        />
        <Text style={styles.tagline}>Sell What You Don't Need.</Text>
      </View>
      <View style={styles.btnsContainer}>
        <AppButton
          title="Login"
          onPress={() => console.log("User Login")}
          color="primary"
        />
        <AppButton
          title="Register"
          onPress={() => console.log("Register User")}
          color="secondary"
        />
      </View>
      <View style={styles.registerBtn}></View>
    </ImageBackground>
  );
}

const styles = StyleSheet.create({
  background: {
    flex: 1,
    justifyContent: "flex-end",
    alignItems: "center",
  },
  logoContainer: {
    position: "absolute",
    alignItems: "center",
    top: 70,
  },
  brandLogo: {
    width: 100,
    height: 100,
  },
  btnsContainer: {
    width: "100%",
    padding: 20,
  },
  tagline: {
    fontSize: 25,
    fontWeight: "bold",
    paddingVertical: 20,
  },
});

export default WelcomeScreen;
