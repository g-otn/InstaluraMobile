import React, { Component } from 'react'
import {
  FlatList,
  StyleSheet,
  Platform
} from 'react-native'
import Post from './src/components/Post'

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

  like(idFoto) {
    const foto = this.state.fotos.find(foto => foto.id === idFoto)
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

    const novasFotos = this.state.fotos
      .map(foto => foto.id === fotoAtualizada.id ? fotoAtualizada : foto)

    this.setState({ fotos: novasFotos })
  }

  adicionarComentario(idFoto, valorComentario, inputComentario) {
    if (valorComentario === '')
      return

    const foto = this.state.fotos.find(foto => foto.id === idFoto)

    const novaLista = [...foto.comentarios, {
      id: valorComentario,
      login: 'meuUsuario',
      texto: valorComentario
    }]

    const fotoAtualizada = {
      ...foto,
      comentarios: novaLista
    }

    const novasFotos = this.state.fotos
      .map(foto => foto.id === fotoAtualizada.id ? fotoAtualizada : foto)

    this.setState({ fotos: novasFotos })

    inputComentario.clear()
  }

  render() {
    return (
      <FlatList
        style={styles.container}
        keyExtractor={item => item.id.toString()}
        data={this.state.fotos}
        renderItem={({ item }) =>
          <Post foto={item}
            likeCallback={this.like.bind(this)}
            comentarioCallback={this.adicionarComentario.bind(this)}
          />}
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
