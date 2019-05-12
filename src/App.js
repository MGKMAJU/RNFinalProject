import React, {Component} from 'react';
import {Text, View} from 'react-native';
import {Provider} from 'react-redux';
import {createStore} from 'redux';
import reducers from './reducers'
import firebase from "firebase";
import LoginForm from "./components/LoginForm";

export default class App extends Component  {
    componentWillMount() {
        firebase.initializeApp({
            apiKey: "AIzaSyDaYqYZDOKWDpL37RRSBvNSqLDENNbhdQI",
            authDomain: "rnfinalproject.firebaseapp.com",
            databaseURL: "https://rnfinalproject.firebaseio.com",
            projectId: "rnfinalproject",
            storageBucket: "rnfinalproject.appspot.com",
            messagingSenderId: "526789386106",
            appId: "1:526789386106:web:7590913b4466f208"
        });
    }
  render() {
     
    return (
      <Provider store={createStore(reducers)}>
          <View>
               
              <LoginForm/>
          </View>
      </Provider>
    );
  }
}
 