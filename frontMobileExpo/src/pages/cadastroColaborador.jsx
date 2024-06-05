import React, { useState } from 'react';
import { View, Text, StyleSheet, TextInput, Pressable } from 'react-native';

import DatePicker from 'react-datepicker';
import { RadioButton } from 'react-native-paper';
const Cadastro = ({ navigation }) => {

  const handlePress = () => {
    navigation.navigate('login');
  };

  const [nome, setNome] = useState('');
  const [cpf, setCpf] = useState('');
  const [rg, setRg] = useState('');
  const [telefone, setTelefone] = useState('');
  const [dataa, setData] = useState('');
  const [senha, setSenha] = useState('');
  const [isVisible, setIsVisible] = useState(false);
  const [errorMessage, setErrorMessage] = useState('');



  const cadastrar = async () => {
    if (!nome || !email || !senha) {
      setErrorMessage('É necessário preencher todos os dados');
      setIsVisible(true);
    }
    else {
      setIsVisible(false);
      const usuarioExiste = true;
    }
  };
  const [date, setDate] = useState(new Date());
  const handleDateChange = (newDate) => {
    setDate(newDate); // Update the date state with the new selected date
  };

  const [gender, setGender] = useState('male');

  const handleGenderChange = (newGender) => setGender(newGender);
  
  return (

    <View style={styles.container}>

      <Text style={styles.header}> Cadastro de Usuário </Text>

      <TextInput
        style={styles.login1}
        placeholder="Nome"
        autoCapitalize="none"
        value={nome}
        onChangeText={(text) => setNome(text)}
      />

      <TextInput
        style={styles.login1}
        placeholder="CPF"
        autoCapitalize="none"
        value={cpf}
        onChangeText={(text) => setCpf(text)}
      />

      <TextInput
        style={styles.login1}
        placeholder="RG"
        autoCapitalize="none"
        value={rg}
        onChangeText={(text) => setRg(text)}
      />

      <TextInput
        style={styles.login2}
        placeholder="Telefone"
        autoCapitalize="none"
        value={telefone}
        onChangeText={(text) => setTelefone(text)}
      />

      <View style={styles.dateOfBirthGender}>
      <Text style={styles.login3}>Genêro:</Text>
      <View style={styles.radioContainer}>
        <RadioButton
          value="male"
          status={gender === 'male' ? 'checked' : 'unchecked'}
          onPress={() => handleGenderChange('male')}
          label="Masculino"
        />
        <RadioButton
          value="female"
          status={gender === 'female' ? 'checked' : 'unchecked'}
          onPress={() => handleGenderChange('female')}
          label="Feminino"
        />
      </View>
      </View>

      <View style={styles.dateOfBirthGender}>
      <Text style={styles.login3}>Data de Nascimento:</Text>
      <TextInput style={styles.login2}
        placeholder="dd/mm/yyyy"
        autoCapitalize="none"
        value={dataa}
        onChangeText={(text) => setData(text)}
      />
      </View>

      <TextInput style={styles.login2}
        placeholder="Senha"
        autoCapitalize="none"
        secureTextEntry
        value={senha}
        onChangeText={(text) => setSenha(text)}
      />

      <Pressable onPress={() => cadastrar(usuario, biblioteca)} style={styles.botao1} >
        <Text style={styles.botoes}>Cadastrar</Text>
      </Pressable>



      {isVisible && <Text style={styles.span}>{errorMessage}</Text>}

    </View>

  );

}

const styles = StyleSheet.create({

  container: {
    flex: 1,
    alignItems: 'center',
    backgroundColor: "#b288e6",
    justifyContent: "center"
  },
  header: {
    fontSize: 30,
    color: "#9747ff",
 
  },
  botoes: {
    fontSize: 20,
    backgroundColor: "#9747ff",
    color:"black",
    textAlign: "center",
  },
  login1: {
    borderColor: "#9747ff",
    borderWidth: 1,
    borderRadius: 10,
    width: '80%',
    padding: 10,
    margin: 5,
    fontSize: 25,
    marginTop: 20,
    textAlign: "center",
    color: "white",
    fontSize: 15,
  },
  login2: {
    borderColor: "#9747ff",
    borderColor: "#9747ff",
    borderWidth: 1,
    borderRadius: 10,
    width: '80%',
    padding: 10,
    margin: 5,
    fontSize: 25,
    marginTop: 20,
    textAlign: "center",
    color: "white",
    fontSize: 15,
  },
  login3: {
    borderColor: "#b288e6",
    borderWidth: 1,
    borderRadius: 10,
    width: '80%',
    padding: 10,
    margin: 5,
    fontSize: 25,
    marginTop: 20,
    color: "white",
    fontSize: 15,
  },
  botao1: {
    backgroundColor: "#9747ff",
    width: '80%',
    padding: 10,
    margin: 30,
    borderRadius: 30,
    alignItems: 'center',
  },
  span: {
    display: 'flex',
    fontSize: 15,
    color: '#271f31',
  },
  text: {
    marginTop: 5,
    fontSize: 20,
    color: '#9747ff',
  },
    dateOfBirthGender: {
    flexDirection: 'row', // Arrange elements horizontally
    justifyContent: 'space-between', // Distribute elements evenly with space between
    alignItems: 'center', // Align elements vertically
    width: '80%', // Match the width of other input fields
    margin: 10, // Add some margin for spacing
  },

  dateOfBirthLabel: {
    fontSize: 15,
  },

  datePickerContainer: {
    flex: 1, // Allow date picker to fill available space
  },
})

export default Cadastro;