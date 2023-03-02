import {useEffect, useState} from "react";
import MapView, {Marker, Callout} from "react-native-maps";
import {JCDECAUX_API_KEY} from '@env';
import {StyleSheet, View, Text, ActivityIndicator} from "react-native";

import { useSelector, useDispatch } from 'react-redux'
import {updateBikeStation} from "../../store/map/mapDataSlice";
import { useNavigation } from '@react-navigation/native';
import store from "../../store";
import {MD2Colors} from "react-native-paper";
export default function MapTabScreen(){
    const navigation = useNavigation();

    const bikeStations = useSelector(state => state.map.bikeStations)
    useEffect(() => {

        if(bikeStations.length === 0){
            fetch("https://api.jcdecaux.com/vls/v3/stations?apiKey=" + JCDECAUX_API_KEY)
                .then(response => response.json())
                .then(data => {
                    console.log(typeof data)
                    store.dispatch(updateBikeStation(data))
                });
        }


    },[bikeStations]);

    const goToDetail = (name) => {
        navigation.navigate('Details', {
            itemName: name,
        });
    }

    if(bikeStations.length !== 0){
        return (
            <>
                <MapView
                    style={styles.map}
                    initialRegion={{
                        latitude: 47.218371,
                        longitude: -1.553621,
                        latitudeDelta: 0.0922,
                        longitudeDelta: 0.0421,
                    }}
                    region={{
                        latitude: 47.218371,
                        longitude: -1.553621,
                        latitudeDelta: 0.0922,
                        longitudeDelta: 0.0421
                    }}>
                    {bikeStations[0].map((marker, index) => {

                        return (
                            <Marker
                                key={index}
                                coordinate={{ latitude : marker.position.latitude , longitude : marker.position.longitude }}
                                pinColor = {"orange"}
                                size={50}
                                title={marker.name}
                                description={marker.address}
                                onPress={() => goToDetail(marker.name)}>
                            </Marker>
                        )
                    })}
                </MapView>
            </>
        )
    } else {
        return (
            <View style={{     height: "100%", display: 'flex', alignItems: 'center', justifyContent: 'center',}}>
                <ActivityIndicator animating={true}  size={"20%"} color={"#ff6627"} />
            </View>
        )
    }

}


const styles = StyleSheet.create({
    map: {
        width: '100%',
        height: '100%',
    },
})

