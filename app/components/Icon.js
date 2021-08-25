import React from "react";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import { Image, View } from "react-native";
import { StyleSheet } from "react-native";

function Icon({ image, backgroundColor }) {
  return (
    <View style={[styles.container, { backgroundColor: backgroundColor }]}>
      <Image source={image} style={[styles.image]} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    width: 50,
    height: 50,
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 30,
  },
  image: {
    width: 25,
    height: 25,
  },
});

export default Icon;
