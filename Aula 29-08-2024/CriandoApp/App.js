import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Image } from 'react-native';

function App() {
  return (
    <View style={styles.container}>
      <Text style={{fontSize: 24, color: 'blue'}}>Hello, World!</Text>
      <Imagem 
        largura={200}
        comprimento={200}
      />
      <StatusBar style="auto" />
    </View>
  );
}

export default App 

function Imagem(props){
  const urlImg = 'https://th.bing.com/th/id/OIP.fTeYnQzCd0ME85Z2IZ-ewQHaHa?w=186&h=186&c=7&r=0&o=5&pid=1.7'
  return (
     <Image 
        source={{uri: urlImg}} 
        height={props.largura} 
        width={props.comprimento}
     />
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
