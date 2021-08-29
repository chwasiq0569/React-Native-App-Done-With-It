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
import ListingsScreen from "./app/ListingsScreen";
import AppTextInput from "./app/components/forms/AppTextInput";
import { TextInput } from "react-native";
import AppPicker from "./app/components/AppPicker";
import LoginScreen from "./app/LoginScreen";
import ListingsEditScreen from "./app/ListingsEditScreen";

const categories = [
  { label: "Furniture", value: 1 },
  { label: "Clothing", value: 2 },
  { label: "Cameras", value: 3 },
];

export default function App() {
  return (
    // <ListingDetailsScreen />
    // <WelcomeScreen />
    // <View style={{ backgroundColor: "#f8f4f4", padding: 20, paddingTop: 100 }}>
    //   <Card title="Red jacket for sale" subTitle="$100" />
    // </View>
    // <ViewImageScreen />
    // <MessagesScreen />
    // <AccountScreen />
    // <ListingsScreen />
    // <View>
    //   <AppPicker
    //     selectedItem={category}
    //     onSelectItem={setCategory}
    //     items={categories}
    //     icon={require("./app/assets/apps.png")}
    //     placeholder="Categories"
    //   />
    //   {/* <Image resizeMode="contain" source={require("./app/assets/apps.png")} /> */}
    // <Image source={require("./assets/jacket.jpg")} />
    // </View>
    // <LoginScreen />
    <ListingsEditScreen />
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
