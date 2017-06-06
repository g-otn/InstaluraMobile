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

  render() {
    return (
      <FlatList
          style={styles.container}
          data={[{id: 1, usuario: 'rafael'}, {id: 2, usuario: 'alberto'}]}
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
