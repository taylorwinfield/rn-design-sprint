import React, { PureComponent } from 'react';
import styled from 'styled-components';

const View = styled.View``;
const Text = styled.Text``;
const Button = styled.Button``;

/*
    Add styled
 */

export default class Modal extends PureComponent {
  static navigationOptions = {
    title: 'List',
    headerMode: 'screen'
  };

  render() {
    const { navigation } = this.props;
    const Content = navigation.getParam('content');
    return (
      <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
        {Content}
        <Button
          onPress={() => this.props.navigation.goBack()}
          title="Dismiss"
        />
      </View>
    );
  }
}
