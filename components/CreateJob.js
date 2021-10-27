import {StyleSheet, Text, View} from "react-native";
import * as React from "react";
//import React, {Fragment} from "react";
import firebase from 'firebase';
import { v4 as uuidv4 } from "uuid"
import {TextInput} from "react-native-web";
import {SafeAreaView} from "react-navigation";

function SnapshotFirebase() {
    const [jobs, setJobs] = useState([]);
    const [loading, setLoading] = useState(false);
    const [title, setTitle] = useState('');
    const [desc, setDesc] = useState('');


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

    function handleChange(event) {

    }


    return (
    <SafeAreaView>
        <View style={styles.container}>
            <Text style={styles.h1}>Post New Job</Text>
            <TextInput
                style={{height: 40}}
                placeholder="Type here to translate!"
                onChangeText={title => setTitle(text)}
                defaultValue={text}
            >Job Title</TextInput>

        </View>
    </SafeAreaView>
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

export default CreateJob;