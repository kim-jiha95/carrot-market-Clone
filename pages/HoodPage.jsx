import React from 'react';
import { StyleSheet, View, Text, Image } from 'react-native';


export default function Mypage() {
  return (
    <View>      
      <Image style ={styles.plus}         
         source={require("../assets/plus.png")}
/>
      
    </View>
  );
}

const styles = StyleSheet.create({
    plus:{
      marginTop: 680,
      marginLeft: 310,
      width: 50,
      height: 50,
    }
  
 
  
});