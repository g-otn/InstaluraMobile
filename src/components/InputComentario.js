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

export default class InputComentario extends Component {

  constructor() {
    super();
    this.state = {
      valorComentario: ''
    };
  }

  render() {
    return (
      <View style={styles.container}>
        <TextInput style={styles.input}
            ref={input => this.inputComentario = input}
            onChangeText={texto => this.setState({valorComentario: texto})}
            placeholder="Adicione um comentário..."
            underlineColorAndroid="transparent" />

        <TouchableOpacity
            onPress={() => {
              this.props.comentaCallback(this.props.idFoto,
                  this.state.valorComentario, this.inputComentario);
              this.setState({valorComentario: ''});
            }}>
          <Image style={styles.icone}
              source={require('../../resources/img/send.png')} />
        </TouchableOpacity>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  icone: {
    height: 30,
    width: 30
  },
  container: {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
    borderBottomWidth: 1,
    borderBottomColor: '#ddd'
  },
  input: {
    flex: 1,
    height: 40
  }
});
