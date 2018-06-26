import React, { PureComponent } from 'react';
import { withNavigation } from 'react-navigation';
import {
  Container,
  Flex,
  Title,
  Detail,
  EnRoute,
  Chevron,
  Hazard,
  Button
} from './styles';

class Item extends PureComponent {
  handlePress = () => {
    const {
      navigation: { navigate }
    } = this.props;
    navigate('Detail', {
      title: this.props.title
    });
  };

  render() {
    const { title, customer, address, distance } = this.props;
    return (
      <Container>
        <Button style={{ width: '60%' }} onPress={this.handlePress}>
          <Title>{title}</Title>
          <Detail>{customer}</Detail>
          <Detail>{address}</Detail>
          <Detail>{distance}</Detail>
        </Button>
        <Flex style={{ alignItems: 'center' }}>
          <EnRoute title="En-route" onPress={() => ''} />
          <Hazard />
        </Flex>
        <Chevron />
      </Container>
    );
  }
}

export default withNavigation(Item);
