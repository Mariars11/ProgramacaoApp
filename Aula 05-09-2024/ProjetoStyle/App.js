import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Button } from 'react-native';
import {useEffect, useState} from 'react';

export default function App() {
  let [count, setCount] = useState(0);
  let countEveryPress = count;
  useEffect(() => {
    console.log(countEveryPress);
  }, [countEveryPress])
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Bom dia!</Text>
      <Text style={styles.count}>Valor: {count}</Text>
      <Button
        title='Clique' 
        onPress={() => {
          setCount(count + 1)
        }}
      />
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
    height: 100
  },
  title:{
    fontWeight: 'bold',
    color: 'blue',
    fontSize: 30
  },
  count:{
    fontWeight: 'bold',
    color: 'black',
    fontSize: 22
  }
});
