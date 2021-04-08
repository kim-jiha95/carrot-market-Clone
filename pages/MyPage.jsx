import React from 'react';
import { StyleSheet } from 'react-native';
import { Container, Content, Text, Thumbnail } from 'native-base';
import HeaderComponent from '../components/HeaderComponent';
import { TouchableOpacity } from 'react-native-gesture-handler';
import { AsyncStorage } from 'react-native';
import { logout } from '../config/AxiosFunctions';
const my = require('../assets/my.png');
const data = require('../data.json');



export default function MyPage({ navigation }) {
  const goSignOut = () => {
    logout()
    navigation.navigate('SignIn')
  };
  return (
    <Container>
      <HeaderComponent/>
      <Content>
        <Thumbnail large source={my} style={styles.thumbnail}/>
        <Text style={styles.myTitle}>nobody</Text>
        <TouchableOpacity style={{ marginTop: 20 }} onPress={goSignOut}>
          <Text style={styles.logout} >로그아웃</Text>
        </TouchableOpacity>        
      </Content>
    </Container>
  );
}

const styles = StyleSheet.create({
  thumbnail: { alignSelf: 'center', marginTop: 30 },
  myTitle: {
    alignSelf: 'center',
    marginTop: 10,
    fontSize: 20,
    fontWeight: '700',
  },
  category: { fontWeight: '700' },
  categoryContent: { color: 'deeppink', fontWeight: '700' },
  imageWrap: { flexWrap: 'wrap', marginTop: 20 },
  logout: {
    alignSelf: 'center',
    padding: 10,
    borderColor: 'grey',
    borderWidth: 1,
    borderRadius: 10,
  },
});