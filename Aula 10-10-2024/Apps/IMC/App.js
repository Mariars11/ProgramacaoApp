import { StatusBar } from 'expo-status-bar';
import { useState } from 'react';
import { StyleSheet, Text, View, Image, TextInput, Button } from 'react-native';

export default function App() {
  let [peso, setPeso] = useState(0);
  let [altura, setAltura] = useState(0);
  let [imc, setIMC] = useState(0);
  let [textoIMC, setTextoIMC] = useState('');
  let urlIMGBalanca = './balanca.png';

  calcularIMC = () => {
    if(peso != 0 && altura != 0){
      setAltura(altura = altura / 100);

      let calculoIMC = Number((peso / Math.pow(altura, 2)).toFixed(2));
      setIMC(imc = calculoIMC);
      console.log(`Altura: ${altura}\nPeso:${peso}\nIMC:${imc}`);

      if(imc > 29.99){
        setTextoIMC("Obesidade");
      }
      else if(imc >= 25 && imc < 30){
        setTextoIMC("Acima do peso");
      }
      else if(imc < 25 && imc >= 18.5){
        setTextoIMC("Peso normal");
      }
      else if(imc >= 17 && imc < 18.5){
        setTextoIMC("Abaixo do peso");
      }
      else if(imc < 17){
        setTextoIMC("Muito abaixo do peso");
      }
    }
  };

  return (
    <View style={styles.container}>
      { textoIMC != null && textoIMC != '' ? <Text>{textoIMC}</Text> : <Text>Calcule seu IMC</Text> }
      <Image style={styles.imagem} source={require(urlIMGBalanca)}/>
      <TextInput
        onChangeText={setPeso}
        value={peso}
        placeholder='Digite seu peso em kg'
        keyboardType="numeric"
      />
      {/* { peso != null && peso != '' ? <Text>{peso}</Text> : null } */}
      <TextInput
        onChangeText={setAltura}
        value={altura}
        placeholder='Digite sua altura em cm'
        keyboardType="numeric"
      />
      <Button title="Calcular" color='blue' onPress={()=> {this.calcularIMC()}}/>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  imagem:{
    maxWidth: 250,
    maxHeight: 250,
    resizeMode: 'contain'
  },
});
