import React from 'react';
import { StyleSheet, View, Text } from 'react-native';

export default function Home_Detail() {
  return (
    <View style={styles.container}>
      <Text>caroot Detail!</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});