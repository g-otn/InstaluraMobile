import React, { Component } from 'react'
import {
  View,
  Text,
  Dimensions,
  StyleSheet,
  TextInput,
  Button
} from 'react-native'
import AsyncStorage from '@react-native-community/async-storage';

const width = Dimensions.get('screen').width

export default class Login extends Component {

  constructor() {
    super()
    this.state = {
      usuario: '',
      senha: '',
      mensagem: ''
    }
  }

  efetuarLogin() {
    const uri = 'https://instalura-api.herokuapp.com/api/public/login'

    const requestInfo = {
      method: 'POST',
      body: JSON.stringify({
        login: this.state.usuario,
        senha: this.state.senha
      }),
      headers: {
        'Content-type': 'application/json'
      }
    }

    this.setState({ mensagem: '' })

    fetch(uri, requestInfo)
      .then(response => {
        if (response.ok) {
          return response.text()
        } else {
          throw new Error(`Não foi possível efetuar Login (${response.status})`)
        }
      })
      .then(token => {
        AsyncStorage.setItem('token', token)
        AsyncStorage.setItem('usuario', this.state.usuario)
      })
      .catch(e => this.setState({ mensagem: e.message }))
  }

  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.titulo}>Instalura</Text>

        <View style={styles.form}>
          <TextInput style={styles.input} placeholder="Usuário"
            onChangeText={texto => this.setState({ usuario: texto })}
            autoCapitalize="none" />
          <TextInput style={styles.input} placeholder="Senha"
            onChangeText={texto => this.setState({ senha: texto })}
            autoCapitalize="none"
            secureTextEntry={true} />
        </View>

        <Button title="Login" onPress={this.efetuarLogin.bind(this)} />

        <Text style={styles.mensagem}>{this.state.mensagem}</Text>

      </View>
    )
  }

}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center'
  },
  titulo: {
    fontWeight: 'bold',
    fontSize: 36
  },
  form: {
    width: width * 0.8
  },
  input: {
    height: 40,
    borderBottomWidth: 1,
    borderBottomColor: '#ddd',
    fontSize: 18
  },
  mensagem: {
    marginTop: 15,
    color: '#e74c3c'
  }
})