import React from 'react'
import { FlatList, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import { categoryItems } from '../../constants'
import CategoryListItem from './CategoryListItem'

const CategoryList = () => {
  return (
    <View style={styles.categoryContainer}>
      <Text style={styles.categoryTitle}> Select Top Category  </Text>

      <FlatList  
      horizontal={true}
      data={categoryItems}
      showsHorizontalScrollIndicator={false}
      renderItem={({item}) => (
        <TouchableOpacity onPress={() => {}}>
          <CategoryListItem category={item} />
        </TouchableOpacity>
      )}
      />
    </View>
  )
}

export default CategoryList

const styles = StyleSheet.create({
  categoryContainer: {
    marginTop:15
  },
  categoryTitle :{
    fontSize:20,
    marginTop:15,

  }
})
