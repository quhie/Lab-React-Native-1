import React from 'react';
import {createMaterialTopTabNavigator} from '@react-navigation/material-top-tabs';
import Screen1 from './screen/Screen1.tsx';
import Screen2 from './screen/Screen2.tsx';
import Screen3 from './screen/Screen3.tsx';

const TopTab = createMaterialTopTabNavigator();

function Bai2() {
  return (
    <TopTab.Navigator>
      <TopTab.Screen name="Home" component={Screen1} />
      <TopTab.Screen name="Search" component={Screen2} />
      <TopTab.Screen name="Settings" component={Screen3} />
    </TopTab.Navigator>
  );
}

export default Bai2;
