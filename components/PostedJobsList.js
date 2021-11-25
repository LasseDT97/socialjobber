// Anton
import React, {useEffect, useState} from 'react';
import {StyleSheet, Text, View} from 'react-native';
import firebase from 'firebase';
import {SafeAreaView} from "react-navigation";

function PostedJobsList() {
    const [jobs, setJobs] = useState([]);

    const ref = firebase.firestore().collection('jobs');

    function getJobs() {
        ref.onSnapshot((querySnapshot) => {
            const items = [];
            querySnapshot.forEach((doc) => {
                items.push(doc.data());
            });
            setJobs(items);
        });
    }

    useEffect(() => {
        getJobs();
    }, []);

    return (
        <View style={styles.container} >
            <Text styles={styles.title}>Ledige Job...</Text>
            {jobs.map((job) => (
                <View key={job.id}>
                    <Text style={styles.textName}>{job.employer}</Text>
                    <Text style={styles.regularText}>{job.title}</Text>
                    <Text style={styles.regularText}>{job.desc}</Text>
                    <Text style={styles.regularText}>{job.address}</Text>
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
        flex: 0.8,
        justifyContent: 'flex-start',
        alignItems: 'flex-start',
        backgroundColor: (10, 10, 50),
        margin: 1,
        padding: 15

    },
    textName: {
        fontSize: 25,
    },
    regularText: {
        fontSize: 20,
    },
    title: {
        fontSize: 100,
    }
});

export default PostedJobsList;
