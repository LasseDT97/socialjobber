import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, View } from 'react-native';

/*Mine brugte komponenter*/
import FirstComponent from "./components/FirstComponent";
import PropsComponent from "./components/PropsComponents";
import ButtonComponent from "./components/ButtonComponent";
import InputComponent from "./components/InputComponent";

/*Mit billede, kommer fra øvelse der er færdiglavet

//import FirstImage from "./assets/favicon.png"*/

const CallComponentsTemplate = () => {
  return (
      <View style={styles.container}>
        {/*Komponent uden nogen props*/}
        <FirstComponent/>

        {/*Komponent med Props*/}
        <PropsComponent name={"Eigil & jesper"}/>

        {/* Dynamisk farveknap */}
        <ButtonComponent/>

        {/*Input text felt*/}
        <InputComponent/>
      </View>
  );
}
export default CallComponentsTemplate;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
