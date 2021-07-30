import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View, Image } from 'react-native';
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';
import purpleBackground from '../Resources/images/purpleBackground.png'
import { Feather } from '@expo/vector-icons';
import { Button } from 'react-native-elements';

export default function FirstUseScreen({ navigation }) {
    return (
        <View style={styles.container}>
            <StatusBar style="light" />
            <Image source={purpleBackground} style={styles.image} />
            <View style={styles.contentContainer}>
                <View style={{ paddingTop: hp('9%') }}>
                    <Feather name="codesandbox" size={wp('12%')} color="purple" />
                </View>
                <View style={{ paddingTop: hp('5%'), width: wp('50%') }}>
                    <Text style={styles.title}>Non-Contact Deliveries</Text>
                </View>
                <View style={{ alignSelf: 'center', width: wp('85%'), paddingTop: hp('2%') }}>
                    <Text style={styles.description}>When placing an order, select the option "Contactless delivery" and the courier will leave your order at the door</Text>
                </View>
                <View style={{ paddingTop: hp('5%') }}>
                    <Button title="ORDER NOW" onPress={() => navigation.navigate('home')} buttonStyle={styles.button} />
                    <View style={{ height: hp('2%') }} />
                    <Button title="DISMISS" onPress={() => navigation.navigate('home')} titleStyle={{ color: "#616161" }} buttonStyle={[styles.button, { backgroundColor: '#FFFFFF' }]} />
                </View>
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    contentContainer: {
        width: wp('100%'),
        height: hp('100%'),
        marginTop: hp('35%'),
        position: 'absolute',
        backgroundColor: "#FFFFFF",
        borderTopStartRadius: wp('7%'),
        borderTopEndRadius: wp('7%'),
        alignItems: 'center',
    },
    image: {
        width: wp('100%'),
        height: hp('100%')
    },
    title: {
        fontSize: wp('7%'),
        fontWeight: 'bold',
        color: '#632673',
        textAlign: 'center'
    },
    description: {
        fontSize: wp('4%'),
        fontWeight: 'bold',
        color: '#616161',
        textAlign: 'center'
    },
    button: {
        width: wp('90%'),
        height: hp('7%'),
        backgroundColor: "#009c8c",
        borderRadius: wp('3.1%')
    }
});
