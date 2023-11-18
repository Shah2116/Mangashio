import {Image, StyleSheet, Text, View } from 'react-native'
import React from 'react'

const Title = () => {
  return (
    <View style={styles.container}>
    <Image
      resizeMode="contain"
      source={require('../assests/images/Logo.png')}
      style={styles.logo}
      accessibilityLabel="Logo"
    />
    <Text style={styles.logoText}>MangaShio</Text>
  </View>
  )
}

export default Title

const styles = StyleSheet.create({
container:{
    flexDirection:'row',
    justifyContent:'center',
    alignItems:'center'
},
logo:{
height:49,
width:49,
},
logoText:{
    color: '#fff',
    fontSize: 24.36,
    marginLeft: 10,
    fontWeight: "800",
},
})