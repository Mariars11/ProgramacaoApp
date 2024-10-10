import { StatusBar } from 'expo-status-bar';
import {useState} from 'react';
import { StyleSheet, Text, View, Image, TextInput, Button } from 'react-native';

export default function App() {
  let [precoGasolina, setPrecoGasolina] = useState(0.0);
  let [precoAlcool, setPrecoAlcool] = useState(0.0);
  let [melhorCombustivel, setMelhorCombustivel] = useState(0);
  let [textoCombustivel, setTextoCombustivel] = useState('');
  let urlIMGCarro = './carro.png';

  calcularMelhorPreco = () => {
    if(precoGasolina != 0 && precoAlcool != 0){
        if((precoAlcool / precoGasolina) <= 0.7){
          setTextoCombustivel("Melhor abastecer com álcool");
        }
        else{
          setTextoCombustivel("Melhor abastecer com gasolina");
        }
    }
  };

  return (
    <View style={styles.container}>
      { textoCombustivel != null && textoCombustivel != '' ? <Text>{textoCombustivel}</Text> : <Text>Calcule o melhor combustível</Text> }
      <Image style={styles.imagem} source={require(urlIMGCarro)}/>
      <TextInput
        onChangeText={setPrecoGasolina}
        value={precoGasolina}
        placeholder='Digite o preço da gasolina'
        keyboardType="numeric"
      />
      {/* { peso != null && peso != '' ? <Text>{peso}</Text> : null } */}
      <TextInput
        onChangeText={setPrecoAlcool}
        value={precoAlcool}
        placeholder='Digite o preço do álcool'
        keyboardType="numeric"
      />
      <Button title="Calcular" color='blue' onPress={()=> {this.calcularMelhorPreco()}}/>
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

