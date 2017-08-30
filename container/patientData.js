import React, { Component } from 'react';
import { Actions } from 'react-native-router-flux';
import { Container, Header, Content, Card, CardItem, Body } from 'native-base';
import store from './../store/index.js';
import { connect } from 'react-redux';
import {
    AppRegistry,
    StyleSheet,
    Text,
    View,
    ScrollView,
    TouchableOpacity,
    TextInput,
    Button
} from 'react-native';
function mapStateToProps(state) {
    return {
        patientsData: state.patientsData,
    };
}
class PatientData extends Component {
    constructor() {
        super();
        this.state = {

        }
    }
    render() {
        console.log(this.props.patientsData)
        // console.log(this.props.navigation.state.params.indexP);
        var index = this.props.navigation.state.params.indexP;
        // console.log(this.state.patientArry);
        date = this.props.patientsData[index].Date
        Pname = this.props.patientsData[index].Pname
        Disease = this.props.patientsData[index].Disease
        Dname = this.props.patientsData[index].Dname
        Mname = this.props.patientsData[index].Mname
        Mcost = this.props.patientsData[index].Mcost
        return (
            <Container>
                <Content>
                    <Card>
                        <CardItem header>
                            <Text>Date: {date}</Text>
                        </CardItem>
                        <CardItem>
                            <Body>
                                <Text>
                                  Patient Name:  {Pname}
                                </Text>
                                <Text>
                                  Disease:  {Disease}
                                </Text>
                                <Text>
                                  Doctor Name:  {Dname}
                                </Text>
                                <Text>
                                 Medicine Name:   {Mname}
                                </Text>
                                <Text>
                                 Medicine Cost:   {Mcost}
                                </Text>
                            </Body>
                        </CardItem>
                        <CardItem footer>
                            <Text>Patient Tracker App</Text>
                        </CardItem>
                    </Card>
                </Content>
            </Container>
        )
    }
}
export default connect(mapStateToProps)(PatientData)

