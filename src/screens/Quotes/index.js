import React,{useState,useEffect} from 'react';
import { StyleSheet, Text, View ,TouchableOpacity, FlatList, ActivityIndicator,Image} from 'react-native';
import Style from '../../utility/appStyle.js'




const QuotesScreen = props => {


    const QuotesUrl = 'https://www.breakingbadapi.com/api/quotes';
    const [QuotesData, setQuotesData] = useState([]);
    

  const getData2 = async () => {
  
    const response = await fetch(QuotesUrl, {
      method: 'GET'
    });

    const newData2 = await response.json();
    setQuotesData(newData2);
    console.log(QuotesData);
    
}


useEffect(() => {
    getData2();
  },[]);

  return(
    <View style={Style.Container}>
        <Image
        style={{backgroundColor:'#fff',height:80,width:'100%',resizeMode: "center"}}
        source={{uri:'https://upload.wikimedia.org/wikipedia/commons/thumb/7/77/Breaking_Bad_logo.svg/369px-Breaking_Bad_logo.svg.png'}}
        />
   
   <FlatList 

        data={QuotesData}
        keyExtractor={item => item.id}
        renderItem={langItem => <View style={{width:'100%',paddingVertical:20}}>
        <View style={{ backgroundColor: '#fff',borderRadius:10}}>
           
   <View>
   <Text style={Style.txt1}> {langItem.item.quote}</Text>
   
   
   <Text style={Style.txt}>{langItem.item.author}</Text>
  
   </View>
   <View style={{flexDirection:'row' }}>
      
   </View>
      </View>

     </View>}
         />

</View>
)
}

   

export const screenOption = navData =>{
    return{
        headerTitle:'Quotes'
    }
}

export default QuotesScreen

