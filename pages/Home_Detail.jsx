import React, { useEffect } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { Container, Content, Left, Icon, List, Item, Input } from 'native-base';
// const my = require('../assets/my.png');
export default function DetailPage({ navigation, route }) {
  useEffect(() => {
    navigation.setOptions({
      headerShown: false,
      headerBackTitleVisible: false,
    });
  }, []);
  console.log('ROUTE');
  console.log(route);
  // const content = route.params.content;
  return (
    <Container>
      <Content
        contentContainerStyle={{
          alignItems: 'center',
        }}
      >
        <ScrollView
          style={styles.middleContainer}
          horizontal
          indicatorStyle={'white'}
        >
          <TouchableOpacity style={styles.PhotoScroll}>
          </TouchableOpacity>
        </ScrollView>

        <Text
          style={{
            fontSize: 25,
            fontWeight: '700',
            color: '#333',
            alignSelf: 'flex-start',
            marginLeft: 25,
            marginTop: 20,
          }}
        >
          {content.title}
        </Text>
        <Text
          style={{
            fontSize: 15,
            fontWeight: '700',
            color: 'grey',
            alignSelf: 'flex-start',
            marginLeft: 25,
            marginTop: 20,
          }}
        >
          {content.desc}
        </Text>

        <Item style={{ marginTop: 100 }}>
          <Input placeholder="한마디 부탁해요~" />
          <Icon active name="paper-plane" />
        </Item>
        <List>{/* <CommentComponet /> */}</List>
      </Content>
    </Container>
  );
}

const styles = StyleSheet.create({

  PhotoScroll:{
    marginTop:20,
    marginLeft:10,
    height:60
  }
});
