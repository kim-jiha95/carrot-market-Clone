import React, { useState, useEffect } from 'react';
import { StyleSheet, Image, Platform, Alert, View, Text } from 'react-native';
import * as ImagePicker from 'expo-image-picker';
import { Ionicons } from '@expo/vector-icons';
import { Grid } from 'react-native-easy-grid';
import { secondhandpost } from '../config/BackData';
import {
  Container,
  Content,
  Button,
  Item,
  Input,
  Form,
  Textarea,
} from 'native-base';
import HomeAddComponent from '../components/HomeAddComponent';

export default function HomeAddPage({ navigation }) {
  const [title, setTitle] = useState('');
  const [contents, setContents] = useState('');
  const [price, setPrice] = useState('');

  const upload = async () => {
    console.log(title, contents, price);

    secondhandpost(title, contents, price);
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

  return (
    <Container>
      {/* <View style={styles.container}> */}
      {/* <HomeAddComponent headerTitle="중고거래 글 쓰기" />  */}
      <Content>
        {/* </View> */}
        <Grid style={styles.imageUpload}>
          <Ionicons
            style={styles.camera}
            name={'camera-outline'}
            color={'grey'}
            size={25}
          ></Ionicons>
        </Grid>
        <Item regular style={styles.title}>
          <Input
            placeholder="글 제목"
            value={title}
            style={{ fontSize: 13 }}
            onChangeText={(text) => setTitle(text)}
          />
        </Item>
        <Item regular style={styles.category}></Item>
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
        <Button
          full
          style={styles.uploadButton}
          onPress={() => {
            upload();
          }}
        >
          <Text>등록</Text>
        </Button>
      </Content>
    </Container>
  );
}

const styles = StyleSheet.create({
  imageUpload: {
    borderWidth: 2,
    borderRadius: 10,
    borderColor: 'grey',
    borderStyle: 'dashed',
    width: '20%',
    marginTop: 40,
  },

  camera: {
    textAlign: 'center',
    width: '100%',
    fontSize: 40,
    fontWeight: '300',
    color: 'grey',
  },
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
    height: 300,
  },
  content: { borderRadius: 10, fontSize: 13 },
  uploadButton: {
    width: '90%',
    alignSelf: 'center',
    marginTop: 10,
    backgroundColor: 'pink',
  },
});
