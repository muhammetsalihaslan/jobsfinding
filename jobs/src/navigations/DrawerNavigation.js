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
        options={{headerShown: false, title: 'Jobs'}}
      />
      <Drawer.Screen name="Favorite JOB" component={FavoriteJobs} />
    </Drawer.Navigator>
  );
};

export default DrawerNavigation;
