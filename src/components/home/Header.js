import React from 'react'
import { Image, StyleSheet, Text, TextInput, View } from 'react-native'
import { MaterialIcons } from '@expo/vector-icons'; 
import Colors from '../../shared/Colors';


const Header = () => {
  return (
    <View style={styles.headerContainer}>
      <Image 
        source={require('../../../assets/logo.png')}
        style={styles.logo}
      />
      <View style={styles.searchBar}>
        <TextInput placeholder='Search' />
      </View>

      <MaterialIcons name="account-circle" size={40} color="black" />
    </View>
  )
}

export default Header

const styles = StyleSheet.create({
  headerContainer: {
    display:"flex",
    flexDirection:"row",
    justifyContent:'space-evenly',
    alignItems:'center',
  },
  logo:{
    width:50,
    height:50,
  },
  searchBar:{
    borderWidth:1,
    borderColor:Colors.black,
    padding:10,
    borderRadius:10,
    paddingLeft:10,
    width:'70%'
  },
  userImage:{

  }
})
