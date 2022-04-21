/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React from 'react';
import { ImageBackground, Text, View, Image, StyleSheet } from 'react-native';

const image = { uri: "https://reactjs.org/logo-og.png" };

const CatApp = () => {
  return (
    <View style={styles.container}>
      <ImageBackground source={image} resizeMode="cover" style={styles.image}>
      <Text>Crossfit T-Rex</Text>
      <View style={styles.body}>
        <Text>Competition</Text>
      </View>
      </ImageBackground>
    </View>
  );
}

const styles = StyleSheet.create({
  body: {
    backgroundColor: '#ff0'
  },
  container: {
    flex: 1,
  },
  image: {
    flex: 1,
    justifyContent: "center"
  }
})

export default CatApp;