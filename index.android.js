import React, { Component } from 'react';
import App from './container/app.js';
import { Provider } from 'react-redux';
import store from './store/index.js';
import PatientList from './container/patientList.js';
import PatientForm from './container/patientForm.js';
import { Container, Header, Item, Input, Icon, Button } from 'native-base';
import { Router, Scene } from 'react-native-router-flux';
import {  TabNavigator } from 'react-navigation';
import {
  AppRegistry,
  StyleSheet,
  Text,
  View
} from 'react-native';
import * as firebase from 'firebase';
// Initialize Firebase
var config = {
    apiKey: "AIzaSyBeCUPhwMc2Mqm4gdxWlfsfhRiOMZpmm-k",
    authDomain: "patienttracker-10f8f.firebaseapp.com",
    databaseURL: "https://patienttracker-10f8f.firebaseio.com",
    projectId: "patienttracker-10f8f",
    storageBucket: "patienttracker-10f8f.appspot.com",
    messagingSenderId: "375047574887"
};
firebase.initializeApp(config);
export default class PatientAppFirebase extends Component {

  render() {
    return (
      <Provider store={store}>
        <App />
      </Provider>
      // <View><Text>Hello World</Text></View>
    )
  }
}


// const AppPatients = TabNavigator({
//   Home: { screen: PatientsApp },
//   Add_Patient: { screen: PatientForm },
// })
AppRegistry.registerComponent('PatientAppFirebase', () => PatientAppFirebase);
