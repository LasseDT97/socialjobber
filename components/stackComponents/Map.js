// Lasse
//import import
import * as React from 'react';
import { Text, SafeAreaView, View, StyleSheet, Button} from 'react-native';
import Constants from 'expo-constants';
import MapView, { Marker } from 'react-native-maps';
import * as Location from 'expo-location';
import {Accuracy} from 'expo-location';
import { useState, useEffect } from 'react';

function Map() {

    //instantiering af statevariabler
    const [hasLocationPermission, setLocationPermission] = useState(false);
    const [currentLocation, setCurrentLocation] = useState(null)
    const [userMarkerCoordinates, setUserMarkerCoordinates] = useState([])
    const [selectedCoordinate, setSelectedCoordinates] = useState(null)

    //getLocationPermissions udnytter prædefinerede asynkrone metode requestForegroundPermissionsAsync.
    const getLocationPermission = async () => {
        // spørger om tilladelse til at benytte enhedens position.
        // Resultatet af denne handling benyttes til at sætte værdien af locationPermissions
        await Location.requestForegroundPermissionsAsync().then((item) => {
            setLocationPermission(item.granted)
        });
    };
    // I useEffeect kaldes getlocationPermissions.
    // Det betyder at enheden bliver bedt om tilladelse så snart appen kører
    useEffect(() => {
        const response = getLocationPermission()
    });

    // Metoden updateLocation  udnytter prædefinerede asynkrone metode getCurrentPostionAsync
    const updateLocation = async () => {
        //Resultatet af kaldet benyttes til at sætte currentLocation
        //Accuracy.Balanced er bare hvor stringent den skal være
        await Location.getCurrentPositionAsync({accuracy: Accuracy.Balanced}).then((item) => {
            setCurrentLocation(item.coords)
        });
    };

    //Metoden handleLongPress tager et event som argument og henter værdien af et koordinatsæt.
    //Værdien gemmes i en variabel der tilføjes til et array af koordinator.
    const handleLongPress = event => {
        const coordinate = event.nativeEvent.coordinate
        setUserMarkerCoordinates((oldArray) => [...oldArray, coordinate])
    };

    const handleSelectMarker = async coordinate => {
        setSelectedCoordinates(coordinate)
        await Location.reverseGeocodeAsync(coordinate).then((data) => {
            setSelectedAddress(data)
        })
    };

    const closeInfoBox = () =>
        setSelectedCoordinates(null) && setSelectedAddress(null)

    const RenderCurrentLocation = (props => {
        if (props.hasLocationPermission === null) {
            return null;
        }
        if (props.hasLocationPermission === false) {
            return <Text>No location access. Go to settings to change</Text>;
        }
        return (
            <View>
                <Button style title="Update Location" onPress={updateLocation} />
                {currentLocation && (
                    <Text>
                        {`lat: ${currentLocation.latitude}, \nLong:${currentLocation.longitude} \nacc: ${currentLocation.accuracy}`}
                    </Text>
                )}
            </View>
        );
    });

    {
        return (
            <SafeAreaView style={styles.container}>
                <RenderCurrentLocation props={{hasLocationPermission: hasLocationPermission, currentLocation: currentLocation}} />
                <MapView
                    provider="google"
                    style={styles.map}
                    showsUserLocation
                    onLongPress={handleLongPress}>
                <Marker
                    coordinate={{latitude: 55.671386, longitude: 12.590715}}
                    title="Christianshavn Beboerhus"
                    descripton="Hjælp i værkstedet"
                />
                <Marker
                    coordinate={{latitude: 55.659577, longitude: 12.619733}}
                    title="Messinagården Andelsforeningen"
                    descripton="Hjælp til at feje blade sammen"
                />
                <Marker
                    coordinate={{latitude: 55.665395, longitude: 12.616146}}
                    title="Koefod Skole"
                    descripton="Hjælp til rengøring"
                />
                {userMarkerCoordinates.map((coordinate, index) => (
                    <Marker
                        coordinate={coordinate}
                        key={index.toString()}
                        onPress={() => handleSelectMarker(coordinate)}/>
                ))}
                </MapView>
                {selectedCoordinate && selectedAddress && (
                    <View style={styles.infoBox}>
                        <Text style={styles.infoText}>
                            {selectedCoordinate.latitude}, {selectedCoordinate.longitude}
                        </Text>
                            <Text style={styles.infoText}>
                            name: {selectedAddress[0].name} region {selectedAddress[0].region}
                            </Text>
                        <Button title="Close" onPress={closeInfoBox} />
                    </View>
                )}
            </SafeAreaView>
        );
    }
}

//Lokal styling til brug i App.js
const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        paddingTop: Constants.statusBarHeight,
        backgroundColor: '#ecf0f1',
        padding: 8,
    },
    map: { flex: 1 },
    infoBox: {
        height: 200,
        position: 'absolute',
        bottom: 0,
        left: 0,
        right: 0,
        backgroundColor: 'yellow',
        justifyContent: 'center',
        alignItems: 'center',
        flex: 1,
    },
    infoText: {
        fontSize: 15,
    },
});

export default Map;
