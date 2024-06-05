import React, { useState, useEffect } from "react";
import { View, StyleSheet, FlatList, Dimensions } from "react-native";

import Card from "../components/card";
import axios from "../config/axiosConfig";

export default ({ navigation, route }) => {

    const [data, setData] = useState([])

    useEffect(() => {
        const token = localStorage.getItem('token');

        if (token) {

            const fetchData = async () => {
                try {
                    const response = await axios.get('/reserva');
                    setData(response.data);
                } catch (error) {
                    console.error('Erro na requisição:', error);
                }
            };

            fetchData();
        } else {
            console.log('Não há token')
        }
    }, [route.params?.update]);

    return (
        <View style={styles.body}>
            <FlatList
                data={data}
                keyExtractor={item => `${item._id}`}
                renderItem={({ item }) =>
                    <Card
                        keyTitle={"_id"}
                        data={{ ...item }}
                        onPress={() => navigation.navigate('Detalhes da Reserva', { reserva: item })}
                        keysToRender={[
                            "clienteId",
                            "dateRetirada",
                            "dateDevolucao",
                            "categoriaVeiculo"
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
        width: Dimensions.get('window').width,
        height: Dimensions.get('window').height,
    }
})
