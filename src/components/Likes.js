import React, { Component } from 'react';
import {
  StyleSheet,
  Text,
  View,
  Image,
  TouchableOpacity,
} from 'react-native';

export default class Like extends Component {

  carregaIcone(likeada) {
    return likeada ? require('../../resources/img/s2-checked.png')
        : require('../../resources/img/s2.png')
  }

  exibeLikes(likers) {
    if(likers.length <= 0)
      return;

    return (
      <Text style={styles.likes}>
        {likers.length} {likers.length > 1 ? 'curtidas' : 'curtida'}
      </Text>
    );
  }

  render() {
    const { foto } = this.props;
    return (
      <View>
        <TouchableOpacity style={styles.botaoDeLike} onPress={() => this.props.likeCallback(foto.id)}>
          <Image style={styles.icone}
              source={this.carregaIcone(foto.likeada)} />
        </TouchableOpacity>

        {this.exibeLikes(foto.likers)}
      </View>
    );
  }
}

const styles = StyleSheet.create({
  botaoDeLike: {
    marginBottom: 10
  },
  likes: {
    fontWeight: 'bold'
  },
  icone: {
    height: 30,
    width: 30
  },
});
