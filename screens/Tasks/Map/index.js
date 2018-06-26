import React, { PureComponent } from 'react';
import {Container, Title} from './styles'
import { MapView } from 'expo';

export default class Map extends PureComponent {
    static navigationOptions = {
        title: 'Map'
    };

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
                />
            </Container>
        )
    }
}