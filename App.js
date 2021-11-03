// imports
import React, {useEffect, useState} from 'react';
import { Text, View, StyleSheet} from 'react-native';
import SignUpForm from './components/SignUpForm';
import firebase from 'firebase';
import LoginForm from './components/LoginForm';
import Navigation from "./components/Navigation";
import { Card } from 'react-native-paper';
import CreateJob from "./components/stackComponents/CreateJob";
// import { initializeApp } from 'firebase';

// For at opsætte scroll til applikationen, besøg dette link: https://www.google.com/search?q=react+native+scroll&ei=1cxuYe-YD_eC9u8PuIKm4AQ&ved=0ahUKEwiv14PoztbzAhV3gf0HHTiBCUwQ4dUDCA4&uact=5&oq=react+native+scroll&gs_lcp=Cgdnd3Mtd2l6EAMyBQgAEIAEMgQIABBDMgQIABBDMgQIABBDMgQIABBDMgQIABBDMgUIABCABDIECAAQQzIFCAAQgAQyBQgAEIAEOgcIABBHELADOhAILhDHARCvARCwAxBDEJMCOgcIABCwAxBDSgQIQRgAUMAKWI8NYIEbaAFwAngBgAGtAogBogeSAQcwLjEuMi4xmAEAoAEByAEKwAEB&sclient=gws-wiz#kpvalbx=_58xuYZfPA-KDlQe2sa-wBQ21

// Firebase Config fra firebase oprettelse
const firebaseConfig = {
    apiKey: "AIzaSyBIBJkpo5_X89Rw5QuO_bpK0zuw_CrnNr8",
    authDomain: "socialjobber-1a05e.firebaseapp.com",
    projectId: "socialjobber-1a05e",
    storageBucket: "socialjobber-1a05e.appspot.com",
    messagingSenderId: "826923145982",
    appId: "1:826923145982:web:bde71a28d1d0ee803523af"
};

export default function App() {
    //Her oprettes bruger state variablen, Bruger er som standard ikke logget ind
    const [user, setUser] = useState({ loggedIn: false });

    //Koden sikrer at kun én Firebase initieres under brug af appen.
    if (!firebase.apps.length) {
        firebase.initializeApp(firebaseConfig);
    }

//onAuthstatechanged er en prædefineret metode, forsynet af firebase, som konstant observerer brugerens status (logget ind vs logget ud)
//Pba. brugerens status foretages et callback i form af setUSer metoden, som håndterer user-state variablens status.
    function onAuthStateChange(callback) {
        return firebase.auth().onAuthStateChanged(user => {
            if (user) {
                callback({loggedIn: true, user: user});
            } else {
                callback({loggedIn: false});
            }
        });
    }

    //Heri aktiverer vi vores listener i form af onAuthStateChanged, så vi dynamisk observerer om brugeren er aktiv (logged ind) eller ej.
    useEffect(() => {
        const unsubscribe = onAuthStateChange(setUser);
        return () => {
            unsubscribe();
        };
    }, []);

//Her oprettes gæstekomponentsindhold, der udgøres af sign-up og login siderne
    const GuestPage = () => {
        return(
            <View style={styles.container}>
                <Text style={styles.paragraph}>
                    Velkommen til socialjobber. Dejligt du gad at komme. Vi er super glade og spændte på at annoncere
                    dette samarbejde blabla.
                </Text>

                <Card style={{padding:20}}>
                    <SignUpForm />
                </Card>

                <Card style={{padding:20}}>
                    <LoginForm />
                </Card>

            </View>
        )
    }

    return user.loggedIn ? <Navigation/> : <GuestPage/> ;
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        paddingTop: '5%',
        backgroundColor: 'transparent',
        padding: 20,
    },
    paragraph: {
        margin: 24,
        fontSize: 18,
        fontWeight: 'bold',
        textAlign: 'center',
    },
});
