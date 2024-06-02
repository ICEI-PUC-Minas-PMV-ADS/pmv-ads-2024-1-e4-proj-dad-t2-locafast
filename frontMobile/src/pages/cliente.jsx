import React, { useState } from "react";
import { View, StyleSheet, FlatList, Dimensions } from "react-native";

import Card from "../components/card";
import clientes from "../data/cliente"

export default ({ navigation }) => {

    const [data, setData] = useState(clientes)

    return (
        <View style={styles.body}>
            <FlatList
                data={data}
                keyExtractor={item => `${item._id}`}
                renderItem={({ item }) =>
                    <Card
                        keyTitle={"_id"}
                        data={{ ...item }}
                        onPress={() => navigation.navigate('detalhesCliente', { cliente: item })}
                        keysToRender={[
                            "clienteId",
                            "nome",
                            "cpf",
                            "rg"
                        ]} />}
            />
        </View>
    )
}

const styles = StyleSheet.create({
    body: {
        backgroundColor: "#E4E9F7",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        width: Dimensions.get('window').width
    }
})
