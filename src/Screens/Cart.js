import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View, FlatList, } from 'react-native';
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';
import CardArticle from '../Components/Card/CardArticle';
import { connect } from 'react-redux';

function Cart({ cartList }) {
    const [cartdata,setcartdata] = React.useState(cartList);
    return (
        <View style={styles.container}>
            <StatusBar style="dark" />
            <Text style={styles.title}> Cart </Text>
            <FlatList data={cartdata} renderItem={({ item, index }) =>
                <CardArticle key={index} item={item} onCartPress={() => handleSelectedItem(item)} />
            } style={{ alignSelf: 'center', width: wp('100%') }} />
        </View>
    );
}

const mapStateToProps = state => {
    return {
        cartList: state.cartItems,
    }
}

export default connect(mapStateToProps, {})(Cart);

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        padding: wp('2%')
    },
    title: {
        fontSize: wp('8.5%'),
        color: "#632673",
        textAlign: 'left',
        padding: wp('5%'),
        fontWeight: 'bold'
    },

});
