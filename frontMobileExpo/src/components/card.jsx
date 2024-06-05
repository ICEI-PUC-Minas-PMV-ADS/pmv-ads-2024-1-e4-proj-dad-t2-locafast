import React from "react";
import { Text, View, StyleSheet, Dimensions, TouchableOpacity } from "react-native";

export default props => {
    const { keyTitle, data, keysToRender, onPress } = props;

    return (
        <TouchableOpacity onPress={onPress}>
            <View style={styles.cardContainer}>
                <View style={styles.titleContainer}>
                    <Text style={styles.title}>{data[keyTitle]}</Text>
                </View>
                <View style={styles.cardContentContainer}>
                    {keysToRender.map((key, index) => (
                        <Text style={styles.details} key={index}>
                            {`${key}: ${data[key]}`}
                        </Text>
                    ))}
                </View>
            </View>
        </TouchableOpacity>
    );
}

const styles = StyleSheet.create({
    cardContainer: {
        width: Dimensions.get('window').width * 0.9,
        height: Dimensions.get('window').height / 5,
        borderRadius: 10,
        marginTop: Dimensions.get('window').width * 0.05,
        backgroundColor: "#FFF",
        borderWidth: 2,
        borderColor: "rgb(172, 134, 223)",
        overflow: "hidden",
    },
    titleContainer: {
        backgroundColor: "rgb(172, 134, 223)",
        justifyContent: "center",
        alignItems: "center",
        padding: 5,
        height: "20%"
    },
    title: {
        fontSize: 20
    },
    cardContentContainer: {
        padding: 10,
        display: "flex",
        flex: 1,
        justifyContent: "center",
        fontSize: 18
    },
    details: {
        fontSize: 18
    }
});
