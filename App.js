import React, { Component } from 'react'
import {
  Image,
  View,
  Text,
  Dimensions,
  FlatList,
  StyleSheet,
  Platform
} from 'react-native'
import Post from './src/components/Post'

const width = Dimensions.get('screen').width

export default class App extends Component {

  constructor() {
    super()
    this.state = {
      fotos: []
    }
  }

  componentDidMount() {
    fetch('https://instalura-api.herokuapp.com/api/public/fotos/rafael')
      .then(resposta => resposta.json())
      .then(json => this.setState({ fotos: json }))
  }

  render() {
    return (
      <FlatList
        style={styles.container}
        keyExtractor={item => item.id.toString()} // https://stackoverflow.com/a/49577737
        data={this.state.fotos}
        renderItem={({ item }) => <Post foto={item} />}
      />
    )
  }
}

const margem = Platform.OS === 'ios' ? 30 : 0
const styles = StyleSheet.create({
  container: {
    marginTop: margem
  }
})
