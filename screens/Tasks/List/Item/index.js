import React, { PureComponent } from 'react';
import styled from 'styled-components';
import chevron from './chevron.png';

const Container = styled.View`
  padding: 24px;
  border-bottom-color: #f0f0f0;
  border-style: solid;
  border-bottom-width: 1px;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: row;
`;
const Flex = styled.View``;
const Title = styled.Text`
  color: #0099ff;
  font-size: 16px;
  font-weight: bold;
  max-width: 60%;
  margin-bottom: 8px;
`;
const Detail = styled.Text`
  font-size: 16px;
  color: black;
  margin-bottom: 4px;
`;

const Chevron = styled.Image`
  height: 8px;
  width: 12px;
  margin-left: auto;
`;

const EnRoute = styled.Button`
  background-color: #0099ff;
  font-size: 16px;
  border-radius: 4px;
`;

export default class Item extends PureComponent {
  render() {
    const { title, customer, address, distance } = this.props;
    return (
      <Container>
        <Flex>
          <Title>{title}</Title>
          <Detail>{customer}</Detail>
          <Detail>{address}</Detail>
          <Detail>{distance}</Detail>
        </Flex>
        <Flex>
          <EnRoute title="En-route" />
        </Flex>
        <Chevron source={chevron} resizeMode="contain" />
      </Container>
    );
  }
}
