import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import {createMaterialBottomTabNavigator} from '@react-navigation/material-bottom-tabs';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import Entypo from 'react-native-vector-icons/Entypo';
//Dashbord
import CharacterScreen,{screenOption as CharacterScreenOption} from '../screens/character';
import OverviewScreen,{screenOption as OverviewScreenOption} from '../screens/character/overview';

//catalog
import EpisodesScreen,{screenOption as EpisodesScreenOption} from '../screens/episodes';
import Overview1Screen,{screenOption as Overview1ScreenOption} from '../screens/episodes/overview1';

//cart
import QuotesScreen,{screenOption as QuotesScreenOption} from '../screens/Quotes';



const CharacterStackNavigetor=createStackNavigator();
export const CharacterStack = () => {
    return (
        <CharacterStackNavigetor.Navigator screenOptions={
            {
                headerStyle: {
                    backgroundColor:'#fff'
                },
                headerTintColor:'#00b32d',
                headerTitleStyle:{
                    fontWeight:'bold'
                },
                headerTitleAlign:'center'

            }} >
            <CharacterStackNavigetor.Screen name='Character' component={CharacterScreen} options={CharacterScreenOption}  />
            <CharacterStackNavigetor.Screen name='Overview' component={OverviewScreen} options={OverviewScreenOption} />
           
        </CharacterStackNavigetor.Navigator>
    )
}

const EpisodesStackNavigetor=createStackNavigator();
export const EpisodesStack = () => {
    return (
        <EpisodesStackNavigetor.Navigator screenOptions={
            {
                headerStyle: {
                    backgroundColor:'#fff'
                },
                headerTintColor:'#00b32d',
                headerTitleStyle:{
                    fontWeight:'bold'
                },
                headerTitleAlign:'center'

            }} >
<EpisodesStackNavigetor.Screen name ='Episodes' component={EpisodesScreen} options={EpisodesScreenOption} />
<EpisodesStackNavigetor.Screen name ='Overview1' component={Overview1Screen} options={Overview1ScreenOption} />

        </EpisodesStackNavigetor.Navigator>
    )
}

const QuotesStackNavigetor=createStackNavigator();
export const QuotesStack = () => {
    return (
     <QuotesStackNavigetor.Navigator  screenOptions={
        {
            headerStyle: {
                backgroundColor:'#fff'
            },
            headerTintColor:'#00b32d',
            headerTitleStyle:{
                fontWeight:'bold'
            },
            headerTitleAlign:'center'

        }} >
         <QuotesStackNavigetor.Screen name='Quotes' component={QuotesScreen} options={QuotesScreenOption} />
        

     </QuotesStackNavigetor.Navigator>
    )
}

const AppBottomBarNavigetor =createMaterialBottomTabNavigator();
export const AppBottomBar = () => {
    return (
        <AppBottomBarNavigetor.Navigator  activeColor='#ffff' inactiveColor='#ff2'  barStyle={{ backgroundColor:'#00b32d' }}>
            <AppBottomBarNavigetor.Screen  options={{tabBarLabel:'Character',tabBarIcon:({ focused,color,size}) => {

            return(<Entypo name='users' color='#000000' size={26} />)
            }}} 
             name='Character' component={CharacterStack}  />
            <AppBottomBarNavigetor.Screen options={{tabBarLabel:'Episodes',tabBarIcon:({focused,color,size}) => {
            return(<Entypo name='tv' color='#000000'  size={26}/>)}}} name='Episodes' component={EpisodesStack}/>
            <AppBottomBarNavigetor.Screen options={{tabBarLabel:'Quotes',tabBarIcon:({ focused,color,size}) =>{
           return ( <Entypo name='quote' color='#000000' size={26} />)}}} name='Quotes' component={QuotesStack}/>
        </AppBottomBarNavigetor.Navigator>
    )
}

/*<AppBottomBarNavigator.Screen 
            name='Catalog' 
            component = {CatalogStack}
            options=
            {
                {
                    tabBarLabel :'Catalog',
                    tabBarIcon:({focused,color,size}) => {
                        const iconShape = focused ? 'tshirt-crew' : 'tshirt-crew-outline';
                        const iconColor = focused ? '#ffffff' : '#222222';
                        const iconSize = focused ? 28 : 26;
                        return(
                            <MaterialCommunityIcons name={iconShape} color={iconColor} size={iconSize}/>
                        )
                    }
                }
            }
            />*/
