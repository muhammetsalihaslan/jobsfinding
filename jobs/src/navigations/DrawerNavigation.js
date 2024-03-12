import {createDrawerNavigator} from '@react-navigation/drawer';
import React from 'react';
import StackNavigation from './StackNavigation';
import FavoriteJobs from '../pages/FavoriteJobs/FavotireJobs';

const Drawer = createDrawerNavigator();

const DrawerNavigation = () => {
  return (
    <Drawer.Navigator
      initialRouteName="StackNavigation"
      screenOptions={{drawerActiveTintColor: '#ef5350'}}>
      <Drawer.Screen
        name="StackNavigation"
        component={StackNavigation}
        options={{
          title: 'Jobs',
          headerTitleAlign: 'center',
          headerTitleStyle: {
            color: '#EF5350',
            fontSize: 25,
          },
        }}
      />
      <Drawer.Screen
        name="FavoriteJobs"
        component={FavoriteJobs}
        options={{
          headerTitleAlign: 'center',
          headerTitleStyle: {
            color: '#EF5350',
            fontSize: 25,
          },
        }}
      />
    </Drawer.Navigator>
  );
};

export default DrawerNavigation;
