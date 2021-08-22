import React from "react";
import { Image, StyleSheet, View } from "react-native";
import colors from "../config/colors";
import AppText from "./AppText";

function ListItem({ title, subTitle, image }) {
  return (
    <View style={styles.container}>
      <Image style={styles.image} source={require("../assets/mosh.jpg")} />
      <View>
        <AppText style={styles.title}>{title}</AppText>
        <AppText style={styles.subTitle}>{subTitle}</AppText>
      </View>
    </View>
  );
}

export default ListItem;

const styles = StyleSheet.create({
  container: {
    width: "100%",
    flexDirection: "row",
    padding: 20,
  },
  image: {
    width: 70,
    height: 70,
    borderRadius: 35,
    marginRight: 20,
  },
  subTitle: {
    color: colors.medium,
  },
  title: {
    fontWeight: "500",
  },
});
