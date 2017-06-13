import React, { Component } from 'react';
import {
  StyleSheet,
  Text,
  View,
  Image,
  TextInput,
  Dimensions,
  TouchableOpacity,
} from 'react-native';
import Likes from './Likes';
import Comentario from './Comentario';
import InputComentario from './InputComentario';

export default class Post extends Component {

  exibeLegenda(foto) {
    if(foto.comentario === "")
      return;

    return <Comentario usuario={foto.loginUsuario} texto={foto.comentario} />
  }

  render() {
    const { foto } = this.props;
    return (
      <View style={styles.container}>
        <TouchableOpacity style={styles.cabecalho}
            onPress={() => this.props.verPerfilCallback(foto)}>
          <Image style={styles.fotoPerfil}
              source={{uri: foto.urlPerfil}} />
          <Text>{foto.loginUsuario}</Text>
        </TouchableOpacity>

        <Image style={styles.foto}
            source={{uri: foto.urlFoto}} />

        <View style={styles.rodape}>
          <Likes foto={foto} likeCallback={this.props.likeCallback}/>

          {this.exibeLegenda(foto)}

          {foto.comentarios.map(comentario =>
            <Comentario
                key={comentario.id}
                usuario={comentario.login}
                texto={comentario.texto} />
          )}

          <InputComentario idFoto={foto.id} comentaCallback={this.props.comentaCallback}/>
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
});
