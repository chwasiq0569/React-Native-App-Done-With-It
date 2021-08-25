import React from "react";
import Screen from "./components/Screen";
import ListItem from "./components/ListItem";
import { FlatList, StyleSheet, Text, View } from "react-native";
import colors from "./config/colors";
import Icon from "./components/Icon";

const menuItems = [
  {
    title: "My Listings",
    icon: {
      image: require("./assets/listing.png"),
      backgroundColor: colors.primary,
    },
  },
  {
    title: "My Messages",
    icon: {
      image: require("./assets/email.png"),
      backgroundColor: colors.secondary,
    },
  },
];

function AccountScreen(props) {
  return (
    <Screen>
      <View style={styles.container}>
        <ListItem
          title="Mosh Haemdami"
          subTitle="programmingwithmosh@gmail.com"
          image={require("./assets/mosh.jpg")}
          onPress={() => console.log("CLICKED")}
        />
      </View>
      <View style={styles.container}>
        <FlatList
          data={menuItems}
          keyExtractor={(menuItem) => menuItem.title}
          renderItem={({ item }) => (
            <ListItem
              title={item.title}
              ImageComponent={
                <Icon
                  image={item.icon.image}
                  backgroundColor={item.icon.backgroundColor}
                />
              }
              onPress={() => console.log("CLICKED")}
            />
          )}
        />
      </View>
    </Screen>
  );
}

const styles = StyleSheet.create({
  container: {
    marginVertical: 20,
  },
});

export default AccountScreen;
