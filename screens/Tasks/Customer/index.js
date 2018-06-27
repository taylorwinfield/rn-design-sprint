import React, { PureComponent } from 'react';
import styled from 'styled-components';
import avatar from './avatar.png';

const Container = styled.View`
  background-color: white;
  padding: 16px;
`;
const Text = styled.Text``;

const Avatar = styled.Image.attrs({
  source: avatar
})`
  width: 56px;
  height: 56px;
`;

export default class Customer extends PureComponent {
  static navigationOptions = {
    title: 'Customer'
  };

  render() {
    const { navigation } = this.props;
    const customer = navigation.getParam('customer', 'customer');
    return (
      <Container>
        <Avatar />
        <Text>{customer}</Text>
      </Container>
    );
  }
}
