import { Text, StyleSheet, TouchableOpacity , View} from 'react-native'
import React, { Component } from 'react'
import { MaterialIcons } from '@expo/vector-icons'; 

export default function TodoItem({ item, pressHandler }) {

    return (
        <TouchableOpacity onPress={() => pressHandler(item.key)}>
            <View style={styles.item}>
              <Text>{item.text}</Text>
              <MaterialIcons name="delete" size={24} color="black" />
            </View>
        </TouchableOpacity>
    )
}


const styles = StyleSheet.create({
    item: {
        flexDirection: 'row',
        justifyContent: "space-between",
        alignItems: 'center',
        padding: 16,
        marginTop: 16,
        borderColor: '#bbb',
        borderWidth: 1,
        borderStyle: 'dashed',
        borderRadius: 10
    }
})