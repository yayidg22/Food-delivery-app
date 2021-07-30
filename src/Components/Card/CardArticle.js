import React from 'react';
import { Text, View, Image, StyleSheet } from 'react-native';
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';
import testImage from '../../Resources/images/purpleBackground.png';
import { Button } from 'react-native-elements';

const CardArticle = ({ item }) => {
    const [markAsFav,setMarkAsFav] = React.useState(false);
    return (
        <View style={styles.container}>
            <Image style={styles.image} width={wp('42%')} height={hp('18%')} source={item?.image} />
            <View>
                <Text style={styles.title}>{item?.title}</Text>
                <View style={{height:hp('1%')}}/>
                <View style={{flexDirection:'row',alignItems:'center'}}>
                  <Text style={styles.price}>{item?.price} </Text>
                  <Text style={styles.description}>€/piece</Text>
                </View>
                <View style={{height:hp('2%')}}/>
                <View style={{flexDirection:'row',alignItems:'center'}}>
                <Button  onPress={() => {setMarkAsFav(!markAsFav)}}  icon={{name:markAsFav ? 'heart':'heart-o',size:wp('5%'),color:markAsFav ? 'red':'black',type:'font-awesome'}} buttonStyle={[styles.button, { backgroundColor: '#FFFFFF' }]} />
                <Button onPress={() => {/*OPEN MODAL WITH ITEM SCREEN*/}} icon={{name:'shopping-cart',size:wp('5%'),color:'white'}} titleStyle={{ color: "#616161" }}  buttonStyle={styles.button} />
                </View>
            </View>
        </View>
    )
}

export default CardArticle;

const styles = StyleSheet.create({
    container: {
        alignItems:'center',
        width: wp('90%'),
        height: hp('18%'),
        flexDirection: 'row',
        borderRadius: wp('3%'),
        borderWidth: wp('0.09%'),
        borderColor: "#CCCCCC",
        backgroundColor: '#FFFFFF'
    },
    image: {
        width: wp('42%'),
        height: hp('18%'),
        borderRadius: wp('3%'),
    },
    title: {
        fontSize: wp('4%'),
        width: wp('40%'),
        height: hp('5%'),
        color: "#632673",
        textAlign: 'center',
        paddingLeft: wp('5%'),
        fontWeight: 'bold'
    },
    price: {
        fontSize: wp('5%'),
        color: "#632673",
        textAlign: 'center',
        paddingLeft: wp('10%'),
        fontWeight: 'bold'
    },
    description: {
        textAlign: 'center',
        fontSize: wp('4%'),
        color: "#616161",
        fontWeight: 'bold'
    },
    button: {
        width: wp('20%'),
        height: hp('5%'),
        backgroundColor: "#009c8c",
        borderRadius: wp('3.1%')
    }

});


