import React from 'react';
import { createMaterialBottomTabNavigator } from '@react-navigation/material-bottom-tabs';
import { Text } from 'react-native-paper';
import Dashboard from '../Dashboard';
import Insepection from '../Insepection';

const Message = () => <Text>Recents</Text>;
const Tab = createMaterialBottomTabNavigator();
const BottomTabs = () => {
  return (
    <React.Fragment>
      <Tab.Navigator initialRouteName="Dashboard" shifting={true}>
        <Tab.Screen
          name="Dashboard"
          component={Dashboard}
          options={{
            tabBarIcon: 'home-account',
          }}
        />
        <Tab.Screen
          name="Insepection"
          component={Insepection}
          options={{
            tabBarIcon: 'bell-outline',
          }}
        />
        <Tab.Screen
          name="Messages"
          component={Message}
          options={{
            tabBarIcon: 'message-text-outline',
          }}
        />
      </Tab.Navigator>
    </React.Fragment>
  );
};
export default BottomTabs;
