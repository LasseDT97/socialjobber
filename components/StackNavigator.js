// Lasse
import * as React from "react";
import FindJob from "./stackComponents/FindJob";
import ScreenTwo from "./stackComponents/ScreenTwo";
//import DetailsScreen from "./DetailsScreen";
import { createStackNavigator } from '@react-navigation/stack';
import PostedJobsList from "./PostedJobsList";
import map from './stackComponents/Map';

//Her instantieres en StackNavigator.
const Stack = createStackNavigator()

/*
* I return() placeres en Stack.Navigator komponent, som i 'initialRoutName' henviser til DetailsScreen.
* Dernæst fastsættes tre Screens i Stacken. Disse er DetailsScreen, FindJob og ScreenTwo
* Hver Screen har individuel Styling qf den fremviste header.
*/
function StackNavigator() {
    return (
        <Stack.Navigator
            initialRouteName="Posted Jobs"
        >
            <Stack.Screen name="Posted Jobs" component={ScreenTwo} options={{
                headerTitleStyle: { textAlign: 'right', color: 'white' },
                headerStyle: {backgroundColor: '#62bab5'}
            }} />
            <Stack.Screen name="ScreenTwo" component={PostedJobsList} options={{
                headerTitleStyle: {color: 'black'},
                headerStyle: {backgroundColor: '#628bba'}
            }}
            />
        </Stack.Navigator>
    )
}

//Eksport af den funktionelle komponent, således den kan importeres i andre komponenter
export default StackNavigator
