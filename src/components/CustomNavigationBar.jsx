import {Appbar, IconButton, useTheme} from 'react-native-paper';
import {StyleSheet, Switch, Text, View} from 'react-native';
import { ToggleButton } from 'react-native-paper';
import {useContext, useState} from "react";
import Toggle from "react-native-toggle-element";
import {AppContext} from "../../AppContext";
export default function CustomNavigationBar(){
    const theme = useTheme();
    const { viewState, setViewState } = useContext(AppContext);


    return (
        <Appbar.Header style={{justifyContent:"center" }}>
            <Toggle
                value={viewState}
                onPress={(newState) => setViewState(newState)}
                trackBar={{
                    activeBackgroundColor: "#FFF", // A droite
                    inActiveBackgroundColor: "#FFF", // A gauche
                    borderActiveColor: "#FFF",
                    borderInActiveColor: "#FFF",
                    width: 200,
                    radius: 5,
                    height:30,
                    borderWidth:2,
                    color:"#FFF",
                }}
                thumbButton={{
                    color:"#FFF",
                    backgroundColor:"#000000",
                    width: 100,
                    radius: 5,
                    height:30,
                    borderWidth:2,
                    activeBackgroundColor: "#ff6e0a",
                    inActiveBackgroundColor: "#ff6e0a",
                    inActiveColor:"#ff6e0a",
                    activeColor:"#FFF"
                }}
                thumbStyle={{
                    color:"#FFF",
                    activeBackgroundColor: "#FFF",
                    inActiveBackgroundColor: "#FFF",
                }}
                leftTitle="La carte"
                rightTitle="La liste"
                containerStyle={{
                    color:"#FFF"
                }}
            />
        </Appbar.Header>
    );
}

