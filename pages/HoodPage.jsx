import React from 'react';
import { SafeAreaView,StyleSheet, View, Text, Image, TouchableOpacity, FlatList } from 'react-native';

import {icons, images, SIZES, COLORS, FONTS} from '../constants'

const HoodPage = () => {
  
  // 더미데이터 여기에 put

  const initialCurrentLocation = {
    streetName: "잠실4동",
    gps: {
        latitude: 1.5496614931250685,
        longitude: 110.36381866919922
    }
}

const categoryData = [
    {
        id: 1,
        name: "동네사진전",
        // icon: icons.rice_bowl,
    },
    {
        id: 2,
        name: "우리동네질문",
        // icon: icons.noodle,
    },
    {
        id: 3,
        name: "일상",
        // icon: icons.hotdog,
    },
    {
        id: 4,
        name: "동네소식",
        // icon: icons.salad,
    },
    {
        id: 5,
        name: "동네맛집",
        // icon: icons.hamburger,
    },
    {
        id: 6,
        name: "분실/실종센터",
        // icon: icons.pizza,
    },
    {
        id: 7,
        name: "동네사건사고",
        // icon: icons.fries,
    },
    {
        id: 8,
        name: "해주세요",
        // icon: icons.sushi,
    },
    {
        id: 9,
        name: "취미생활",
        // icon: icons.donut,
    },
    {
        id: 10,
        name: "고양이",
        // icon: icons.drink,
    },

]

// price rating
// const affordable = 1
// const fairPrice = 2
// const expensive = 3

const restaurantData = [
    {
        id: 1,
        name: "오늘 날씨가 너무 좋네요 아차산에 가려고 하는데 같이 가실 분 없나요?",
        rating: 4.8,
        categories: [5, 7],
        // priceRating: affordable,
        photo: images.mountain,
        // duration: "30 - 45 min",
        location: {
            latitude: 1.5347282806345879,
            longitude: 110.35632207358996,
        },
        // courier: {
        //     avatar: images.avatar_1,
        //     name: "Amy"
        // },
        // menu: [
        //     {
        //         menuId: 1,
        //         name: "Crispy Chicken Burger",
        //         photo: images.crispy_chicken_burger,
        //         description: "Burger with crispy chicken, cheese and lettuce",
        //         calories: 200,
        //         price: 10
        //     },
        //     {
        //         menuId: 2,
        //         name: "Crispy Chicken Burger with Honey Mustard",
        //         photo: images.honey_mustard_chicken_burger,
        //         description: "Crispy Chicken Burger with Honey Mustard Coleslaw",
        //         calories: 250,
        //         price: 15
        //     },
        //     {
        //         menuId: 3,
        //         name: "Crispy Baked French Fries",
        //         photo: images.baked_fries,
        //         description: "Crispy Baked French Fries",
        //         calories: 194,
        //         price: 8
        //     }
        // ]
    },
    {
        id: 2,
        name: "곧 돌이 되는 남자아이를 키우는 사람입니다",
        rating: 4.8,
        categories: [2, 4, 6],
        // priceRating: expensive,
        photo: images.child,
        // duration: "15 - 20 min",
        location: {
            latitude: 1.556306570595712,
            longitude: 110.35504616746915,
        },
        // courier: {
        //     avatar: images.avatar_2,
        //     name: "Jackson"
        // },
        // menu: [
        //     {
        //         menuId: 4,
        //         name: "Hawaiian Pizza",
        //         photo: images.hawaiian_pizza,
        //         description: "Canadian bacon, homemade pizza crust, pizza sauce",
        //         calories: 250,
        //         price: 15
        //     },
        //     {
        //         menuId: 5,
        //         name: "Tomato & Basil Pizza",
        //         photo: images.pizza,
        //         description: "Fresh tomatoes, aromatic basil pesto and melted bocconcini",
        //         calories: 250,
        //         price: 20
        //     },
        //     {
        //         menuId: 6,
        //         name: "Tomato Pasta",
        //         photo: images.tomato_pasta,
        //         description: "Pasta with fresh tomatoes",
        //         calories: 100,
        //         price: 10
        //     },
        //     {
        //         menuId: 7,
        //         name: "Mediterranean Chopped Salad ",
        //         photo: images.salad,
        //         description: "Finely chopped lettuce, tomatoes, cucumbers",
        //         calories: 100,
        //         price: 10
        //     }
        // ]
    },
    {
        id: 3,
        name: "잠실근처에 인도어 연습장 괜찮은데 있을까요",
        // rating: 4.8,
        categories: [3],
        // priceRating: expensive,
        photo: images.golf,
        duration: "20 - 25 min",
        location: {
            latitude: 1.5238753474714375,
            longitude: 110.34261833833622,
        },
        // courier: {
        //     avatar: images.avatar_3,
        //     name: "James"
        // },
        // menu: [
        //     {
        //         menuId: 8,
        //         name: "Chicago Style Hot Dog",
        //         photo: images.chicago_hot_dog,
        //         description: "Fresh tomatoes, all beef hot dogs",
        //         calories: 100,
        //         price: 20
        //     }
        // ]
    },
    {
        id: 4,
        name: "대형견 위주로 산책모임은 없나요? 카톡방이나,, ",
        // rating: 4.8,
        categories: [8],
        // priceRating: expensive,
        photo: images.dog,
        // duration: "10 - 15 min",
        location: {
            latitude: 1.5578068150528928,
            longitude: 110.35482523764315,
        },
        courier: {
            avatar: images.avatar_4,
            name: "Ahmad"
        },
        menu: [
            {
                menuId: 9,
                name: "Sushi sets",
                photo: images.sushi,
                description: "Fresh salmon, sushi rice, fresh juicy avocado",
                calories: 100,
                price: 50
            }
        ]
    },
    {
        id: 5,
        name: "석촌호수에서 찍은 벚꽃사진입니다!",
        // rating: 4.8,
        categories: [1, 2],
        // priceRating: affordable,
        photo: images.flower,
        // duration: "15 - 20 min",
        location: {
            latitude: 1.558050496260768,
            longitude: 110.34743759630511,
        },
        courier: {
            avatar: images.avatar_4,
            name: "Muthu"
        },
        // menu: [
        //     {
        //         menuId: 10,
        //         name: "Kolo Mee",
        //         photo: images.kolo_mee,
        //         description: "Noodles with char siu",
        //         calories: 200,
        //         price: 5
        //     },
        //     {
        //         menuId: 11,
        //         name: "Sarawak Laksa",
        //         photo: images.sarawak_laksa,
        //         description: "Vermicelli noodles, cooked prawns",
        //         calories: 300,
        //         price: 8
        //     },
        //     {
        //         menuId: 12,
        //         name: "Nasi Lemak",
        //         photo: images.nasi_lemak,
        //         description: "A traditional Malay rice dish",
        //         calories: 300,
        //         price: 8
        //     },
        //     {
        //         menuId: 13,
        //         name: "Nasi Briyani with Mutton",
        //         photo: images.nasi_briyani_mutton,
        //         description: "A traditional Indian rice dish with mutton",
        //         calories: 300,
        //         price: 8
        //     },

        // ]
    },
    {

        id: 6,
        name: "간밤에 주말 비가 안와서 취미생활 즐겨 봅니다! 올림픽 공원에서 보드 타는게 너무 재밌어요 같이 타실분?!",
        // rating: 4.9,
        categories: [9, 10],
        // priceRating: affordable,
        photo: images.board,
        // duration: "35 - 40 min",
        location: {
            latitude: 1.5573478487252896,
            longitude: 110.35568783282145,
        },
        courier: {
            avatar: images.avatar_1,
            name: "Jessie"
        },
        // menu: [
        //     {
        //         menuId: 12,
        //         name: "Teh C Peng",
        //         photo: images.teh_c_peng,
        //         description: "Three Layer Teh C Peng",
        //         calories: 100,
        //         price: 2
        //     },
        //     {
        //         menuId: 13,
        //         name: "ABC Ice Kacang",
        //         photo: images.ice_kacang,
        //         description: "Shaved Ice with red beans",
        //         calories: 100,
        //         price: 3
        //     },
        //     {
        //         menuId: 14,
        //         name: "Kek Lapis",
        //         photo: images.kek_lapis,
        //         description: "Layer cakes",
        //         calories: 300,
        //         price: 20
        //     }
        // ]

    }


]

const [categories, setCategories] = React.useState(categoryData)
const [selectedCategory, setSelectedCategory] = React.useState(null)
const [restaurants, setRestaurants] = React.useState(restaurantData)
const [currentLocation, setCurrentLocation] = React.useState(initialCurrentLocation)


function onSelectCategory(category) {
  //filter restaurant
  let restaurantList = restaurantData.filter(a => a.categories.includes(category.id))

  setRestaurants(restaurantList)

  setSelectedCategory(category)
}

function getCategoryNameById(id) {
  let category = categories.filter(a => a.id == id)

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
          {/* <Image
              source={icons.nearby}
              resizeMode="contain"
              style={{
                width:30,
                height:30
              }}
          /> */}

        </TouchableOpacity>

        <View style={{ flex: 1, aligitems: 'center', justifyConetent: 'center'}}>
                <View 
                style={{
                    width: '70%',
                    height: "100%",
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

  function renderMainCategories() {
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
                  {item.name}
              </Text>
          </TouchableOpacity>
      )
  }

     return(
       <View style ={{ padding: SIZES.padding *2}}>
        
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
  function renderRestaurantList() {
    const renderItem = ({ item }) => (
        <TouchableOpacity
            style={{ marginBottom: SIZES.padding * 2 }}
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
                    <Text style={{ ...FONTS.h4 }}>{item.duration}</Text>
                </View>
            </View>

            {/* Restaurant Info */}
            <Text style={{ ...FONTS.body2 }}>{item.name}</Text>

            <View
                style={{
                    marginTop: SIZES.padding,
                    flexDirection: 'row'
                }}
            >
                {/* Rating
                <Image
                    source={icons.star}
                    style={{
                        height: 20,
                        width: 20,
                        tintColor: COLORS.primary,
                        marginRight: 10
                    }} */}
                {/* /> */}
                {/* <Text style={{ ...FONTS.body3 }}>{item.rating}</Text> */}

                {/* Categories */}
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

                    {/* Price */}
                    {
                        [1, 2, 3].map((priceRating) => (
                            <Text
                                key={priceRating}
                                style={{
                                    ...FONTS.body3,
                                    color: (priceRating <= item.priceRating) ? COLORS.black : COLORS.darkgray
                                }}
                            >$</Text>
                        ))
                    }
                </View>
            </View>
        </TouchableOpacity>
    )

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
      {renderMainCategories()}
      {renderRestaurantList()}
    </SafeAreaView>
    
  )
  
}
// export default function HoodPage() {
//   return (
//     <View>      
//       <Image style ={styles.plus}         
//          source={require("../assets/plus.png")}
// />
      
//     </View>
//   );
// }



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

