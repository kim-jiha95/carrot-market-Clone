import React from 'react';
import { StyleSheet, View, Text,Image } from 'react-native';

export default function Mypage() {
  return (
    <View >
      <Image style ={styles.pencil}         
         source={require("../assets/Pencil.png")}
/>
    </View>
  );
}

const styles = StyleSheet.create({
  pencil:{
    marginTop: 680,
    marginLeft: 310,
    width: 50,
    height: 50,
  }
});