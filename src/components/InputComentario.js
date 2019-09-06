import React, { Component } from 'react'
import {
  Image,
  View,
  StyleSheet,
  TouchableOpacity,
  TextInput
} from 'react-native'

export default class InputComentario extends Component {

  constructor() {
    super()
    this.state = {
      valorComentario: ''
    }
  }

  render() {
    return (
      <View style={styles.novoComentario}>
        <TextInput style={styles.input}
          placeholder="Adicione um comentário..."
          ref={input => this.inputComentario = input}
          onChangeText={texto => this.setState({ valorComentario: texto })}
          underlineColorAndroid="transparent" />
        <TouchableOpacity onPress={() => {
          this.props.comentarioCallback(this.state.valorComentario, this.inputComentario)
          this.setState({ valorComentario: '' })
        }}>
          <Image source={require('../../assets/img/send.png')}
            style={styles.icone} />
        </TouchableOpacity>
      </View>
    )
  }
  
}

const styles = StyleSheet.create({
  novoComentario: {
    flexDirection: 'row',
    alignItems: 'center',
    borderBottomWidth: 1,
    borderBottomColor: '#ddd'
  },
  input: {
    flex: 1,
    height: 40,
    fontSize: 18
  },
  icone: {
    width: 40,
    height: 40
  }
})