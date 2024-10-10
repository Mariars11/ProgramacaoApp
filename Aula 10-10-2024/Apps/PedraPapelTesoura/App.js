import { StatusBar } from 'expo-status-bar';
import { useState } from 'react';
import { StyleSheet, Text, View, Image } from 'react-native';
import { Picker } from '@react-native-picker/picker';

export default function App() {
  const [jogadaSelecionada, setJogadaSelecionada] = useState(0);
  const [jogadas, setJogadas] = useState([
    {key: 1, nome: 'Escolha', urlIMG: require('./vazio.png')},
    {key: 2, nome: 'Pedra', urlIMG: require('./pedra.png')},
    {key: 3, nome: 'Papel', urlIMG: require('./papel.png')},
    {key: 4, nome: 'Tesoura', urlIMG: require('./tesoura.png')},
  ]);
  // changeJogada = (jogada) =>{
  //   setUrlImagem(jogadas[jogada].urlIMG);
  // }
  let jogadasItem = jogadas.map((value, key) => {
    return (
      <Picker.Item 
          key={key}
          value={key}
          label={value.nome} />
    )
  })
  return (
    <View style={styles.container}>
      <Text>Escolha sua jogada:</Text>
      <Picker style={{width: 150}} selectedValue={jogadaSelecionada} onValueChange={(item) => {setJogadaSelecionada(item)}}>{jogadasItem}</Picker>
      <Text>{jogadas[jogadaSelecionada].nome}</Text>
      <Image style={styles.imagem} source={jogadas[jogadaSelecionada].urlIMG}/>
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
    maxWidth: 50,
    maxHeight: 50,
    resizeMode: 'contain'
  },
});
