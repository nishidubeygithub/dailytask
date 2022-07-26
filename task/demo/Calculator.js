import React from 'react';
import {View, Text, TouchableOpacity, StyleSheet, SafeAreaView} from 'react-native';




  // const Main =() => {
  //   return (
  //     <View style = {styles.main}>
  //       <Text style={styles.txt}>Calculator</Text>
  //       </View>
  //   )
  // }

  // 
  // const Main = (props)=> {
  //   return (
  //   <View style = {styles.main}>
  //     <Text style ={styles.txt}>{props.title}</Text>
  //     </View> 
 
  // )
  // }
  
const Calculator = () => {
  return(
    <View style = {styles.mainbox}>
      <View style = {styles.footerbox}>
           <View style ={styles.box}>
           <View style ={styles.box1}>
           <TouchableOpacity onPress = {() => console.log('welcome')}>
    <Text style ={styles.calc}>C</Text>
         </TouchableOpacity>
         </View>
        </View>



  {/* const Calculator = ({color, title, onPress, box1})  => { 
  
  
     return (
       <View style = {styles.mainbox}>
         <View style ={styles.box}>
            <View style ={styles.box1}>
          
              <TouchableOpacity onPress = {onPress} style={box1} color={color}>
          <Text style ={styles.calc}>{title}</Text>
          </TouchableOpacity>
          </View>
         </View>      */}
        
       <View style ={styles.box}>
           <View style ={styles.box1}>
           <TouchableOpacity onPress = {() => console.log('welcome')}>
    <Text style ={styles.calc}>()</Text>
         </TouchableOpacity>
         </View>
        </View>
           <View style ={styles.box}>
           <View style ={styles.box1}>
           <TouchableOpacity onPress = {() => console.log('welcome')}>
         <Text style ={styles.calc}>/</Text>
         </TouchableOpacity>
         </View>
         </View> 
          
           <View style ={styles.box2}>
         
           <TouchableOpacity onPress = {() => console.log('welcome')}>
         <Text style ={styles.calcy}>%</Text>
         </TouchableOpacity>
          
         </View> 
          <View style ={styles.box}>
           <View style ={styles.box1}>
          <TouchableOpacity onPress = {() => console.log('welcome')}>
        <Text style ={styles.calc}>7</Text>
       </TouchableOpacity>
       </View>
         </View>
         <View style ={styles.box}>
         <View style ={styles.box1}>
          <TouchableOpacity onPress = {() => console.log('welcome')}>
         <Text style ={styles.calc}>8</Text>
         </TouchableOpacity>
     </View>
         </View>
         <View style ={styles.box}>
       <View style ={styles.box1}>
           <TouchableOpacity onPress = {() => console.log('welcome')}>
         <Text style ={styles.calc}>9</Text>
         </TouchableOpacity>
         </View>
         </View> 
           
           <View style ={styles.box2}>
           <TouchableOpacity onPress = {() => console.log('welcome')}>
         <Text style ={styles.calcy}>*</Text>
         </TouchableOpacity>
         
      </View> 
       <View style ={styles.box}>
           <View style ={styles.box1}>
           <TouchableOpacity onPress = {() => console.log('welcome')}>
         <Text style ={styles.calc}>4</Text>
         </TouchableOpacity>
         </View>
         </View>
         <View style ={styles.box}>
           <View style ={styles.box1}>
           <TouchableOpacity onPress = {() => console.log('welcome')}>
         <Text style ={styles.calc}>5</Text>
         </TouchableOpacity>
         </View>
         </View>
         <View style ={styles.box}>
           <View style ={styles.box1}>
           <TouchableOpacity onPress = {() => console.log('welcome')}>
         <Text style ={styles.calc}>6</Text>
         </TouchableOpacity>
         </View>
         </View> 
         
           <View style ={styles.box2}>
           <TouchableOpacity onPress = {() => console.log('welcome')}>
         <Text style ={styles.calcy}>-</Text>
       </TouchableOpacity>
       
       </View> 
        <View style ={styles.box}>
        <View style ={styles.box1}>
         <TouchableOpacity onPress = {() => console.log('welcome')}>
       <Text style ={styles.calc}>1</Text>
        </TouchableOpacity>
       </View>
       </View> 
       <View style ={styles.box}>
         <View style ={styles.box1}>
        <TouchableOpacity onPress = {() => console.log('welcome')}>
     <Text style ={styles.calc}>2</Text>
         </TouchableOpacity>
       </View>
       </View>
      <View style ={styles.box}>
         <View style ={styles.box1}>
         <TouchableOpacity onPress = {() => console.log('welcome')}>
        <Text style ={styles.calc}>3</Text>
         </TouchableOpacity>
       </View>
       </View> 
       
       <View style ={styles.box2}>
           <TouchableOpacity onPress = {() => console.log('welcome')}>
         <Text style ={styles.calcy}>+</Text>
         </TouchableOpacity>
        
         </View> 
        <View style ={styles.box}>
          <View style ={styles.box1}>
          <TouchableOpacity onPress = {() => console.log('welcome')}>
         <Text style ={styles.calc}>+/-</Text>
       </TouchableOpacity>
         </View>
         </View>
         <View style ={styles.box}>
         <View style ={styles.box1}>
           <TouchableOpacity onPress = {() => console.log('welcome')}>
       <Text style ={styles.calc}>0</Text>
       </TouchableOpacity>
         </View>
         </View>
         <View style ={styles.box}>
           <View style ={styles.box1}>
           <TouchableOpacity onPress = {() => console.log('welcome')}>
         <Text style ={styles.calc}>.</Text>
         </TouchableOpacity>
       </View> 
       </View>  
       
      <View style ={styles.box2}>
         <TouchableOpacity onPress = {() => console.log('welcome')}>
         <Text style ={styles.calcy}>=</Text>
         </TouchableOpacity>
         </View> 
          
      </View>
       </View> 
     
    )
}          
        //  return    (
        //   <SafeAreaView>
        //     <Main /> 
        //     <Calculator/>
        //     </SafeAreaView>
        //     )

            <SafeAreaView style ={styles.container}>
              <Main title ="Calculator" style ={styles.main}/> 
              {/* <View style = {styles.footerbox}>
            
            
            
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
             */}
            </SafeAreaView> 
            
                                    
    


const styles = StyleSheet.create({
    container:{
flex:1,
backgroundColor:'white',

    },
     main:{
      flex:1,
        backgroundColor:'black',
        alignItems:'center',
        padding:200,
        borderWidth:2,
        width:600
        },
    footerbox:{
      width:400,
      height:500,
      backgroundColor:'black',
      flexDirection:'row',
      flexWrap:'wrap',
      borderWidth:2,

    },
    box:{
      width:98,
      height:70,
      borderWidth:1,
    },
    box1:{
      flex:1,
      backgroundColor:'grey',
      justifyContent:'center',
      alignItems:'center',
     
    },
    box2:{
     height:70,
      width:98,
     borderWidth:1,
     justifyContent:'center',
     alignItems:'center',
     backgroundColor:'orange',
     },
     calc:{
      fontSize:20,
     },
     calcy:{
      color:'green',
      fontSize:20
     }
})
export default Calculator;
