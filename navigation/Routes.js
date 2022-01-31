
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
      <Stack.Navigator>
        <Stack.Screen name="Login" component={Login} options={({ headerTitle: 'Gitcrib'})}/>
        <Stack.Screen name="Cadastro" component={RegisterScreen} 
            options={({ headerTitle: 'Gitcrib'})}/>
        <Stack.Screen name="ListarContributors" component={ListContributors}
            options={({ headerTitle: 'Contribuidores'})}/>
        <Stack.Screen name="ListarProjetos" component={Listprojects}
            options={({ headerTitle: 'Projetos'})}/>
        <Stack.Screen name="ListTasks" component={ListTaks}
            options={({ headerTitle: 'Tasks'})}/>
      </Stack.Navigator>
    </NavigationContainer>
  );
}