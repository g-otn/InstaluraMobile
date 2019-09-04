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
          <Image source={{uri: this.props.foto.urlPerfil}}
            style={styles.fotoDePerfil}
          />
          <Text>{this.props.foto.loginUsuario}</Text>
        </View>
        <Image source={{uri: this.props.foto.urlFoto}}
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