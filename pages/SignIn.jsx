import React, { useState, useEffect } from 'react';
import { StyleSheet, ImageBackground, AsyncStorage } from 'react-native';
import ItemInput from '../components/ItemInput';
import { login } from '../config/AxiosFunctions'
import {
  Container,
  Content,
  Thumbnail,
  Text,
  Form,
  Button,
} from 'native-base';
import Loading from '../components/Loading';
const bImage = require('../assets/background.png');
const Main = require('../assets/Main.png')

export default function SignIn({ navigation }) {

  const [ready, setReady] = useState(false);

  const [id, setid] = useState('');
  const [password, setPassword] = useState('');

  const [emailError, setEmailError] = useState('');
  const [passwordError, setPasswordError] = useState('');

  useEffect(() => {
    navigation.addListener('beforeRemove', (e) => {
      e.preventDefault();
    });

    setTimeout(() => {
			AsyncStorage.getItem('session', (err, result) => {
      console.log('ASYNCSTORAGE');
      console.log(result);
      if (result) {
        navigation.push('TabNavigator');
      } else {
        setReady(true);
      }
    });
      setReady(true);
    }, 1000);
    
  }, []);

  const doSignIn = () => {
    console.log(id);
    console.log(password);
    if (id == '') {
      setEmailError('이메일을 입력해주세요');
    } else {
      setEmailError('');
    }

    if (password == '') {
      setPasswordError('비밀번호를 입력해주세요');
    } else {
      setPasswordError('');
    }
    login(id, password, navigation);
    
  };
  const setidFunc = (itemInputid) => {
    setid(itemInputid);
  };
  const setPasswordFunc = (itemInputPassword) => {
    setPassword(itemInputPassword);
  };

  const goSignUp = () => {
    navigation.navigate('SignUp');
  };

  return ready ? (
    <Container style={styles.container}>
      <ImageBackground source={bImage} style={styles.backgroundImage}>
        <Content contentContainerStyle={styles.content} scrollEnabled={false}>
        <Thumbnail large source={Main} style={styles.thumbnail}/>
          <Text style={styles.title}>
            <Text style={styles.highlite}>당근</Text>마켓
          </Text>
          <Form style={styles.form}>
            <ItemInput title={'이메일'} 
            type={'id'} 
            setFunc={setidFunc}
            error={emailError} 
            />
            <ItemInput title={'비밀번호'} 
            type={'password'}
            setFunc={setPasswordFunc}
            error={passwordError} />
          </Form>
          
          
          <Button full style={styles.emailSignIn} onPress={doSignIn}>
            <Text>Email 로그인</Text>
          </Button>
          <Button full style={styles.emailSignUp} onPress={goSignUp}>
            <Text style={{ color: '#333' }}>회원가입</Text>
          </Button>
        </Content>
      </ImageBackground>
    </Container>
  ): (
    <Loading />
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
    justifyContent: 'center',
  },
  thumbnail: { alignSelf: 'center'},
  title: {
    fontSize: 25,
    fontWeight: '700',
    color: '#c5beb6',
    textAlign: 'center',
  },
  highlite: {
    fontSize: 25,
    fontWeight: '700',
    color: '#df3f32',
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
  label: {
    color: '#fff',
  },
  input: {
    color: '#fff',
  },
  emailSignIn: {
    alignSelf: 'center',
    width: 250,
    marginTop: 5,
    borderRadius: 10,
    backgroundColor: '#FF8A3D',
  },
  emailSignUp: {
    alignSelf: 'center',
    width: 250,
    marginTop: 5,
    borderRadius: 10,
    backgroundColor: '#ffa266',
  },
});