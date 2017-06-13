import React, { Component } from 'react';
import {
  StyleSheet,
  Text,
  TextInput,
  Button,
  Image,
  View,
  Dimensions,
  AsyncStorage,
  ActivityIndicator
} from 'react-native';

export default class Login extends Component {

  constructor() {
    super();
    this.state = {
      usuario: '',
      senha: '',
      mensagem: '',
      loading: true,
    }
  }

  componentWillMount() {
    AsyncStorage.getItem('token')
      .then(token => {
        if(token)
          this.redireciona();
        else
          this.setState({loading: false})
      });
  }

  redireciona() {
    this.props.navigator.resetTo({
      screen: 'Timeline',
      title: 'Instalura',
    });
  }

  efetuaLogin() {
    const uri = 'http://localhost:8080/api/public/login';
    const requestInfo = {
      method: 'POST',
      body: JSON.stringify({
        login: this.state.usuario,
        senha: this.state.senha
      }),
      headers: new Headers({
        'Content-type': 'application/json'
      })
    };

    fetch(uri, requestInfo)
      .then(response => {
        if (response.ok)
          return response.text();

        throw 'Não foi possível efetuar login';
      })
      .then(token => {
        AsyncStorage.setItem('token', token);
        AsyncStorage.setItem('usuario', this.state.usuario);
        this.redireciona();
      })
      .catch(erro => this.setState({mensagem: erro}));
  }

  render() {
    if(this.state.loading) {
      return (
        <View style={styles.container}>
          <ActivityIndicator
              animating={true}
              color="#2980b9"
              size="large" />
          <Text style={styles.loading}>Loading...</Text>
        </View>
      );
    }

    return (
      <View style={styles.container}>

        <Image style={styles.logo}
            source={require('../../resources/img.instalura.png')}
            resizeMode="contain" />

        <View style={styles.form}>
          <View style={styles.inputContainer}>
            <TextInput placeholder="Usuário"
                style={styles.input}
                autoCapitalize="none"
                onChangeText={texto => this.setState({usuario: texto})} />
          </View>
          <View style={styles.inputContainer}>
            <TextInput placeholder="Senha"
                style={styles.input}
                autoCapitalize="none"
                secureTextEntry={true}
                onChangeText={texto => this.setState({senha: texto})} />
          </View>
          <Button title="Login"
              onPress={this.efetuaLogin.bind(this)}/>
        </View>

        <Text style={styles.mensagem}>
          {this.state.mensagem}
        </Text>

      </View>
    );
  }
}

const width = Dimensions.get('window').width;
const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center'
  },
  logo: {
    height: 30
  },
  form: {
    width: width * 0.8
  },
  inputContainer: {
    borderBottomWidth: 1,
    borderBottomColor: '#ddd'
  },
  input: {
    height: 40
  },
  mensagem: {
    marginTop: 15,
    color: '#e74c3c',
  },
  loading: {
    marginTop: 10,
    fontWeight: 'bold',
    fontSize: 20,
    color: '#95a5a6'
  }
});
