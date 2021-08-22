import React from "react";
import { Image, View } from "react-native";
import AppText from "./AppText";
import { StyleSheet } from "react-native";
import colors from "../config/colors";
import ListItem from "./ListItem";

const ListingDetailsScreen = () => {
  return (
    <View style={styles.container}>
      <Image style={styles.image} source={require("../assets/jacket.jpg")} />
      <View style={styles.detailsContainer}>
        <AppText style={styles.title}>Red jacket for sale</AppText>
        <AppText style={styles.subTitle}>$100</AppText>
      </View>
      <View style={styles.userContainer}>
        <ListItem title="Red jacket for sale" subTitle="$100" />
      </View>
    </View>
  );
};

export default ListingDetailsScreen;

const styles = StyleSheet.create({
  container: {
    width: "100%",
  },
  image: {
    width: "100%",
    height: 300,
  },
  detailsContainer: {
    width: "100%",
    padding: 20,
  },
  title: {
    fontSize: 24,
    fontWeight: "500",
  },
  subTitle: {
    color: colors.secondary,
    fontSize: 20,
    fontWeight: "bold",
    marginVertical: 10,
  },
  userContainer: {
    marginVertical: 20,
  },
});
