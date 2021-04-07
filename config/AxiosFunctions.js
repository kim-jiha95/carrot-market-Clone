import { Alert, AsyncStorage  } from "react-native";
import axios from "axios";

const host = 'http://3.34.198.18:20001'


export async function register(id, password, confirmPassword, nickname,  area, navigation) {
  try {
    const result = await axios({
      method: 'post',
      url: host + '/user',
      // header: await AsyncStorage.getItem('session'), JWT 토큰 헤더에 담는 방법
      data: {
        id: id,
        password: password,
        confirmPassword: confirmPassword,
        nickname: nickname,
        area: area,
      },
    });
    

    console.log(result)
    console.log(result.data)
    console.log(result.data.msg)
    
    if(result.data.msg == "empty") {
      Alert.alert('비어있는 값이 있습니다!');
    } else if (result.data.msg == "not_match") {
      Alert.alert('비밀번호가 일치하지 않습니다!');
    } else if (result.data.msg == "exist_user") {
      Alert.alert('회원 정보가 이미 존재합니다!');
    } else if (result.data.msg == "error") {
      Alert.alert('무슨 문제가 있는 것 같아요!');
    } else if (result.data.msg == "success") {
      Alert.alert('회원가입 성공!');
      login(id, password, navigation)
    }
  } catch (err) {
    Alert.alert('무슨 문제가 있는 것 같아요! => ', err.message);
  }
}

export async function login(id, password, navigation) {
  try {
    const result = await axios({
      method: 'post',
      url: host + '/auth',
      data: {
        id: id,
        password: password,
      },
    });

    if(result.data.msg == "success") {
      Alert.alert('로그인 성공!');
      console.log(result.data.token)
      await AsyncStorage.setItem('session', "Bearer" + result.data.token);
      navigation.push('TabNavigator');
    } else if (result.data.msg == "fail") {
      Alert.alert('로그인에 실패했습니다.');
    }
  } catch (err) {
    Alert.alert('무슨 문제가 있는 것 같아요! => ', err.message);
  }
}
