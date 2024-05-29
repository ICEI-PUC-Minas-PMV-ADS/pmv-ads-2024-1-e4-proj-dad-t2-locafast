import React from "react";
import { Text, View, StyleSheet, Image, Platform, Dimensions } from "react-native";
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
        marginTop: Platform.OS === 'ios' ? 20 : 0,
        border: "#BBB",
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "center",
        backgroundColor: "#F6F5FF",
        height: Dimensions.get('window').height * 0.08,
        width: Dimensions.get('window').width
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
