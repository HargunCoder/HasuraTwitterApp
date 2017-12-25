import React, { Component } from "react";
import HomeScreen from "./HomeScreen.js";
import Profile from "../ProfileScreen/Profile";
import Lists from '../ListScreen/Lists';
//import SearchScreen from '../SearchScreen';
import SearchTab from './SearchTab'
import Notifications from './Notifications';
import Messages from './Messages';
//import Moments from '../Moments';
import { TabNavigator, StackNavigator, DrawerNavigator } from "react-navigation";
//import SideBar from "../SideBar/SideBar.js";

import { ScrollView, Text } from 'react-native';
import TabBarComponent from './TabBarComponent';

//creating tabnavigator for mainscreen, passing a custom tabbar component
const HomeScreenTab = TabNavigator({
  //defining four tabs of HomeScreen
  Home: {screen: HomeScreen},
  Search: {screen: SearchTab},
  Notifications: {screen: Notifications},
  Messages: { screen: Messages},
},{
  //Custom tabBarComponent for changing header with style
  tabBarComponent: props => (<TabBarComponent{...props} />),
  tabBarPosition: 'top',
  animationEnabled: true,
  tabBarOptions: {
    activeTinitColor:'blue',
    inactiveTintColor: 'grey',
    activeBackgroundColor: '#fff',
    inactiveBackgroundColor: '#fff',
    showIcon: true,
    showLabel: false,
  },
});

//creating a DrawerNavigator for side menu
const HomeScreenRouter = DrawerNavigator (
  //tip using Router in navigation main is a good practice
{
  Home: { screen: HomeScreenTab },//the TabNavigator for Tabs
  Profile: {screen :Profile},
  Lists: { screen: Lists },
  Moments: { screen: Moments},
  Highlights: {screen: Lists },
  SearchScreen: {screen: SearchScreen}
},
{
  //passing all route infos as props to custom SideBar component
  //this will give the SideBar view we need with Profile etc
  contentComponent: props => <SideBar {...props} />
}
);
export default HomeScreenTab;
