import React, { useState } from 'react';
import { StyleSheet, ImageBackground, AsyncStorage, Alert  } from 'react-native';
import {
  Container,
  Content,
  Text,
  Form,
  Button,
  Header,
  Left,
  Icon,
  Body,
  Right,
} from 'native-base';
const bImage = require('../assets/background.png');
import ItemInput from '../components/ItemInput';
import { register } from '../config/AxiosFunctions';

export default function SignUp({navigation}) {
  
  const [nickName, setNickName] = useState('');
  const [nickNameError, setNickNameError] = useState('');

  const [id, setid] = useState('');
  const [idError, setidError] = useState('');

  const [password, setPassword] = useState('');
  const [passwordError, setPasswordError] = useState('');

  const [confirmPassword, setconfirmPassword] = useState('');
  const [confirmPasswordError, setconfirmPasswordError] = useState('');

  const [area, setarea] = useState('');
  const [areaError, setareaError] = useState('');

  const doSignUp = async () => {
    console.log(nickName);
    console.log(id);
    console.log(password);
    console.log(confirmPassword);
    console.log(area)
    if (nickName == '') {
      setNickNameError('닉네임을 입력해주세요');
      return false;
    } else {
      setNickNameError('');
    }

    if (id == '') {
      setidError('이메일을 입력해주세요');
      return false;
    } else {
      setidError('');
    }

    if (password == '') {
      setPasswordError('비밀번호를 입력해주세요');
      return false;
    } else {
      setPasswordError('');
    }

    if (area == '') {
      setareaError('지역을 입력해주세요');
      return false;
    } else {
      setareaError('');
    }

    if (confirmPassword == '') {
      setconfirmPasswordError('비밀번호 확인을 입력해주세요');
      return false;
    } else {
      setconfirmPasswordError('');
    }

    if (password !== confirmPassword) {
      setconfirmPasswordError('비밀번호가 서로 일치 하지 않습니다.');
      return false;
    } else {
      setconfirmPasswordError('');
    }
  
    await register(id, password, confirmPassword, nickName,  area, navigation);
  };


  return (
    <Container style={styles.container}>
      <ImageBackground source={bImage} style={styles.backgroundImage}>
        <Header transparent>
          <Left>
            <Button transparent 
                     onPress={() => {
                navigation.goBack();
              }}>
              <Icon name="arrow-back" style={{ color: '#fff' }} />
            </Button>
          </Left>
          <Body />
          <Right />
        </Header>
        <Content contentContainerStyle={styles.content} scrollEnabled={false}>
          <Text style={styles.title}>
            <Text style={styles.highlite}>당근</Text>마켓 SIGNUP
          </Text>
          <Form style={styles.form}>
            <ItemInput title={'닉네임'}
            type={'nickName'}
            error={nickNameError}
            setFunc={setNickName}
            />
            <ItemInput title={'이메일'}
            title={'이메일'}
            type={'id'}
            error={idError}
            setFunc={setid}
            />
            <ItemInput title={'비밀번호'}
            title={'비밀번호'}
            type={'password'}
            error={passwordError}
            setFunc={setPassword}
            />
            <ItemInput title={'비밀번호 확인'}
            title={'비밀번호 확인'}
            type={'confirmPassword'}
            error={confirmPasswordError}
            setFunc={setconfirmPassword}
            />
            <ItemInput title={'지역'}
            title={'지역'}
            type={'area'}
            error={areaError}
            setFunc={setarea}
            />
          </Form>
          <Button full style={styles.emailSignUp} onPress={doSignUp}>
            <Text>등록</Text>
          </Button>
        </Content>
      </ImageBackground>
    </Container>
  );
}

const styles = StyleSheet.create({
  container: {},
  backgroundImage: {
    width: '100%',
    height: '100%',
  },
  content: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center'
  },
  title: {
    fontSize: 25,
    fontWeight: '700',
    color: '#c5beb6',
    textAlign: 'center',
  },
  highlite: {
    fontSize: 25,
    fontWeight: '700',
    color: '#FF8A3D',
    textAlign: 'center',
  },
  form: {
    width: 250,
    borderRadius: 10,
    paddingBottom: 20,
    paddingRight: 20,
    paddingLeft: 20,
    marginTop: 10,
  },
  emailSignUp: {
    alignSelf: 'center',
    width: 250,
    marginTop: 40,
    borderRadius: 10,
    backgroundColor: '#FF8A3D',
  },
});