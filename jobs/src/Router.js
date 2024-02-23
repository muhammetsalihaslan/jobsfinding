import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import React from 'react';

import JobsPage from './pages/JobsPage';

const Stack = createNativeStackNavigator();

const Router = () => {
  return (
    <NavigationContainer>
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
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default Router;