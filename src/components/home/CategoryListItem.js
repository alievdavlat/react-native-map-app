import React from 'react'
import { Image, StyleSheet, Text, View } from 'react-native'

const CategoryListItem = ({category}) => {
  return (
    <View style={{padding:5, alignItems:'center', margin:10 , width:100, height:100, backgroundColor:'#ffff', borderRadius:20}}>
      <Image style={{width:50, height:50}} source={category.icon}/>
      <Text style={{fontSize:13}}>
        {category.name}
      </Text>
    </View>
  )
}

export default CategoryListItem

const styles = StyleSheet.create({})
