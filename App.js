import React from 'react'
import {
  Image,
  View,
  Text,
  Dimensions,
  FlatList,
  StyleSheet
} from 'react-native'

const width = Dimensions.get('screen').width

const App = () => {
  const fotos = [{ id: 1, usuario: 'rafael' }, { id: 2, usuario: 'alberto' }, { id: 3, usuario: 'gabriel' }]

  return (
    <FlatList
      style={styles.container}
      keyExtractor={item => item.id.toString()} // https://stackoverflow.com/a/49577737
      data={fotos}
      renderItem={({item}) => {
        return (
          <View>
            <View style={styles.cabecalho}>
              <Image source={require('./assets/img/alura.jpg')}
                style={styles.fotoDePerfil}
              />
              <Text>{item.usuario}</Text>
            </View>
            <Image source={require('./assets/img/alura.jpg')}
              style={styles.foto}
            />
          </View>
        )
      }}
    />
  )
}

const styles = StyleSheet.create({
  container: {
    marginTop: 20
  },
  cabecalho: {
    margin: 10, 
    flexDirection: 'row', 
    alignItems: 'center'
  },
  fotoDePerfil: {
    marginRight: 10, 
    borderRadius: 25, 
    width: 50, 
    height: 50 
  },
  foto: { 
    width: width, 
    height: width 
  }
})

export default App
