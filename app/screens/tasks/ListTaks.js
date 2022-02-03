import React from 'react';
import { View, ScrollView } from 'react-native';
import Task from './Task';
import { gitCribAPI } from '../../../integration/BaseApi';
 
export default function Listagem({ route, navigation }) {
  
    const { projectId } = route.params;
    let tasks = [] 
    
    const listtasks = gitCribAPI.get("/task/projects-tasks/"+projectId);

    listtasks.forEach(taskItem => {
      tasks.push(
        <Task task={taskItem}/>
        )
    })

  return (
    <View >
        <ScrollView >
          {tasks}
        </ScrollView>
    </View>
  );
}