import {StyleSheet, View, Text} from "react-native";
import {useContext, useEffect, useState} from "react";
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import {AppContext} from "../../AppContext";
import ListTabScreen from "./tabs/ListTabScreen";
import MapTabScreen from "./tabs/MapTabScreen";

export default function HomeScreen({ navigation }) {
    const Tab = createBottomTabNavigator();
    const { viewState, setViewState } = useContext(AppContext);

    const changeView = () => {
        if(viewState){
            return <ListTabScreen/>
        } else {
            return <MapTabScreen/>
        }
    }


    return (
        <View style={{flex: 1}}>
            {changeView()}
        </View>
    );
}


