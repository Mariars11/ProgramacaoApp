import React, {useState} from 'react';
import {View, Switch, StyleSheet, SafeAreaView, Text} from 'react-native';
import { Picker } from '@react-native-picker/picker';
import Slider from '@react-native-community/slider';

function App() {
  const [produtoSelecionado, setProdutoSelecionado] = useState(0);
  const [produtos, setProdutos] = useState([
    {key: 1, nome: 'Laptop', preco: 3000},
    {key: 2, nome: 'Monitor', preco: 300},
    {key: 3, nome: 'Mouse', preco: 50},
    {key: 4, nome: 'HeadSet', preco: 350},

  ]);
  const [value, setValue] = useState(0)
  const [isEnabled, setIsEnabled] = useState(false);
  const toggleSwitch = () => setIsEnabled(previousState => !previousState);

  let produtosItem = produtos.map((value, key) => {
    return (
      <Picker.Item 
          key={key}
          value={key}
          label={value.nome} />
    )
  })

  return (
    <View style={styles.container}>
      <SafeAreaView>
          <Text style={{fontSize: 24}}>Picker</Text>
          <Picker selectedValue={produtoSelecionado} onValueChange={(item) => setProdutoSelecionado(item)}>{produtosItem}</Picker>
          <Text>{produtos[produtoSelecionado].nome}</Text>
          <Text>{produtos[produtoSelecionado].preco}</Text>
          
          <Text>Slider:</Text>
          <Slider 
            minimumValue={0}
            maximumValue={100}
            value={value}
            onValueChange={(value) => setValue(value)}
          />
          <Text>{value.toFixed()}</Text>
          <Switch
            onValueChange={toggleSwitch}
            value={isEnabled}
          />
      </SafeAreaView>
    </View>
  )
  
}
export default App;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    justifyContent: 'center',
  },
});
