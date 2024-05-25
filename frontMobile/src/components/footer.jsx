import React from "react";
import { View, StyleSheet, Text } from "react-native";

export default () => {

    return (
        <View style={styles.container}>
            <Text>footer</Text>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        display: "flex",
        padding: 10,
        height: "30px",
        borderTopWidth: 1,
        border: "#BBB",
        flexDirection: "row",
        backgroundColor: "#F6F5FF",
        height: "10%"
    }
})
