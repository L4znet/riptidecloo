import * as React from 'react';
import {
    MD3LightTheme as DefaultTheme,
    Provider as PaperProvider,
} from 'react-native-paper';
import Navigation from "./Navigation";
import {createStore} from "redux";
import {Provider} from "react-redux";
import store from "./src/store";
const theme = {
    ...DefaultTheme,
};


export default function App() {
    return (
        <Provider store={store}>
            <PaperProvider theme={theme}>
                <Navigation />
            </PaperProvider>
        </Provider>
    );
}

