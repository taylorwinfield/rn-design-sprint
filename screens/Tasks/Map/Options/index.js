import React, { Component } from 'react';
import styled from 'styled-components';

const View = styled.View`
  margin-bottom: 75px;
  justify-content: space-between;
  height: 100px;
`;

const Button = styled.Button`
  margin-bottom: 30px;
`;

export default class Options extends Component {
  render() {
    return (
      <View>
        <Button title="En-Route" onPress={() => ''} color='#0099FF' />
        <Button title="Details" onPress={() => ''} color='#0099FF' />
      </View>
    );
  }
}
