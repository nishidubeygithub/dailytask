import React from 'react';
import {View, Text, StyleSheet} from 'react-native';

const Practice = ({title, color, container}) => {
    let style = {backgroundColor: color ? color : 'pink'};
    
    return (
        <View style = {[container, style]}>
           
            <Text style ={styles.text}>{title}</Text>
            
        </View>
          
            
    )
}


const styles = StyleSheet.create({
    container:{
     flex:1,
     alignItems:'center',
     justifyContent:'center',
     padding:20
     },
   text:{
        fontSize:20,
        marginTop:10,
        padding:20,
        alignItems:'center',
        width:430,
        height:200
    }
})
export default Practice;