import React,{useState, useEffect} from 'react';
import { StyleSheet, Text, View ,TouchableOpacity, FlatList, ActivityIndicator,Image} from 'react-native';
import Style from '../../utility/appStyle.js';
const EpisodesScreen = props => {

    const episodesUrl = 'https://www.breakingbadapi.com/api/episodes';
    const [EpisodesData, setEpisodesData] = useState([]);
  

  const getData1 = async () => {
    
    const response = await fetch(episodesUrl, {
      method: 'GET'
    });

    const newData1 = await response.json();
    setEpisodesData(newData1);
    console.log(EpisodesData);
}
useEffect(() => {
    getData1();
  },[]);

  return(
    <View style={Style.Container}>
        <Image
        style={{backgroundColor:'#fff',height:80,width:'100%',resizeMode: "center"}}
        source={{uri:'https://upload.wikimedia.org/wikipedia/commons/thumb/7/77/Breaking_Bad_logo.svg/369px-Breaking_Bad_logo.svg.png'}}
        />
   
   <FlatList 

        data={EpisodesData}
        keyExtractor={item => item.id}
        renderItem={langItem => <View style={{width:'100%',paddingVertical:20}}>
        <View style={{ backgroundColor: '#fff',borderRadius:10}}>
        <TouchableOpacity onPress={() => {props.navigation.navigate('Overview1',{ezeshem:langItem.item
})}}>
       <View>
       <Text style={Style.txt}>Title: {langItem.item.title}</Text>
   
   
        <Text style={Style.txt}>Air-date: {langItem.item.air_date}</Text>

       
     
        </View>
          <View style={{flexDirection:'row' }}>
            <Text style={Style.txt}>Season: {langItem.item.season}</Text>
           <Text style={Style.txt}>Episode: {langItem.item.episode}</Text>
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
        headerTitle:'Episodes'
    }
}

export default EpisodesScreen
