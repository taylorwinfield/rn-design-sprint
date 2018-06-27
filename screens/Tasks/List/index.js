import React, { PureComponent } from 'react';
import styled from 'styled-components';
import { Container, Title } from './styles';
import { FlatList } from 'react-native';
import Item from './Item';
/*
  This will be handled by redux
 */
import data from '../data';

const View = styled.View`
  background-color: red;
`;

const Text = styled.Text`
  color: white;
`;

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
