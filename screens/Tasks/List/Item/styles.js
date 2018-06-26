import styled from 'styled-components';
import chevron from './chevron.png';
import warning from './warning.png';

export const Container = styled.View`
  padding: 24px;
  border-bottom-color: #f0f0f0;
  border-style: solid;
  border-bottom-width: 1px;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: row;
`;
export const Flex = styled.View``;
export const Button = styled.TouchableOpacity``
export const Title = styled.Text`
  color: #0099ff;
  font-size: 16px;
  font-weight: bold;
  max-width: 60%;
  margin-bottom: 8px;
`;
export const Detail = styled.Text`
  font-size: 16px;
  color: black;
  max-width: 80%;
  margin-bottom: 4px;
`;

export const Chevron = styled.Image.attrs({
  source: chevron,
  resizeMode: 'contain'
})`
  height: 8px;
  width: 12px;
  margin-left: auto;
`;

export const Hazard = styled.Image.attrs({
  source: warning,
  resizeMode: 'contain'
})`
  height: 34px;
  width: 43px;
  margin-top: 16px;
`;

export const EnRoute = styled.Button`
  background-color: #0099ff;
  font-size: 16px;
  border-radius: 4px;
`;
