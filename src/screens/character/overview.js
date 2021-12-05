import React from 'react';
import { StyleSheet, Text, View ,TouchableOpacity,Image} from 'react-native';
import Style from '../../utility/appStyle.js'
const OverviewScreen = (props) => {

    let statusColor = null;
    switch (props.route.params.ezeshem.status) {
        case 'Deceased':
            statusColor = '#880000';
            break;
        case 'Alive':
            statusColor = '#99cc00';
            break;
        case 'Unknown':
            statusColor = '#ffcc00';
            break;
    }

    let app = '';
    const apps = props.route.params.ezeshem.appearance
    const convertApps = () => {
        apps.forEach(elment => {
            app+= `${elment} `;
            console.log(elment);
        })
        console.log(apps);
        return app;
    }

    return(
        <View style={Style.Container1}>
            
            <Image
            style={{backgroundColor:'#fff',height:80,width:'100%',resizeMode: "center"}}
            source={{uri:'https://upload.wikimedia.org/wikipedia/commons/thumb/7/77/Breaking_Bad_logo.svg/369px-Breaking_Bad_logo.svg.png'}}
            />
           <View style={{backgroundColor:'#FFFFFF'}}>
            
            <Image 
            style={{height:390,width:350,alignItems:'center'}}
            source={{uri:props.route.params.ezeshem.img}} />
  
              <Text style={{ textAlign:'center',backgroundColor: statusColor,color:'#fff' }}>{props.route.params.ezeshem.status}</Text>

            <Text>Name:{props.route.params.ezeshem.name}</Text>
            <Text>Nickname:{props.route.params.ezeshem.nickname}</Text>
            <Text>Birthday:{props.route.params.ezeshem.birthday}</Text>
            <Text>portrayed:{props.route.params.ezeshem.portrayed}</Text> 
            <Text>Appearance: {convertApps(apps)}</Text>
         </View>
        </View>
    )
}

export const screenOption = navData =>{
    return{
        headerTitle:navData.route.params.ezeshem.name

    }
}

export default OverviewScreen