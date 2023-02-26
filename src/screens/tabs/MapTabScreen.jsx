import {useEffect, useState} from "react";
import MapView, {Marker} from "react-native-maps";
import {JCDECAUX_API_KEY} from '@env';
import {StyleSheet, View, Text} from "react-native";
export default function MapTabScreen(){



    return (
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


const styles = StyleSheet.create({
    map: {
        width: '100%',
        height: '100%',
    },
})

