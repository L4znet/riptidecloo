import {createStackNavigator} from "@react-navigation/stack";
import HomeScreen from "./src/screens/HomeScreen";
import DetailsScreen from "./src/screens/DetailsScreen";
import CustomNavigationBar from "./src/components/CustomNavigationBar";
import {NavigationContainer} from "@react-navigation/native";
import {useTheme} from "react-native-paper";
import {createBottomTabNavigator} from "@react-navigation/bottom-tabs";
import {useState} from "react";
import {AppContext} from "./AppContext";

export default function Navigation() {
    const Stack = createStackNavigator();
    const [viewState, setViewState] = useState(false)

    return (
        <AppContext.Provider value={{ viewState, setViewState }}>
            <NavigationContainer>
                <Stack.Navigator>
                    <Stack.Screen
                        name="Home"
                        component={HomeScreen}
                        options={({ navigation }) => ({
                            header: (props) => (
                                <CustomNavigationBar {...props} />
                            ),
                        })}
                    />
                    <Stack.Screen
                        name="Details"
                        component={DetailsScreen}
                        options={({ navigation }) => ({
                        })}
                    />
                </Stack.Navigator>
            </NavigationContainer>
        </AppContext.Provider>
    );
}