import React, { Component } from 'react';
import {
  StyleSheet,
  Text,
  View,
  Image,
  Dimensions,
  TouchableOpacity
} from 'react-native';

export default class Post extends Component {

  constructor(props) {
    super(props);
    this.state = {
      foto: props.foto
    }
  }

  carregaIcone(likeada) {
    return likeada ? require('../../resources/img/s2-checked.png')
        : require('../../resources/img/s2.png')
  }

  exibeLikes(likers) {
    if(likers.length <= 0)
      return;

    return (
      <Text style={styles.likes}>
        {likers.length} {likers.length > 1 ? 'curtidas' : 'curtida'}
      </Text>
    );
  }

  exibeLegenda(foto) {
    if(foto.comentario === "")
      return;

    return (
      <View style={styles.comentario}>
        <Text style={styles.tituloComentario}>{foto.loginUsuario}</Text>
        <Text>{foto.comentario}</Text>
      </View>
    );
  }

  like() {
    const { foto } = this.state;

    let novaLista = [];
    if(!foto.likeada) {
      novaLista = [
        ...foto.likers,
        {login: foto.loginUsuario}
      ];
    } else {
      novaLista = foto.likers.filter(liker => {
        return liker.login !== foto.loginUsuario;
      });
    }

    const fotoAtualizada = {
      ...foto,
      likeada: !foto.likeada,
      likers: novaLista
    };

    this.setState({foto: fotoAtualizada});
  }

  render() {
    const { foto } = this.state;
    return (
      <View style={styles.container}>
        <View style={styles.cabecalho}>
          <Image style={styles.fotoPerfil}
              source={{uri: foto.urlPerfil}} />
          <Text>{foto.loginUsuario}</Text>
        </View>

        <Image style={styles.foto}
            source={{uri: foto.urlFoto}} />

        <View style={styles.rodape}>
          <TouchableOpacity style={styles.botaoDeLike} onPress={this.like.bind(this)}>
            <Image style={styles.icone}
              source={this.carregaIcone(foto.likeada)} />
          </TouchableOpacity>

          {this.exibeLikes(foto.likers)}
          {this.exibeLegenda(foto)}
        </View>

      </View>
    );
  }
}

const width = Dimensions.get('window').width;
const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginBottom: 5
  },
  cabecalho: {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
    margin: 10,
    height: 40
  },
  fotoPerfil: {
    marginRight: 10,
    height: 40,
    width: 40,
    borderRadius: 20
  },
  foto: {
    width: width,
    height: width
  },
  rodape: {
    margin: 10,
  },
  icone: {
    height: 30,
    width: 30
  },
  botaoDeLike: {
    marginBottom: 10
  },
  likes: {
    fontWeight: 'bold'
  },
  comentario: {
    flexDirection: 'row'
  },
  tituloComentario: {
    marginRight: 5,
    fontWeight: 'bold',
  }
});
