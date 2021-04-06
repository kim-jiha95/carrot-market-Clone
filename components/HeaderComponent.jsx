import React from 'react';
import { StyleSheet, View, Text } from 'react-native';

export default function HeaderComponent({ headerTitle }) {

    return (
        <View style={StyleSheet.header}>
            <Text style={StyleSheet.headerText}>{headerTitle}</Text>
        </View>
    );
}

const styles = StyleSheet.create({
    header:{
        paddingTop: 95,
        paddingBottom: 5,
        marginLeft: 20,
        // bakgroundColor: 'white',
        

    },
    headerText:{
        fontWeight: '600',
        fontSize: 30,        
    },
})