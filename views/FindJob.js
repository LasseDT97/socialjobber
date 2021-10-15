import {StyleSheet, Text, View} from "react-native";
import * as React from "react";

//FindJob komponenten tager en prop med og printer indholdet af denne i en <Text/>
function FindJob({prop}) {
    return (
        <View style={styles.container}>
            <Text style={styles.text}>{prop}</Text>
        </View>
    );
}

export default FindJob

//Lokal styling til brug i FindJob
const styles = StyleSheet.create({
    container: {
        borderColor: 'red',
        borderWidth: 20,
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: 'white',
    },
    text: {
        fontSize: 20,
    },
});
