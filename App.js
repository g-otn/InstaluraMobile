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

  buscaPorId(idFoto) {
    return this.state.fotos
      .find(foto => foto.id === idFoto)
  }

  atualizarFotos(fotoAtualizada) {
    const fotos = this.state.fotos.map(foto =>
      foto.id === fotoAtualizada.id ? fotoAtualizada : foto);
    this.setState({ fotos });
  }

  like(idFoto) {
    const foto = this.buscaPorId(idFoto)
    
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

    this.atualizarFotos(fotoAtualizada)
  }

  adicionarComentario(idFoto, valorComentario, inputComentario) {
    if (valorComentario === '')
      return

    const foto = this.buscaPorId(idFoto)

    const novaLista = [...foto.comentarios, {
      id: valorComentario,
      login: 'meuUsuario',
      texto: valorComentario
    }]

    const fotoAtualizada = {
      ...foto,
      comentarios: novaLista
    }

    this.atualizarFotos(fotoAtualizada)

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
