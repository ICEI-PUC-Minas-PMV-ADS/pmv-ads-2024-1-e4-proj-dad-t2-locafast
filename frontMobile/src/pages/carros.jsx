import React from "react";
import { View, Text,Image, TextInput, StyleSheet, TouchableOpacity } from "react-native";

export default function Carros() {
  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.headerTextLeft}>LocaFast</Text>
        <View style={styles.menu}></View>
        <Text style={styles.headerTextMiddle}>Minhas {"\n"} Reservas</Text>
        <Text style={styles.headerTextRight}>Sair</Text>
      </View>
      <View style={styles.content}>
        <Text style={styles.label}>Local de Retirada</Text>
        <TextInput style={styles.input} />

        <Text style={styles.label}>Data e Hora de Retirada</Text>
        <TextInput style={styles.input} />

        <Text style={styles.label}>Data e Hora de Devolução</Text>
        <TextInput style={styles.input} />

        <TouchableOpacity style={styles.button}>
          <Text style={styles.buttonText}>Editar</Text>
        </TouchableOpacity>
      </View>
      <View style={styles.footer}>
        <Text style={styles.title}>Escolha o veículo que melhor te atenda</Text>
        <Text style={styles.subtitle}>Fiat Mobi ou similar</Text>
        <Image style={styles.img} source={require('../img/FiatMobi.png')} />
        <Text style={styles.text}>A partir de:</Text>
        <Text style={styles.price}>R$2.397,06/mês</Text>
        <Text style={styles.priceDaily}>R$79,90/dia</Text>
        <TouchableOpacity style={styles.button}>
          <Text style={styles.buttonText}>Quero Esse</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
    /*Fundo*/
  container: {
    flex: 1,
    backgroundColor: "white",
    
  },
  /*Menu*/
  header: {
    height:65,
    flexDirection: "row",
    justifyContent: "space-between",
    backgroundColor: "#e0d7dc",
    padding: 16,
  },
  headerTextLeft: {
    
    fontFamily: "Bookish",
    color: "#8a2be2",
    fontWeight: "bold",
    fontSize:25
  },
  menu:{
    marginTop:-10,
    marginLeft:54,
    width:50,
    height:50,
    backgroundColor:"#8a2be2",
    borderRadius:50,
  },
  headerTextMiddle: {
    marginTop:-5,
    fontFamily: "simple",
    color: "#8a2be2",
    textAlign:'center',
    marginLeft:40,
  },
  headerTextRight: {
    fontFamily: "simple",
    color: "#8a2be2",
  },
  /*Local e horario de retirada e devolução*/ 
  content: {

    justifyContent:"center",
    alignItems:"center",
    backgroundColor: "#8a2be2",
    padding: 16,
    
  },
  label: {
    fontFamily: "simple",
    color: "#e0d7dc",
    fontWeight: "bold",
  },
  input: {
    width:300,
    backgroundColor: "#e0d7dc",
    color: "#8a2be2",
    padding: 8,
    borderRadius: 5,
    marginBottom: 16,
    textAlign:"center",
    elevation: 5,
  },
  button: {
    width:100,
    height:45,
    backgroundColor: "#e0d7dc",
    padding: 12,
    borderRadius: 16,
    alignItems: "center",
    marginTop: 16,
    borderWidth:1,
    elevation: 5,
  },
  buttonText: {
    color: "#8a2be2",
    fontFamily: "simple",
  },
  footer: {
    backgroundColor: "white",
    padding: 16,
    alignItems: "center",
  },
  title: {
    fontFamily: "simple",
    color: "#8a2be2",
    fontSize: 23,
    fontWeight: "bold",
    marginBottom: 8,
  },
  subtitle: {
    fontFamily: "simple",
    color: "#8a2be2",
    marginBottom: 16,
  },
  /*imagem do carro*/ 
  img:{
    width:210,
    height:200,
  },
  text: {
    fontFamily: "simple",
    color: "#8a2be2",
    marginBottom: 8,
  },
  price: {
    fontFamily: "simple",
    color: "#8a2be2",
    fontSize: 18,
    fontWeight: "bold",
    marginBottom: 8,
  },
  priceDaily: {
    fontFamily: "simple",
    color: "#8a2be2",
    marginBottom: 16,
  },
});
