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
      navigation: { navigate },
      ...props
    } = this.props;
    navigate('Detail', {
      ...props
    });
  };

  render() {
    const { title, customer, address, distance, type } = this.props;
    const { display: displayAddress } = address;
    return (
      <Container>
        <Button style={{ width: '60%' }} onPress={this.handlePress}>
          <Title>
            {type} - {title}
          </Title>
          <Detail>{customer}</Detail>
          <Detail>{displayAddress}</Detail>
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
