//HomeAddPage
import React, { useState, useEffect } from 'react';
import {
  StyleSheet,
  Platform,
  Text,
  TouchableOpacity,
} from 'react-native';
import * as ImagePicker from 'expo-image-picker';
import { Ionicons } from '@expo/vector-icons';
import { Grid } from 'react-native-easy-grid';
import { secondhandpost, Pic } from '../config/BackData';
import { Container, Content, Item, Form, Textarea } from 'native-base';


export default function HomeAddPage({ navigation }) {
  const [title, setTitle] = useState('');
  const [contents, setContents] = useState('');
  const [price, setPrice] = useState('');
  const [images, setImages] = useState(new Array());//배열을 새로 만든다
  

  const upload = async () => {
    await secondhandpost(title, contents, price, images);
  };

  useEffect(() => {
    getPermission();
  }, []);

  //permissionPopup
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

  // 업로드 텍스트 넘기기
  const pickImage = async () => {
    console.log('이미지 선택');
    let imageData = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.All,
      allowsEditing: true,
      aspect: [4, 4],
      quality: 0,
    });

    console.log('이미지');
    setImages(await Pic(imageData));
    //PIC함수에 삽입
  };

  return (
    <Container>
      <Content>
        <Grid style={styles.imageUpload} onPress={() => pickImage()}>
          <Ionicons
            style={styles.camera}
            name={'camera-outline'}
            color={'grey'}
            size={25}
          ></Ionicons>
        </Grid>
        <Item regular style={styles.title}>
          <Textarea
            placeholder="글 제목"
            value={title}
            style={{ fontSize: 13 }}
            onChangeText={(text) => setTitle(text)}
          />
        </Item>
        <Item regular style={styles.category}></Item>
        <Item regular style={styles.category}>
          <Textarea
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
        <TouchableOpacity full style={styles.uploadButton} onPress={upload()}>
          <Text>등록</Text>
        </TouchableOpacity>
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
    height: 50,
    marginTop: 40,
    alignSelf: 'center',
    alignItems: 'center',
  },
  camera: {
    textAlign: 'center',
    width: '100%',
    fontSize: 40,
    fontWeight: '300',
    color: 'grey',
  },
  imageUploadPlus: {
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
    textAlign: 'center',
    height: 40,
    width: '90%',
    alignSelf: 'center',
    marginTop: 10,
    backgroundColor: 'pink',
  },
});