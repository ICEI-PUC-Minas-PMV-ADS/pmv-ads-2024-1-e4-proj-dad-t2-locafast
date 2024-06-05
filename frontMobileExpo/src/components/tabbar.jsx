import React from "react";
import { View, StyleSheet, Text, Dimensions } from "react-native";

export default props => {

    return (
        <View style={styles.container}>
            <Text>teste</Text>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        display: "flex",
        padding: 10,
        height: "30px",
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "center",
        backgroundColor: "#F6F5FF",
        height: Dimensions.get('window').height * 0.08,
        width: Dimensions.get('window').width
    }
})
