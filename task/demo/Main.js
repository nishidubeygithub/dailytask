import React from 'react';
import {View, Text, StyleSheet} from 'react-native';

const Main = (props)=> {
      return (
      <View style = {styles.main}>
         <Text style ={styles.txt}>{props.title}</Text>
         </View> 
   
     )
     }

     const styles = StyleSheet.create ({
        main:{
            main:{
                flex:1,
                  backgroundColor:'black',
                  alignItems:'center',
                  padding:200,
                  borderWidth:2,
                  width:600
                  },
        }
     })
     export default Main;