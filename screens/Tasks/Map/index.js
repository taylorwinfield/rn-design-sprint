import React, { PureComponent, Fragment } from 'react';
import { Container, Title } from './styles';
import { MapView } from 'expo';
import customerMarker from './customerMarker.png';
import Options from './Options';
/*
  This will be handled by redux
 */
import data from '../data';

export default class Map extends PureComponent {
  static navigationOptions = { title: 'Map' };

  handleMarkerPress = customer => {
    const { navigation } = this.props;
    navigation.navigate('Modal', {
      content: <Options customer={customer} />
    });
  };

  renderMarkers = () => (
    <Fragment>
      {data.map(({ customer, address, id }) => {
        return (
          <MapView.Marker
            key={id}
            onPress={() => this.handleMarkerPress(customer)}
            coordinate={address.coords}
            image={customerMarker}
          />
        );
      })}
    </Fragment>
  );

  render() {
    return (
      <Container>
        <MapView
          style={{ flex: 1 }}
          initialRegion={{
            latitude: 52.6172838,
            longitude: -1.1453264,
            latitudeDelta: 0.01,
            longitudeDelta: 0.01
          }}
          fitToSuppliedMarkers={true}
        >
          {this.renderMarkers()}
        </MapView>
      </Container>
    );
  }
}
