import React, { Component } from 'react';
import styled from 'styled-components';
import { withNavigation } from 'react-navigation';

const View = styled.View`
  margin-bottom: 75px;
  justify-content: space-between;
  height: 100px;
`;

const Button = styled.Button`
  margin-bottom: 30px;
`;

class Options extends Component {
  render() {
    const { navigation, customer } = this.props;
    return (
      <View>
        <Button title="En-Route" onPress={() => ''} color="#0099FF" />
        <Button
          title="Details"
          onPress={() => navigation.navigate('Detail', { customer })}
          color="#0099FF"
        />
      </View>
    );
  }
}

export default withNavigation(Options);
