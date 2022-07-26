import React from 'react';
import {View, Text, StyleSheet, Button} from 'react-native';

const Button1 = (props) => {
    return( 
      <View style={props.style}>
      <Button title ={props.title}/>
      
      </View>
        // <TouchableOpacity style = {styles.login}>
        //  <Text style={styles.log}>{props.title}</Text>
         
        // </TouchableOpacity>

)
}

export default Button1;

const styles = StyleSheet.create({
login:{
     backgroundColor:'limegreen', 
     width:110, 
     height:42, 
     margin:10,
     borderRadius:2,
     alignItems:'center'
       },
      log: {
        color:'white',
         margin: 10,
         fontSize:17,
         textAlign:'center'
       },
       stylebutton:{
        backgroundColor:'blue'
       }
})