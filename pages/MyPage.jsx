import React from "react";
import { StyleSheet, View, Text } from "react-native";
import { ScrollView } from "react-native-gesture-handler";
import MenuCard from "../components/MenuCard";
import { Ionicons } from "@expo/vector-icons";
import MenuComponent from "../components/MenuComponent"

export default function MyPage() {
  return (
    <View style={styles.container}>
      <MenuComponent headerTitle="나의 당근" />
      <Ionicons
        style={styles.headerIcons}
        name={"settings-outline"}
        color={"grey"}
        size={20}
      />
      <ScrollView showsScrollIndicator={false} style={styles.mainContainer}>
        <View style ={styles.profile}>
          {/* 여기서 내 사진 정보 판매내역 이동 만들지 component화 할지 고민 */}
          {/* <Image
              style={styles.profileImage}
              resizeMode='cover'
              // source={{uri:category.Myimage}}
              /> */}
          {/* <Text style={styles.Mynickname}>{category.nickname}꿀보스</Text>
          <Text style={styles.Myhometown}>{category.hometown}잠실4동</Text>          */}
        </View>
        <View style={styles.border}></View>
        <MenuCard subHeader={"내 동네 설정"} icon={"location-outline"} />
        <MenuCard subHeader={"동네 인증하기"} icon={"swap-horizontal-outline"} />
        <MenuCard subHeader={"키워드 알림"} icon={"pricetag-outline"} />
        <MenuCard subHeader={`모아보기`} icon={"file-tray-stacked-outline"} />
        <View style={styles.border}></View>
        <MenuCard subHeader={"동네생활 글"} icon={"notifications-outline"} />
        <MenuCard subHeader={"동네생활 댓글"} icon={"chatbubble-ellipses-outline"} />
        <MenuCard subHeader={"동네생활 주제 목록"} icon={"star-outline"} />
        <View style={styles.border}></View>
        <MenuCard subHeader={"비즈프로필 만들기"} icon={"home-outline"} />
        <MenuCard subHeader={"지역광고"} icon={"cafe-outline"} />
        <View style={styles.border}></View>
        <MenuCard subHeader={"친구초대"} icon={"mail-outline"} />
        <MenuCard subHeader={"당근마켓 공유"} icon={"share-social-outline"} />
        <MenuCard subHeader={"공지사항"} icon={"mic-outline"} />
        <MenuCard subHeader={"자주 묻는 질문"} icon={"comment-question-outline"} />
        <MenuCard subHeader={"앱 설정"} icon={"settings-outline"} />
        <View style={styles.border}></View>
        {/* <View>
          <Text style={styles.subHeader}>고객 지원</Text>
        </View>
        <MenuCard subHeader={"스토어 케어"} icon={"trail-sign-outline"} />
        <MenuCard subHeader={"고객의 소리"} icon={"nuclear-outline"} />
        <MenuCard subHeader={"매장 정보"} icon={"location-outline"} />
        <View style={styles.border}></View>

        <View>
          <Text style={styles.subHeader}>약관 및 정책</Text>
        </View>
        <MenuCard subHeader={"이용약관"} icon={"reader-outline"} />
        <MenuCard
          subHeader={"개인정보 처리 방침"}
          icon={"lock-closed-outline"}
        /> */}
        <View style={styles.bottomBlock}></View>
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: "white",
  },

  headerIcons: {
    position: "absolute",
    top: 50,
    left: 330,
  },
  header: {
    height: 10,
    backgroundColor: "white",
  },
  headerTitle: {
    paddingTop: 10,
    textAlign: "center",
    fontSize: 5,
    fontWeight: "600",
  },
  mainContainer: {
    backgroundColor: "white",
  },
  subHeader: {
    fontSize: 15,
    fontWeight: "600",
    padding: 100,
    left: 120
    // 삭제
  },
  border: {
    height: 5,
    backgroundColor: "#f2f2f2",
    borderRadius: 100,
    // marginLeft: 40,
  },
  bottomBlock: {
    height: 140,
  },
  // headerTitle:{
  //   fontSize:15
  // }
  profileImage: {
    height: 100,
    width: 100,
    borderRadius: 30,
  },

  Mynickname: {
    fontSize: 19,
    fontWeight: '500',
    marginBottom: 5,

  },Myhometown: {
    fontSize: 13,
    color: 'lightgrey',
    fontWeight: '500',
  }

});

