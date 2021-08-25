import { useDimensions } from "@react-native-community/hooks";
import { StatusBar } from "expo-status-bar";
import React from "react";
import WelcomeScreen from "./app/WelcomeScreen";
import ViewImageScreen from "./app/ViewImageScreen";
import {
  StyleSheet,
  Text,
  View,
  Image,
  SafeAreaView,
  TouchableWithoutFeedback,
  Button,
  Alert,
  Platform,
  Dimensions,
} from "react-native";

import Card from "./app/components/Card";
import ListingDetailsScreen from "./app/components/ListingDetailsScreen";
import MessagesScreen from "./app/MessagesScreen";
import Icon from "./app/components/Icon";
import Screen from "./app/components/Screen";
import ListItem from "./app/components/ListItem";
import AccountScreen from "./app/AccountScreen";

export default function App() {
  // console.log(Dimensions.get("screen"));
  // console.log(Dimensions.get("window"));

  // useDimensions();

  // const handlePress = () => console.log("TEXT PRESSED");
  return (
    // <ListingDetailsScreen />
    // <WelcomeScreen />
    // <View style={{ backgroundColor: "#f8f4f4", padding: 20, paddingTop: 100 }}>
    //   <Card title="Red jacket for sale" subTitle="$100" />
    // </View>
    // <ViewImageScreen />
    // <MessagesScreen />
    <AccountScreen />
    // <SafeAreaView style={styles.container}>
    //   <Text onPress={handlePress}>1234</Text>
    //   <TouchableWithoutFeedback
    //     onPress={() => console.log("TouchableWithoutFeedback")}
    //   >
    //     <Image
    //       fadeDuration={1000}
    //       source={{
    //         width: 200,
    //         height: 300,
    //         uri: "https://picsum.photos/200/300",
    //       }}
    //     />
    //   </TouchableWithoutFeedback>
    //   <Button
    //     title="Click Me"
    //     onPress={() =>
    //       Alert.alert("Title", "Message", [
    //         { text: "Done", onPress: () => console.log("Done Clicked") },
    //         { text: "Cancel", onPress: () => console.log("Cancel Clicked") },
    //       ])
    //     }
    //   />
    //   {/* <StatusBar style="auto" /> */}
    // </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "red",
    alignItems: "center",
    justifyContent: "center",
    paddingTop: Platform.OS === "android" ? StatusBar.currentHeight : 0,
  },
});
