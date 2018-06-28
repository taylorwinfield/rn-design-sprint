import React, { Component } from 'react';
import styled from 'styled-components';
import { FlatList } from 'react-native';
import Item from './Item';

const data = [
  {
    date: '2018-06-27T13:11:00',
    text: 'Please ring control',
    id: '0'
  },
  {
    date: '2018-06-27T16:03:00',
    text: 'Please ring control with lunch message',
    id: '1'
  },
  {
    date: '2018-06-27T16:03:00',
    text: 'Please ring control with lunch message',
    id: '2'
  }
];

const View = styled.ScrollView`
  padding: 0 16px;
  background-color: white;
  flex: 1;
`;

export default class Master extends Component {
  static navigationOptions = { title: 'Messages' };

  keyExtractor = item => item.id;

  render() {
    return (
      <View>
        <FlatList
          data={data}
          renderItem={Item}
          keyExtractor={this.keyExtractor}
        />
      </View>
    );
  }
}
