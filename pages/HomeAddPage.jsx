import React, { useState, useEffect } from 'react';
import { StyleSheet, Image, Platform, Alert } from 'react-native';
import * as ImagePicker from 'expo-image-picker';
import { Grid } from 'react-native-easy-grid';
import {
  Container,
  // Header,
  Content,
  Left,
  Icon,
  Text,
  Right,
  Button,
  Thumbnail,
  Item,
  Input,
  Form,
  Textarea,
} from 'native-base';
// const imageWidth = Dimensions.get('window').width / 3;

import HomeAddComponent from '../components/HomeAddComponent';

export default function HomeAddPage() {
  const [title, setTitle] = useState('');
  const [titleError, setTitleError] = useState('');

  const [content, setContent] = useState('');
  const [contentError, setContentError] = useState('');

  // const [image, setImage] = useState(tempImage);
  useEffect(() => {
    getPermission();
  }, []);

  const getPermission = async () => {
    if (Platform.OS !== 'web') {
      const {
        status,
      } = await ImagePicker.requestMediaLibraryPermissionsAsync();
      if (status !== 'granted') {
        alert('게시글을 업로드하려면 사진첩 권한이 필요합니다.');
      }
    }
  };

  const upload = async () => {
    console.log('업로드 준비중!');
    const currentUser = firebase.auth().currentUser;
    // 서버 변경 필요
    let date = new Date();
    let data = {
      title: title,
      author: currentUser.email,
      desc: content,
      image: image,
      date: date.getTime(),
      uid: currentUser.uid,
    };

    let result = addDiary(data);
    if (result) {
      Alert('글이 성공적으로 등록되었습니다!');
    }
  };



    return (
      <Container>
      {/* <View style={styles.container}> */}
        <HomeAddComponent headerTitle="중고거래 글 쓰기" />
        <Content>
        {/* <Ionicons
          style={styles.headerIcons}
          name={"settings-outline"}
          color={"grey"}
          size={20}
        /> */}
        {/* </View> */}
        <Grid style={styles.imageUpload}>
          <Text style={styles.imageUploadPlus}>+</Text>
        </Grid>
        <Item regular style={styles.title}>
          <Input
            placeholder="다이어리 제목을 입력해주세요!"
            style={{ fontSize: 13 }}
            onChangeText={(text) => setTitle(text)}
          />
        </Item>
        <Form style={styles.contentLayout}>
          <Textarea
            rowSpan={5}
            bordered
            placeholder="내용을 입력해주세요"
            style={styles.content}
            onChangeText={(text) => setContent(text)}
          />
        </Form>
        <Button full style={styles.uploadButton} onPress={() => upload()}>
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
    width: '90%',
    height: 200,
    marginTop: 20,
    alignSelf: 'center',
    alignItems: 'center',
  },
  imageUploadPlus: {
    textAlign: 'center',
    width: '100%',
    fontSize: 90,
    fontWeight: '300',
    color: 'grey',
  },
  title: {
    width: '90%',
    alignSelf: 'center',
    marginTop: 10,
    borderRadius: 10,
  },
  contentLayout: {
    width: '90%',
    alignSelf: 'center',
    marginTop: 10,
  },
  content: { borderRadius: 10, fontSize: 13 },
  uploadButton: {
    width: '90%',
    alignSelf: 'center',
    marginTop: 10,
    backgroundColor: 'pink',
  },
});

// ui작업중

