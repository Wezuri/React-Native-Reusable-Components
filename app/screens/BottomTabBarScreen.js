import React from 'react';
import { View, SafeAreaView, Text } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

import TabA from './TabBarScreens/TabA'
import TabB from './TabBarScreens/TabB'
import TabC from './TabBarScreens/TabC'

const Tab = createBottomTabNavigator();

const BottomTabBarScreen = ({navigation}) => {


    return(
        <Tab.Navigator>
            <Tab.Screen 
                name='Tab A'  
                component={TabA}
            />
            <Tab.Screen 
                name='Tab B'  
                component={TabB}
            />
            <Tab.Screen 
                name='Tab C'  
                component={TabC}
            />
        </Tab.Navigator>
    );
};

export default BottomTabBarScreen;