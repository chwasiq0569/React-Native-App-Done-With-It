import React from "react";
import { FlatList, StyleSheet, View } from "react-native";
import Card from "./components/Card";
import Screen from "./components/Screen";
import ListItem from "./components/ListItem";
import Icon from "./components/Icon";

const listings = [
  {
    id: 1,
    title: "Red jacked for sale",
    price: 100,
    image: require("./assets/jacket.jpg"),
  },
  {
    id: 2,
    title: "Couch in great condition",
    price: 1000,
    image: require("./assets/couch.jpg"),
  },
];

function ListingsScreen(props) {
  return (
    <Screen style={styles.container}>
      {/* <FlatList
        data={listings}
        keyExtractor={(listings) => listings.id.toString()}
        renderItem={({ item }) => (
          <Card image={item.image} title={item.title} subTitle={item.price} />
        )}
      /> */}
      <Card
        image={require("./assets/jacket.jpg")}
        title="Red jacked for sale"
        subTitle="100"
      />
      <Card
        image={require("./assets/couch.jpg")}
        title="Couch in great condition"
        subTitle="1000"
      />
    </Screen>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: "red",
  },
});

export default ListingsScreen;
