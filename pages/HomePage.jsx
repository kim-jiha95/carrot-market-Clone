import React, {useState, useEffect }from 'react';
import { StyleSheet, ScrollView, View, Text,Image, Dimensions } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import HeaderComponent from '../components/HeaderComponent';
const diviceWidth = Dimensions.get('window').width;
import { Container, Tab, Tabs } from 'native-base';
import HomeComponent from '../components/HomeComponent';
import data from '../data.json';
import {getCateData} from '../config/BackData'


export default function HomePage( {navigation}) {
console.disableYellowBox = true;

const [categories, setCategories] = useState(data.result);

useEffect(() => {
    download();
},[]);

  const download = async () => {
    const result = await get();

    setCategories(result);
  }

  return (
    <Container>
      <HeaderComponent headerTitle = 'Home' />
      <Ionicons 
      style={styles.headerIcons1}
      name={'search-outline'}
      color={'grey'}
      size={25}
      />
      <Ionicons 
      style={styles.headerIcons2}
      name={'apps-outline'}
      color={'grey'}
      size={25}
      /><Ionicons 
      style={styles.headerIcons3}
      name={'notifications-outline'}
      color={'grey'}
      size={25}
      />
      <ScrollView>
        {categories.map((category, i) =>{
          return (
            <HomeComponent
            category = {category}
            key = {i}
            navigation={navigation}
            />
          );
        })}
      </ScrollView>
    </Container>
//     <View >
//       <Image style ={styles.pencil}         
//          source={require("../assets/Pencil.png")}
// />
//     </View>
  );
}

const styles = StyleSheet.create({
  pencil:{
    marginTop: 680,
    marginLeft: 310,
    width: 50,
    height: 50,
  },
  headerIcons1: {
    position: 'absolute',
    top:45,
    left:270,
  },
  headerIcons2: {
    position: 'absolute',
    top:45,
    left: 300,
  }, headerIcons3: {
    position: 'absolute',
    top:45,
    left:330,
  },
});