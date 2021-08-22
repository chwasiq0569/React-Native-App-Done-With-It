import React from "react";
import { StyleSheet, Text, View } from "react-native";
import { Image } from "react-native";
import colors from "../config/colors";
import AppText from "./AppText";

function Card({ image, title, subTitle }) {
  return (
    <View style={styles.card}>
      <Image style={styles.image} source={require("../assets/jacket.jpg")} />
      <View style={styles.detailsContainer}>
        <AppText style={styles.title}>{title}</AppText>
        <AppText style={styles.subTitle}>{subTitle}</AppText>
      </View>
    </View>
  );
}

export default Card;

const styles = StyleSheet.create({
  card: {
    width: "100%",
    height: "100%",
    overflow: "hidden",
    borderRadius: 15,
  },
  detailsContainer: {
    backgroundColor: colors.white,
    padding: 20,
  },
  image: {
    width: "100%",
    height: 200,
  },
  subTitle: {
    color: colors.secondary,
    fontWeight: "bold",
  },
  title: {
    marginBottom: 7,
  },
});
