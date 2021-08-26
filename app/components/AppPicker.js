import React, { useState } from "react";
import {
  Button,
  FlatList,
  Modal,
  Platform,
  StyleSheet,
  TextInput,
  View,
} from "react-native";
import {
  Image,
  TouchableWithoutFeedback,
  TouchableOpacity,
} from "react-native";

import colors from "../config/colors";
import defaultStyles from "../config/styles";
import AppText from "./AppText";
import PickerItem from "./PickerItem";
import Screen from "./Screen";

function AppPicker({ icon, items, placeholder }) {
  const [modalVisible, setModalVisible] = useState(false);

  return (
    <>
      <TouchableWithoutFeedback onPress={() => setModalVisible(true)}>
        <View style={styles.container}>
          {icon && (
            <Image
              resizeMode="contain"
              source={icon}
              style={{ width: 20, height: 20, marginRight: 20 }}
            />
          )}
          <AppText style={styles.appText}>{placeholder}</AppText>
          <Image
            resizeMode="contain"
            source={require("../assets/arrowdown.png")}
          />
        </View>
      </TouchableWithoutFeedback>
      <Modal visible={modalVisible} animationType="slide">
        <Screen>
          <Button title="Close" onPress={() => setModalVisible(false)} />
          <FlatList
            data={items}
            keyExtractor={(item) => item.value.toString()}
            renderItem={({ item }) => (
              <PickerItem
                label={item.label}
                onPress={() => console.log(item.label)}
              />
            )}
          />
        </Screen>
      </Modal>
    </>
  );
}

const styles = StyleSheet.create({
  appText: {
    flex: 1,
  },
  container: {
    backgroundColor: colors.light,
    borderRadius: 25,
    flexDirection: "row",
    width: "100%",
    padding: 15,
    marginVertical: 10,
    alignItems: "center",
  },
  icon: { width: 20, height: 20, marginRight: 20 },
});

export default AppPicker;
