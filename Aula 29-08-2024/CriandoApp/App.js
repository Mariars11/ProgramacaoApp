import { StatusBar } from 'expo-status-bar';
import {useState} from 'react';
import { StyleSheet, Text, View, Image, TextInput} from 'react-native';

function App() {
  return (
    <View style={styles.container}>
      <Header/>
      <ImagemLogo 
        largura={200}
        comprimento={200}
      />
      <StatusBar style="auto" />
    </View>
  );
}

export default App 

function ImagemLogo(props){
  const urlImg = 'https://th.bing.com/th/id/OIP.fTeYnQzCd0ME85Z2IZ-ewQHaHa?w=186&h=186&c=7&r=0&o=5&pid=1.7'
  return (
     <Image 
        style={{borderRadius: 100, marginTop: 10}}
        source={{uri: urlImg}} 
        height={props.largura} 
        width={props.comprimento}
     />
  )
}

function Header(){
  let inputName = '';
  const [nome, setNome] = useState('');
  // const nome = props.nome;
  if(nome != null && nome != '') {
    return (
      <View>        
        <Text style={{fontSize: 24, color: 'black', fontWeight: 'bold'}}>Bem-Vind@, {nome}</Text>
      </View>
     )   
  }
  else{
    return (
      <TextInput
          style={{height: 40}}
          placeholder="Digite seu nome!"
          onChangeText={n => inputName = n}
          onSubmitEditing={() => setNome(inputName)}
          defaultValue={nome}
        />
    )
  }
  
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
