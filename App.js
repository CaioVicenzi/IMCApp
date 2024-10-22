import { StatusBar } from 'expo-status-bar';
import { useState } from 'react';
import { StyleSheet, Text, View, TextInput, Button, Alert } from 'react-native';

export default function App() {
  const [peso, setPeso] = useState(0)
  const  [altura, setAltura] = useState(0.0)
  const [imc, setImc] = useState(0)
  const [imcCalculado, setImcCalculado] = useState(false)
  const [showAlert, setShowAlert] = useState(false)

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Calculador de IMC!</Text>

      <Text>Digite seu peso</Text>
      <TextInput
        onChangeText={setPeso}
        value={peso}
        style={styles.input}
        keyboardType='numeric'
        
      />

      <Text>Digite a sua altura</Text>
      <TextInput 
        onChangeText={setAltura}
        value={altura}
        style={styles.input}
        keyboardType='numeric'
      />


      <Button
        title='Submeter'
        onPress={calcularIMC}
      />

      <Button
        title='Limpar'
        onPress={limpar}
      />


    {
      imcCalculado? (
        <View style={styles.rectangleResult}>
          <Text>{`O seu imc é ${imc.toFixed(2) }`}</Text>
        </View>
      ) : null
    }
      

      <StatusBar style="auto" />
    </View>
  );

  function calcularIMC () {
    if (altura <= 0 || peso <= 0) {
      Alert.alert(
        'Erro!',
        'Valores preenchidos incorretamente.'
      )
    }

    setImcCalculado(true)
    setImc(peso / (altura * altura))
  }

  function limpar () {
    setImc(0)
    setAltura(0)
    setPeso(0)
    setImcCalculado(false)
  }
}



const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'top',
    padding: 100
  },

  input: {
    height: 40,
    margin: 12,
    borderWidth: 1,
    padding: 10,
    width: 200,
    borderRadius: 10
  },

  title: {
    fontSize: 21,
    fontWeight: 'bold',
    paddingBottom: 25,
    color: 'darkOrange'
  },

  rectangleResult: {
    width: 300,
    height: 75,
    backgroundColor: 'orange',
    borderRadius: 20,
    position: 'absolute',
    bottom: 50,
    alignItems: 'center',
    justifyContent: 'center'
  }
});
