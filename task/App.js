import React from 'react';
import {View, Text, StyleSheet, SafeAreaView, TouchableOpacity, Button} from 'react-native';
import Practice from './demo/Practice';
import TextInput1 from './demo/TextInput1';
import Button1 from './demo/Button1';
import Calculator from './demo/Calculator';
import Main from './demo/Main';



 const App = () => {
  return (
    <View style={styles.container}>
      <TextInput1 placeholder ="email"
      style={styles.container}
      
      autoCapitalize="characters"
      maxLenght={4}>
     </TextInput1>
      <TextInput1 placeholder ="password"
      style={styles.container}
      autoCapitalize="words"
      maxLenght={4}
      SecureTextEntry={true}></TextInput1>
      <TextInput1/>
      <View style={styles.button}>
      <Button title ='Submit' color='black'/>
      </View>
    </View>

    //text component
//  <View style={[styles.container, {backgroundColor:'pink'}]}> 
// <View style={styles.container}>
//          <Practice color="lightblue" style={styles.container} title="nishi"/>
//          <Practice color="green" style={styles.container} title="ram"/>
//         <Practice color="orange" style={styles.container} title="ravi"/>
//         <Practice color="red" style={styles.container} title="suny"/>
//        </View> 
//        </View>
{/* <View style = {styles.container}>
   <Button1 title ={"submit"} />
   <Button1 title ={"press"}/>
</View>  */}
//    <View style= {styles.container}>
//     <Calculator style={styles.view}/>
//     </View>


              
            //   <SafeAreaView style ={styles.container}>
            //   <Main title ="Calculator" style ={styles.main}/> 
              /* <View style = {styles.footerbox}>
            
            
            
              <Calculator title ="C" onPress={() => console.log('welcome')} color="green"style={styles.box1}/>
              <Calculator title ="()" onPress={() => console.log('welcome')} />
              <Calculator title ="%" onPress={() => console.log('welcome')} />
              <Calculator title ="/" onPress={() => console.log('welcome')} />
              <Calculator title ="7" onPress={() => console.log('welcome')} />
              <Calculator title ="8" onPress={() => console.log('welcome')} />
              <Calculator title ="9" onPress={() => console.log('welcome')} />
              <Calculator title ="*" onPress={() => console.log('welcome')} />
            <Calculator title ="4" onPress={() => console.log('welcome')} />
            <Calculator title ="5" onPress={() => console.log('welcome')} />
            <Calculator title ="6" onPress={() => console.log('welcome')} />
              <Calculator title ="-" onPress={() => console.log('welcome')} />
              <Calculator title ="1" onPress={() => console.log('welcome')}/>
              <Calculator title ="2" onPress={() => console.log('welcome')}/>
              <Calculator title ="3" onPress={() => console.log('welcome')}/>
              <Calculator title ="+" onPress={() => console.log('welcome')} />
              <Calculator title ="+/-" onPress={() => console.log('welcome')}/>
              <Calculator title ="0" onPress={() => console.log('welcome')} />
          <Calculator title ="." onPress={() => console.log('welcome')} />
             <Calculator title ="=" onPress={() => console.log('welcome')} style={styles.box2}/>
            

            
            

            
             </View>
              */
            // </SafeAreaView> 
            

) 
  
 }
 const styles = StyleSheet.create({
  container:{
     backgroundColor:'limegreen', 
    width:100, 
    height:42, 
    marginTop:400,
    marginLeft:200,
    borderRadius:2,
    alignItems:'center'
   
   
   },
//   container:{
//     flex:1,
//     backgroundColor:'pink',
//     padding:40,
    // margin:20
//    },
// container:{
//     flex:1,
//     backgroundColor:'white',
//      },
  stylebutton:{
    backgroundColor:'blue',
    padding:20,
    width:110, 
    height:42, 
    margin:10,
    borderRadius:2,
   },
   view:{
    flex:1, 
    backgroundColor:'white'
},
view1:{
    flex:1,
    backgroundColor:'green',
    padding:20
},
view2:{
    flex:1,
    backgroundColor:'blue'
},
view3:{
    flex:1,
    backgroundColor:'purple'
},
view4:{
    flex:1,
    backgroundColor:'pink'
},
view5:{
    flex:1,
    backgroundColor:'lightgreen'
},
view6:{
    flex:1,
    backgroundColor:'white'
},
view7:{
    flex:1,
    backgroundColor:'white'
},
view8:{
    flex:1,
    backgroundColor:'white'
},
view9:{
    flex:1,
    backgroundColor:'white'
},
view10:{
    flex:1,
    backgroundColor:'white'
},
view11:{
    flex:1,
    backgroundColor:'white'
},
view12:{
    flex:1,
    backgroundColor:'white'
},
view13:{
    flex:1,
    backgroundColor:'white'
},
view14:{
    flex:1,
    backgroundColor:'white'
},
view15:{
    flex:1,
    backgroundColor:'white'
},
view16:{
    flex:1,
    backgroundColor:'white'
},
view17:{
    flex:1,
    backgroundColor:'pink'
},
view18:{
    flex:1,
    backgroundColor:'pink'
},
view19:{
    flex:1,
    backgroundColor:'pink'
},
text:{
    fontSize:20,
    padding:10
}
})
 
 
 export default App;