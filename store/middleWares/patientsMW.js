import ActionPatient from "./../action/patientsAction.js";
import { AsyncStorage } from 'react-native'
import * as firebase from 'firebase';

export default class PatientMiddleware {
    // static keys=[];
    static asyncAddPatient(patientObj) {
        var patientsArray = [];
        return (dispatch) => {
            try {
                firebase.database().ref('patients').push(patientObj);
                firebase.database().ref("patients").on("value", snap => {
                    let obj = snap.val();
                    // console.log(obj);
                    let patientsArray = [];
                    let Keys = [];
                    for (let key in obj) {
                        Keys.push(key)
                        patientsArray.push(
                            obj[key]
                        )
                    }
                    dispatch(ActionPatient.addPatient(patientsArray));
                })
            }
            catch (error) {
                alert(error);
            }
        }
    }
    static asyncLoadPatient() {
        return (dispatch) => {
            if (firebase.database().ref("patients")) {
                firebase.database().ref("patients").on("value", snap => {
                    let obj = snap.val();
                    // console.log(obj);
                    let patientsArray = [];
                    let Keys = [];
                    for (let key in obj) {
                        Keys.push(key)
                        patientsArray.push(
                            obj[key]
                        )
                    }
                    dispatch(ActionPatient.addPatient(patientsArray));
                })
            }
        }
    }
    static asyncDeletePatient(index) {
        // console.log("test ",data);
        return (dispatch) => {
            var removePatientIndex;
            firebase.database().ref("patients").on("value", snap => {
                let obj = snap.val();
                // console.log(obj);
                let patientsArray = [];
                let KeyRemove = [];
                for (let key in obj) {
                    KeyRemove.push(key)
                }
                // console.log(KeyRemove)
                // alert(keys[index])
                removePatientIndex = KeyRemove[index];
            })

            firebase.database().ref('patients/' + removePatientIndex).remove();
            firebase.database().ref("patients").on("value", snap => {
                let obj = snap.val();
                // console.log(obj);
                let patientsArray = [];
                for (let key in obj) {
                    patientsArray.push(
                        obj[key]
                    )
                }
                dispatch(ActionPatient.addPatient(patientsArray));
            })
        }
    }
    static asyncDeleteAllPatient() {
        // console.log("test ",data);
        return (dispatch) => {
            // var newArray = [];
            // AsyncStorage.getItem('patients', (err, result) => {
            //     patients = JSON.parse(result);
            //     newArray = patients.splice(0);
            //     dispatch(ActionPatient.addPatient(newArray));
            // })
        }
    }
}
