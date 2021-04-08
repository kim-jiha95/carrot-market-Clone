import React, {useState, useEffect} from 'react';
import { StyleSheet, Image,Platform, Alert, View, Text, TouchableOpacity } from 'react-native';
import * as ImagePicker from 'expo-image-picker';
import { Ionicons } from '@expo/vector-icons';
import { Grid } from 'react-native-easy-grid';
import { secondhandpost } from '../config/BackData';
import {
  Container,
  Header,
  Content,
  Left,
  Icon,
  Right,
  Button,
  Thumbnail,
  Item,
  Input,
  Form,
  Textarea,
} from 'native-base';
import HomeAddComponent from '../components/HomeAddComponent';


export default function HomeAddPage({navigation}) {

  const [title, setTitle] = useState('');
  const [contents, setContents] = useState('');
  const [price, setPrice] = useState('');

  
  const upload = async () => {
    console.log(title, contents, price)

    // await secondhandpost(title, contents, price);
  };

  const goHomePage = () => {
    navigation.navigate('HomePage');
  };

  
  const doHomePageAdd = () => {
    //Email 로그인 버튼을 누를 때 실행
    //관리 상태 값 확인
    // console.log(title);
    // console.log(contents);
    // console.log(price);
  };

  
  // useEffect(() => {
  //   const unsubscrbie = navigation.addListener('focus', (e) => {
  //     console.log('작성페이지 접속중');
  //   });
  //   getPermission();
  //   return unsubscrbie;
  // }, [navigation]);
  // const getPermission = async () => {
  //   if (Platform.OS !== 'web') {
  //     const {
  //       status,
  //     } = await ImagePicker.requestMediaLibraryPermissionsAsync();
  //     if (status !== 'granted') {
  //       Alert.alert('게시글을 업로드하려면 사진첩 권한이 필요합니다.');
  //     }
  //   }
  // };
  // const upload = async () => {
  //   console.log('업로드 준비중!');
  //   setProgress(true);
  // }

  //   const days = ['일', '월', '화', '수', '목', '금', '토'];
  //   let date = new Date();

  //   let year = date.getFullYear() + '년 ';
  //   let month = date.getMonth() + 1 + '월 ';
  //   let date1 = date.getDate() + '일 ';
  //   let day = days[date.getDay()] + '요일 ';
  //   let hour = date.getHours() + '시 ';
  //   let min = date.getMinutes() + '분';
  //   let time = date.getTime();

  //   let data = {
  //     key: time,
  //     title: title,
  //     desc: content,
  //     image: image,
  //     date: year + month + date1 + day + hour + min,
  //   };
  //   const response = await fetch(imageURI);
  //   const blob = await response.blob();
  //   const imageURL = await imageUpload(blob, time);

  //   data.image = imageURL;
  //   console.log(data);

  //   let result = await addDiary(data);
  // }

  return (
    
      <Container>
      {/* <View style={styles.container}> */}
        {/* <HomeAddComponent headerTitle="중고거래 글 쓰기" />  */}
        <Content>
        {/* <Ionicons
          style={styles.headerIcons}
          name={"settings-outline"}
          color={"grey"}
          size={20}
        /> */}
        {/* </View> */}
        <Grid style={styles.imageUpload}>
          <Ionicons style = {styles.camera} name ={'camera-outline'} color={'grey'} size = {25} ></Ionicons>
          {/* <Text style={styles.imageUploadPlus}>+</Text> */}
        </Grid>
        <Item regular style={styles.title}>
          <Input
            placeholder="글 제목"
            value={title}
            style={{ fontSize: 13 }}
            onChangeText={(text) => setTitle(text)}
          />
        </Item>
        <Item regular style={styles.category}>
          
          
          
          {/* <Input
            placeholder="카테고리 선택"
            style={{ fontSize: 13 }}            
            onChangeText={(text) => setTitle(text)}
          /> */}
        </Item>
        <Item regular style={styles.category}>
          <Input
            placeholder="가격 입력(선택사항)" 
            value={price}                              
            style={{ fontSize: 13 }}
            onChangeText={(text) => setPrice(text)}
          />
        </Item>
        <Form style={styles.contentLayout}>
          <Textarea
            rowSpan={17}
            bordered
            placeholder="동네에 올릴 게시글 내용을 작성해주세요. (가품 및 판매금지 품목은 게시가 제한될 수 있어요.)"
            style={styles.content}
            onChangeText={(text) => setContents(text)}
          />
        </Form>
        <TouchableOpacity full style={styles.uploadButton} onPress={() => upload()}>
          <Text>등록</Text>
        </TouchableOpacity>
      </Content>
        </Container>
    );
}

    // <View style={styles.container}>
    //   <Text>caroot ChatPage!</Text>
    // </View>
  

const styles = StyleSheet.create({
  // container: {
  //   flex: 1,
  //   justifyContent: 'center',
  //   alignItems: 'center',
  // },
  imageUpload: {
    borderWidth: 2,
    borderRadius: 10,
    borderColor: 'grey',
    borderStyle: 'dashed',
    width: '20%',
    // height: 50,
    marginTop: 40,
    // alignSelf: 'center',
    // alignItems: 'center',
    // maginLeft: 300,
  },
  camera:{
    textAlign: 'center',
    width: '100%',
    fontSize: 40,
    fontWeight: '300',
    color: 'grey',
  },
  // imageUploadPlus: {
  //   textAlign: 'center',
  //   width: '100%',
  //   fontSize: 40,
  //   fontWeight: '300',
  //   color: 'grey',
  // },
  title: {
    width: '90%',
    alignSelf: 'center',
    marginTop: 10,
    borderRadius: 10,
  },
  category: {
    width: '90%',
    alignSelf: 'center',
    marginTop: 10,
    borderRadius: 10,
  },
  contentLayout: {
    width: '90%',
    alignSelf: 'center',
    marginTop: 10,
    height: 300
  },
  content: { borderRadius: 10, fontSize: 13 },
  uploadButton: {
    width: '90%',
    alignSelf: 'center',
    marginTop: 10,
    backgroundColor: 'pink',
  },
});