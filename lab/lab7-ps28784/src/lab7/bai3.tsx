import React from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {createMaterialTopTabNavigator} from '@react-navigation/material-top-tabs';
import Screen1 from './screen/Screen1.tsx';
import Screen2 from './screen/Screen2.tsx';
import Screen3 from './screen/Screen3.tsx';

const BottomTab = createBottomTabNavigator();
const TopTab = createMaterialTopTabNavigator();

function TopTabs() {
  return (
    <TopTab.Navigator>
      <TopTab.Screen name="Search" component={Screen2} />
      <TopTab.Screen name="Settings" component={Screen3} />
    </TopTab.Navigator>
  );
}

function Bai3() {
  return (
    <BottomTab.Navigator>
      <BottomTab.Screen name="Home" component={Screen1} />
      <BottomTab.Screen name="TopTabs" component={TopTabs} />
    </BottomTab.Navigator>
  );
}

export default Bai3;
