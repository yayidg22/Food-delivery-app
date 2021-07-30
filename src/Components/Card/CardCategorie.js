import React from 'react';
import { Text, View, Image, StyleSheet } from 'react-native';
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';
import testImage from '../../Resources/images/purpleBackground.png';

const CardCategorie = ({ item }) => {
    return (
        <View style={styles.container}>
            <Image style={styles.image} width={wp('42%')} height={hp('11.5%')} source={item?.image} />
            <Text style={styles.title}>{item?.title}</Text>
            <Text style={styles.description}>({item?.quantity})</Text>
        </View>
    )
}

export default CardCategorie;

const styles = StyleSheet.create({
    container: {
        width: wp('42%'),
        height: hp('23%'),
        borderRadius: wp('3%'),
        borderWidth: wp('0.09%'),
        borderColor:"#CCCCCC",
        backgroundColor: '#FFFFFF'
    },
    image: {
        width: wp('42%'),
        height: hp('11.5%'),
        borderTopLeftRadius: wp('3%'),
        borderTopRightRadius: wp('3%')
    },
    title: {
        fontSize: wp('5%'),
        color: "#632673",
        textAlign: 'left',
        padding: wp('2.5%'),
        fontWeight: 'bold'
    },
    description: {
        textAlign: 'left',   
        fontSize: wp('3.5%'),
        color: "#616161",
        paddingLeft: wp('3%'),
        fontWeight: 'bold'
    }

});


