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
    return (
      <Container>
        <Avatar />
        <Text>Hey</Text>
      </Container>
    );
  }
}
