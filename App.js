import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import HomeScreen from "./views/HomeScreen";
//Resten af disse imports har forkerte stier. Skal ændres fra components til views
import SettingsScreen from "./views/SettingsScreen";
//import Ionicons from 'react-native-vector-icons/Ionicons';
import StackNavigator from "./views/StackNavigator";

//Her oprettes en instans af tabnavigator
const Tab = createBottomTabNavigator();

//Her oprettes de tre tekst referencer, der skal benyttes i vores screen komponenter
const homeScreenText = "Dette er HomeScreen!"
const settingsScreenText = "Dette er SettingsScreen!"

/*Oprettelse af root komponent
* Her oprettes først en Navigationscontainer-komponent, der står for at håndtere state-ændringer & deep linking
* Ydeligere info om denne komponent kan findes i følgende link: https://reactnavigation.org/docs/navigation-container/
*
* Dernæst kaldes Navigator, der styrer navigationen mellem de forskellige tabs.
* I Tab navigatoren kalder en funktion i screenOptions, der har til formål at bestemme den aktuelle rute.
* Pba. af ruten styles den pågældende tab ved at benytte de importerede ikoner og den fastsatte styling, som ,
*  er fastsat  i tabBaroptions.
*
* Afslutningsvis angives de screen komponenter, vi ønsker at fremvise for hver tab. Komponenterne har vi importeret fra vores
* componentsfolder. Hver komponent fremvises ved brug af en funktion, der returnerer de komponenter vi har defineret til vores tabNavigator
* Hver komponent indeholder en reference til den tekst, som skal præsenteres i komponenten. Dertil er der skabt en nested Stacknavigator, som placeres i vores "details" tab.
*
* */
function App() {
    return (
        <NavigationContainer>
            <Tab.Navigator screenOptions={({ route }) => ({
                tabBarIcon: ({ color, size }) => {
                    if (route.name === 'Home') {
                        return (
                            <Ionicons
                                name={'home-outline'}
                                size={size}
                                color={color}
                            />
                        );
                    } else if (route.name === 'Settings') {
                        return (
                            <Ionicons
                                name='md-settings-outline'
                                size={size}
                                color={color}
                            />
                        );
                    }
                    else{
                        return (
                            <Ionicons
                                name='md-list-outline'
                                size={size}
                                color={color}
                            />
                        );
                    }
                },
            })}
                           tabBarOptions={{
                               activeTintColor: 'blue',
                               inactiveTintColor: 'gray',
                           }}
            >
                <Tab.Screen name="Settings" children={()=><SettingsScreen prop={settingsScreenText}/>} />
                <Tab.Screen name="Home" children={()=><HomeScreen prop={homeScreenText}/>} />
                <Tab.Screen name="Stack" component={StackNavigator} />
            </Tab.Navigator>
        </NavigationContainer>
    );
}

export default App
