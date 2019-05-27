import React, { Component } from 'react';
import { Text, View } from 'react-native';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import ReduxThunk from 'redux-thunk';
import reducers from './reducers'
import firebase from "firebase";
import Router from "./router";
 

export default class App extends Component {
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
        const store = createStore(reducers, {}, applyMiddleware(ReduxThunk));
        return (
            <Provider store={store}>
                <Router />
                {/* <LoginForm /> */}
                {/* <View>
                <Text>Bismillah Redux Manager Project</Text>
                </View> */}
            </Provider>
        );
    }
}
