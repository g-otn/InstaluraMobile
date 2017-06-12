import React, { Component } from 'react';
import {
  StyleSheet,
  AsyncStorage,
  FlatList,
} from 'react-native';

import Post from './Post';

export default class Feed extends Component {

  constructor() {
    super();
    this.state = {
      fotos: []
    }
  }

  componentDidMount() {
    const uri = 'http://localhost:8080/api/fotos';

    AsyncStorage.getItem('token')
      .then(token => {
        const requestInfo = {
          headers: new Headers({
            'X-AUTH-TOKEN': token
          })
        };
        return requestInfo;
      })
      .then(requestInfo => fetch(uri, requestInfo))
      .then(response => response.json())
      .then(json => this.setState({fotos: json}));
  }

  buscaPorId(idFoto) {
    return this.state.fotos.find(foto => foto.id === idFoto);
  }

  atualizaFotos(fotoAtualizada) {
    const fotos = this.state.fotos
        .map(foto => foto.id === fotoAtualizada.id ? fotoAtualizada : foto);

    this.setState({fotos});
  }

  like(idFoto) {
    const foto = this.buscaPorId(idFoto);

    let novaLista = [];
    if(!foto.likeada) {
      novaLista = [
        ...foto.likers,
        {login: 'meuUsuario'}
      ];
    } else {
      novaLista = foto.likers.filter(liker => {
        return liker.login !== 'meuUsuario';
      });
    }

    const fotoAtualizada = {
      ...foto,
      likeada: !foto.likeada,
      likers: novaLista
    };

    this.atualizaFotos(fotoAtualizada);
  }

  comenta(fotoId, valorComentario, inputComentario) {
    if(valorComentario === '')
      return;

    const foto = this.buscaPorId(fotoId);

    const novaLista = [...foto.comentarios, {
      id: valorComentario,
      login: 'meuUsuario',
      texto: valorComentario
    }];

    const fotoAtualizada = {...foto,
      comentarios: novaLista
    };

    this.atualizaFotos(fotoAtualizada);
    inputComentario.clear();
  }

  render() {
    return (
      <FlatList
          data={this.state.fotos}
          keyExtractor={ item => item.id }
          renderItem={ ({item}) =>
              <Post foto={item}
                  likeCallback={this.like.bind(this)}
                  comentaCallback={this.comenta.bind(this)} />
          }/>
    );
  }
}
