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
import InputComentario from './InputComentario'
import Likes from './Likes'

const width = Dimensions.get('screen').width

export default class Post extends Component {

  constructor(props) {
    super(props)
    this.state = {
      foto: this.props.foto, // === {...this.props.foto}
      valorComentario: ''
    }
  }

  like() {
    const { foto } = this.state
    let novaLista = []

    if (!foto.likeada) {
      novaLista = [
        ...foto.likers,
        { login: 'meuUsuario' }
      ]
    } else {
      novaLista = foto.likers.filter(liker => liker.login !== 'meuUsuario')
    }

    const fotoAtualizada = {
      ...foto,
      likeada: !foto.likeada,
      likers: novaLista
    }

    this.setState({ foto: fotoAtualizada })
  }

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

  adicionarComentario(valorComentario, inputComentario) {
    if (valorComentario === '')
      return

    const novaLista = [...this.state.foto.comentarios, {
      id: valorComentario,
      login: 'meuUsuario',
      texto: valorComentario
    }]

    const fotoAtualizada = {
      ...this.state.foto,
      comentarios: novaLista
    }

    this.setState({ foto: fotoAtualizada })

    inputComentario.clear()
  }

  render() {
    const { foto } = this.state

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
          <Likes foto={foto} likeCallback={this.like.bind(this)}/>

          {this.exibeLegenda(foto)}

          <FlatList
            data={foto.comentarios}
            keyExtractor={item => item.id.toString()}
            renderItem={({ item }) =>
              <View style={styles.comentario}>
                <Text style={styles.tituloComentario}>{item.login}</Text>
                <Text>{item.texto}</Text>
              </View>
            } />

          <InputComentario comentarioCallback={this.adicionarComentario.bind(this)} />
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