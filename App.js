import React, {useState} from 'react'
import{
  Text,
  View,
  StyleSheet,
  Image,
  TouchableOpacity
} from 'react-native'

import Heads from './assets/Heads.png'
import Tails from './assets/Tails.png'

const App = () =>{
  const [uri,setUri] = useState(Heads)

  const coinFlipped = () =>{
    let randm = Math.floor(Math.random() * 2) + 1

    switch(randm){
      case 1: setUri(Heads)
              break;
      case 2: setUri(Tails)
              break;
      default: setUri(Heads)
    }
  }

  return(
    <View style={styles.container}>
      <TouchableOpacity onPress={coinFlipped}>
        <Text style={styles.txt}>Flip Coin</Text>
      </TouchableOpacity>
      <Image
        style={styles.img}
        source={uri}
      />
    </View>
  )
}

export default App

const styles = StyleSheet.create({
  container:{
    flex: 1,
    alignItems:'center',
    justifyContent:'center'
  },
  img:{
    width: 200,
    height: 200
  },
  txt:{
    fontSize:26,
    color:'#C2185B',
    textTransform:'uppercase',
    marginTop: 30,
    marginBottom: 30,
    fontStyle: 'italic',
    paddingHorizontal: 10,
    fontWeight: 'bold'
  }
})