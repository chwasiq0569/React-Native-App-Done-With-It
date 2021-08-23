import React from "react";
import { StyleSheet, View } from "react-native";
import colors from "../config/colors";

function ListItemDeleteAction(props) {
  return <View style={styles.container}></View>;
}

const styles = StyleSheet.create({
  container: {
    width: 70,
    backgroundColor: colors.danger,
  },
});

export default ListItemDeleteAction;
