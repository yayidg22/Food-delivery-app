import React from 'react';
import { connect } from 'react-redux';
import { View } from 'react-native';
import { Badge, withBadge } from 'react-native-elements'
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';
import { createStackNavigator } from '@react-navigation/stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { FontAwesome, AntDesign, FontAwesome5 } from '@expo/vector-icons';
import FirstUseScreen from '../Screens/FirstUseScreen';
import Home from '../Screens/Home';
import Cart from '../Screens/Cart';
import User from '../Screens/User';

const Stack = createStackNavigator();
const Tab = createBottomTabNavigator();


function StackNavigator() {
    return (
        <Stack.Navigator headerMode="float" initialRouteName="firstUseScreen" screenOptions={{ headerShown: false, gestureEnabled: false }} >
            <Stack.Screen name="firstUseScreen" component={FirstUseScreen} options={{ headerShown: false }} />
            <Stack.Screen name="home"  component={TabNavigatorContainer} />
        </Stack.Navigator>
    )
}

let TabNavigatorContainer = connect((state) => ({ cartList: state.cartItems }))(TabNavigator);

function TabNavigator({ cartList }) {
    return (
        <Tab.Navigator  >
            <Tab.Screen name="Home" component={Home}
                options={{
                    tabBarLabel: '',
                    tabBarIcon: (({ focused, color, size }) => <FontAwesome name="th-list" size={focused ? wp('8%') : wp('6%')} color={focused ? "purple" : "black"} />)
                }}
            />
            <Tab.Screen  name="Cart" component={Cart} options={{
                tabBarLabel: '',
                tabBarIcon: (({ focused, color, size }) =>
                    <View>
                        <AntDesign name="shoppingcart" size={focused ? wp('8%') : wp('6%')} color={focused ? "purple" : "black"} />
                        {cartList?.length > -1 ?
                            <Badge
                                value={cartList?.length}
                                status="success"
                                containerStyle={{ position: 'absolute', top: -4, right: -4 }}
                            />
                            :
                            null
                            }
                    </View>

                )
            }}
            />
            <Tab.Screen name="User" component={User} options={{
                tabBarLabel: '',
                tabBarIcon: (({ focused, color, size }) => <FontAwesome5 name="user" size={focused ? wp('8%') : wp('6%')} color={focused ? "purple" : "black"} />)
            }}
            />
        </Tab.Navigator>
    );
}

export default StackNavigator;