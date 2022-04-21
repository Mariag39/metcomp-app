import React, { Component } from 'react';
import {
  AppRegistry
} from 'react-native';
 
import Login from './src/pages/Login';
import {name as appName} from './app.json';

export default class ReactNativeCommonScreens extends Component {
 
  render() {
    return (
      <Login />
    );
  }
 
}
 
AppRegistry.registerComponent(appName, () => ReactNativeCommonScreens);
