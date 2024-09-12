import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, ScrollView } from 'react-native';

export default function App() {
  return (
    <View style={styles.container}>
      <ScrollView horizontal  showsVerticalScrollIndicator={false}>
        <View style={{flex: 1, backgroundColor: 'red', width: 100, height: 1000}}></View>
        <View style={{flex: 1, backgroundColor: 'yellow', width: 100, height: 1000}}></View>
        <View style={{flex: 1, backgroundColor: 'blue', width: 100, height: 1000}}></View>
        <View style={{flex: 1, backgroundColor: 'green', width: 100, height: 1000}}></View>
        <View style={{flex: 1, backgroundColor: 'pink', width: 100, height: 1000}}></View>
        <View style={{flex: 1, backgroundColor: 'red', width: 100, height: 1000}}></View>
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
