import React from 'react';
import { StyleSheet, View, Text } from 'react-native';

export default function MenuComponent({ headerTitle }) {
  return (
    <>
      <View style={styles.header}>
        <Text style={styles.headerText}>{headerTitle}</Text>
      </View>
      <View style={styles.shadowMaker}></View>
    </>
  );
}

const styles = StyleSheet.create({
  header: {
    paddingTop: 55,
    paddingBottom: 5,
    paddingLeft: 20,
    backgroundColor: 'white',
    shadowColor: 'lightgrey',
    shadowOffset: {
      width: 1,
      height: 3,
    },
    shadowOpacity: 0.7,
    shadowRadius: 3,
  },
  headerText: {
    fontWeight: '600',
    fontSize: 20,
  },
  // shadowMaker: {
  //   height: 5,
  // },
});

