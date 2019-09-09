import React, { Component } from 'react'
import {
  View,
  Text,
  Dimensions,
  StyleSheet,
  Button
} from 'react-native'
import AsyncStorage from '@react-native-community/async-storage';
import CustomInput from '../components/CustomInput'


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
        AsyncStorage.multiSet([
          ['usuario', this.state.usuario],
          ['token', token]
        ])
      })
      .catch(e => this.setState({ mensagem: e.message }))
  }

  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.titulo}>Instalura</Text>

        <View style={styles.form}>
          <CustomInput placeholder="Usuário"
            capitalize="none"
            onChange={text => this.setState({ usuario: text })} />
          <CustomInput placeholder="Senha"
            capitalize="none" secure={true}
            onChange={text => this.setState({ senha: text })} />
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