import { View} from "react-native";
import {useContext} from "react";
import {AppContext} from "../../AppContext";
import ListTabScreen from "./tabs/ListTabScreen";
import MapTabScreen from "./tabs/MapTabScreen";

export default function HomeScreen({ navigation }) {
    const { viewState } = useContext(AppContext);


    /**
     * Change the view using the ToggleElement
     *
     * @returns {JSX.Element}
     */
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


