import React, {Component} from 'react'
import {
  Image,
  View,
  Text,
  Dimensions,
  StyleSheet
} from 'react-native'

const width = Dimensions.get('screen').width

export default class Post extends Component {
  render() {
    return (
      <View>
        <View style={styles.cabecalho}>
          <Image source={require('../../assets/img/alura.jpg')}
            style={styles.fotoDePerfil}
          />
          <Text>{this.props.foto.usuario}</Text>
        </View>
        <Image source={require('../../assets/img/alura.jpg')}
          style={styles.foto}
        />
      </View>
    )
  }
}

const styles = StyleSheet.create({
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