import React from 'react';
import {View,Text,StyleSheet} from 'react-native';
import { color } from 'react-native-reanimated';

export default function Loading(){
    return(<View style={styles.container}><Text style={styles.title}>당근중...</Text></View>)
}


const styles = StyleSheet.create({
    container: {
        //앱의 배경 색
        flex:1,
        justifyContent:'center',
        alignItems:'center',
        backgroundColor: '#FF8A3D',
    },
    title: {
        fontSize:20,
        fontWeight:'700',
        color: '#fff'
    }

})