import React from 'react';
import styled from 'styled-components';

const Container = styled.View`
  width: 100%;
  background-color: white;
  border-style: solid;
  border-bottom-width: 1px;
  border-bottom-color: #f0f0f0;
  padding: 24px 0;
  display: flex;
  flex-direction: row;
`;

const Date = styled.Text`
  font-size: 16px;
  color: #0099ff;
  font-weight: bold;
`;

const Text = styled.Text`
  font-size: 16px;
  color: #555555;
  width: 60%;
`;

export const Button = styled.Button``;
export const View = styled.View``;

export default ({ item }) => (
  <Container>
    <View>
      <Date>{item.date}</Date>
      <Text>{item.text}</Text>
    </View>
    <View>
      <Button title="Got it!" onPress={} />
    </View>
  </Container>
);
