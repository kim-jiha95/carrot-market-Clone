import React from 'react';
import { SafeAreaView,StyleSheet, View, Text, Image, TouchableOpacity, FlatList } from 'react-native';

import {icons, images, SIZES, COLORS, FONTS} from '../constants'

const HoodPage = () => {

  // 더미데이터 여기에 put
  
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
          <Image
              source={icons.nearby}
              resizeMode="contain"
              style={{
                width:30,
                height:30
              }}
          />

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
                  source={icons.basket}
                  resizeMode="contain"
                  style={{
                    width:30,
                    height:30
                  }}
              />
          
        </TouchableOpacity>
      </View>
    )
  }
  
  return (
    <SafeAreaView style={styles.container}>
      {renderHeader()}
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
    // plus:{
    //   marginTop: 680,
    //   marginLeft: 310,
    //   width: 50,
    //   height: 50,
    // },
    container: {
      flex:1,
      backgroundColor: COLORS.lightGray4
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

