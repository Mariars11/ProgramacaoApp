import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Button, Pressable, ImageBackground, Image } from 'react-native';

function App() {
  let ViewButtonsTop = (() => {
    return (
      <View style={styles.viewBtns}>
        <Pressable><Text>🔴</Text></Pressable>
        <Pressable><Text>🟢</Text></Pressable>
        <Pressable><Text>🟡</Text></Pressable>
        <Pressable><Text>🔵</Text></Pressable>
        <Pressable><Text>🟣</Text></Pressable>
      </View>
    )
  });
  
  let ViewImageButtonsInside = (() => {
    const imageURL = {uri: 'https://png.pngtree.com/png-clipart/20230412/original/pngtree-compass-vector-navigation-png-image_9048866.png'};
    return (
      <View style={styles.viewIMG}>
        <ImageBackground style={styles.image} source={imageURL}>
          <View style={styles.viewBtnsTopIMG}>
            <Pressable style={styles.pressBtnImg}><Text>Top Left</Text></Pressable>
            <Pressable style={styles.pressBtnImg}><Text>Top Right</Text></Pressable>
          </View>
          <View style={styles.viewBtnBottomImg}>
            <Pressable style={styles.pressBtnImg}><Text>Bottom Right</Text></Pressable>
          </View>
        </ImageBackground>
      </View>
    )
  });
  let Card = (() =>{
    const imageURl = {uri: 'https://ui-patterns.com/assets/products/persuasive-patterns-card-deck-f4c72dc7fefff1b02fee63df9a80bef0bf7a8c3ab61e03610e29bc6852b16e83.png'};
    return (
      <View style={styles.viewCard}> 
        <Text>Card Content</Text>
      </View>
    );
  });
  let ViewTextButton = (() => {
    return (
      <View style={styles.viewTextBtn}>
        <Text>Design</Text>
        <Pressable style={styles.pressBtnImg}><Text>❓</Text></Pressable>
      </View>
    )
  });
  let ViewCards = (() => {
    return (
      <View style={styles.viewCards}>
        <Card />
        <Card />
        <Card />
      </View>
    )
  });
  let ViewButtonsBottom = (() => {
    return (
      <View style={styles.viewBtnsBottom}>
        <Pressable><Text>🟢</Text></Pressable>
        <Pressable><Text>🟡</Text></Pressable>
        <Pressable><Text>🔵</Text></Pressable>
        <Pressable><Text>🟣</Text></Pressable>
      </View>
    )
  });
  return (
    <View style={styles.container}>
      <ViewButtonsTop />
      <ViewImageButtonsInside />
      <ViewTextButton />
      <ViewCards />
      <ViewButtonsBottom />
    </View>
  );
}

export default App;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
  },
  image: {
    flex: 1,
    resizeMode: 'contain'
  },
  imgCard: {
    resizeMode: 'contain',
  },
  viewCard:{
    borderColor: 'black',
    borderWidth: 2,
    width: 80,
    marginTop: 20,
    height: 150
  },
  viewBtnsTopIMG:{
    flexDirection: 'row',
    gap: 150,
    alignContent: 'flex-start',
    justifyContent: 'center',
    paddingTop: 20
  },
  viewBtnBottomImg:{
    paddingTop: 250,
    justifyContent: 'center',
    alignSelf: 'flex-end',
  },
  viewTextBtn:{
    marginTop: 50,
    flexDirection: 'row',
    alignContent: 'space-evenly',
    gap: 200,
  },
  viewCards:{
    flexDirection: 'row',
    alignContent: 'space-evenly',
    gap: 30,
    height: 300,
    width: 300
  },
  viewBtns:{
    flexDirection: 'row',
    gap: 60,
    marginTop: 60
  },
  viewBtnsBottom:{
    flexDirection: 'row',
    gap: 60,
    marginTop: 10
  },
  pressBtnImg:{
    alignItems: 'center',
    justifyContent: 'center',
    paddingVertical: 5,
    paddingHorizontal: 15,
    borderRadius: 4,
    elevation: 3,
    fontWeight: 'bold',
    backgroundColor: 'white',
  },
  viewIMG:{
    marginTop: 40,
    width: 350,
    height: 350
  }
});
