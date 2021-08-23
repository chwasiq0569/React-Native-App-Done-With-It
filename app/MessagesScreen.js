import React from "react";
import {
  FlatList,
  Platform,
  SafeAreaView,
  StatusBar,
  StyleSheet,
  View,
} from "react-native";
import ListItem from "./components/ListItem";
import Constants from "expo-constants";
import Screen from "./components/Screen";
import ListItemSeperator from "./components/ListItemSeperator";

function MessagesScreen(props) {
  const messages = [
    {
      id: 1,
      title: "T1",
      subTitle: "D1",
      image: require("./assets/mosh.jpg"),
    },
    {
      id: 2,
      title: "T2",
      subTitle: "D2",
      image: require("./assets/mosh.jpg"),
    },
  ];

  return (
    <Screen>
      <FlatList
        data={messages}
        keyExtractor={(message) => message.id.toString()}
        renderItem={({ item }) => (
          <ListItem
            title={item.title}
            subTitle={item.subTitle}
            image={item.image}
          />
        )}
        ItemSeparatorComponent={ListItemSeperator}
      />
    </Screen>
  );
}

export default MessagesScreen;

const styles = StyleSheet.create({
  screen: {
    // marginTop: Platform.OS === "android" ? StatusBar.currentHeight : 0,
    paddingTop: Constants.statusBarHeight,
  },
});
