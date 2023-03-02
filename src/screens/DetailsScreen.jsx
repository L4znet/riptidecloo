import {View, Text, StyleSheet} from "react-native";
import {bikeStations} from "../store/map/mapDataSlice";
import {useSelector} from "react-redux";

export default function DetailsScreen({ route, navigation }){
    const { itemName} = route.params;
    const bikeStations = useSelector(state => state.map.bikeStations)
    const detailData = bikeStations[0].find(x => x.name === itemName)
    console.log(detailData.totalStands.availabilities.bikes)
    console.log(detailData)

    return (
        <View>
            <Text style={[styles.text, {fontSize:30}]}>{detailData.contractName.toUpperCase()}</Text>
            <Text style={[styles.text, {fontSize:20}]}>{detailData.address}</Text>
            <Text style={[styles.text, {fontSize:20}]}>{detailData.status === "OPEN" ? "OUVERTE" : "FERMÉE"}</Text>
            <Text style={[styles.text, {fontSize:20}]}>Nombre de vélos disponible : {detailData.totalStands.availabilities.bikes}</Text>
            <Text style={[styles.text, {fontSize:20}]}>Nombre de vélos électrique disponible : {detailData.totalStands.availabilities.electricalBikes}</Text>
        </View>
    );
}

const styles = StyleSheet.create({
    text:{
        textAlign:"center",
        marginVertical:20
    }
});
