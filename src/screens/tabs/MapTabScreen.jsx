import {useEffect, useState} from "react";
import MapView, {Marker} from "react-native-maps";
import {JCDECAUX_API_KEY} from '@env';
import {StyleSheet, View, Text} from "react-native";
export default function MapTabScreen(){


    const [data, setData] = useState([]);
    useEffect(() => {
        fetch("https://api.jcdecaux.com/vls/v3/stations?apiKey=" + JCDECAUX_API_KEY)
            .then(response => response.json())
            .then(data => setData(data));
    },[]);

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
            }}>
            {data.map((marker, index) => {
                return (
                    <Marker
                        key={index}
                        coordinate={{ latitude : marker.position.latitude , longitude : marker.position.longitude }}
                        pinColor = {"orange"}
                        title={"title"}
                        description={"description"}
                    />
                )
            })}
        </MapView>
    )
}


const styles = StyleSheet.create({
    map: {
        width: '100%',
        height: '100%',
    },
})

