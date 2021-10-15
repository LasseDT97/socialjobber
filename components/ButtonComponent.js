import React, {useState} from 'react'
import {Button, Text, View} from 'react-native'


const ButtonComponent = () => {

    const [active, setActive] = useState(false)

    return(
        <View>
            <Text>{active ? "Ja til kode! :) " : "Nej til kode :("}</Text>
            <Button title={"Kode?"} onPress={()=> setActive(!active)}/>
        </View>
    )
}

export default ButtonComponent;
