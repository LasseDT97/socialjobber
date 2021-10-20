import {Button, Card, StyleSheet, Text, View, ScrollView} from "react-native";
import * as React from "react";
import Profile from "../Profile";
import SignUpForm from "../SignUpForm";
import PostedJobsList from "../PostedJobsList";

/*
*FindJob er den ene af de tre screens i StackNavigatoren
* FindJob præsenterer en tekst, der beskriver, hvor brugeren befinder sig samt
* returnerer to <Button/>, som benyttes til henholdsvis at navigere tilbage til sidste Screen og
* navigere ind til den anden screen i stackComponents
* Slutteligt er der inkluderet styling til komponenterne
 */
function FindJob({ navigation }) {
    return (
        <View style={styles.container}>
            <View style={{display: 'flex', /*justifyContent: 'space-evenly',*/ flexDirection: 'column', ScrollView: true}}>
                <View style={{padding: 5}}>
                    <PostedJobsList />
                </View>
                <View style={{margin: '2%'}} >
                    <Button title="Gå til profil" onPress={() => navigation.navigate('Profile')}/>
                </View>
                <View style={{margin: '2%'}} >
                    <Button title="Gå til screen to" onPress={() => navigation.navigate('ScreenTwo')}/>
                </View>
            </View>
        </View>
    );
}
//Eksport af Screen således den kan importeres- og bruges i andres komponenter
export default FindJob

//Lokal styling til brug i FindJob
const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: (10, 10, 10)
    },
    text: {
        fontSize: 20,
    },
});
