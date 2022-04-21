import React, { Component } from 'react';
 
import {
  StyleSheet,
  Text,
  View,
  TextInput,
  ScrollView,
  Alert
} from 'react-native';
 
import Container from '../components/Container';
import Button from '../components/Button';
import Label from '../components/Label';

export default class Login extends Component {
    render() {
      return (
          <ScrollView style={styles.scroll}>
            <Container>
                <Button 
                    label="Forgot Login/Pass"
                    styles={{button: styles.alignRight, label: styles.label}} 
                    onPress={() => Alert.alert('Simple Button pressed')} />
            </Container>
            <Container> 
                <Label text="Username or Email" />
                <TextInput
                    style={styles.textInput}
                />
            </Container>
            <Container>
                <Label text="Password" />
                <TextInput
                secureTextEntry={true}
                style={styles.textInput}
                />
            </Container>
            <View style={styles.footer}>
                <Container>
                    <Button 
                        label="Sign In"
                        styles={{button: styles.primaryButton, label: styles.buttonWhiteText}} 
                        onPress={() => Alert.alert('Simple Button pressed')} />
                </Container>
                <Container>
                    <Button 
                        label="CANCEL"
                        styles={{label: styles.buttonBlackText}} 
                        onPress={() => Alert.alert('Simple Button pressed')} />
                </Container>
            </View>
          </ScrollView>
      );
    }
  }

  const styles = StyleSheet.create({
    scroll: {
        backgroundColor: '#34A851',
        padding: 30,
        flexDirection: 'column'
    },
    label: {
        color: '#0d8898',
        fontSize: 20
    },
    alignRight: {
        alignSelf: 'flex-end'
    },
    textInput: {
        height: 50,
        fontSize: 20,
        backgroundColor: '#FFF'
    },
    buttonWhiteText: {
        fontSize: 20,
        color: '#FFF',
    },
    buttonBlackText: {
        fontSize: 20,
        color: '#595856'
    },
    primaryButton: {
        backgroundColor: '#000'
    },
    footer: {
       marginTop: 100
    }
});
