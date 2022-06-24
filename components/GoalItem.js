import React from "react";
import { View, Text, StyleSheet, Pressable, TouchableOpacity } from 'react-native'

function GoalItem(props) {
    return (
        <><TouchableOpacity onPress={props.onDelete.bind(this, props.id)}>
            <View style={styles.listItems}>
                <Text style={{ color: '#FFFFFF' }} >{props.title}</Text>
            </View>
            </TouchableOpacity>
        </>
    )
}

const styles = StyleSheet.create({
    listItems: {
        padding: 10,
        backgroundColor: '#9F2B68',
        borderRadius: 6,
        color: '#fff',
        marginTop: 6,
        width: '100%'
    }
});

export default GoalItem;