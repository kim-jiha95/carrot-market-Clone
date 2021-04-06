import React from 'react';
import { SafeAreaView,StyleSheet, View, Text, Image, TouchableOpacity, FlatList } from 'react-native';

import {icons, images, SIZES, COLORS, FONTS} from '../constants'

const HoodPage = ( navigation) => {
  
  // 더미데이터 여기에 put

  const initialCurrentLocation = {
    streetName: "잠실4동",
    
}
const categoryData = [
    {
        id: 1,
        name: "동네사진전",
        icon: icons.town,
    },
    {
        id: 2,
        name: "우리동네질문",
        icon: icons.like,
    },
    {
        id: 3,
        name: "일상",
        icon: icons.hotdog,
    },
    {
        id: 4,
        name: "동네소식",
        icon: icons.salad,
    },
    {
        id: 5,
        name: "동네맛집",
        icon: icons.hamburger,
    },
    {
        id: 6,
        name: "분실/실종센터",
        icon: icons.pizza,
    },
    {
        id: 7,
        name: "동네사건사고",
        icon: icons.fries,
    },
    {
        id: 8,
        name: "해주세요",
        icon: icons.sushi,
    },
    {
        id: 9,
        name: "취미생활",
        icon: icons.donut,
    },
    {
        id: 10,
        name: "고양이",
        icon: icons.cat,
    },

]

const HoodData = [
    {
        id: 1,
        name: "오늘 날씨가 너무 좋네요 아차산에 가려고 하는데 같이 가실 분 없나요?",
        categories: [1],       
        photo: images.avatar-1,      
        
    },
    {
        id: 2,
        name: "곧 돌이 되는 남자아이를 키우는 사람입니다",
        rating: 4.8,
        categories: [2],       
        photo: images.board,
        
    },
    {
        id: 3,
        name: "잠실근처에 인도어 연습장 괜찮은데 있을까요",        
        categories: [3],        
        photo: images.golf,        
    },
    {
        id: 4,
        name: "대형견 위주로 산책모임은 없나요? 카톡방이나,, ",        
        categories: [8],
        photo: images.dog,       
    },
    {
        id: 5,
        name: "석촌호수에서 찍은 벚꽃사진입니다!",       
        categories: [1],
        photo: images.avatar-2,       
    },
    {
        id: 6,
        name: "간밤에 주말 비가 안와서 취미생활 즐겨 봅니다! 올림픽 공원에서 보드 타는게 너무 재밌어요 같이 타실분?!",        
        categories: [9],        
        photo: images.board,
    }

]

const [categories, setCategories] = React.useState(categoryData)
const [selectedCategory, setSelectedCategory] = React.useState(null)
const [restaurants, setRestaurants] = React.useState(HoodData)
const [currentLocation, setCurrentLocation] = React.useState(initialCurrentLocation)


function onSelectCategory(category) {
  //filter restaurant
  let restaurantList = HoodData.filter(a => a.categories.includes(category.id))

  setRestaurants(restaurantList)

  setSelectedCategory(category)
}

function getCategoryNameById(id) {
  let category = categories.filter(a => a.id == id)

            // 주제 제목
  if (category.length > 0)
      return category[0].name

  return ""
}  
function renderHeader() {
    return (
      <View style={{ flexDirection: 'row', height:50}}>
        <TouchableOpacity
          style={{
            width: 50,
            paddingLeft: SIZES.padding *2,
            justifyConetent: 'center'
          }}
        >
          

        </TouchableOpacity>

        <View style={{ flex: 1, aligitems: 'center', justifyConetent: 'center'}}>
                <View 
                style={{
                    width: '40%',
                    height: "50%",
                    backgroundColor:COLORS.lightGray3,
                    alignItems: 'center',
                    justifyContent:'center',
                    borderRadius: SIZES.radius
                }}>
                  <Text style={{ ...FONTS.h3}}>잠실4동</Text>
                </View>
        </View>

        <TouchableOpacity
              style={{
                width:50,
                paddingRight:SIZES.padding * 2,
                justifyContent: 'center'
              }}
        >
              <Image
                  source={icons.search}
                  resizeMode="contain"
                  style={{
                    width:30,
                    height:30
                  }}
              />
          
        </TouchableOpacity>
        {/* <View >
       <Image style ={styles.plus}         
         source={require("../assets/plus.png")}
 />
     </View> */}
     
      </View>
    )
  }

  function HoodLifeCategory() {
    const renderItem = ({ item }) => {
      return (
          <TouchableOpacity
              style={{
                  padding: SIZES.padding,
                  paddingBottom: SIZES.padding * 2,
                  backgroundColor: (selectedCategory?.id == item.id) ? COLORS.primary : COLORS.white,
                  borderRadius: SIZES.radius,
                  alignItems: "center",
                  justifyContent: "center",
                  marginRight: SIZES.padding,
                  ...styles.shadow
              }}
              onPress={() => onSelectCategory(item)}
          >
              <View
                  style={{
                      width: 50,
                      height: 50,
                      borderRadius: 25,
                      alignItems: "center",
                      justifyContent: "center",
                      backgroundColor: (selectedCategory?.id == item.id) ? COLORS.white : COLORS.lightGray
                  }}
              >
                  <Image
                      source={item.icon}
                      resizeMode="contain"
                      style={{
                          width: 30,
                          height: 30
                      }}
                  />
              </View>

              <Text
                  style={{
                      marginTop: SIZES.padding,
                      color: (selectedCategory?.id == item.id) ? COLORS.white : COLORS.black,
                      ...FONTS.body5
                  }}
              >         
              {/* 콘텐츠 ,내용 */}
                  {item.name}
              </Text>
          </TouchableOpacity>
      )
  }

     return(
       <View style ={{ padding: SIZES.padding *2}}>
        {/* 주제 */}
         <FlatList
            data={categories}
            horizontal
            showsHorizontalScrollIndicator={false}
            keyExtractor={item => `${item.id}`}
            renderItem={renderItem}
            contentContainerStyle={{ paddingVertical: SIZES.padding * 2 }}           
         />
       </View>
     )
  }
  function HoodLifeList() {
    const renderItem = ({ item }) => (
        <TouchableOpacity
            style={{ marginBottom: SIZES.padding * 2 }}
            // Detail HoodPage로 바꿀것
            onPress={() => navigation.navigate("Restaurant", {
                item,
                currentLocation
            })}
        >
            {/* Image */}
            <View
                style={{
                    marginBottom: SIZES.padding
                }}
            >   
                {/* 서버에서 데이터 받은때는 소스 변경 */}
                <Image
                    source={item.photo}
                    resizeMode="cover"
                    style={{
                        width: "100%",
                        height: 200,
                        borderRadius: SIZES.radius
                    }}
                />

                <View
                    style={{
                        position: 'absolute',
                        bottom: 0,
                        height: 50,
                        width: SIZES.width * 0.3,
                        backgroundColor: COLORS.white,
                        borderTopRightRadius: SIZES.radius,
                        borderBottomLeftRadius: SIZES.radius,
                        alignItems: 'center',
                        justifyContent: 'center',
                        ...styles.shadow
                    }}
                >                    
                </View>
            </View>

            {/* Restaurant Info */}
                    {/* 일상 */}
            <Text style={{ ...FONTS.body2 }}>{item.name}</Text>

            <View
                style={{
                    marginTop: SIZES.padding,
                    flexDirection: 'row'
                }}
            >                
                <View
                    style={{
                        flexDirection: 'row',
                        marginLeft: 10
                    }}
                >
                    {
                        item.categories.map((categoryId) => {
                            return (
                                <View
                                    style={{ flexDirection: 'row' }}
                                    key={categoryId}
                                >
                                    <Text style={{ ...FONTS.body3 }}>{getCategoryNameById(categoryId)}</Text>
                                    <Text style={{ ...FONTS.h3, color: COLORS.darkgray }}> . </Text>
                                </View>
                            )
                        })
                    }                   
                </View>
            </View>
        </TouchableOpacity>
    )
                    //  동네생활글
    return (
        <FlatList
            data={restaurants}
            keyExtractor={item => `${item.id}`}
            renderItem={renderItem}
            contentContainerStyle={{
                paddingHorizontal: SIZES.padding * 2,
                paddingBottom: 30
            }}
        />
    )
}

  
  
  return (
    <SafeAreaView style={styles.container}>
      {renderHeader()}
      {HoodLifeCategory()}
      {HoodLifeList()}
    </SafeAreaView>
    
  )
  
}
const styles = StyleSheet.create({
     
    container: {
      flex:1,
      backgroundColor: COLORS.lightGray4
    },
    plus:{
      marginTop: 680,
      marginLeft: 310,
      width: 50,
      height: 50,
    },
    // Shadow: {
    //   ShadowColor: "#000",
    //   ShadowOffset: {
    //     width:0,
    //     height: 3,
    //   },
    //   shadowOpacity: 0.1,
    //   shadowRadius: 3,
    //   elevation: 1,
    // }
  
 
  
})

export default HoodPage;

