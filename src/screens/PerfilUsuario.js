import React, { Component } from 'react';
import { ScrollView } from 'react-native';

import Feed from '../components/Feed';

export default class PerfilUsuario extends Component {

  render() {
    const uri = `/public/fotos/${this.props.usuario}`;
    return (
      <ScrollView>
        <Feed {...this.props}
          screen="PerfilUsuario"
          uri={uri}
          navigator={this.props.navigator} />
      </ScrollView>
    );
  }
}
