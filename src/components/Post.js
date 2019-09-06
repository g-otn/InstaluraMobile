import React, { Component } from 'react'
import {
  Image,
  View,
  Text,
  Dimensions,
  StyleSheet,
  TouchableOpacity,
  TextInput,
  FlatList
} from 'react-native'
import Comentario from './Comentario'
import InputComentario from './InputComentario'
import Likes from './Likes'

const width = Dimensions.get('screen').width

export default class Post extends Component {

  exibeLegenda(foto) {
    if (foto.comentario === '')
      return

    return (
      <View style={styles.comentario}>
        <Text style={styles.tituloComentario}>{foto.loginUsuario}</Text>
        <Text>{foto.comentario}</Text>
      </View>
    )
  }

  render() {
    const { foto, likeCallback, comentarioCallback } = this.props

    return (
      <View>
        <View style={styles.cabecalho}>
          <Image source={{ uri: foto.urlPerfil }}
            style={styles.fotoDePerfil} />
          <Text>{foto.loginUsuario}</Text>
        </View>

        <Image source={{ uri: foto.urlFoto }}
          style={styles.foto}
        />

        <View style={styles.rodape}>
          <Likes foto={foto} likeCallback={() => {
            likeCallback(foto.id)
          }} />

          {this.exibeLegenda(foto)}

          <FlatList
            data={foto.comentarios}
            keyExtractor={item => item.id.toString()}
            renderItem={({ item }) =>
              <Comentario usuario={item.login} texto={item.texto}/>
            } />

          <InputComentario idFoto={foto.id}
            comentarioCallback={comentarioCallback} />
        </View>
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
  },
  rodape: {
    margin: 10
  },
  comentario: {
    flexDirection: 'row'
  },
  tituloComentario: {
    fontWeight: 'bold',
    marginRight: 5
  }
})