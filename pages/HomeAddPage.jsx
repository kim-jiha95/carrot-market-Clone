import React, {useState, useEffect} from 'react';
import { StyleSheet, Image,Platform, Alert, View, Text } from 'react-native';
import * as ImagePicker from 'expo-image-picker';
import { Ionicons } from '@expo/vector-icons';
import { Grid } from 'react-native-easy-grid';
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


export default function HomeAddPage() {
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
            style={{ fontSize: 13 }}
            onChangeText={(text) => setTitle(text)}
          />
        </Item>
        <Item regular style={styles.category}>
          <Input
            placeholder="카테고리 선택"
            style={{ fontSize: 13 }}
            onChangeText={(text) => setTitle(text)}
          />
        </Item><Item regular style={styles.category}>
          <Input
            placeholder="가격 입력(선택사항)                               or 가격제안 받기"
            style={{ fontSize: 13 }}
            onChangeText={(text) => setTitle(text)}
          />
        </Item>
        <Form style={styles.contentLayout}>
          <Textarea
            rowSpan={17}
            bordered
            placeholder="동네에 올릴 게시글 내용을 작성해주세요. (가품 및 판매금지 품목은 게시가 제한될 수 있어요.)"
            style={styles.content}
            onChangeText={(text) => setContent(text)}
          />
        </Form>
        {/* <Button full style={styles.uploadButton} onPress={() => upload()}>
          <Text>등록</Text>
        </Button> */}
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
  // uploadButton: {
  //   width: '90%',
  //   alignSelf: 'center',
  //   marginTop: 10,
  //   backgroundColor: 'pink',
  // },
});