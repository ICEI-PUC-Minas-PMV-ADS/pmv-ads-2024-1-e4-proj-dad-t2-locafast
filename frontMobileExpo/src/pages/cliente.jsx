import React, { useState, useEffect } from "react";
import { View, StyleSheet, FlatList, Dimensions } from "react-native";

import Card from "../components/card";
//import clientes from "../data/cliente"

export default ({ navigation }) => {
    const [data, setData] = useState(clientes);

    useEffect(() => {
        // Esta função é chamada toda vez que a tela é carregada ou quando a lista de clientes é atualizada
        console.log("Data atualizada:", data);
    }, [data]);

    const updateList = (updatedCliente) => {
        if (updatedCliente) {
            // Atualiza o cliente na lista
            const newData = data.map(item => {
                if (item._id === updatedCliente._id) {
                    return updatedCliente;
                }
                return item;
            });
            setData(newData);
        } else {
            // Remove o cliente da lista
            const newData = data.filter(item => item._id !== updatedCliente?._id);
            setData(newData);
        }
    };

    return (
        <View style={styles.body}>
            <FlatList
                data={data}
                keyExtractor={item => `${item._id}`}
                renderItem={({ item }) =>
                    <Card
                        keyTitle={"_id"}
                        data={{ ...item }}
                        onPress={() => navigation.navigate('DetalhesCliente', { cliente: item, updateList })}
                        keysToRender={[
                            "clienteId",
                            "nome",
                            "cpf",
                            "rg"
                        ]}
                    />
                }
            />
        </View>
    );
};

const styles = StyleSheet.create({
    body: {
        backgroundColor: "#E4E9F7",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        width: Dimensions.get('window').width
    }
});
