import * as React from 'react';
import {
    MD3LightTheme as DefaultTheme,
    Provider as PaperProvider,
} from 'react-native-paper';
import Navigation from "./Navigation";
import {createStore} from "redux";
const theme = {
    ...DefaultTheme,
};


export default function App() {
    return (
    <PaperProvider theme={theme}>
        <Navigation />
    </PaperProvider>
    );
}
