import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View, FlatList, TouchableOpacity, Image } from 'react-native';
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';
import { Input } from 'react-native-elements';
import CardCategorie from '../Components/Card/CardCategorie';
import CardArticle from '../Components/Card/CardArticle';
import { Overlay } from 'react-native-elements';
import ArticleView from '../Components/ArticleView/ArticleView';

import { Entypo } from '@expo/vector-icons';

import bread from '../Resources/categoriesImages/bread.jpg';
import brocoli from '../Resources/categoriesImages/brocoli.jpg';
import embutidos from '../Resources/categoriesImages/embutidos.jpeg';
import fruits from '../Resources/categoriesImages/fruits.jpg';
import sodas from '../Resources/categoriesImages/sodas.jpg';
import sweets from '../Resources/categoriesImages/sweets.jpg';

import { connect } from 'react-redux';
import { updateCart } from '../Redux/actions/UserActions';

function Home({ cartList, updateCart }) {
    const Categories = [
        {
            image: brocoli,
            title: "Vegeteables",
            quantity: 4,
            items: [
                {
                    title: "Brocoli",
                    description: "un brocoli",
                    image: { uri: "https://static3.abc.es/media/bienestar/2019/07/22/brocoli-beneficios-3-kk7H--620x349@abc.jpg" },
                    price: 15.00
                },
                {
                    title: "Coliflor",
                    description: "un coliflor",
                    image: { uri: "https://www.tododisca.com/wp-content/uploads/2020/11/cauliflower-4621686_1280.jpg" },
                    price: 15.00
                },
                {
                    title: "Brocoli PREMIUN",
                    description: "un brocoli premiun",
                    image: { uri: "https://static3.abc.es/media/bienestar/2019/07/22/brocoli-beneficios-3-kk7H--620x349@abc.jpg" },
                    price: 25.00
                },
                {
                    title: "Coliflor PREMIUN",
                    description: "un coliflor premiun",
                    image: { uri: "https://www.tododisca.com/wp-content/uploads/2020/11/cauliflower-4621686_1280.jpg" },
                    price: 25.00
                },
            ]
        },
        {
            image: fruits,
            title: "Fruits",
            quantity: 3,
            items: [
                {
                    title: "Naranja",
                    description: "una naranja",
                    image: { uri: "https://static3.abc.es/media/bienestar/2020/11/06/naranja-kOMF--620x349@abc.jpg" },
                    price: 15.00
                },
                {
                    title: "Pera",
                    description: "Una pera",
                    image: { uri: "https://cdn1.frutapasion.es/wp-content/uploads/2019/06/pera-01-1.jpg" },
                    price: 15.00
                },
                {
                    title: "Manzana",
                    description: "Una manzana de alta calidad",
                    image: { uri: "https://s1.eestatic.com/2019/04/09/ciencia/nutricion/frutas-quimica-vegetales_389723222_119995650_1024x576.jpg" },
                    price: 25.00
                },
            ]
        },
        {
            image: bread,
            title: "Bread",
            quantity: 2,
            items: [
                {
                    title: "Pan sobao",
                    description: "un pan sobao",
                    image: { uri: "http://3.bp.blogspot.com/-jHsZQltDl8M/UoDudzSp9qI/AAAAAAAAP1c/L04Huccy6dM/s1600/Pan+dominicano.jpg" },
                    price: 10.00
                },
                {
                    title: "Pan carioca",
                    description: "Un pan",
                    image: { uri: "http://www.puratos.pe/content/dam/puratos/images/recetas-peru/Pan%20carioca.jpg/jcr:content/renditions/cq5dam.web.800.800.jpeg" },
                    price: 15.00
                }
            ]
        },
        {
            image: sweets,
            title: "Sweets",
            quantity: 4,
            items: [
                {
                    title: "Chocolate",
                    description: "Caja de chocolates",
                    image: { uri: "https://perfectdailygrind.com/es/wp-content/uploads/sites/2/2020/04/Hs_5Ce8ecmXodh-AdEVHyT07irPaZ-zAAhYkKYRJgS5CVzHKs0cAAdyeAF9TIgyh4KI5gqYmyuIDwJnf2f9wCdNvJ5WbQOlSoRr5zmmzMalyR1-RQxvlOtTZkJq9G_GPUiVZ6_WX-1-1024x683.jpeg" },
                    price: 150.00
                },
                {
                    title: "Caramelos",
                    description: "Funda de caramelos",
                    image: { uri: "https://static.vecteezy.com/system/resources/previews/000/751/880/non_2x/background-of-mixed-turkish-sweets-photo.jpg" },
                    price: 51.00
                },
                {
                    title: "Papas",
                    description: "Paquete de papas",
                    image: { uri: "https://article.innovadatabase.com/articleimgs/article_images/637045815991713421HiFEY9MV.jpg" },
                    price: 25.00
                },
                {
                    title: "Paletas",
                    description: "una paleta",
                    image: { uri: "https://www.deliciosi.com/images/2700/2715/paletas-de-helados.jpg" },
                    price: 150.00
                },
            ]
        },
        {
            image: embutidos,
            title: "Embutidos",
            quantity: 2,
            items: [
                {
                    title: "Salami",
                    description: "Un salami",
                    image: { uri: "https://www.eluniversal.com.mx/sites/default/files/2020/01/07/de-que-esta-hecho-salami-2.jpg" },
                    price: 300.00
                },
                {
                    title: "Paquete 6 salchichas",
                    description: "Paquete 6 salchichas",
                    image: { uri: "https://cecinasmarcelina.cl/wp-content/uploads/2020/07/Galeria-1-Salchichas-Dona-MArcelina.jpg" },
                    price: 51.00
                },
            ]
        },
        {
            image: sodas,
            title: "Sodas",
            quantity: 3,
            items: [
                {
                    title: "Coca cola",
                    description: "Coca de lata",
                    image: { uri: "https://s.libertaddigital.com/2020/01/31/coca-cola-refresco-latas.jpg" },
                    price: 25
                },
                {
                    title: "Sprite",
                    description: "Sprite de lata",
                    image: { uri: "https://thumbs.dreamstime.com/b/shah-alam-malaysia-de-septiembre-latas-refresco-gaseosa-envasadas-en-el-estante-del-supermercado-esprite-para-su-venta-198080124.jpg" },
                    price: 25.00
                },
                {
                    title: "Fanta",
                    description: "Fanta de lata",
                    image: { uri: "https://cdn.dribbble.com/users/3261712/screenshots/6079047/adobe_photoshop_cc_2014__macintosh_-1032x1494-000175.png" },
                    price: 25.00
                },
            ]
        },
    ]

    const [categoriesFilterData, setCategoriesFilterData] = React.useState(Categories);

    const [categoryViewIsEnable, setCategoryViewIsEnable] = React.useState(false);
    const [categoryViewData, setCategoryViewData] = React.useState([]);
    const [categoryViewFilterData, setCategoryViewFilterData] = React.useState([]);

    const [itemViewVisible, setItemViewVisible] = React.useState(false);
    const [itemViewData, setItemViewData] = React.useState();

    const [localCart,setLocalCart] = React.useState(cartList);


    const filterCategoriesData = (filterValue) => {
        const dataFiltered = Categories.filter((item) => {
            let categoryLowerCase = item.title.toLowerCase();
            let filterValueLowerCase = filterValue.toLowerCase();
            return categoryLowerCase.indexOf(filterValueLowerCase) > -1;
        });
        setCategoriesFilterData(dataFiltered);
    }

    const filterCategoryData = (filterValue) => {
        console.log(categoryViewData)
        const dataFiltered = categoryViewData.items.filter((item) => {
            let categoryLowerCase = item.title.toLowerCase();
            let filterValueLowerCase = filterValue.toLowerCase();
            return categoryLowerCase.indexOf(filterValueLowerCase) > -1;
        });
        setCategoryViewFilterData(dataFiltered);
    }

    const handleCategoryView = (item) => {
        setCategoryViewIsEnable(true);
        setCategoryViewData(item);
        setCategoryViewFilterData(item.items)
        console.log(item);
    }

    const handleSelectedItem = (item) => {
        setCategoryViewIsEnable(false);
        setItemViewVisible(true);
        setItemViewData(item);
    }


    const addItemToCart =  (item) => {
        let cart = [];
        if (cartList != undefined) {
           cart =  cartList;
         //  setLocalCart(prev => prev.concat(cartList))
        }
         cart.push(item);
         console.log('cartList',cartList)
         updateCart(cart);
    }

    return (

        <View style={styles.container}>
            <StatusBar style="dark" />
            <Text style={styles.title}>Categories</Text>
            <Input
                onChangeText={(text) => filterCategoriesData(text)}
                placeholder=' Search'
                leftIconContainerStyle={{ paddingLeft: wp('3%') }}
                inputContainerStyle={styles.input}
                leftIcon={{ type: 'font-awesome', name: 'search' }}
            />
            <FlatList data={categoriesFilterData} renderItem={({ item, index }) =>
                <TouchableOpacity onPress={() => handleCategoryView(item)} style={{ padding: wp('4%') }}>
                    <CardCategorie item={item} />
                </TouchableOpacity>
            } numColumns={2} style={{ alignSelf: 'center', width: wp('100%') }} />

            <Overlay isVisible={categoryViewIsEnable} animationType="slide">
                <View style={[styles.container, { paddingTop: hp('5%') }]}>
                    <Entypo onPress={() => setCategoryViewIsEnable(false)} name="chevron-down" size={wp('9%')} color="black" style={{ paddingLeft: wp('2%') }} />
                    <Text style={styles.title}>{categoryViewData.title}</Text>
                    <Input
                        onChangeText={(text) => filterCategoryData(text)}
                        placeholder=' Search'
                        leftIconContainerStyle={{ paddingLeft: wp('3%') }}
                        inputContainerStyle={styles.input}
                        leftIcon={{ type: 'font-awesome', name: 'search' }}
                        defaultValue=""
                    />

                    <FlatList data={categoryViewFilterData} renderItem={({ item, index }) =>
                        <View style={{ padding: wp('1%'), alignItems: 'center' }}>
                            <CardArticle item={item} onCartPress={() => handleSelectedItem(item)} />
                        </View>
                    } style={{ alignSelf: 'center', width: wp('100%') }} />

                </View>
            </Overlay>

            <Overlay overlayStyle={{ height: hp('105%') }} isVisible={itemViewVisible} animationType="slide">
                <StatusBar style="light" />

                <ArticleView item={itemViewData} onClose={() => {
                    setItemViewVisible(false);
                    setCategoryViewIsEnable(true);
                }} onAddCartPress={() => addItemToCart(itemViewData)} />
            </Overlay>


        </View>
    );
}


const mapStateToProps = state => {
    return {
        cartList: state.cartItems,
    }
}

export default connect(mapStateToProps, { updateCart })(Home);

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
    },
    image: {
        width: wp('100%'),
        height: hp('40%')
    },

});
