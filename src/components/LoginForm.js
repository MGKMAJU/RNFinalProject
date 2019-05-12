import React, { Component } from "react";
import {Card, CardSection, Input, CustomButton} from "./common";
import { connect } from "react-redux";
import { emailChanged } from "../actions";

export default class LoginForm extends Component {
    render() {
        onEmailChange(text){

        }
        return (
            <Card>
                <CardSection>
                    <Input  label="Email" placeholder="User@gmail.com" onChangeText = {this.onEmailChange.bind(this)}/>
                </CardSection>
                <CardSection>
                    <Input  label="Password" placeholder="Pasword"/>
                </CardSection>
                <CardSection>
                    <CustomButton> Login </CustomButton>
                </CardSection>
            </Card>
        );
    }
}
 