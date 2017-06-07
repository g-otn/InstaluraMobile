/**
 * InstaluraMobile
 * https://github.com/rafael-rollo/InstaluraMobile
 */

import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  FlatList,
} from 'react-native';

import Post from './components/Post';

class InstaluraMobile extends Component {

  constructor() {
    super();
    this.state = {
      fotos: []
    }
  }

  componentDidMount() {
    fetch('http://localhost:8080/api/public/fotos/rafael')
      .then(response => response.json())
      .then(json => this.setState({fotos: json}));
  }

  render() {
    return (
      <FlatList
          style={styles.container}
          data={this.state.fotos}
          keyExtractor={ item => item.id }
          renderItem={ ({item}) => <Post foto={item}/> }
      />
    );
  }
}

const styles = StyleSheet.create({
  container: {
    marginTop: 20
  }
});

export default () => {
  AppRegistry.registerComponent('InstaluraMobile', () => InstaluraMobile);
}
