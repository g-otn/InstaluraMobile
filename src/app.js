/**
 * InstaluraMobile
 * https://github.com/rafael-rollo/InstaluraMobile
 */

import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  View,
  FlatList,
  Image,
  Dimensions,
  Platform
} from 'react-native';

const width = Dimensions.get('window').width;
const paddingTop = Platform.OS === 'ios' ? 20 : 0;

class InstaluraMobile extends Component {

  render() {
    return (
      <FlatList
          style={{paddingTop}}
          data={[{id: 1, usuario: 'rafael'}, {id: 2, usuario: 'alberto'}]}
          keyExtractor={ item => item.id }
          renderItem={ ({item}) => (
            <View>
              <View style={{height: 40}}>
                <Text>{item.usuario}</Text>
              </View>
              <Image style={{width: width, height: width}}
                  source={require('../resources/img/instagram1.jpg')} />
            </View>
          )}
      />
    );
  }
}

const styles = StyleSheet.create({

});

export default () => {
  AppRegistry.registerComponent('InstaluraMobile', () => InstaluraMobile);
}
