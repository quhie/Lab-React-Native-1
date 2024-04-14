import React from 'react';
import {createDrawerNavigator} from '@react-navigation/drawer';
import {
  DrawerContentScrollView,
  DrawerItemList,
} from '@react-navigation/drawer';
import {
  Image,
  ScrollView,
  ScrollViewProps,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import {
  DrawerNavigationState,
  NavigationContainer,
  ParamListBase,
} from '@react-navigation/native';
import {
  DrawerNavigationHelpers,
  DrawerDescriptorMap,
} from '@react-navigation/drawer/lib/typescript/src/types';

// @ts-ignore
import Bai1 from './bai1/Home.tsx';
// @ts-ignore
import DetailsScreen from './bai1/DetailScreen.tsx';

const Drawer = createDrawerNavigator();

const CustomDrawerContent = (
  props:
    | (React.JSX.IntrinsicAttributes &
        ScrollViewProps & {
          children: React.ReactNode;
        } & React.RefAttributes<ScrollView>)
    | (React.JSX.IntrinsicAttributes & {
        state: DrawerNavigationState<ParamListBase>;
        navigation: DrawerNavigationHelpers;
        descriptors: DrawerDescriptorMap;
      }),
) => {
  // @ts-ignore
  return (
    <DrawerContentScrollView {...props}>
      <View
        style={{alignItems: 'center', padding: 20, backgroundColor: 'white'}}>
        <Image
          source={{
            uri: 'https://p16-capcut-sign-va.ibyteimg.com/tos-alisg-v-643f9f/o4KNQzh0IBIU26AXAArhSXZAnEAWwAf8yJBobt~tplv-nhvfeczskr-1:250:0.webp?lk3s=44acef4b&x-expires=1735191877&x-signature=TAn%2B%2BPD%2By3uHO1DuvVH8co1yLb4%3D',
          }}
          style={{width: 100, height: 100, borderRadius: 50}}
        />
        <Text
          style={{
            marginTop: 20,
            fontSize: 20,
            fontWeight: 'bold',
            color: 'red',
          }}>
          Do Quang Hieu
        </Text>
        <Text style={{marginTop: 20}}>quanghieutanlin@gmail.com</Text>
      </View>
      <DrawerItemList {...props} />
    </DrawerContentScrollView>
  );
};

const App = () => {
  return (
    // eslint-disable-next-line react/jsx-no-undef
    <NavigationContainer>
      <Drawer.Navigator
        initialRouteName="Home"
        drawerContent={props => <CustomDrawerContent {...props} />}>
        <Drawer.Screen
          name="Home"
          component={HomeScreen}
          options={{
            drawerIcon: () => (
              <Image
                source={{
                  uri: 'https://img.icons8.com/ios/50/home--v1.png',
                }}
                style={{width: 20, height: 20}}
              />
            ),
          }}
        />
        <Drawer.Screen
          name="Bài 1"
          component={Bai1}
          options={{
            drawerIcon: () => (
              <Image
                source={{
                  uri: 'https://img.icons8.com/dotty/80/test-tube.png',
                }}
                style={{width: 20, height: 20}}
              />
            ),
          }}
        />
        <Drawer.Screen
          name="Details"
          component={DetailsScreen}
          options={{
            drawerIcon: () => (
              <Image
                source={{
                  uri: 'https://img.icons8.com/material-outlined/24/bulleted-list.png',
                }}
                style={{width: 20, height: 20}}
              />
            ),
          }}
        />
      </Drawer.Navigator>
    </NavigationContainer>
  );
};

// @ts-ignore
const HomeScreen = ({navigation}) => {
  return (
    <View style={styles.container}>
      <View style={styles.buttonContainer}>
        <TouchableOpacity
          style={styles.button}
          onPress={() => navigation.navigate('Bài 1')}>
          <Text style={styles.buttonText}>Bài 1</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    justifyContent: 'center',
    paddingHorizontal: 10,
  },
  buttonContainer: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    marginTop: 100,
  },
  button: {
    backgroundColor: '#51bd5b',
    borderRadius: 10,
    paddingVertical: 15,
    paddingHorizontal: 30,
    elevation: 5,
  },
  buttonText: {
    color: '#FFFFFF',
    fontSize: 16,
    fontWeight: 'bold',
    textAlign: 'center',
  },
});

export default App;
