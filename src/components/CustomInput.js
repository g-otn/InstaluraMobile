import React, { Component } from 'react'
import {
  StyleSheet,
  TextInput
} from 'react-native'

export default class CustomInput extends Component {
  render() {
    return (
      <TextInput placeholder={this.props.placeholder}
        style={styles.input}
        autoCapitalize={this.props.capitalize}
        secureTextEntry={this.props.secure}
        onChangeText={this.props.onChange} />
    );
  }
}

const styles = StyleSheet.create({
  input: {
    height: 40,
    borderBottomWidth: 1,
    borderBottomColor: '#ddd'
  },
});