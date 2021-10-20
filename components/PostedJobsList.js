import React, {useEffect, useState} from 'react';
import {StyleSheet, Text, View} from 'react-native';
import firebase from 'firebase';
import 'firebase/firestore';

// Firebase Config fra firebase oprettelse
/*const firebaseConfig = {
    apiKey: "AIzaSyBIBJkpo5_X89Rw5QuO_bpK0zuw_CrnNr8",
    authDomain: "socialjobber-1a05e.firebaseapp.com",
    projectId: "socialjobber-1a05e",
    storageBucket: "socialjobber-1a05e.appspot.com",
    messagingSenderId: "826923145982",
    appId: "1:826923145982:web:bde71a28d1d0ee803523af"
};*/

function PostedJobsList() {
    const [jobs, setJobs] = useState([]);
    const [loading, setLoading] = useState(false);

    const ref = firebase.firestore().collection('jobs');

    function getJobs() {
        setLoading(true);
        ref.onSnapshot((querySnapshot) => {
            const items = [];
            querySnapshot.forEach((doc) => {
                items.push(doc.data());
            });
            setJobs(items);
            setLoading(false);
        });
    }

    useEffect(() => {
        getJobs();
    }, []);

    if (loading) {
        return <Text>Loading...</Text>;
    }

    return (
        <View style={styles.container} >
            <Text>Ledige Job</Text>
            {jobs.map((job) => (
                <View key={job.id}>
                    <Text style={styles.textName}>{job.EmployerName}</Text>
                    <Text style={styles.regularText}>{job.Description}</Text>
                    <Text style={styles.regularText}>{job.Adress}</Text>
                </View>
            ))}
        </View>
    );
}

//Lokal styling til brug i PostedJobsList
const styles = StyleSheet.create({
    container: {
        borderColor: 'black',
        borderWidth: 2,
        flex: 0.7,
        height: '50%',
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: (10, 10, 50),
    },
    textName: {
        fontSize: 25,
    },
    regularText: {
        fontSize: 20,
    },
});

export default PostedJobsList;
