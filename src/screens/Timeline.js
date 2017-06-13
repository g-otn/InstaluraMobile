import React, { Component } from 'react';
import { ScrollView } from 'react-native';

import Feed from '../components/Feed';

export default class Timeline extends Component {

  render() {
    return (
      <ScrollView>
        <Feed screen="Timeline"
          uri="/fotos"
          navigator={this.props.navigator} />
      </ScrollView>
    );
  }
}
