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

  like() {
    const fotoAtualizada = {...this.state.foto,
      likeada: !this.state.foto.likeada
    };

    this.setState({foto: fotoAtualizada});
  }

  render() {
    const { foto } = this.state;
    return (
      <View>
        <View style={styles.cabecalho}>
          <Image style={styles.fotoPerfil}
              source={{uri: foto.urlPerfil}} />
          <Text>{foto.loginUsuario}</Text>
        </View>

        <Image style={styles.foto}
            source={{uri: foto.urlFoto}} />

        <View style={styles.rodape}>
          <TouchableOpacity onPress={this.like.bind(this)}>
            <Image style={styles.icone}
              source={this.carregaIcone(foto.likeada)} />
          </TouchableOpacity>
        </View>
      </View>
    );
  }
}

const width = Dimensions.get('window').width;
const styles = StyleSheet.create({
  cabecalho: {
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
    height: 40
  },
  icone: {
    height: 30,
    width: 30
  }
});
