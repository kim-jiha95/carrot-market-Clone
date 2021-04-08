import React from 'react';
import {
  StyleSheet,
  Text,
  Dimensions,
  TouchableOpacity,
  Image,
  View
} from 'react-native';
import { Col, Row, Grid } from 'react-native-easy-grid';
import {Container} from 'native-base';

const diviceWidth = Dimensions.get('window').width;

export default function HomeDetailComponent({ category }) {
    return (
      <Container
        >
        <Grid style={styles.resell}>
          <Col size={1}>
            <Image
              style={styles.sellImage}
              resizeMode='cover'
              source={{ uri: category.images[0] }}
            />
          </Col>
          <View style={styles.border}></View>
          <Col size={1} style={styles.profile}>
          {/* <Text style={styles.sellArea} resizeMode='cover'>{category.area} </Text> */}
          {/* <Text style={styles.mynickname} resizeMode='cover'>{category.nickname} </Text> */}
          </Col> 
          <Col size={2} style={styles.cardText}>
            <Text style={styles.sellTitle}>{category.title}
             너가 나의 이름을 불러주었을때 꽃이 되었던{'\n'}
             그 꽃을 싸게 팝니다</Text>
             <Text style={styles.sellDate}>{category.date}</Text>
            {/* <Text style={styles.sellArea} resizeMode='cover'>{category.area} </Text> */}
            {/* <Text style={styles.sellArea}>{category.area}</Text> */}
            {/* <Text style={styles.sellArea}>{category.area}</Text> */}
            {/* <Text style={styles.sellDate}>{category.date}</Text> */}
            <Text style={styles.sellPrice}>{category.price}</Text>
            <Text style={styles.sellContents}>{category.contents}</Text>
          </Col>
        </Grid>
      </Container>
    );
  }
  
  const styles = StyleSheet.create({
    resell: {
      height: 100,
      width: 100,
      width: diviceWidth * 0.9,
    //   alignSelf: 'center',
      marginVertical: 15,
      flex: 1,
      alignItems: 'center',
      marginTop: 70,
    },
    sellImage: {
      height: 500,
      width: 500,      
    //   borderRadius: 30,
    },
    profile:{
        height: 100,
        width: 100,
        width: diviceWidth * 0.9,
      //   alignSelf: 'center',
        marginVertical: 15,
      //   flex: 1,
        alignItems: 'center',
        // marginTop: 680,
        marginRight: 20
    },
    mynickname:{

    },
    border: {
        height: 150,
        backgroundColor: "#f2f2f2",
        borderRadius: 100,
        // marginLeft: 40,
        // marginTop: 400,
      },
    cardText:{
        height: 100,
      width: 100,
      width: diviceWidth * 0.9,
    //   alignSelf: 'center',
      marginVertical: 15,
    //   flex: 1,
      alignItems: 'center',
    //   marginTop: 900,
    },
    sellTitle: {
      fontSize: 19,
      fontWeight: '500',
      marginBottom: 13,    
    },
    sellArea: {
      fontSize: 13,
      // color: 'lightgrey',
      fontWeight: '500',
      marginBottom: 10,
    },
    sellDate: {
      fontSize: 13,
      // color: 'lightgrey',
      fontWeight: '500',
      marginBottom: 10,
      marginLeft: 5,
    },
    sellPrice: {
      fontSize: 13,
      color: 'lightgrey',
      fontWeight: '500',
      marginBottom:15,
    },
  });
  