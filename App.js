import React from 'react'
import {
  Image,
  View,
  Text,
  Dimensions,
  FlatList
} from 'react-native'

const width = Dimensions.get('screen').width

const App = () => {
  const fotos = [{ id: 1, usuario: 'rafael' }, { id: 2, usuario: 'alberto' }, { id: 3, usuario: 'gabriel' }]

  return (
    <FlatList
      style={{marginTop: 20}}
      keyExtractor={item => item.id.toString()} // https://stackoverflow.com/a/49577737
      data={fotos}
      renderItem={({item}) => {
        return (
          <View>
            <Text>{item.usuario}</Text>
            <Image source={require('./assets/img/alura.jpg')}
              style={{ width: width, height: width }}
            />
          </View>
        )
      }}
    />
  )
}

export default App
