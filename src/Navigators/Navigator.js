import React from 'react';
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';
import { createStackNavigator } from '@react-navigation/stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { FontAwesome,AntDesign,FontAwesome5 } from '@expo/vector-icons';
import FirstUseScreen from '../Screens/FirstUseScreen';
import Home from '../Screens/Home';
import Cart from '../Screens/Cart';
import User from '../Screens/User';

const Stack = createStackNavigator();
const Tab = createBottomTabNavigator();

function StackNavigator() {
    return (
        <Stack.Navigator headerMode="float" detachInactiveScreens initialRouteName="firstUseScreen" screenOptions={{ headerShown: false,gestureEnabled:false }} >
            <Stack.Screen name="firstUseScreen" component={FirstUseScreen} options={{headerShown: false}} />
            <Stack.Screen name="home" component={TabNavigator} />
        </Stack.Navigator>
    )
}

function TabNavigator() {
    return (
        <Tab.Navigator detachInactiveScreens >
            <Tab.Screen name="Home" component={Home}
                options={{
                    tabBarLabel: '',
                    tabBarIcon: (({focused, color, size}) => <FontAwesome name="th-list" size={focused ? wp('8%') : wp('6%')} color={focused ? "purple" : "black"} />)
                }}
            />
            <Tab.Screen name="Cart" component={Cart} options={{
                tabBarLabel: '',
                tabBarIcon: (({focused, color, size}) => <AntDesign name="shoppingcart" size={focused ? wp('8%') : wp('6%')} color={focused ? "purple" : "black"} />)
            }}
            />
            <Tab.Screen name="User" component={User} options={{
                tabBarLabel: '',
                tabBarIcon: (({focused, color, size}) => <FontAwesome5 name="user" size={focused ? wp('8%') : wp('6%')} color={focused ? "purple" : "black"} />)
            }}
            />
        </Tab.Navigator>
    );
}



export default StackNavigator;