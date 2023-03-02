import {useEffect, useState} from "react";
import MapView, {Marker} from "react-native-maps";
import {JCDECAUX_API_KEY} from '@env';
import {StyleSheet, View, Text, ActivityIndicator, SafeAreaView, FlatList, TouchableHighlight} from "react-native";
import {Badge, List, TouchableRipple} from 'react-native-paper';
import {useSelector} from "react-redux";
import {useNavigation} from "@react-navigation/native";



export default function ListTabScreen(){

    const navigation = useNavigation();
    const itemPerBatch = 7
    const [currentBatchNumber, setCurrentBatchNumber] = useState(itemPerBatch)
    const bikeStations = useSelector(state => state.map.bikeStations)

    const State = ({size, color, text = ""}) => {
        return (
            <View style={{width:size,height:size,backgroundColor:color, marginLeft:20, borderRadius:80}}>{text}</View>
        )
    }

    const goToDetail = (name) => {
        navigation.navigate('Details', {
            itemName: name,
        });
    }
    const Item = ({title, isOpened, id}) => {
        let isOpenedState;
        if(isOpened === "OPEN"){
            isOpenedState = (<State color={"#8bd347"} size={50}></State>)
        } else if(isOpened === "CLOSED"){
            isOpenedState = ( <State color={"#d34747"} size={50}></State>)
        }
        return (

            <TouchableHighlight
                style={styles.item}
                activeOpacity={0.6}
                underlayColor="#DDDDDD"
                onPress={() => goToDetail(title)}>
                <>
                    <Text style={styles.title}>{title}</Text>
                    {isOpenedState}
                </>
            </TouchableHighlight>
        )
    };

    const limitArray = (array) => {
        return array.slice(0, currentBatchNumber)
    }

    const loadMore = () => {
        setCurrentBatchNumber(currentBatchNumber + itemPerBatch)
    }



    return (
            <SafeAreaView style={styles.container}>
                <FlatList
                    data={limitArray(bikeStations[0])}
                    renderItem={({item}) => <Item title={item.name} isOpened={item.status} />}
                    keyExtractor={item => item.id}
                    onEndReached={loadMore}
                    onEndReachedThreshold={0.5}
                />

            </SafeAreaView>
        )

}


const styles = StyleSheet.create({
    map: {
        width: '100%',
        height: '100%',
    },
    item:{
        width:'100%',
        backgroundColor:"#FFF",
        height:80,
        marginBottom:10,
        display:"flex",
        flexDirection:"row-reverse",
        justifyContent:"space-between",
        alignItems:"center"
    }
})

