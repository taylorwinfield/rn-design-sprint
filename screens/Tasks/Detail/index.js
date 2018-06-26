import React, { PureComponent } from 'react';
import styled from 'styled-components';
import { View, Flex, Description, Term, Text } from './styles';

const Button = styled.TouchableOpacity`
  flex: 1;
`;

const products = [
  {
    title: 'Energy',
    data: [
      {
        title: '',
        icon: '',
        route: '/'
      },
      {
        title: '',
        icon: '',
        route: '/'
      }
    ]
  },
  {
    title: 'Services',
    data: [
      {
        title: '',
        icon: '',
        route: '/'
      },
      {
        title: '',
        icon: '',
        route: '/'
      }
    ]
  }
];

export default class Detail extends PureComponent {
  render() {
    const { title, customer, navigation } = this.props;
    return (
      <View>
        <Flex>
          <Description>Visit Type</Description>
          <Term>IB-CHB</Term>
        </Flex>
        <Flex>
          <Description>Customer</Description>
          <Button onPress={() => navigation.navigate('Customer')}>
            <Text>Taylor Winfield</Text>
          </Button>
        </Flex>
        <Text>{title}</Text>
      </View>
    );
  }
}
