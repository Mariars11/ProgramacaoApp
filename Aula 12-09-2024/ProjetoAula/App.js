import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, ScrollView, FlatList} from 'react-native';
import { useState } from 'react';

function App() {

  let [obj, setObj] = useState([
    {id: 1, nome: 'maria', idade: 22, email: 'maria@gmail.com'},
    {id: 2, nome: 'julia', idade: 18, email: 'julia@gmail.com'},
    {id: 3, nome: 'pedro', idade: 15, email: 'pedro@gmail.com'},
    {id: 4, nome: 'joao', idade: 65, email: 'joao@gmail.com'},
    {id: 5, nome: 'fernando', idade: 87, email: 'fernando@gmail.com'},
    {id: 6, nome: 'gloria', idade: 7, email: 'gloria@gmail.com'},
    {id: 7, nome: 'luis', idade: 9, email: 'luis@gmail.com'},
    {id: 8, nome: 'kauan', idade: 31, email: 'kauan@gmail.com'}

  ])
  return (
    <View style={styles.container}>
      {/* <ScrollView horizontal  showsVerticalScrollIndicator={false}>
        <View style={{flex: 1, backgroundColor: 'red', width: 100, height: 1000}}></View>
        <View style={{flex: 1, backgroundColor: 'yellow', width: 100, height: 1000}}></View>
        <View style={{flex: 1, backgroundColor: 'blue', width: 100, height: 1000}}></View>
        <View style={{flex: 1, backgroundColor: 'green', width: 100, height: 1000}}></View>
        <View style={{flex: 1, backgroundColor: 'hotpink', width: 100, height: 1000}}></View>
        <View style={{flex: 1, backgroundColor: 'rebeccapurple', width: 100, height: 1000}}></View>
      </ScrollView> */}

     <FlatList 
        data={obj}
        renderItem={({item}) => <User data={item} />}
     />

    </View>
  );
}
export default App;

function User(props)  {
  return(
    <View>
        <Text style={styles.title}>Usuario: {props.data.id}</Text>
        <Text style={styles.text}>{props.data.nome}</Text>
        <Text style={styles.text}>{props.data.idade}</Text>
        <Text style={styles.text}>{props.data.email}</Text>
    </View>
  )
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: 100,
    marginLeft: 20
  },
  title: {
    fontWeight: 'bold',
    fontSize: 25,
    marginTop: 20
  },
  text:{
    fontSize: 15,
  }
});
