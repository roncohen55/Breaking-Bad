import React from 'react';
import { StyleSheet, Text, View ,TouchableOpacity} from 'react-native';
import Style from '../../utility/appStyle.js'
const Overview1Screen = props => {

    let chars = '\n'+'';
    const char = props => {
        [...props].forEach(element => {
            chars+=`${element}\n`
        })
        return chars;
    }


    return(
        <View style={Style.Container}>
            <View style={{backgroundColor:'#fff',alignItems:'center',height:350,marginTop:30,justifyContent: 'center',borderRadius:10}}>
                <Text>Title:{props.route.params.ezeshem.title}</Text>
                <Text>Season:{props.route.params.ezeshem.season}</Text>
                <Text>Episode:{props.route.params.ezeshem.episode}</Text>
                <Text>Air-date:{props.route.params.ezeshem.air_date}</Text>
                <Text>Characters:{char(props.route.params.ezeshem.characters)}</Text>
                
                
            </View>
        </View>
    )
}

export const screenOption = navData =>{
    return{
        headerTitle:navData.route.params.ezeshem.title
    }
}

export default Overview1Screen