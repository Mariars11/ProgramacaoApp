import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Image } from 'react-native';

function App() {
  let nome = 'Maria Clara'
  return (
    <View style={styles.container}>
      <Header nome={nome}/>
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

function Header(props){
  const nome = props.nome;
  return (
      <Text style={{fontSize: 24, color: 'black', fontWeight: 'bold'}}>Bem-Vind@, {nome}</Text>
    )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
