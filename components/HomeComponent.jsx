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
  return (
    <TouchableOpacity
      onPress={() => {
        navigation.navigate('DetailPage', category.name);
      }}>
      <Grid style={styles.resell}>
        <Col size={1}>
          <Image
            style={styles.sellImage}
            resizeMode='cover'
            source={{ uri: category.img_url }}
          />
        </Col>
        <Col size={2} style={styles.cardText}>
          <Text style={styles.sellTitle}>{category.name}</Text>
          <Text style={styles.sellEnTitle}>{category.eng_name}</Text>
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
  },
  sellImage: {
    height: 100,
    width: 100,
    borderRadius: 100,
  },
  sellTitle: {
    fontSize: 19,
    fontWeight: '500',
    marginBottom: 5,
  },
  sellEnTitle: {
    fontSize: 13,
    color: 'lightgrey',
    fontWeight: '500',
  },
});
