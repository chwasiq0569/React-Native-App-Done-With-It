import React from 'react';
import { Image, View, StyleSheet } from "react-native";
import ImageResizeMode from 'react-native/Libraries/Image/ImageResizeMode';

import colors from "./config/colors";

function ViewImageScreen(props) {
    return (
        <View style={styles.container}>
            <View style={styles.closeIcon}></View>
            <View style={styles.deleteIcon}></View>
            <Image  style={styles.image} source={require("./assets/chair.jpg")} resizeMode={'contain'} />
        </View>
    );
}

export default ViewImageScreen;

const styles = StyleSheet.create({
    closeIcon: {
        width: 50,
        height: 50,
        position: "absolute",
        top: 40,
        left: 30,
        backgroundColor: colors?.primary
    },
    deleteIcon: {
        width: 50,
        height: 50,
        position: "absolute",
        top: 40,
        right: 30,
        backgroundColor: colors?.secondary
    },
    container: {
        width: "100%",
        height: "100%",
        backgroundColor: colors?.black,
        flex: 1,
        justifyContent: "center",
        alignItems: "center"
    },
    image: {
        width: "100%",
        height: "70%",
    }
})