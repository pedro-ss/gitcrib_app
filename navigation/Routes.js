
import React from 'react';
import Login from '../app/screens/Login';
import Menu from '../app/screens/usersystem/Menu';
import Listprojects from '../app/screens/projects/ListProject';
import ListTaks from '../app/screens/tasks/ListTaks';
import RegisterScreen from '../app/screens/RegisterScreen'
import ManageProject from '../app/screens/projects/ManageProject';
import ManageTask from '../app/screens/tasks/ManageTask';
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
        <Stack.Screen name="Login" component={Login} />
        <Stack.Screen name="Cadastro" component={RegisterScreen} />
        <Stack.Screen name="ListarProjetos" component={Listprojects} />
        <Stack.Screen name="ListTasks" component={ListTaks} />
        <Stack.Screen name="ManageProject" component={ManageProject} />
        <Stack.Screen name="ManageTask" component={ManageTask} />
        <Stack.Screen name="Menu" component={Menu} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}