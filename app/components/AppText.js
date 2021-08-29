import React from "react";
import { StyleSheet, Text } from "react-native";
import colors from "../config/colors";
import defaultStyles from "../config/styles";

const AppText = ({ children, style }) => {
  return (
    <Text
      placeholderTextColor={colors.medium}
      style={[defaultStyles.text, style]}
    >
      {children}
    </Text>
  );
};

export default AppText;
