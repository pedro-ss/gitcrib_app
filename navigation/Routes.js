
import React from 'react';
import Login from '../app/screens/Login';
import ListContributors from '../app/screens/contributors/ListContributors';
import Listprojects from '../app/screens/projects/ListProject';
import ListTaks from '../app/screens/tasks/ListTaks';
import RegisterScreen from '../app/screens/RegisterScreen'
import { createStackNavigator } from '@react-navigation/stack';
import { NavigationContainer } from '@react-navigation/native';

const Stack = createStackNavigator();

export default function Routes() {
  return (
    <NavigationContainer>
      <Stack.Navigator
         screenOptions={{
          headerShown: false,
        }}
      >
        <Stack.Screen name="ListTasks" component={ListTaks} />
        <Stack.Screen name="ListarProjetos" component={Listprojects} />
        <Stack.Screen name="Login" component={Login} />
        <Stack.Screen name="Cadastro" component={RegisterScreen} />
        <Stack.Screen name="ListarContributors" component={ListContributors} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}