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

export default class Comentario extends Component {

  render() {
    return (
      <View style={styles.comentario}>
        <Text style={styles.tituloComentario}>{this.props.usuario}</Text>
        <Text>{this.props.texto}</Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  comentario: {
    marginBottom: 5,
    flexDirection: 'row'
  },
  tituloComentario: {
    marginRight: 5,
    fontWeight: 'bold',
  }
});
