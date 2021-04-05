
import {
    Alert
} from "react-native";
import axios from "axios";

//서버경로->post->get
export async function registration(nickName, email, password) {
    try {
        axios.get(url).then(nickName, email, password)
        console.log(nickName, email, password)
        const currentUser = nickName.currentUser;
        const currentUser = email.currentUser;
        const currentUser = password.currentUser;

        console.log(currentUser)
        Alert.alert("회원가입 성공!")
    } catch (err) {
        Alert.alert("무슨 문제가 있는 것 같아요! => ", err.message);
    }
}

const getLocation = async () => {
    //수많은 로직중에 에러가 발생하면
    //해당 에러를 포착하여 로직을 멈추고,에러를 해결하기 위한 catch 영역 로직이 실행
    try {
      //자바스크립트 함수의 실행순서를 고정하기 위해 쓰는 async,await
      await Location.requestPermissionsAsync();
      const locationData= await Location.getCurrentPositionAsync();
      const latitude = locationData['coords']['latitude']
      const longitude = locationData['coords']['longitude']
      const API_KEY = "cfc258c75e1da2149c33daffd07a911d";
      const result = await axios.get(
        `http://api.openweathermap.org/data/2.5/weather?lat=${latitude}&lon=${longitude}&appid=${API_KEY}&units=metric`
      );

      console.log(result)

    } catch (error) {
      //혹시나 위치를 못가져올 경우를 대비해서, 안내를 준비합니다
      Alert.alert("위치를 찾을 수가 없습니다.", "앱을 껏다 켜볼까요?");
    }
  }