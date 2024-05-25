import React from "react";
import { Text, View, StyleSheet } from "react-native";

export default () => {

    return (
        <View style={styles.body}>
            <Text>Componente reserva</Text>
        </View>
    )
}

const styles = StyleSheet.create({
    body: {
        backgroundColor: "#E4E9F7",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        height: "80%"
    }
})
