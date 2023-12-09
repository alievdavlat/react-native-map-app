import React from 'react'
import { StyleSheet, Text, View } from 'react-native'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Home from '../screens/Home'
import Fav from '../screens/Fav'
import Search from '../screens/Search'
import Profile from '../screens/Profile'
import { Ionicons } from '@expo/vector-icons'; 


const Tab = createBottomTabNavigator();

const TabNavigations = () => {

  return (
    <Tab.Navigator screenOptions={{
      headerShown:false,
      
    }}>
    <Tab.Screen name="Home" component={Home}
    options={{
      topBarLabel: "Home",
      tabBarIcon: (({color, size}) => (
        <Ionicons name="ios-home" size={size} color={color} />
      ))
    }}
    />
    <Tab.Screen name="Fav" component={Fav} 
    options={{
      topBarLabel: "Fav",
      tabBarIcon: (({color, size}) => (
    <Ionicons name="heart-outline" size={size} color={color} />
      ))
    }}
    />
    <Tab.Screen name="Search" component={Search} 
    options={{
      topBarLabel: "Search",
      tabBarIcon: (({color, size}) => (
      <Ionicons name="search" size={size} color={color} />
      ))
    }}
    />
    <Tab.Screen name="Profile" component={Profile} 
    options={{
      topBarLabel: "Profile",
      tabBarIcon: (({color, size}) => (
        <Ionicons name="person" size={size} color={color} />
      ))
    }}
    />


  </Tab.Navigator>
  )
}

export default TabNavigations

const styles = StyleSheet.create({
  color:{
    color:'blue'
  }
})
