import React, { PureComponent } from 'react';
import styled from 'styled-components';

const View = styled.View``;

const Text = styled.Text``;

export default class SOS extends PureComponent {
  static navigationOptions = { title: 'SOS' };

  render() {
    return (
      <View>
        <Text>SOS</Text>
      </View>
    );
  }
}

