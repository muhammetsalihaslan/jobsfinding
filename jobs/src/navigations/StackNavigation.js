import {createNativeStackNavigator} from '@react-navigation/native-stack';
import React from 'react';
import JobsPage from '../pages/JobsPage';
import DetailPage from '../pages/DetailPage';

const Stack = createNativeStackNavigator();

const StackNavigation = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="JobsPage"
        options={{
          title: 'Jobs',
          headerTitleAlign: 'center',
          headerTitleStyle: {
            color: '#EF5350',
            fontSize: 25,
          },
        }}
        component={JobsPage}
      />
      <Stack.Screen
        name="DetailPage"
        component={DetailPage}
        options={({route}) => ({
          title: route.params.item.name,
          headerTitleAlign: 'center',
          headerTitleStyle: {
            color: '#EF5350',
            fontSize: 20,
          },
        })}
      />
    </Stack.Navigator>
  );
};

export default StackNavigation;
