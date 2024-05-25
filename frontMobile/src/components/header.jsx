import React from "react";
import { Text, View, StyleSheet, Image, Platform } from "react-native";
import Icon from '../icons/icon.png'

export default () => {

    return (
        <View style={styles.container}>
            <Image source={Icon} style={styles.image}></Image>
            <Text style={styles.title}>LocaFast</Text>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        display: "flex",
        padding: 10,
        marginTop: Platform.OS === 'ios' ? 20 : 0,
        borderBottomWidth: 1,
        border: "#BBB",
        flexDirection: "row",
        alignItems: "center",
        backgroundColor: "#F6F5FF",
        height: "10%"
    },
    image: {
        height: 30,
        width: 30,
        resizeMode: "contain"
    },
    title: {
        color: "#000",
        fontSize: 28
    }
})
