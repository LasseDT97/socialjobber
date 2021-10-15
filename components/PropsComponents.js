import React from 'react'
import {Text,View} from 'react-native'

const PropsComponent = ({name}) => {
    return(
        <View>
            <Text>Mit navn {name}</Text>
        </View>
    )
}

export default PropsComponent;
