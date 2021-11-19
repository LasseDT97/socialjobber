// Anton
import {Button, StyleSheet, Text, View} from "react-native";
import * as React from "react";
//import React, {Fragment} from "react";
import firebase from 'firebase';
import { v4 as uuid4 } from "uuid";
import {TextInput} from "react-native-web";
// import {SafeAreaView} from "react-navigation";
import { useEffect, useState} from "react";

function SnapshotFirebase() {
    const [employer, setEmployer] = useState('')
    const [title, setTitle] = useState('');
    const [desc, setDesc] = useState('');
    const [date, setDate] = useState('');
    const [hours, setHours] = useState('');

    const ref = firebase.firestore().collection('jobs');

    function getJobs() {
        ref.onSnapshot((querySnapshot) => {
            const items = [];
            querySnapshot.forEach((doc) => {
                items.push(doc.data());
            });
            setEmployer(items);
        });
    }

    useEffect(() => {
        getJobs();
    }, []);

    function addJob(newJob) {
        ref
            .doc(newJob.id)
            .set(newJob)
            .catch((err) => {
                console.error(err);
            });
    }

    function deleteJob(job) {
        ref
            .doc(job.id)
            .delete()
            .catch((err) => {
                console.error(err)
            });
    }

    function editJob(updatedJob) {
        setLoading();
        ref
            .doc(updatedJob.id)
            .update(updatedJob)
            .catch((err) => {
                console.error(err)
            })
    }

    return (
        <View style={styles.container}>
            <Text style={styles.h1}>Post New Job</Text>
            <TextInput style={{height: 40}}
                       placeholder="Employer name"
                       onChangeText={employer => setEmployer(text)}
                       defaultValue={text} />
            <TextInput style={{height: 40}}
                       placeholder="Title"
                       onChangeText={title => setTitle(text)}
                       defaultValue={text} />
            <TextInput style={{height: 40}}
                       placeholder="Description"
                       onChangeText={desc => setDesc(text)}
                       defaultValue={text} />
            <TextInput style={{height: 40}}
                       placeholder="Date"
                       onChangeText={date => setDate(formatDate(date))}
                       defaultValue={text} />
            <TextInput style={{height: 40}}
                       placeholder="Hours"
                       onChangeText={hours => setHours(text)}
                       defaultValue={text} />
            <Button onPress={() => addJob({employer, title, desc, date, hours, id: uuid4() })}>
                Submit Job</Button>
        </View>
    );
}

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
    h1: {
        fontSize: 25,
    },
    regularText: {
        fontSize: 20,
    },
});

export default SnapshotFirebase;
