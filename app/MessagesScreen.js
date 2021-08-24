import React, { useState } from "react";
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
import { Swipeable } from "react-native-gesture-handler";
import ListItemDeleteAction from "./components/ListItemDeleteAction";

function MessagesScreen(props) {
  const initialMessages = [
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

  const [messages, setMessages] = useState(initialMessages);

  const [refreshing, setRefreshing] = useState(false);

  const handleDelete = (message) => {
    setMessages([...messages.filter((m) => m.id != message.id)]);
  };

  return (
    <Screen>
      <FlatList
        data={messages}
        keyExtractor={(message) => message.id.toString()}
        renderItem={({ item }) => (
          <Swipeable
            renderRightActions={() => (
              <ListItemDeleteAction onPress={() => handleDelete(item)} />
            )}
          >
            <ListItem
              title={item.title}
              subTitle={item.subTitle}
              image={item.image}
              onPress={() => console.log()}
            />
          </Swipeable>
        )}
        ItemSeparatorComponent={ListItemSeperator}
        refreshing={refreshing}
        onRefresh={() => {
          setMessages([
            {
              id: 2,
              title: "T2",
              subTitle: "D2",
              image: require("./assets/mosh.jpg"),
            },
          ]);
        }}
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
