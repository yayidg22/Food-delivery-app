import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View, Image } from 'react-native';
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';
import purpleBackground from '../Resources/images/purpleBackground.png'
import { Feather } from '@expo/vector-icons';
import { Button } from 'react-native-elements';

export default function User() {
    return (
        <View style={styles.container}>
            <StatusBar style="dark" />
            <Text>User</Text>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems:'center',
        justifyContent:'center'
    },
  
});
