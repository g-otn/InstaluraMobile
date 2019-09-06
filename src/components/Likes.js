import React, { Component } from 'react'
import {
  Image,
  View,
  TouchableOpacity,
  Text,
  StyleSheet
} from 'react-native'

export default class Likes extends Component {

  carregarIcone(likeada) {
    return likeada ?
      require('../../assets/img/s2-checked.png') :
      require('../../assets/img/s2.png')
  }

  exibeLikers(likers) {
    if (likers.length == 0)
      return

    return (
      <Text style={styles.likes}>
        {likers.length} {likers.length > 1 ? 'curtidas' : 'curtida'}
      </Text>
    )
  }

  render() {
    const { foto, likeCallback } = this.props

    return (
      <View>
        <TouchableOpacity onPress={likeCallback}>
          <Image source={this.carregarIcone(foto.likeada)}
            style={styles.botaoDeLike} />
        </TouchableOpacity>

        {this.exibeLikers(foto.likers)}
      </View>
    )
  }

}

const styles = StyleSheet.create({
  botaoDeLike: {
    marginBottom: 10,
    width: 40,
    height: 40
  },
  likes: {
    fontWeight: 'bold'
  }
})