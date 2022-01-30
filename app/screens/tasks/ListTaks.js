import React from 'react';
import { View, ScrollView } from 'react-native';
import Task from './Task';
 
export default function Listagem() {
  
    let tasks = [] 
    
    const listtasks = [ 
        {"name":"Implementar Create", "description":"implementar create em projeto", "status":"em andamento" },
        {"name":"Implementar Delete", "description":"implementar delete em projeto", "status":"em andamento"},
        {"name":"Implementar Search", "description":"implementar search em projeto", "status":"em andamento"}
    ];

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