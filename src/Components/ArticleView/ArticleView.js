
import React from 'react';
import { StyleSheet, Text, View, FlatList, TouchableOpacity, Image } from 'react-native';
import Carousel, { Pagination } from 'react-native-snap-carousel';
import { Entypo } from '@expo/vector-icons';
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';
import { Button } from 'react-native-elements';

const ArticleView = ({ item, onClose,onAddCartPress }) => {
    const [activeSlide, setActiveSlide] = React.useState(0)
    const [markAsFav, setMarkAsFav] = React.useState(false);

     const imagesToRender = [1,1,1] //Repito las mismas imagenes como solo es una prueba
     return (
        <View style={[styles.container, { paddingTop: hp('0%') }]}>
            <Carousel
                onSnapToItem={(index) => setActiveSlide(index)}
                data={imagesToRender}
                renderItem={({ data }) =>
                    <Image source={item.image} style={styles.image} />
                }
                sliderWidth={wp('100%')}
                itemWidth={wp('100%')}
                layout="default"
            />
            <Pagination
                dotsLength={3}
                activeDotIndex={activeSlide}
                containerStyle={{ width: wp('10%'), position: 'absolute', marginTop: hp('22.5%'), alignSelf: 'center' }}
                dotStyle={{
                    width: wp('4%'),
                    height: hp('2%'),
                    borderRadius: wp('1%'),
                    borderRadius: wp('5%'),
                    backgroundColor: 'rgba(255, 255, 255, 0.92)'
                }}
                inactiveDotStyle={{
                    // Define styles for inactive dots here
                }}
                inactiveDotOpacity={0.4}
                inactiveDotScale={0.6}
            />
            <View style={{ position: 'absolute', width: wp('9%'), backgroundColor: '#FFFFFF', borderRadius: wp('10%'), margin: wp('2%'), marginTop: hp('5%') }}>
                <Entypo onPress={onClose} name="chevron-down" size={wp('9%')} color="black" />
            </View>

            <View style={{ position: 'absolute', width: wp('100%'), height: hp('100%'), backgroundColor: '#FFFFFF', borderTopStartRadius: wp('10%'), borderTopEndRadius: wp('10%'), marginTop: hp('30%') }}>
                <Text style={styles.title}>{item.title}</Text>
                <View style={{ height: hp('1%') }} />
                <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                    <Text style={styles.price}>{item.price} </Text>
                    <Text style={styles.description}>€ / piece</Text>
                </View>
                <Text style={styles.subtitle}>Spain</Text>
                <View style={{ height: hp('2%') }} />
                <Text style={styles.description2}>{item.description}</Text>
                <View style={{ height: hp('4%') }} />
                <View style={{ alignSelf: 'center', flexDirection: 'row' }}>
                    <Button onPress={() => { setMarkAsFav(!markAsFav) }} icon={{ name: markAsFav ? 'heart' : 'heart-o', size: wp('5%'), color: markAsFav ? 'red' : 'black', type: 'font-awesome' }} buttonStyle={[styles.button, { backgroundColor: '#FFFFFF', width: wp('20%') }]} />
                    <View style={{ width: hp('5%') }} />
                    <Button onPress={onAddCartPress} icon={{ name: 'shopping-cart', size: wp('5%'), color: 'white' }} titleStyle={{ color: "#FFFFFF" }} title="ADD TO CART" buttonStyle={styles.button} />
                </View>
            </View>
        </View>
    )
}

export default ArticleView;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        paddingTop: hp('8.5%'),
        backgroundColor: '#FFFAFA',
    },
    image: {
        width: wp('100%'),
        height: hp('40%')
    },
    title: {
        fontSize: wp('7%'),
        color: "#632673",
        textAlign: 'left',
        width: wp('80%'),
        paddingLeft: wp('10%'),
        paddingTop: wp('10%'),

        fontWeight: 'bold'
    },
    subtitle: {
        fontSize: wp('6%'),
        color: "#632673",
        textAlign: 'left',
        width: wp('80%'),
        paddingLeft: wp('10%'),
        paddingTop: wp('10%'),
        fontWeight: 'bold'
    },
    price: {
        fontSize: wp('7%'),
        color: "#632673",
        textAlign: 'center',
        paddingLeft: wp('10%'),
        fontWeight: 'bold'
    },
    description: {
        textAlign: 'center',
        fontSize: wp('5%'),
        color: "#616161",
        fontWeight: 'bold'
    },
    description2: {
        textAlign: 'left',
        fontSize: wp('4%'),
        color: "#616161",
        paddingLeft: wp('10%'),
        width: wp('90%'),
        height: hp('25%')
    },
    button: {
        width: wp('60%'),
        height: hp('7%'),
        backgroundColor: "#009c8c",
        borderRadius: wp('3.1%')
    }


});