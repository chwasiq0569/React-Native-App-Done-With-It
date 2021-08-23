import React from "react";
import { Image, StyleSheet, TouchableHighlight, View } from "react-native";
import colors from "../config/colors";
import AppText from "./AppText";

function ListItem({ title, subTitle, image }) {
  return (
    <TouchableHighlight onPress={() => console.log()}>
      <View style={styles.container}>
        <Image style={styles.image} source={image} />
        <View>
          <AppText style={styles.title}>{title}</AppText>
          <AppText style={styles.subTitle}>{subTitle}</AppText>
        </View>
      </View>
    </TouchableHighlight>
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
