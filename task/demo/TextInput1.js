import React from 'react';
import {View, Text, StyleSheet, TextInput} from 'react-native';

const TextInput1 = (props) => {
  return (
    <View style={styles.container}>
      <Text></Text>
      <TextInput placeholder={props.placeholder} 
      style={props.styles}
      autoCapitalize={props.autoCapitalize}
      maxLength={props.maxLength}>

      </TextInput>
    </View>
  )
 }
 const styles = StyleSheet.create({
  container:{
   height:50,
   width:"100%",
   borderRadius: 10,
   borderWidth:1,
   padding:10,
   margin:20
 }
 })
 export default TextInput1;