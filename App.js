import React from 'react'
import {
  Image,
  View,
  Text,
  Dimensions,
  FlatList,
  StyleSheet
} from 'react-native'
import Post from './src/components/Post'

const width = Dimensions.get('screen').width

const App = () => {
  const fotos = [{ id: 1, usuario: 'rafael' }, { id: 2, usuario: 'alberto' }, { id: 3, usuario: 'gabriel' }]

  return (
    <FlatList
      style={styles.container}
      keyExtractor={item => item.id.toString()} // https://stackoverflow.com/a/49577737
      data={fotos}
      renderItem={({ item }) => <Post foto={item} />}
    />
  )
}

const styles = StyleSheet.create({
  container: {
    marginTop: 30
  }
})

export default App
