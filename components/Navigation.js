import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import FindJob from './stackComponents/FindJob';
//import React, {useEffect, useState} from "react";
import Profile from "./Profile";
// import ikoner fra Ionicons: https://ionic.io/ionicons
import Ionicons from 'react-native-vector-icons/Ionicons';
import StackNavigator from "./StackNavigator";

//Her oprettes en instans af tabnavigator
const Tab = createBottomTabNavigator();

//Her oprettes de tre tekst referencer, der skal benyttes i vores screen komponenter
/*const NavigationScreenText = "Dette er screen til Navigation. Den skal indeholde et map hvor alle de forskellige jobs skal" +
    " ligge på kortet. Man skal kunne navigere rundt på kortet og klikke på et job og få detaljer om jobbet. Denne side bliver redigeret i views folderen og ved Navigation.js"*/
const ProfilScreenText = "Dette screen skal indeholde profilen. Herunder skal man kunne se profilnavn, udførte jobs, penge tjent, rating, metadata osv. Denne sidde bliver redigeret i views folderen og ved Profile.js"

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

function Navigation() {
    return (
        <NavigationContainer>
            <Tab.Navigator screenOptions={({ route }) => ({
                tabBarActiveTintColor: 'blue',
                tabBarInactiveTintColor: 'gray',
                tabBarIcon: ({ color, size }) => {
                    if (route.name === 'Navigation') {
                        return (
                            <Ionicons
                                name={'hammer-outline'}
                                size={size}
                                color={color}
                            />
                        );
                    } else if (route.name == 'Profile') {
                        return (
                            <Ionicons
                                name='person-outline'
                                size={size}
                                color={color}
                            />
                        );
                    }
                    //Dette ikon bestemmer over både dette og ikon på første navigator item, underligt.
                    else {
                        return (
                            <Ionicons
                                name='list-outline'
                                size={size}
                                color={color}
                            />
                        );
                            }
                },
            })}
                           /*screenOptions={{
                               activeTintColor: 'blue',
                               inactiveTintColor: 'gray',
                           }}*/
            >
                <Tab.Screen name="Find Job" children={()=><FindJob/>} />
                <Tab.Screen name="Profil" children={()=><Profile prop={ProfilScreenText}/>} />
                <Tab.Screen name="Stack" component={StackNavigator} />
            </Tab.Navigator>
        </NavigationContainer>
    );
}

export default Navigation

// skal smides bag på <Tab.Screen name="FindJob" children={()=><FindJob hvis det er Navigation i stedet "prop={FindJobScreenText}"
