// Anton
import {Button, StyleSheet, Text, View} from "react-native";
import {TextInput} from "react-native-web";
import { useEffect, useState, Fragment} from "react";
import * as React from "react";
import firebase from 'firebase';
import { v4 as uuid4 } from "uuid";

function SnapshotFirebase() {
    //const [employer, setEmployer] = useState('')
    //const [address, setAddress] = useState('')
    const [title, setTitle] = useState('');
    const [desc, setDesc] = useState('');
    //const [datetime, setDatetime] = useState('');

    const ref = firebase.firestore().collection('jobs');

    function getJobs() {
        ref.onSnapshot((querySnapshot) => {
            const items = [];
            querySnapshot.forEach((doc) => {
                items.push(doc.data());
            });
            setTitle(items);
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
        ref
            .doc(updatedJob.id)
            .update(updatedJob)
            .catch((err) => {
                console.error(err)
            })
    }


    return (
            <Fragment>
                <Text>Jobs</Text>
                <View>
                    <Text>Add new</Text>
                    <TextInput
                        type="string"
                        value={title}
                        onChange={(e) => setTitle(e.target.value)}
                    />
                    <TextInput
                        type="string"
                        value={desc}
                        onChange={(e) => setDesc(e.target.value)}
                    />
                    <Button onClick={() => addJob({ title, desc, id: uuid4() })}>
                        Add Job
                    </Button>
                </View>
            </Fragment>
        )}

   /* return (
        <View style={styles.container}>
            <Text style={styles.h1}>Post New Job</Text>
            <TextInput style={{height: 40}}
                       placeholder="Employer name"
                       onChangeText={employer => setEmployer(text)}
                       defaultValue={text} />
            <TextInput style={{height: 40}}
                       placeholder="Address"
                       onChangeText={address => setAddress(text)}
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
                       placeholder="Date and time"
                       onChangeText={datetime => setDatetime(timestamp)}
                       defaultValue={text} />
            <Button onPress={() => addJob({employer, address, title, desc, datetime, id: uuid4() })}>
                Submit Job</Button>
        </View>
    );
}*/

/*const styles = StyleSheet.create({
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
});*/

export default SnapshotFirebase;
