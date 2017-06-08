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

  constructor(props) {
    super(props);
    this.state = {
      foto: props.foto
    }
  }

  exibeLegenda(foto) {
    if(foto.comentario === "")
      return;

    return <Comentario usuario={foto.loginUsuario} texto={foto.comentario} />
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

  comenta(valorComentario, inputComentario) {
    if(valorComentario === '')
      return;

    const novaLista = [...this.state.foto.comentarios, {
      id: valorComentario,
      login: 'meuUsuario',
      texto: valorComentario
    }];

    const fotoAtualizada = {...this.state.foto,
      comentarios: novaLista
    };

    this.setState({foto: fotoAtualizada});
    inputComentario.clear();
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
          <Likes foto={foto} likeCallback={this.like.bind(this)}/>

          {this.exibeLegenda(foto)}

          {foto.comentarios.map(comentario =>
            <Comentario
                key={comentario.id}
                usuario={comentario.login}
                texto={comentario.texto} />
          )}

          <InputComentario comentaCallback={this.comenta.bind(this)}/>
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
