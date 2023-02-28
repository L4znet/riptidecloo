<<<<<<< Updated upstream
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';

export default function App() {
  return (
    <View style={styles.container}>
      <Text>Open up App.js to start working on your app!</Text>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
=======
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
import rootReducer from './reducers'
const store = createStore(rootReducer)

export default function App() {
    return (
    <PaperProvider theme={theme}>
        <Navigation />
    </PaperProvider>
    );
}
>>>>>>> Stashed changes
