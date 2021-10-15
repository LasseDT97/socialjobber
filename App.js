import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import FindJob from "./views/FindJob";
import Profil from "./views/Profil";
//Resten af disse imports har forkerte stier. Skal ændres fra components til views

import Ionicons from 'react-native-vector-icons/Ionicons';
import StackNavigator from "./components/StackNavigator";

//Her oprettes en instans af tabnavigator
const Tab = createBottomTabNavigator();

//Her oprettes de tre tekst referencer, der skal benyttes i vores screen komponenter
const FindJobScreenText = "Dette er screen til FindJob. Den skal indeholde et map hvor alle de forskellige jobs skal" +
    " ligge på kortet. Man skal kunne navigere rundt på kortet og klikke på et job og få detaljer om jobbet. Denne side bliver redigeret i views folderen og ved FindJob.js"
const ProfilScreenText = "Dette screen skal indeholde profilen. Herunder skal man kunne se profilnavn, udførte jobs, penge tjent, rating, metadata osv. Denne sidde bliver redigeret i views folderen og ved Profil.js"

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
                    if (route.name === 'FindJob') {
                        return (
                            <Ionicons
                                name={'hammer-outline'}
                                size={size}
                                color={color}
                            />
                        );
                    }
                    else{
                        return (
                            <Ionicons
                                name='person-outline'
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
                <Tab.Screen name="Find Job" children={()=><FindJob prop={FindJobScreenText}/>} />
                <Tab.Screen name="Profil" children={()=><Profil prop={ProfilScreenText}/>} />
            </Tab.Navigator>
        </NavigationContainer>
    );
}

export default App
