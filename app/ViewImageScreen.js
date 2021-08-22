import React from "react";
import { Image, View, StyleSheet } from "react-native";
import ImageResizeMode from "react-native/Libraries/Image/ImageResizeMode";
import { MaterialCommunityIcons } from "@expo/vector-icons";

import colors from "./config/colors";

function ViewImageScreen(props) {
  return (
    <View style={styles.container}>
      <Image source={require("./assets/close.png")} style={styles.closeIcon} />
      <Image
        source={require("./assets/delete.png")}
        style={styles.deleteIcon}
      />
      <Image
        style={styles.image}
        source={require("./assets/chair.jpg")}
        resizeMode={"contain"}
      />
    </View>
  );
}

export default ViewImageScreen;

const styles = StyleSheet.create({
  closeIcon: {
    position: "absolute",
    top: 40,
    left: 30,
    width: 35,
    height: 35,
  },
  deleteIcon: {
    width: 35,
    height: 35,
    position: "absolute",
    top: 40,
    right: 30,
  },
  container: {
    width: "100%",
    height: "100%",
    backgroundColor: colors?.black,
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  image: {
    width: "100%",
    height: "70%",
  },
});
