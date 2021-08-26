import React from "react";
import { Platform, StyleSheet, TextInput, View } from "react-native";
import { Image } from "react-native";
import colors from "../config/colors";
import defaultStyles from "../config/styles";

function AppTextInput({ icon, ...otherProps }) {
  return (
    <View style={styles.container}>
      {icon && <Image resizeMode="contain" source={icon} style={styles.icon} />}
      <TextInput style={defaultStyles.text} {...otherProps} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: colors.light,
    borderRadius: 25,
    flexDirection: "row",
    width: "100%",
    padding: 15,
    marginVertical: 10,
  },
  icon: { width: "20px", height: "20px", marginRight: 20 },
});

export default AppTextInput;
