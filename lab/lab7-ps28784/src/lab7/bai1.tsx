import React from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {Text, Image} from 'react-native';
import Screen1 from './screen/Screen1.tsx';
import Screen2 from './screen/Screen2.tsx';
import Screen3 from './screen/Screen3.tsx';

const Tab = createBottomTabNavigator();

const ICONS_MENU = {
  Home: 'https://img.icons8.com/ios/50/home--v1.png',
  Settings: 'https://img.icons8.com/ios/50/settings.png',
  Search: 'https://img.icons8.com/ios/50/search--v1.png',
};

const renderLabel = (props: {
  focused: boolean;
  color: string;
  children: string;
}) =>
  props.focused ? (
    <Text style={{color: props.color}}>{props.children}</Text>
  ) : null;

const renderIcon = (
  icon: string,
  props: {focused: boolean; color: string; size: number},
) => (
  <Image
    source={{uri: icon}}
    style={{tintColor: props.color, height: 16, width: 16}}
  />
);

function Bai1() {
  return (
    <Tab.Navigator
      screenOptions={{
        tabBarActiveTintColor: '#FF6C22',
        tabBarLabelStyle: {flexDirection: 'row'},
        headerShown: false,
      }}>
      <Tab.Screen
        name="Home"
        component={Screen1}
        options={{
          tabBarLabel: props => renderLabel({...props, children: 'Home'}),
          tabBarIcon: props => renderIcon(ICONS_MENU.Home, props),
        }}
      />
      <Tab.Screen
        name="Screen2"
        component={Screen2}
        options={{
          tabBarLabel: props => renderLabel({...props, children: 'Search'}),
          tabBarIcon: props => renderIcon(ICONS_MENU.Search, props),
        }}
      />
      <Tab.Screen
        name="Screen3"
        component={Screen3}
        options={{
          tabBarLabel: props => renderLabel({...props, children: 'Settings'}),
          tabBarIcon: props => renderIcon(ICONS_MENU.Settings, props),
        }}
      />
    </Tab.Navigator>
  );
}

export default Bai1;
