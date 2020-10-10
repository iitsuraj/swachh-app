import * as React from 'react';
import { NavigationContainer, Theme } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { useSelector } from 'react-redux';

import { createMaterialBottomTabNavigator } from '@react-navigation/material-bottom-tabs';
import { navigationRef } from './NavigationService';

import Login from 'app/screens/Login';
import DashboardScreen from 'app/screens/Dashboard';
import InsepectionScreen from 'app/screens/Inspection';
import FactoryScreen from 'app/screens/Factory';
import ForgotPassword from 'app/screens/ForgotPassword';
import TaskScreen from 'app/screens/TaskScreen';
import CameraScreen from 'app/screens/Camera';
import ThemeController from '../components/ThemeController';
import { StatusBar } from 'react-native';
import { ILoginState } from 'app/models/reducers/login';

const Stack = createStackNavigator();
const AuthStack = createStackNavigator();
const LoggedInStack = createStackNavigator();

const Tabs = createMaterialBottomTabNavigator();
const homeOptions = {
  tabBarIcon: 'home-account',
  tabBarLabel: 'Dashboard',
};
const InsepectionOptions = {
  tabBarIcon: 'account-settings',
  tabBarLabel: 'Insepection',
};
interface IState {
  loginReducer: ILoginState;
}

interface IProps {
  theme: Theme;
}

const AuthNavigator = () => {
  const isLoggedIn = useSelector(
    (state: IState) => state.loginReducer.isLoggedIn,
  );
  return (
    <AuthStack.Navigator>
      <Stack.Screen
        name="Login"
        component={Login}
        options={{
          // When logging out, a pop animation feels intuitive
          // You can remove this if you want the default 'push' animation
          animationTypeForReplace: isLoggedIn ? 'push' : 'pop',
          headerRight: () => <ThemeController />,
        }}
      />
      <Stack.Screen
        name="ForgotPassword"
        component={ForgotPassword}
        options={{
          // When logging out, a pop animation feels intuitive
          // You can remove this if you want the default 'push' animation
          animationTypeForReplace: isLoggedIn ? 'push' : 'pop',
          headerRight: () => <ThemeController />,
        }}
      />
    </AuthStack.Navigator>
  );
};

const TabScreen = () => (
  <Tabs.Navigator shifting={true}>
    <Tabs.Screen
      name="Dashboard"
      component={DashboardStackScreen}
      options={homeOptions}
    />
    <Tabs.Screen
      name="Insepection"
      component={InsepectionStackScreen}
      options={InsepectionOptions}
    />
    {/* <Tabs.Screen name="Profile" component={ProfileScreen} /> */}
  </Tabs.Navigator>
);

const HomeStack = createStackNavigator();
const DashboardStackScreen = () => (
  <HomeStack.Navigator>
    <HomeStack.Screen
      name="Dashboard"
      component={DashboardScreen}
      options={{
        title: 'Dashboard',
        headerTitleStyle: {
          fontWeight: 'bold',
        },

        headerRight: () => <ThemeController />,
      }}
    />
    {/* <HomeStack.Screen
      name="Details"
      component={Details}
      options={({ route }) => ({
        title: route.params.name,
      })}
    /> */}
  </HomeStack.Navigator>
);

const Insepection = createStackNavigator();
const InsepectionStackScreen = () => (
  <Insepection.Navigator>
    <Insepection.Screen
      name=" Insepection"
      component={InsepectionScreen}
      options={{
        title: 'Insepection',
        headerTitleStyle: {
          fontWeight: 'bold',
        },

        headerRight: () => <ThemeController />,
      }}
    />
  </Insepection.Navigator>
);

const LoggedInNavigator = () => (
  <LoggedInStack.Navigator headerMode="none">
    <Stack.Screen name="Home" component={TabScreen} />
  </LoggedInStack.Navigator>
);

const App: React.FC<IProps> = (props: IProps) => {
  const { theme } = props;
  const isLoggedIn = useSelector(
    (state: IState) => state.loginReducer.isLoggedIn,
  );

  return (
    <NavigationContainer ref={navigationRef} theme={theme}>
      <StatusBar barStyle={theme.dark ? 'light-content' : 'dark-content'} />

      <Stack.Navigator>
        {isLoggedIn ? (
          <>
            <Stack.Screen
              name="Home"
              component={LoggedInNavigator}
              // options={homeOptions}
              options={{ headerShown: false }}
            />

            <Insepection.Screen
              name="Factory"
              component={FactoryScreen}
              options={({ route }) => ({
                title: route.params.name,
              })}
            />
            <Insepection.Screen
              name="Task"
              component={TaskScreen}
              options={({ route }) => ({
                title: route.params.name,
              })}
            />
            <Insepection.Screen name="Camera" component={CameraScreen} />
          </>
        ) : (
          <Stack.Screen
            name="Login"
            component={AuthNavigator}
            options={{
              // When logging out, a pop animation feels intuitive
              // You can remove this if you want the default 'push' animation
              animationTypeForReplace: isLoggedIn ? 'push' : 'pop',
              headerRight: () => <ThemeController />,
            }}
          />
        )}
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;
