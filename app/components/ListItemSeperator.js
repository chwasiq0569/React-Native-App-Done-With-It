import React from "react";
import { StyleSheet } from "react-native";
import { View } from "react-native";
import colors from "../config/colors";

function ListItemSeperator(props) {
  return <View style={styles.seperator}></View>;
}

const styles = StyleSheet.create({
  seperator: {
    width: "100%",
    height: 1,
    backgroundColor: colors.light,
  },
});

export default ListItemSeperator;
