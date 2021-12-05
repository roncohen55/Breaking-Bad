import React, { useState, useEffect } from 'react';
import { StyleSheet, Text, View ,TouchableOpacity, FlatList, ActivityIndicator,Image} from 'react-native';
import Style from '../../utility/appStyle.js'


const CharacterScreen = props => {
    const baseUrl = 'https://www.breakingbadapi.com/api/characters';
    const [serverData, setServerData] = useState([]);

    const getData = async () => {        
        const response = await fetch(baseUrl, {
          method: 'GET'
        });

        const newData = await response.json();
        setServerData(newData);
        console.log(serverData);
    }

    useEffect(() => {
        getData();
      },[]);

      return(
            <View style={Style.Container}>
                <Image
                style={{backgroundColor:'#fff',height:80,width:'100%',resizeMode: "center"}}
                source={{uri:'https://upload.wikimedia.org/wikipedia/commons/thumb/7/77/Breaking_Bad_logo.svg/369px-Breaking_Bad_logo.svg.png'}}
                />
           
           <FlatList 

                data={serverData}
                keyExtractor={item => item.id}
                renderItem={langItem => <View style={{width:'100%',paddingVertical:20}}>
                <View style={{ backgroundColor: '#fff',borderRadius:10}}>
                <TouchableOpacity onPress={() => {props.navigation.navigate('Overview',{ezeshem:langItem.item})}}>
                <View style={{flexDirection:'row' }}>
                <Image 
                    style={{height:120,width:150,resizeMode: "center"}}
                    source={{uri:langItem.item.img}} />
                <View>
                <Text style={Style.txt}>Name: {langItem.item.name}</Text>
                <Text style={Style.txt}>Nickname: {langItem.item.nickname}</Text>        
                </View>
                </View>
                </TouchableOpacity >
            </View>

            </View>}
                />
  





            
        </View>
      )
}

export const screenOption = navData =>{
    


        
       

    return{
        headerTitle:'Character'

        
    }
}

export default CharacterScreen;