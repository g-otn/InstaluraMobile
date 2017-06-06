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
} from 'react-native';

class InstaluraMobile extends Component {

  render() {
    return (
      <FlatList
          style={styles.container}
          data={[{id: 1, usuario: 'rafael'}, {id: 2, usuario: 'alberto'}]}
          keyExtractor={ item => item.id }
          renderItem={ ({item}) => (
            <View>
              <View style={styles.cabecalho}>
                <Image style={styles.fotoPerfil}
                    source={require('../resources/img/instagram1.jpg')} />
                <Text>{item.usuario}</Text>
              </View>

              <Image style={styles.foto}
                  source={require('../resources/img/instagram1.jpg')} />

              <View style={styles.rodape}>
                <Image style={styles.icone}
                  source={require('../resources/img/heart.png')} />
              </View>
            </View>
          )}
      />
    );
  }
}

const width = Dimensions.get('window').width;
const styles = StyleSheet.create({
  container: {
    marginTop: 20
  },
  cabecalho: {
    flexDirection: 'row',
    alignItems: 'center',
    margin: 10,
    height: 40
  },
  fotoPerfil: {
    marginRight: 10,
    height: 40,
    width: 40,
    borderRadius: 20
  },
  foto: {
    width: width,
    height: width
  },
  rodape: {
    margin: 10,
    height: 40
  },
  icone: {
    height: 30,
    width: 30
  }
});

export default () => {
  AppRegistry.registerComponent('InstaluraMobile', () => InstaluraMobile);
}
