import React from 'react';
import {
  StyleSheet,
  Text,
  Dimensions,
  TouchableOpacity,
  Image,
} from 'react-native';
import { Col, Row, Grid } from 'react-native-easy-grid';

const diviceWidth = Dimensions.get('window').width;

export default function HomeComponent({ navigation, category }) {
  let image = category.images.length > 0 ? category.images[0] : '';
  let pricetag = category.price.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',');  
  return (
    <TouchableOpacity
      onPress={() => {
        navigation.navigate('HomeDetail', category);
      }}
    >
      <Grid style={styles.resell}>
        <Col size={1}>
          <Image
            style={styles.sellImage}
            resizeMode="cover"
            source={{ uri: image} }
          />
        </Col>
        <Col size={2} style={styles.cardText}>
          <Text style={styles.sellTitle}>{category.title}</Text>
          <Text style={styles.sellArea} resizeMode="cover">
            
          </Text>
          {/* <Text style={styles.sellArea}>{category.area}</Text> */}
          <Text style={styles.sellArea}>{category.area}, {category.date}</Text>
          {/* <Text style={styles.sellDate}>{category.date}</Text> */}
          <Text style={styles.sellPrice}>{pricetag}원</Text>
          {/* <Text style={styles.sellContents}>{category.contents}</Text> */}
        </Col>
      </Grid>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  resell: {
    height: 100,
    width: 100,
    width: diviceWidth * 0.9,
    alignSelf: 'center',
    marginVertical: 15,
    flex: 1,
    alignItems: 'center',
    marginTop: 50,
  },
  sellImage: {
    height: 100,
    width: 100,
    borderRadius: 30,
  },
  sellTitle: {
    fontSize: 19,
    fontWeight: '500',
    // marginBottom?
  },
  sellArea: {
    fontSize: 13,
    // color: 'lightgrey',
    fontWeight: '500',
    marginBottom: 5,
    color: 'lightgrey',
  },
  sellDate: {
    fontSize: 13,
    color: 'lightgrey',
    fontWeight: '500',
    marginBottom: 5,
    marginLeft: 20,
  },
  sellPrice: {
    fontSize: 13,
    // color: 'lightgrey',
    fontWeight: '500',
    marginBottom:5,
  },
});
