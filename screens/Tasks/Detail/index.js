import React, { PureComponent } from 'react';
import { Button } from 'react-native';
import { View, Flex, Description, Term } from './styles';

export default class Detail extends PureComponent {
  handleCustomerNavigation = () => {
    const { navigation } = this.props;
    /*
      Use redux to store and retrieve this
      type of data
     */
    const customer = navigation.getParam('customer', 'customer');
    navigation.navigate('Customer', {
      customer
    });
  };

  render() {
    const { navigation } = this.props;
    const customer = navigation.getParam('customer', 'customer');
    const type = navigation.getParam('type', 'type');
    return (
      <View>
        <Flex>
          <Description>Visit Type</Description>
          <Term>{type}</Term>
        </Flex>
        <Flex>
          <Description>Customer</Description>
          <Button onPress={this.handleCustomerNavigation} title={customer} />
        </Flex>
      </View>
    );
  }
}
