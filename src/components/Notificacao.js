import React, { Component } from 'react';
import {
  StyleSheet,
  View,
  Text,
  Button,
} from 'react-native';

export default class Notification extends Component {

    render() {
        return (
            <View style={styles.container}>
                <Text style={styles.texto}>{this.props.texto}</Text>
                <Button title="Ok"
                    onPress={() => this.props.navigator.dismissLightBox()} />
            </View>
        );
    }
}

const styles = StyleSheet.create({
  container: {
      height: 80,
      backgroundColor: '#fff',
      borderRadius: 5,
      borderWidth: 1,
      borderColor: '#ddd',
      padding: 15,
  },
  texto: {
    marginBottom: 5
  },
});
