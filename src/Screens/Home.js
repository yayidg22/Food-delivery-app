import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View, FlatList, TouchableOpacity } from 'react-native';
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';
import { Input } from 'react-native-elements';
import CardCategorie from '../Components/Card/CardCategorie';
import CardArticle from '../Components/Card/CardArticle';

import { Entypo } from '@expo/vector-icons';

import bread from '../Resources/categoriesImages/bread.jpg';
import brocoli from '../Resources/categoriesImages/brocoli.jpg';
import coffee from '../Resources/categoriesImages/coffee.jpg';
import embutidos from '../Resources/categoriesImages/embutidos.jpeg';
import fruits from '../Resources/categoriesImages/fruits.jpg';
import pastas from '../Resources/categoriesImages/pastas.jpg';
import sodas from '../Resources/categoriesImages/sodas.jpg';
import sweets from '../Resources/categoriesImages/sweets.jpg';

export default function Home() {

    const Categories = [
        {
            image: brocoli,
            title: "Vegeteables",
            quantity: 2,
            items:[
                {
                    title:"Brocoli",
                    image:"",
                    price:15.00
                }
            ]
        },
        {
            image: fruits,
            title: "Fruits",
            quantity: 3
        },
        {
            image: bread,
            title: "Bread",
            quantity: 2
        },
        {
            image: sweets,
            title: "Sweets",
            quantity: 4
        },
        {
            image: pastas,
            title: "Pastas",
            quantity: 3
        },
        {
            image: coffee,
            title: "Coffee",
            quantity: 2
        },
        {
            image: embutidos,
            title: "Sodas",
            quantity: 4
        },
        {
            image: sodas,
            title: "Sodas",
            quantity: 3
        },
    ]

    const [categoryViewIsEnable, setCategoryViewIsEnable] = React.useState();
    const [categoryViewData, setCategoryViewData] = React.useState([]);

    const handleCategoryView = (item) => {
        setCategoryViewIsEnable(true);
        setCategoryViewData(item);
    }

    const CategoryView = () => {
        return (
            <View style={styles.container}>
                <StatusBar style="dark" />
                <Entypo onPress={() => setCategoryViewIsEnable(false)} name="chevron-left" size={wp('9%')} color="black" />
                <Text style={styles.title}>{categoryViewData.title}</Text>
                <Input
                    placeholder=' Search'
                    leftIconContainerStyle={{ paddingLeft: wp('3%') }}
                    inputContainerStyle={styles.input}
                    leftIcon={{ type: 'font-awesome', name: 'search' }}
                />
                <FlatList data={categoryViewData.items} renderItem={({ item, index }) =>
                    <View onPress={() => handleCategoryView(item)} style={{ alignSelf:'center',alignItems:'center' }}>
                        <CardArticle item={item} />
                    </View>
                } numColumns={2} style={{ alignSelf: 'center', width: wp('100%') }} />

            </View>
        )
    }

    return (
        categoryViewIsEnable ? <CategoryView /> :
            <View style={styles.container}>
                <StatusBar style="dark" />
                <Text style={styles.title}>Categories</Text>
                <Input
                    placeholder=' Search'
                    leftIconContainerStyle={{ paddingLeft: wp('3%') }}
                    inputContainerStyle={styles.input}
                    leftIcon={{ type: 'font-awesome', name: 'search' }}
                />
                <FlatList data={Categories} renderItem={({ item, index }) =>
                    <TouchableOpacity onPress={() => handleCategoryView(item)} style={{ padding: wp('4%') }}>
                        <CardCategorie item={item} />
                    </TouchableOpacity>
                } numColumns={2} style={{ alignSelf: 'center', width: wp('100%') }} />

            </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        paddingTop: hp('8.5%'),
        backgroundColor: '#FFFAFA'
    },
    title: {
        fontSize: wp('8.5%'),
        color: "#632673",
        textAlign: 'left',
        padding: wp('5%'),
        fontWeight: 'bold'
    },
    input: {
        alignSelf: 'center',
        width: wp('95%'),
        borderRadius: wp('5%'),
        borderWidth: wp('0.2%'),
        borderColor: "#CCCCCC",
        backgroundColor: '#FFFFFF'
    }

});
