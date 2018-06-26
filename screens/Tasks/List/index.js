import React, { PureComponent } from 'react';
import { Container, Title } from './styles';
import { FlatList } from 'react-native';
import Item from './Item';

const data = [
  {
    title: 'ENSAV UPGD - Central Heating Boiler',
    customer: 'Mr Kieran Josh',
    address: '7 The Field, LE8',
    distance: '3 miles (5 mins)',
    id: 'a'
  }
];

export default class List extends PureComponent {
  static navigationOptions = {
    title: 'List'
  };

  keyExtractor = item => item.id;

  render() {
    return (
      <Container>
        <FlatList
          data={data}
          keyExtractor={this.keyExtractor}
          renderItem={({ item }) => <Item {...item} />}
        />
      </Container>
    );
  }
}
