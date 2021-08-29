import React from "react";
import { Platform, StyleSheet, TextInput, View } from "react-native";
import { Image } from "react-native";
import colors from "../../config/colors";
import defaultStyles from "../../config/styles";

function AppTextInput({ icon, ...otherProps }) {
  return (
    <View style={styles.container}>
      {icon && <Image style={styles.icon} source={icon} />}
      <TextInput style={defaultStyles.text} {...otherProps} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: colors.light,
    borderRadius: 25,
    flexDirection: "row",
    alignItems: "center",
    width: "100%",
    padding: 15,
    marginVertical: 10,
  },
  icon: { width: 25, height: 25, marginRight: 20 },
});

export default AppTextInput;
