import React, { useState } from "react";
import { View, Text, StyleSheet, TextInput, Button, Modal } from 'react-native'

function GoalInput(props) {
    const [enteredGoal, setEnteredGoal] = useState('');

    const goalInputHandler = (enteredText) => {
        setEnteredGoal(enteredText);
    }

    const addGoalHandler =()  =>{
        props.onAddGoal(enteredGoal);
        setEnteredGoal('');
        }
    return (
        <>
        <Modal animationType="slide" visible={props.visible}>
            <View style={styles.inputContainer}>
                <View style={styles.inputHolder}>
                    <TextInput placeholder='Course Goals' placeholderTextColor={'#FFFFFF'} style={styles.inputText}
                        onChangeText={goalInputHandler}
                        value={enteredGoal} />
                </View>
                <View style={styles.buttonContainer}>
                    <View style={styles.buttonHolder}>
                    <Button title="Cancel" color={'#FF5733'} onPress={props.onCancel} />
                    </View>
                    <View style={styles.buttonHolder}>
                    <Button title='Add Goal' color={'#AA336A'} onPress={addGoalHandler} />   
                    </View>                 
                </View>
            </View>
            </Modal>
        </>
    )
}

const styles = StyleSheet.create({
    inputText: {
        borderWidth: 1,
        borderColor: 'white',
        marginBottom: 5,
        borderRadius: 6,
    },
    inputContainer: {
        justifyContent: 'center',
        alignItems: 'center',
        flex:1,
        backgroundColor:'#9F2B68'
    },

    inputHolder: {
        width: '80%',
    },
    buttonContainer:{
        width:'80%'
    },
    buttonHolder:{
        marginTop:10,
        borderRadius:10,
    }
    });
export default GoalInput;