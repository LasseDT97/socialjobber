import React, {useState} from 'react'
import {Text, TextInput, View} from 'react-native'


const InputComponent = () => {

    /*deklarer vores states, med først værdi og derefter vores sætter*/
    const [inputValue, setInputValue] = useState("")

    return(
        <View>
            {/*Slut den af*/}

            <TextInput
                style={{borderWidth:1}}
                onChangeText={(txt) => setInputValue(txt)}
                value={inputValue}
            />

            <View style={{flexDirection:'row',width:"50%"}}>
                <Text style={{flex: 1, flexWrap: 'wrap'}}>Rødhætte gik en tur i skoven, og {inputValue} </Text>
            </View>

        </View>
    )
}

export default InputComponent
